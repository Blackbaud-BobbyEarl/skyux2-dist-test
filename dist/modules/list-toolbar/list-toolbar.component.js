import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, Input, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/takeUntil';
import { getValue } from 'microedge-rxstate/dist/helpers';
import { SkyListFilterSummaryComponent, SkyListFilterInlineComponent } from '../list-filters';
import { ListToolbarItemModel, ListToolbarSetTypeAction, ListState, ListStateDispatcher, ListSortLabelModel, ListPagingSetPageNumberAction } from '../list/state';
import { ListToolbarConfigSetSearchEnabledAction, ListToolbarConfigSetSortSelectorEnabledAction } from './state/config/actions';
import { ListToolbarState, ListToolbarStateDispatcher, ListToolbarStateModel } from './state';
import { SkyListToolbarItemComponent } from './list-toolbar-item.component';
import { SkyListToolbarSortComponent } from './list-toolbar-sort.component';
var SkyListToolbarComponent = (function () {
    function SkyListToolbarComponent(changeDetector, state, dispatcher, toolbarState, toolbarDispatcher) {
        this.changeDetector = changeDetector;
        this.state = state;
        this.dispatcher = dispatcher;
        this.toolbarState = toolbarState;
        this.toolbarDispatcher = toolbarDispatcher;
        this.toolbarType = 'standard';
        this.inlineFilterBarExpanded = false;
        this.hasAdditionalToolbarSection = false;
        this.hasSortSelectors = false;
        this.ngUnsubscribe = new Subject();
    }
    SkyListToolbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dispatcher.toolbarExists(true);
        getValue(this.searchText, function (searchText) {
            _this.updateSearchText(searchText);
        });
        getValue(this.searchEnabled, function (searchEnabled) {
            _this.toolbarDispatcher.next(new ListToolbarConfigSetSearchEnabledAction(searchEnabled === undefined ? true : searchEnabled));
        });
        getValue(this.toolbarType, function (type) {
            _this.dispatcher.next(new ListToolbarSetTypeAction(_this.toolbarType));
        });
        getValue(this.sortSelectorEnabled, function (sortSelectorEnabled) {
            _this.toolbarDispatcher.next(new ListToolbarConfigSetSortSelectorEnabledAction(sortSelectorEnabled === undefined ? true : sortSelectorEnabled));
        });
        this.sortSelectors = this.getSortSelectors();
        // Initialize the sort toolbar item if necessary
        this.sortSelectors
            .takeUntil(this.ngUnsubscribe)
            .distinctUntilChanged()
            .subscribe(function (currentSort) {
            if (currentSort.length > 0 && !_this.hasSortSelectors) {
                _this.hasSortSelectors = true;
                _this.dispatcher.toolbarAddItems([
                    new ListToolbarItemModel({
                        id: 'sort-selector',
                        template: _this.sortSelectorTemplate,
                        location: 'right'
                    })
                ], 0);
            }
            else if (currentSort.length < 1 && _this.hasSortSelectors) {
                _this.hasSortSelectors = false;
                _this.dispatcher.toolbarRemoveItems([
                    'sort-selector'
                ]);
            }
        });
        this.searchTextInput = this.state.map(function (s) { return s.search.searchText; }).distinctUntilChanged();
        this.view = this.state.map(function (s) { return s.views.active; }).distinctUntilChanged();
        this.watchTemplates();
        this.type = this.state.map(function (state) { return state.toolbar.type; }).distinctUntilChanged();
        this.type
            .takeUntil(this.ngUnsubscribe)
            .subscribe(function (toolbarType) {
            if (toolbarType === 'search') {
                _this.dispatcher.toolbarRemoveItems(['search']);
            }
            else {
                _this.dispatcher.toolbarAddItems([
                    new ListToolbarItemModel({
                        id: 'search',
                        template: _this.searchTemplate,
                        location: 'center'
                    })
                ]);
            }
        });
        this.isSearchEnabled = this.toolbarState.map(function (s) { return s.config; })
            .distinctUntilChanged().map(function (c) { return c.searchEnabled; });
        this.isSortSelectorEnabled = this.toolbarState.map(function (s) { return s.config; })
            .distinctUntilChanged().map(function (c) { return c.sortSelectorEnabled; });
        this.hasAppliedFilters = this.state
            .map(function (s) { return s.filters; })
            .distinctUntilChanged()
            .map(function (filters) {
            var activeFilters = filters.filter(function (f) {
                return f.value !== '' &&
                    f.value !== undefined &&
                    f.value !== false &&
                    f.value !== f.defaultValue;
            });
            return activeFilters.length > 0;
        });
        this.state
            .takeUntil(this.ngUnsubscribe)
            .subscribe(function (current) {
            _this.hasAdditionalToolbarSection = (current.toolbar.items.length > 0);
            _this.changeDetector.detectChanges();
        });
    };
    SkyListToolbarComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.toolbarItems.forEach(function (toolbarItem) {
            _this.dispatcher.toolbarAddItems([new ListToolbarItemModel(toolbarItem)], toolbarItem.index);
        });
        var sortModels = this.toolbarSorts.map(function (sort) {
            return new ListSortLabelModel({
                text: sort.label,
                fieldSelector: sort.field,
                fieldType: sort.type,
                global: true,
                descending: sort.descending
            });
        });
        this.dispatcher.sortSetGlobal(sortModels);
        this.showFilterSummary = (this.filterSummary.length > 0);
        this.hasInlineFilters = (this.inlineFilter.length > 0);
        if (this.hasInlineFilters) {
            this.dispatcher.toolbarAddItems([
                new ListToolbarItemModel({
                    template: this.inlineFilterButtonTemplate,
                    location: 'right'
                })
            ], 0);
        }
    };
    SkyListToolbarComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    SkyListToolbarComponent.prototype.setSort = function (sort) {
        this.dispatcher.sortSetFieldSelectors([{ fieldSelector: sort.fieldSelector, descending: sort.descending }]);
    };
    SkyListToolbarComponent.prototype.inlineFilterButtonClick = function () {
        this.inlineFilterBarExpanded = !this.inlineFilterBarExpanded;
    };
    SkyListToolbarComponent.prototype.updateSearchText = function (searchText) {
        var _this = this;
        this.state.take(1).subscribe(function (currentState) {
            _this.dispatcher.searchSetText(searchText);
            if (currentState.paging.pageNumber && currentState.paging.pageNumber !== 1) {
                _this.dispatcher.next(new ListPagingSetPageNumberAction(Number(1)));
            }
        });
    };
    SkyListToolbarComponent.prototype.itemIsInView = function (itemView, activeView) {
        return (itemView === undefined || itemView === activeView);
    };
    SkyListToolbarComponent.prototype.getSortSelectors = function () {
        return Observable.combineLatest(this.state.map(function (s) { return s.sort.available; }).distinctUntilChanged(), this.state.map(function (s) { return s.sort.global; }).distinctUntilChanged(), this.state.map(function (s) { return s.sort.fieldSelectors; }).distinctUntilChanged(), function (available, global, fieldSelectors) {
            // Get sorts that are in the global that are not in the available
            var sorts = global.filter(function (g) { return available.filter(function (a) { return a.fieldSelector === g.fieldSelector; }).length === 0; });
            var resultSortSelectors = sorts.concat(available).map(function (sortLabels) {
                var fs = fieldSelectors.filter(function (f) {
                    return f.fieldSelector === sortLabels.fieldSelector
                        && f.descending === sortLabels.descending;
                });
                var selected = false;
                if (fs.length > 0) {
                    selected = true;
                }
                return {
                    sort: sortLabels,
                    selected: selected
                };
            });
            return resultSortSelectors;
        });
    };
    SkyListToolbarComponent.prototype.watchTemplates = function () {
        var _this = this;
        var templateStream = Observable.combineLatest(this.state.map(function (s) { return s.toolbar; }).distinctUntilChanged(), this.view.distinctUntilChanged(), function (toolbar, view) {
            var items = toolbar.items.filter(function (i) {
                return _this.itemIsInView(i.view, view);
            });
            var templates = {};
            items.forEach(function (item) {
                templates[item.location] = templates[item.location] || [];
                templates[item.location].push(item);
            });
            return templates;
        });
        templateStream
            .takeUntil(this.ngUnsubscribe)
            .subscribe(function (value) {
            _this.leftTemplates = value.left;
            _this.centerTemplates = value.center;
            _this.rightTemplates = value.right;
            _this.changeDetector.markForCheck();
        });
    };
    return SkyListToolbarComponent;
}());
export { SkyListToolbarComponent };
SkyListToolbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-list-toolbar',
                template: "<div class=\"sky-list-toolbar-container\">\n  <sky-toolbar\n    *ngIf=\"(type | async) !== 'search'\">\n    <sky-toolbar-section>\n      <sky-toolbar-item\n        *ngFor=\"let item of leftTemplates\">\n        <sky-list-toolbar-item-renderer\n          [template]=\"item.template\"\n          [attr.sky-cmp-id]=\"item.id\">\n        </sky-list-toolbar-item-renderer>\n      </sky-toolbar-item>\n      <sky-toolbar-item\n        *ngFor=\"let item of centerTemplates\">\n        <sky-list-toolbar-item-renderer\n          [template]=\"item.template\"\n          [attr.sky-cmp-id]=\"item.id\">\n        </sky-list-toolbar-item-renderer>\n      </sky-toolbar-item>\n      <sky-toolbar-item\n        *ngFor=\"let item of rightTemplates\"\n        [attr.sky-toolbar-id]=\"item.id\">\n        <sky-list-toolbar-item-renderer\n          [template]=\"item.template\"\n          [attr.sky-cmp-id]=\"item.id\">\n        </sky-list-toolbar-item-renderer>\n      </sky-toolbar-item>\n      <ng-content></ng-content>\n    </sky-toolbar-section>\n    <sky-toolbar-section\n      *ngIf=\"showFilterSummary && (hasAppliedFilters | async)\">\n      <ng-content\n        select=\"sky-list-filter-summary\">\n      </ng-content>\n    </sky-toolbar-section>\n  </sky-toolbar>\n\n  <div\n    class=\"sky-list-toolbar-search\"\n    *ngIf=\"(type | async) === 'search'\">\n    <sky-toolbar>\n      <sky-toolbar-section>\n        <sky-toolbar-item>\n          <sky-list-toolbar-item-renderer\n            [template]=\"search\"\n            sky-cmp-id=\"search\">\n          </sky-list-toolbar-item-renderer>\n        </sky-toolbar-item>\n      </sky-toolbar-section>\n      <sky-toolbar-section\n        [hidden]=\"!hasAdditionalToolbarSection\">\n        <sky-toolbar-item\n          *ngFor=\"let item of leftTemplates\">\n          <sky-list-toolbar-item-renderer\n            [template]=\"item.template\"\n            [attr.sky-cmp-id]=\"item.id\">\n          </sky-list-toolbar-item-renderer>\n        </sky-toolbar-item>\n        <sky-toolbar-item\n          *ngFor=\"let item of centerTemplates\">\n          <sky-list-toolbar-item-renderer\n            *ngIf=\"item.id !== 'search'\"\n            [template]=\"item.template\"\n            [attr.sky-cmp-id]=\"item.id\">\n          </sky-list-toolbar-item-renderer>\n        </sky-toolbar-item>\n        <sky-toolbar-item\n          *ngFor=\"let item of rightTemplates\"\n          [attr.sky-toolbar-id]=\"item.id\">\n          <sky-list-toolbar-item-renderer\n            [template]=\"item.template\"\n            [attr.sky-cmp-id]=\"item.id\">\n          </sky-list-toolbar-item-renderer>\n        </sky-toolbar-item>\n        <ng-content></ng-content>\n      </sky-toolbar-section>\n    </sky-toolbar>\n  </div>\n  <div\n    *ngIf=\"hasInlineFilters && inlineFilterBarExpanded\">\n    <ng-content\n      select=\"sky-list-filter-inline\">\n    </ng-content>\n  </div>\n</div>\n\n<ng-template #search>\n  <div\n    *ngIf=\"isSearchEnabled | async\">\n    <sky-search\n      #searchComponent\n      [expandMode]=\"(type | async) === 'search' ? 'fit' : 'responsive'\"\n      [searchText]=\"searchTextInput | async\"\n      (searchApply)=\"updateSearchText($event)\"\n      [placeholderText]=\"placeholder\">\n    </sky-search>\n  </div>\n</ng-template>\n\n<ng-template #sortSelector>\n  <div\n    class=\"sky-toolbar-item-sort-container\"\n    *ngIf=\"(isSortSelectorEnabled | async) && (sortSelectors | async).length > 0\">\n    <sky-sort>\n      <sky-sort-item\n        *ngFor=\"let item of sortSelectors | async\"\n        [active]=\"item.selected\"\n        (itemSelect)=\"setSort(item.sort)\">\n        {{item.sort.text}}\n      </sky-sort-item>\n    </sky-sort>\n  </div>\n</ng-template>\n\n<ng-template #inlineFilterButton>\n  <sky-filter-button\n    (filterButtonClick)=\"inlineFilterButtonClick()\"\n    [active]=\"hasAppliedFilters | async\">\n  </sky-filter-button>\n</ng-template>\n",
                styles: [".sky-list-toolbar-search /deep/ .sky-toolbar-container, .sky-list-toolbar-search /deep/ .sky-search-dismiss-absolute {\n  background-color: #eeeeef;\n}\n\n.sky-list-toolbar-container /deep/ sky-toolbar-item[sky-toolbar-id=\"sort-selector\"] .sky-toolbar-item {\n  margin-right: 0;\n}\n\n.sky-toolbar-item-sort-container {\n  margin-right: 5px;\n}\n"],
                providers: [
                    ListToolbarState,
                    ListToolbarStateDispatcher,
                    ListToolbarStateModel
                ],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
SkyListToolbarComponent.ctorParameters = function () { return [
    { type: ChangeDetectorRef, },
    { type: ListState, },
    { type: ListStateDispatcher, },
    { type: ListToolbarState, },
    { type: ListToolbarStateDispatcher, },
]; };
SkyListToolbarComponent.propDecorators = {
    'placeholder': [{ type: Input },],
    'searchEnabled': [{ type: Input },],
    'searchComponent': [{ type: ViewChild, args: ['searchComponent',] },],
    'sortSelectorEnabled': [{ type: Input },],
    'toolbarType': [{ type: Input },],
    'searchText': [{ type: Input },],
    'toolbarItems': [{ type: ContentChildren, args: [SkyListToolbarItemComponent,] },],
    'toolbarSorts': [{ type: ContentChildren, args: [SkyListToolbarSortComponent,] },],
    'filterSummary': [{ type: ContentChildren, args: [SkyListFilterSummaryComponent,] },],
    'inlineFilter': [{ type: ContentChildren, args: [SkyListFilterInlineComponent,] },],
    'searchTemplate': [{ type: ViewChild, args: ['search',] },],
    'sortSelectorTemplate': [{ type: ViewChild, args: ['sortSelector',] },],
    'inlineFilterButtonTemplate': [{ type: ViewChild, args: ['inlineFilterButton',] },],
};
//# sourceMappingURL=list-toolbar.component.js.map