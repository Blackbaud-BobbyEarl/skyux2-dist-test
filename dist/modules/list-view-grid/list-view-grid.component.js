var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { ChangeDetectionStrategy, Component, ContentChildren, forwardRef, Input, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/takeUntil';
import { getValue } from 'microedge-rxstate/dist/helpers';
import { SkyGridComponent, SkyGridColumnComponent, SkyGridColumnModel } from '../grid';
import { ListSearchModel, ListStateDispatcher, ListState } from '../list/state';
import { getData, isObservable } from '../list/helpers';
import { ListViewComponent } from '../list/list-view.component';
import { GridState, GridStateDispatcher, GridStateModel } from './state';
import { ListViewGridColumnsLoadAction } from './state/columns/actions';
import { ListViewDisplayedGridColumnsLoadAction } from './state/displayed-columns/actions';
var SkyListViewGridComponent = (function (_super) {
    __extends(SkyListViewGridComponent, _super);
    function SkyListViewGridComponent(state, dispatcher, gridState, gridDispatcher) {
        var _this = _super.call(this, state, 'Grid View') || this;
        _this.dispatcher = dispatcher;
        _this.gridState = gridState;
        _this.gridDispatcher = gridDispatcher;
        _this.fit = 'width';
        _this.ngUnsubscribe = new Subject();
        return _this;
    }
    Object.defineProperty(SkyListViewGridComponent.prototype, "name", {
        set: function (value) {
            this.viewName = value;
        },
        enumerable: true,
        configurable: true
    });
    SkyListViewGridComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (this.columnComponents.length === 0) {
            throw new Error('Grid view requires at least one sky-grid-column to render.');
        }
        var columnModels = this.columnComponents.map(function (columnComponent) {
            return new SkyGridColumnModel(columnComponent.template, columnComponent);
        });
        if (this.width && !isObservable(this.width)) {
            this.width = Observable.of(this.width);
        }
        if (this.height && !isObservable(this.height)) {
            this.height = Observable.of(this.height);
        }
        // Setup Observables for template
        this.columns = this.gridState.map(function (s) { return s.columns.items; }).distinctUntilChanged();
        this.selectedColumnIds = this.getSelectedIds();
        this.items = this.getGridItems();
        this.loading = this.state.map(function (s) {
            return s.items.loading;
        }).distinctUntilChanged();
        this.sortField = this.state.map(function (s) {
            /* istanbul ignore else */
            /* sanity check */
            if (s.sort && s.sort.fieldSelectors) {
                return s.sort.fieldSelectors[0];
            }
            /* istanbul ignore next */
            /* sanity check */
            return undefined;
        }).distinctUntilChanged();
        this.gridState.map(function (s) { return s.columns.items; })
            .takeUntil(this.ngUnsubscribe)
            .distinctUntilChanged()
            .subscribe(function (columns) {
            if (_this.hiddenColumns) {
                getValue(_this.hiddenColumns, function (hiddenColumns) {
                    _this.gridDispatcher.next(new ListViewDisplayedGridColumnsLoadAction(columns.filter(function (x) {
                        /* istanbul ignore next */
                        /* sanity check */
                        var id = x.id || x.field;
                        return hiddenColumns.indexOf(id) === -1;
                    }), true));
                });
            }
            else if (_this.displayedColumns) {
                getValue(_this.displayedColumns, function (displayedColumns) {
                    _this.gridDispatcher.next(new ListViewDisplayedGridColumnsLoadAction(columns.filter(function (x) { return displayedColumns.indexOf(x.id || x.field) !== -1; }), true));
                });
            }
            else {
                _this.gridDispatcher.next(new ListViewDisplayedGridColumnsLoadAction(columns.filter(function (x) { return !x.hidden; }), true));
            }
        });
        this.gridDispatcher.next(new ListViewGridColumnsLoadAction(columnModels, true));
        this.handleColumnChange();
    };
    SkyListViewGridComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    SkyListViewGridComponent.prototype.columnIdsChanged = function (selectedColumnIds) {
        var _this = this;
        this.gridState.map(function (s) { return s.columns.items; })
            .take(1)
            .subscribe(function (columns) {
            var displayedColumns = selectedColumnIds.map(function (columnId) { return columns.filter(function (c) { return c.id === columnId; })[0]; });
            _this.gridDispatcher.next(new ListViewDisplayedGridColumnsLoadAction(displayedColumns, true));
        });
    };
    SkyListViewGridComponent.prototype.sortFieldChanged = function (sortField) {
        this.dispatcher.sortSetFieldSelectors([sortField]);
    };
    SkyListViewGridComponent.prototype.onViewActive = function () {
        var _this = this;
        this.gridState.map(function (s) { return s.displayedColumns.items; })
            .takeUntil(this.ngUnsubscribe)
            .distinctUntilChanged()
            .subscribe(function (displayedColumns) {
            var setFunctions = _this.searchFunction !== undefined ? [_this.searchFunction] :
                displayedColumns
                    .map(function (column) { return function (data, searchText) {
                    return column.searchFunction(getData(data, column.field), searchText);
                }; })
                    .filter(function (c) { return c !== undefined; });
            _this.state.take(1).subscribe(function (s) {
                _this.dispatcher.searchSetOptions(new ListSearchModel({
                    searchText: s.search.searchText,
                    functions: setFunctions,
                    fieldSelectors: displayedColumns.map(function (d) { return d.field; })
                }));
            });
        });
    };
    SkyListViewGridComponent.prototype.handleColumnChange = function () {
        var _this = this;
        // watch for changes in column components
        this.columnComponents.changes
            .takeUntil(this.ngUnsubscribe)
            .subscribe(function (columnComponents) {
            var columnModels = _this.columnComponents.map(function (column) {
                return new SkyGridColumnModel(column.template, column);
            });
            _this.gridDispatcher.next(new ListViewGridColumnsLoadAction(columnModels, true));
        });
        // Watch for column heading changes:
        this.columnComponents.forEach(function (comp) {
            comp.headingModelChanges
                .takeUntil(_this.ngUnsubscribe)
                .subscribe(function (change) {
                _this.gridComponent.updateColumnHeading(change);
            });
        });
    };
    SkyListViewGridComponent.prototype.getGridItems = function () {
        /*
          Ran into problem where state updates were consumed out of order. For example, on search text
          update, the searchText update was consumed after the resulting list item update. Scanning the
          previous value of items lastUpdate ensures that we only receive the latest items.
        */
        return this.state.map(function (s) {
            return s.items;
        })
            .scan(function (previousValue, newValue) {
            if (previousValue.lastUpdate > newValue.lastUpdate) {
                return previousValue;
            }
            else {
                return newValue;
            }
        })
            .map(function (result) {
            return result.items;
        })
            .distinctUntilChanged();
    };
    SkyListViewGridComponent.prototype.getSelectedIds = function () {
        /*
          Same problem as above. We should move from having a state object observable with a bunch of
          static properties to a static state object with observable properties that you can subscribe
          to.
        */
        return this.gridState
            .map(function (s) { return s.displayedColumns; })
            .scan(function (previousValue, newValue) {
            if (previousValue.lastUpdate > newValue.lastUpdate) {
                return previousValue;
            }
            else {
                return newValue;
            }
        })
            .map(function (result) {
            /* istanbul ignore next */
            /* sanity check */
            return result.items.map(function (column) {
                return column.id || column.field;
            });
        }).distinctUntilChanged();
    };
    return SkyListViewGridComponent;
}(ListViewComponent));
export { SkyListViewGridComponent };
SkyListViewGridComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-list-view-grid',
                template: "<div *ngIf=\"active | async\">\n  <sky-grid\n    #skyGrid\n    [height]=\"height | async\"\n    [width]=\"width | async\"\n    [fit]=\"fit\"\n    [data]=\"items | async\"\n    [selectedColumnIds]=\"selectedColumnIds | async\"\n    [columns]=\"columns | async\"\n    [hasToolbar]=\"hasToolbar | async\"\n    (selectedColumnIdsChange)=\"columnIdsChanged($event)\"\n    [sortField]=\"sortField | async\"\n    (sortFieldChange)=\"sortFieldChanged($event)\"\n    >\n  </sky-grid>\n  <sky-wait [isWaiting]=\"loading | async\"></sky-wait>\n</div>\n",
                providers: [
                    /* tslint:disable */
                    { provide: ListViewComponent, useExisting: forwardRef(function () { return SkyListViewGridComponent; }) },
                    /* tslint:enable */
                    GridState,
                    GridStateDispatcher,
                    GridStateModel
                ],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
SkyListViewGridComponent.ctorParameters = function () { return [
    { type: ListState, },
    { type: ListStateDispatcher, },
    { type: GridState, },
    { type: GridStateDispatcher, },
]; };
SkyListViewGridComponent.propDecorators = {
    'name': [{ type: Input },],
    'displayedColumns': [{ type: Input },],
    'hiddenColumns': [{ type: Input },],
    'fit': [{ type: Input },],
    'width': [{ type: Input },],
    'height': [{ type: Input },],
    'gridComponent': [{ type: ViewChild, args: [SkyGridComponent,] },],
    'searchFunction': [{ type: Input, args: ['search',] },],
    'columnComponents': [{ type: ContentChildren, args: [SkyGridColumnComponent, { descendants: true },] },],
};
//# sourceMappingURL=list-view-grid.component.js.map