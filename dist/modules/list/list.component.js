import { Component, ContentChildren, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { ListItemsLoadAction, ListItemsSetLoadingAction } from './state/items/actions';
import { ListSelectedLoadAction, ListSelectedSetLoadingAction } from './state/selected/actions';
import { ListSortModel } from './state/sort/sort.model';
import { ListSortSetFieldSelectorsAction } from './state/sort/actions';
import { getValue } from 'microedge-rxstate/dist/helpers';
import { ListDataRequestModel } from './list-data-request.model';
import { ListDataResponseModel } from './list-data-response.model';
import { SkyListInMemoryDataProvider } from '../list-data-provider-in-memory';
import { ListState, ListStateDispatcher } from './state';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/skip';
import { ListViewComponent } from './list-view.component';
import { ListViewsLoadAction, ListViewsSetActiveAction } from './state/views/actions';
import { ListViewModel } from './state/views/view.model';
import { ListItemModel } from './state/items/item.model';
import { isObservable } from './helpers';
var moment = require('moment');
var SkyListComponent = (function () {
    function SkyListComponent(state, dispatcher) {
        this.state = state;
        this.dispatcher = dispatcher;
        this.id = moment().toDate().getTime().toString();
        this.data = [];
        this.appliedFilters = [];
        this.selectedIdsChange = new EventEmitter();
        this.appliedFiltersChange = new EventEmitter();
        /* tslint:enable */
        this.dataFirstLoad = false;
    }
    SkyListComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (this.data && this.dataProvider && this.initialTotal) {
            this.dataFirstLoad = true;
        }
        if (this.listViews.length > 0) {
            var defaultView = (this.defaultView === undefined) ? this.listViews.first : this.defaultView;
            this.dispatcher.next(new ListViewsLoadAction(this.listViews.map(function (v) { return new ListViewModel(v.id, v.label); })));
            // activate the default view
            this.dispatcher.next(new ListViewsSetActiveAction(defaultView.id));
        }
        else {
            return;
        }
        // set sort fields
        getValue(this.sortFields, function (sortFields) {
            var sortArray;
            if (!Array.isArray(sortFields) && sortFields) {
                sortArray = [sortFields];
            }
            else {
                sortArray = sortFields;
            }
            _this.dispatcher.next(new ListSortSetFieldSelectorsAction(sortArray || []));
        });
        this.displayedItems.subscribe(function (result) {
            _this.dispatcher.next(new ListItemsSetLoadingAction());
            _this.dispatcher.next(new ListItemsLoadAction(result.items, true, true, result.count));
        });
        // Emit new selected items when they change if there is an observer.
        if (this.selectedIdsChange.observers.length > 0) {
            this.state.map(function (current) { return current.selected; }).distinctUntilChanged()
                .skip(1)
                .subscribe(function (selected) {
                _this.selectedIdsChange.emit(selected.item.selectedIdMap);
            });
        }
        if (this.appliedFiltersChange.observers.length > 0) {
            this.state.map(function (current) { return current.filters; }).distinctUntilChanged()
                .skip(1)
                .subscribe(function (filters) {
                _this.appliedFiltersChange.emit(filters);
            });
        }
    };
    SkyListComponent.prototype.ngOnChanges = function (changes) {
        if (changes['appliedFilters'] &&
            changes['appliedFilters'].currentValue !== changes['appliedFilters'].previousValue) {
            this.dispatcher.filtersUpdate(this.appliedFilters);
        }
    };
    SkyListComponent.prototype.refreshDisplayedItems = function () {
        var _this = this;
        this.displayedItems.take(1).subscribe(function (result) {
            _this.dispatcher.next(new ListItemsSetLoadingAction());
            _this.dispatcher.next(new ListItemsLoadAction(result.items, true, true, result.count));
        });
    };
    Object.defineProperty(SkyListComponent.prototype, "displayedItems", {
        get: function () {
            var _this = this;
            if (!this.data && !this.dataProvider) {
                throw new Error('List requires data or dataProvider to be set.');
            }
            var data = this.data;
            if (!isObservable(data)) {
                data = Observable.of(this.data);
            }
            if (!this.dataProvider) {
                this.dataProvider = new SkyListInMemoryDataProvider(data, this.searchFunction);
            }
            var selectedIds = this.selectedIds || Observable.of([]);
            if (!isObservable(selectedIds)) {
                selectedIds = Observable.of(selectedIds);
            }
            var selectedChanged = false;
            return Observable.combineLatest(this.state.map(function (s) { return s.filters; }).distinctUntilChanged(), this.state.map(function (s) { return s.search; }).distinctUntilChanged(), this.state.map(function (s) { return s.sort.fieldSelectors; }).distinctUntilChanged(), this.state.map(function (s) { return s.paging.itemsPerPage; }).distinctUntilChanged(), this.state.map(function (s) { return s.paging.pageNumber; }).distinctUntilChanged(), selectedIds.distinctUntilChanged().map(function (selectedId) {
                selectedChanged = true;
                return selectedId;
            }), data.distinctUntilChanged(), function (filters, search, sortFieldSelectors, itemsPerPage, pageNumber, selected, itemsData) {
                if (selectedChanged) {
                    _this.dispatcher.next(new ListSelectedSetLoadingAction());
                    _this.dispatcher.next(new ListSelectedLoadAction(selected));
                    _this.dispatcher.next(new ListSelectedSetLoadingAction(false));
                    selectedChanged = false;
                }
                var response;
                if (_this.dataFirstLoad) {
                    _this.dataFirstLoad = false;
                    var initialItems = itemsData.map(function (d) {
                        return new ListItemModel(d.id || moment().toDate().getTime().toString(), d);
                    });
                    response = Observable.of(new ListDataResponseModel({
                        count: _this.initialTotal,
                        items: initialItems
                    }));
                }
                else {
                    response = _this.dataProvider.get(new ListDataRequestModel({
                        filters: filters,
                        pageSize: itemsPerPage,
                        pageNumber: pageNumber,
                        search: search,
                        sort: new ListSortModel({ fieldSelectors: sortFieldSelectors })
                    }));
                }
                return response;
            }).flatMap(function (value, index) {
                return value;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyListComponent.prototype, "selectedItems", {
        get: function () {
            return Observable.combineLatest(this.state.map(function (current) { return current.items.items; }).distinctUntilChanged(), this.state.map(function (current) { return current.selected; }).distinctUntilChanged(), function (items, selected) {
                return items.filter(function (i) { return selected.item.selectedIdMap.get(i.id); });
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyListComponent.prototype, "lastUpdate", {
        get: function () {
            return this.state.map(function (s) {
                return s.items.lastUpdate ? moment(s.items.lastUpdate).toDate() : undefined;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyListComponent.prototype, "views", {
        get: function () {
            return this.listViews.toArray();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyListComponent.prototype, "itemCount", {
        get: function () {
            return this.dataProvider.count();
        },
        enumerable: true,
        configurable: true
    });
    return SkyListComponent;
}());
export { SkyListComponent };
SkyListComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-list',
                template: '<ng-content></ng-content>',
                providers: [ListState, ListStateDispatcher],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
SkyListComponent.ctorParameters = function () { return [
    { type: ListState, },
    { type: ListStateDispatcher, },
]; };
SkyListComponent.propDecorators = {
    'data': [{ type: Input },],
    'dataProvider': [{ type: Input },],
    'defaultView': [{ type: Input },],
    'initialTotal': [{ type: Input },],
    'selectedIds': [{ type: Input },],
    'sortFields': [{ type: Input },],
    'appliedFilters': [{ type: Input },],
    'selectedIdsChange': [{ type: Output },],
    'appliedFiltersChange': [{ type: Output },],
    'searchFunction': [{ type: Input, args: ['search',] },],
    'listViews': [{ type: ContentChildren, args: [ListViewComponent,] },],
};
//# sourceMappingURL=list.component.js.map