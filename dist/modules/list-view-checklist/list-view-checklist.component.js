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
import { ChangeDetectionStrategy, Component, forwardRef, Input, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/take';
import { ListViewComponent } from '../list/list-view.component';
import { ListState, ListStateDispatcher } from '../list/state';
import { ChecklistState, ChecklistStateDispatcher, ChecklistStateModel } from './state';
import { ListViewChecklistItemsLoadAction } from './state/items/actions';
import { ListViewChecklistItemModel } from './state/items/item.model';
import { ListToolbarItemModel } from '../list/state/toolbar/toolbar-item.model';
import { ListToolbarSetTypeAction } from '../list/state/toolbar/actions';
import { getData } from '../list/helpers';
import { ListSelectedSetItemSelectedAction, ListSelectedSetItemsSelectedAction } from '../list/state/selected/actions';
var SkyListViewChecklistComponent = (function (_super) {
    __extends(SkyListViewChecklistComponent, _super);
    function SkyListViewChecklistComponent(state, dispatcher, checklistState, checklistDispatcher) {
        var _this = _super.call(this, state, 'Checklist View') || this;
        _this.dispatcher = dispatcher;
        _this.checklistState = checklistState;
        _this.checklistDispatcher = checklistDispatcher;
        _this.search = _this.searchFunction();
        /* tslint:disable */
        _this.labelFieldSelector = 'label';
        /* tslint:enable */
        _this.description = 'description';
        _this.hasSelectToolbarItems = false;
        _this.ngUnsubscribe = new Subject();
        _this._selectMode = 'multiple';
        var lastUpdate;
        Observable.combineLatest(_this.state.map(function (s) { return s.items; }).distinctUntilChanged(), function (items) {
            var dataChanged = lastUpdate === undefined || items.lastUpdate !== lastUpdate;
            lastUpdate = items.lastUpdate;
            var newItems = items.items.map(function (item) {
                return new ListViewChecklistItemModel(item.id, {
                    label: _this.labelFieldSelector ? getData(item.data, _this.labelFieldSelector) : undefined,
                    description: _this.description ? getData(item.data, _this.description) : undefined
                });
            });
            _this.checklistDispatcher.next(new ListViewChecklistItemsLoadAction(newItems, true, dataChanged, items.count));
        })
            .takeUntil(_this.ngUnsubscribe)
            .subscribe();
        return _this;
    }
    Object.defineProperty(SkyListViewChecklistComponent.prototype, "name", {
        set: function (value) {
            this.viewName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyListViewChecklistComponent.prototype, "selectMode", {
        get: function () {
            return this._selectMode;
        },
        set: function (value) {
            this._selectMode = value;
            this.updateActions();
        },
        enumerable: true,
        configurable: true
    });
    SkyListViewChecklistComponent.prototype.onViewActive = function () {
        if (this.search !== undefined) {
            this.dispatcher.searchSetFunctions([this.search]);
        }
        var fieldSelectors = [];
        if (this.labelFieldSelector) {
            fieldSelectors.push(this.labelFieldSelector);
        }
        if (this.description) {
            fieldSelectors.push(this.description);
        }
        this.dispatcher.searchSetFieldSelectors(fieldSelectors);
        this.dispatcher.next(new ListToolbarSetTypeAction('search'));
    };
    SkyListViewChecklistComponent.prototype.ngAfterViewInit = function () {
        this.updateActions();
    };
    SkyListViewChecklistComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    Object.defineProperty(SkyListViewChecklistComponent.prototype, "items", {
        get: function () {
            return this.checklistState.map(function (state) { return state.items.items; });
        },
        enumerable: true,
        configurable: true
    });
    SkyListViewChecklistComponent.prototype.searchFunction = function () {
        var _this = this;
        return function (data, searchText) {
            if (_this.labelFieldSelector !== undefined) {
                var label = getData(data, _this.labelFieldSelector);
                /* tslint:disable:no-null-keyword */
                if (label !== undefined &&
                    label !== null &&
                    label.toString().toLowerCase().indexOf(searchText) !== -1) {
                    return true;
                }
                /* tslint:enable:no-null-keyword */
            }
            if (_this.description !== undefined) {
                var description = getData(data, _this.description);
                /* tslint:disable:no-null-keyword */
                if (description !== undefined &&
                    description !== null &&
                    description.toString().toLowerCase().indexOf(searchText) !== -1) {
                    return true;
                }
                /* tslint:enable:no-null-keyword */
            }
            return false;
        };
    };
    SkyListViewChecklistComponent.prototype.itemSelected = function (id) {
        return this.state.map(function (state) { return state.selected.item.selectedIdMap.get(id); });
    };
    SkyListViewChecklistComponent.prototype.setItemSelection = function (item, event) {
        this.dispatcher.next(new ListSelectedSetItemSelectedAction(item.id, event.checked));
    };
    SkyListViewChecklistComponent.prototype.singleSelectRowClick = function (item) {
        this.dispatcher.next(new ListSelectedSetItemsSelectedAction([item.id], true, true));
    };
    SkyListViewChecklistComponent.prototype.clearSelections = function () {
        var _this = this;
        this.state.map(function (state) { return state.items.items; })
            .take(1)
            .subscribe(function (items) {
            _this.dispatcher
                .next(new ListSelectedSetItemsSelectedAction(items.map(function (item) { return item.id; }), false, false));
        });
    };
    SkyListViewChecklistComponent.prototype.selectAll = function () {
        var _this = this;
        this.state.map(function (state) { return state.items.items; })
            .take(1)
            .subscribe(function (items) {
            _this.dispatcher
                .next(new ListSelectedSetItemsSelectedAction(items.map(function (item) { return item.id; }), true, false));
        });
    };
    SkyListViewChecklistComponent.prototype.updateActions = function () {
        var selectAllId = 'select-all';
        var clearAllId = 'clear-all';
        switch (this.selectMode) {
            case 'single':
                this.dispatcher.toolbarRemoveItems([selectAllId, clearAllId]);
                this.hasSelectToolbarItems = false;
                break;
            default:
                if (!this.hasSelectToolbarItems) {
                    this.dispatcher.toolbarAddItems([
                        new ListToolbarItemModel({
                            id: 'select-all',
                            template: this.selectAllTemplate,
                            location: 'right',
                            index: 500,
                            view: this.id
                        }),
                        new ListToolbarItemModel({
                            id: 'clear-all',
                            template: this.clearSelectionsTemplate,
                            location: 'right',
                            index: 500,
                            view: this.id
                        })
                    ]);
                    this.hasSelectToolbarItems = true;
                }
                break;
        }
    };
    return SkyListViewChecklistComponent;
}(ListViewComponent));
export { SkyListViewChecklistComponent };
SkyListViewChecklistComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-list-view-checklist',
                template: "<div class=\"sky-list-view-checklist\" *ngIf=\"active | async\">\n  <div [ngSwitch]=\"selectMode\">\n    <ng-template ngSwitchCase=\"single\">\n      <div role=\"radiogroup\">\n        <sky-list-view-checklist-item\n          *ngFor=\"let item of items | async\"\n          [item]=\"item\"\n          [attr.sky-cmp-id]=\"item.id\">\n            <button\n              role=\"radio\"\n              [attr.aria-checked]=\"(itemSelected(item.id) | async) || false\"\n              type=\"button\"\n              class=\"sky-list-view-checklist-single-button\"\n              [ngClass]=\"{ 'sky-list-view-checklist-row-selected' : (itemSelected(item.id) | async) }\"\n              (click)=\"singleSelectRowClick(item)\">\n              <div class=\"sky-emphasized\" *ngIf=\"item.label\">{{item.label}}</div>\n              <div *ngIf=\"item.description\">{{item.description}}</div>\n            </button>\n        </sky-list-view-checklist-item>\n      </div>\n    </ng-template>\n\n    <ng-template ngSwitchDefault>\n      <sky-list-view-checklist-item\n        *ngFor=\"let item of items | async\"\n        [item]=\"item\"\n        [attr.sky-cmp-id]=\"item.id\">\n          <sky-checkbox\n            [checked]=\"itemSelected(item.id) | async\"\n            (change)=\"setItemSelection(item, $event)\">\n            <sky-checkbox-label>\n              <div class=\"sky-emphasized\" *ngIf=\"item.label\" [attr.title]=\"item.label\">\n                {{item.label}}\n              </div>\n              <div *ngIf=\"item.description\" [attr.title]=\"item.description\">\n                {{item.description}}\n              </div>\n            </sky-checkbox-label>\n          </sky-checkbox>\n        </sky-list-view-checklist-item>\n    </ng-template>\n  </div>\n</div>\n\n\n<ng-template #selectAllTemplate>\n  <button\n    class=\"sky-btn sky-btn-link sky-list-view-checklist-select-all\"\n    (click)=\"selectAll(); false\"\n  >\n    {{'checklist_select_all' | skyResources}}\n  </button>\n</ng-template>\n\n<ng-template #clearSelectionsTemplate>\n  <button\n    class=\"sky-btn sky-btn-link sky-list-view-checklist-clear-all\"\n    (click)=\"clearSelections(); false\"\n  >\n    {{'checklist_clear_all' | skyResources}}\n  </button>\n</ng-template>\n",
                styles: [".sky-list-view-checklist /deep/ .sky-checkbox-wrapper {\n  display: flex;\n  align-items: center;\n}\n\n.sky-list-view-checklist /deep/ .sky-checkbox-wrapper > .sky-checkbox, .sky-list-view-checklist /deep/ .sky-checkbox-wrapper > input {\n  flex: 1;\n  max-width: 22px;\n}\n"],
                providers: [
                    /* tslint:disable */
                    { provide: ListViewComponent, useExisting: forwardRef(function () { return SkyListViewChecklistComponent; }) },
                    /* tslint:enable */
                    ChecklistState,
                    ChecklistStateDispatcher,
                    ChecklistStateModel
                ],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
SkyListViewChecklistComponent.ctorParameters = function () { return [
    { type: ListState, },
    { type: ListStateDispatcher, },
    { type: ChecklistState, },
    { type: ChecklistStateDispatcher, },
]; };
SkyListViewChecklistComponent.propDecorators = {
    'name': [{ type: Input },],
    'search': [{ type: Input },],
    'labelFieldSelector': [{ type: Input, args: ['label',] },],
    'description': [{ type: Input },],
    'selectMode': [{ type: Input },],
    'selectAllTemplate': [{ type: ViewChild, args: ['selectAllTemplate',] },],
    'clearSelectionsTemplate': [{ type: ViewChild, args: ['clearSelectionsTemplate',] },],
};
//# sourceMappingURL=list-view-checklist.component.js.map