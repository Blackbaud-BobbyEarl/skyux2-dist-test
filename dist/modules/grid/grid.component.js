import { Component, Input, Output, ContentChildren, ChangeDetectionStrategy, ChangeDetectorRef, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { ListItemModel } from '../list/state';
import { SkyGridColumnComponent } from './grid-column.component';
import { SkyGridColumnModel } from './grid-column.model';
import { SkyGridAdapterService } from './grid-adapter.service';
var SkyGridComponent = (function () {
    function SkyGridComponent(dragulaService, ref, gridAdapter) {
        this.dragulaService = dragulaService;
        this.ref = ref;
        this.gridAdapter = gridAdapter;
        this.fit = 'width';
        this.hasToolbar = false;
        this.selectedColumnIdsChange = new EventEmitter();
        this.sortFieldChange = new EventEmitter();
        this.subscriptions = [];
        this.displayedColumns = new Array();
        this.items = new Array();
        this.currentSortField = new BehaviorSubject({
            fieldSelector: '',
            descending: false
        });
    }
    SkyGridComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (this.columnComponents.length !== 0 || this.columns !== undefined) {
            /* istanbul ignore else */
            /* sanity check */
            if (this.columnComponents.length > 0) {
                this.getColumnsFromComponent();
            }
            this.transformData();
            this.setDisplayedColumns(true);
        }
        // Watch for added/removed columns:
        this.subscriptions.push(this.columnComponents.changes.subscribe(function () { return _this.updateColumns(); }));
        // Watch for column heading changes:
        this.columnComponents.forEach(function (comp) {
            _this.subscriptions.push(comp.headingModelChanges
                .subscribe(function (change) {
                _this.updateColumnHeading(change);
            }));
        });
        this.gridAdapter.initializeDragAndDrop(this.dragulaService, function (selectedColumnIds) {
            _this.onHeaderDrop(selectedColumnIds);
        });
    };
    // Do an ngOnChanges where changes to selectedColumnIds and data are watched
    SkyGridComponent.prototype.ngOnChanges = function (changes) {
        if (changes['columns'] && this.columns) {
            this.setDisplayedColumns(true);
        }
        else if (changes['selectedColumnIds'] && this.columns) {
            this.setDisplayedColumns();
        }
        if (changes['data'] && this.data) {
            this.transformData();
        }
        if (changes['sortField']) {
            this.setSortHeaders();
        }
    };
    SkyGridComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (subscription) {
            subscription.unsubscribe();
        });
    };
    SkyGridComponent.prototype.sortByColumn = function (column) {
        var _this = this;
        if (column.isSortable) {
            this.currentSortField
                .take(1)
                .map(function (field) {
                var selector = {
                    fieldSelector: column.field,
                    descending: true
                };
                if (field && field.fieldSelector === column.field && field.descending) {
                    selector = {
                        fieldSelector: column.field,
                        descending: false
                    };
                }
                _this.sortFieldChange.emit(selector);
                _this.currentSortField.next(selector);
            })
                .subscribe();
        }
    };
    SkyGridComponent.prototype.getSortDirection = function (columnField) {
        return this.currentSortField
            .distinctUntilChanged()
            .map(function (field) {
            return field.fieldSelector === columnField ?
                (field.descending ? 'desc' : 'asc') : undefined;
        });
    };
    SkyGridComponent.prototype.updateColumnHeading = function (change) {
        var foundColumnModel = this.columns.find(function (column) {
            return (change.id !== undefined && change.id === column.id ||
                change.field !== undefined && change.field === column.field);
        });
        /* istanbul ignore else */
        if (foundColumnModel) {
            foundColumnModel.heading = change.value;
            this.ref.markForCheck();
        }
    };
    SkyGridComponent.prototype.onHeaderDrop = function (newColumnIds) {
        var _this = this;
        // update selected columnIds
        this.selectedColumnIds = newColumnIds;
        this.selectedColumnIdsChange.emit(newColumnIds);
        // set new displayed columns
        this.displayedColumns = this.selectedColumnIds.map(function (columnId) { return _this.columns.filter(function (column) { return column.id === columnId; })[0]; });
        // mark for check because we are using ChangeDetectionStrategy.onPush
        this.ref.markForCheck();
    };
    SkyGridComponent.prototype.setDisplayedColumns = function (respectHidden) {
        var _this = this;
        if (respectHidden === void 0) { respectHidden = false; }
        if (this.selectedColumnIds !== undefined) {
            // setup displayed columns
            this.displayedColumns = this.selectedColumnIds.map(function (columnId) { return _this.columns.filter(function (column) { return column.id === columnId; })[0]; });
        }
        else if (respectHidden) {
            this.displayedColumns = this.columns.filter(function (column) {
                return !column.hidden;
            });
        }
        else {
            this.displayedColumns = this.columns;
        }
    };
    SkyGridComponent.prototype.transformData = function () {
        // Transform data into object with id and data properties
        if (this.data.length > 0 && this.data[0].id && !this.data[0].data) {
            this.items = this.data.map(function (item) { return new ListItemModel(item.id, item); });
        }
        else {
            this.items = this.data;
        }
    };
    SkyGridComponent.prototype.setSortHeaders = function () {
        this.currentSortField.next(this.sortField || { fieldSelector: '', descending: false });
    };
    SkyGridComponent.prototype.getColumnsFromComponent = function () {
        this.columns = this.columnComponents.map(function (columnComponent) {
            return new SkyGridColumnModel(columnComponent.template, columnComponent);
        });
    };
    SkyGridComponent.prototype.updateColumns = function () {
        this.getColumnsFromComponent();
        this.setDisplayedColumns(true);
        this.ref.markForCheck();
    };
    return SkyGridComponent;
}());
export { SkyGridComponent };
SkyGridComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-grid',
                template: "<div class=\"sky-grid\">\n  <div class=\"sky-grid-table-container\" [style.height.px]=\"height\" [style.width.px]=\"width\">\n    <table\n      class=\"sky-grid-table\"\n      [ngClass]=\"{ 'sky-grid-fit': fit !== 'scroll', 'sky-grid-has-toolbar': hasToolbar }\">\n      <thead>\n        <tr dragula=\"sky-grid-heading\">\n          <th\n            scope=\"col\"\n            class=\"sky-grid-heading\"\n            *ngFor=\"let column of displayedColumns; let last = last\"\n            [style.width.px]=\"last ? null : column.width\"\n            [attr.sky-cmp-id]=\"column.id || column.field\"\n            [ngClass]=\"{ 'sky-grid-header-locked': column.locked }\"\n            (click)=\"sortByColumn(column)\">\n            {{column.heading}}\n            <i\n              class=\"fa sky-grid-heading-sort\"\n              [ngStyle]=\"{'visibility: hidden': (getSortDirection(column.field) | async)}\"\n              [ngClass]=\"{ 'fa-caret-up': (getSortDirection(column.field) | async) === 'asc', 'fa-caret-down': (getSortDirection(column.field) | async) === 'desc' }\"\n            >\n            </i>\n          </th>\n        </tr>\n      </thead>\n      <tbody class=\"sky-grid-tbody\">\n        <tr\n          class=\"sky-grid-row\"\n          *ngFor=\"let item of items\"\n          [attr.sky-cmp-id]=\"item.id\">\n          <td\n            class=\"sky-grid-cell\"\n            *ngFor=\"let column of displayedColumns; let last = last; let i = index\">\n            <sky-grid-cell\n              [template]=\"column.template || defaultCellTemplate\"\n              [fieldSelector]=\"column.field\"\n              [item]=\"item\"\n              [columnId]=\"column.id\"\n              [attr.sky-cmp-id]=\"column.id || column.field\"\n              [style.width.px]=\"last ? null : column.width\">\n            </sky-grid-cell>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n\n<ng-template #defaultCellTemplate let-row=\"row\" let-value=\"value\">{{value}}</ng-template>\n",
                styles: [".sky-grid {\n  position: relative;\n  display: block;\n}\n\n.sky-grid-table-container {\n  overflow: auto;\n}\n\n.sky-grid-table {\n  position: relative;\n  table-layout: fixed;\n  border-collapse: collapse;\n  margin: 0;\n  font-size: 15px;\n  min-width: 100%;\n}\n\n.sky-grid-table.sky-grid-fit {\n  width: 100%;\n}\n\n.sky-grid-tbody {\n  background-color: #ffffff;\n}\n\n.sky-grid-row {\n  border-bottom: 1px dotted #cdcfd2;\n}\n\n.sky-grid-row:nth-child(odd) {\n  background-color: #fbfbfb;\n}\n\n.sky-grid-row .sky-grid-cell {\n  padding: 0;\n}\n\n.sky-grid-heading {\n  border-top: 1px solid #cdcfd2;\n  border-bottom: 1px solid #cdcfd2;\n  border-left: 1px solid #cdcfd2;\n  border-right: 1px solid #cdcfd2;\n  font-family: \"Blackbaud Sans\", \"Helvetica Neue\", Arial, sans-serif;\n  color: #686c73;\n  font-weight: 400;\n  font-size: 15px;\n  border-right-width: 0px;\n  cursor: pointer;\n  background-color: #ffffff;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding: 8px;\n  text-align: left;\n  -webkit-user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.sky-grid-heading:first-child {\n  border-left: 1px solid transparent;\n}\n\n.sky-grid-heading.sky-grid-header-dragging {\n  padding: 8px;\n  background-color: #eeeeef;\n}\n\n.sky-grid-has-toolbar .sky-grid-heading {\n  border-top-width: 0px;\n}\n\n/*\n  This prevents grid header width from changing when sort indication changes\n*/\n.sky-grid-heading-sort {\n  min-width: 8px;\n}\n"],
                viewProviders: [DragulaService],
                providers: [
                    SkyGridAdapterService
                ],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
SkyGridComponent.ctorParameters = function () { return [
    { type: DragulaService, },
    { type: ChangeDetectorRef, },
    { type: SkyGridAdapterService, },
]; };
SkyGridComponent.propDecorators = {
    'selectedColumnIds': [{ type: Input },],
    'fit': [{ type: Input },],
    'width': [{ type: Input },],
    'height': [{ type: Input },],
    'data': [{ type: Input },],
    'columns': [{ type: Input },],
    'hasToolbar': [{ type: Input },],
    'sortField': [{ type: Input },],
    'selectedColumnIdsChange': [{ type: Output },],
    'sortFieldChange': [{ type: Output },],
    'columnComponents': [{ type: ContentChildren, args: [SkyGridColumnComponent, { descendants: true },] },],
};
//# sourceMappingURL=grid.component.js.map