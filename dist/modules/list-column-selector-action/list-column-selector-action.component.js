import { Component, Input } from '@angular/core';
import { ListState } from '../list/state';
import { ListViewDisplayedGridColumnsLoadAction } from '../list-view-grid/state/displayed-columns/actions';
import { SkyModalService } from '../modal';
import { SkyColumnSelectorContext, SkyColumnSelectorComponent } from '../column-selector';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/take';
var SkyListColumnSelectorActionComponent = (function () {
    function SkyListColumnSelectorActionComponent(listState, modalService) {
        this.listState = listState;
        this.modalService = modalService;
    }
    Object.defineProperty(SkyListColumnSelectorActionComponent.prototype, "isInGridView", {
        get: function () {
            var _this = this;
            return this.listState.map(function (s) { return s.views.active; }).map(function (activeView) {
                return _this.gridView && (activeView === _this.gridView.id);
            }).distinctUntilChanged();
        },
        enumerable: true,
        configurable: true
    });
    SkyListColumnSelectorActionComponent.prototype.openColumnSelector = function () {
        var _this = this;
        /* istanbul ignore else */
        /* sanity check */
        if (this.gridView) {
            var columns_1 = [];
            var selectedColumnIds_1 = [];
            this.gridView.gridState.take(1).subscribe(function (state) {
                columns_1 = state.columns.items
                    .filter(function (item) {
                    return !item.locked;
                })
                    .map(function (item) {
                    return {
                        id: item.id,
                        heading: item.heading,
                        description: item.description
                    };
                });
                selectedColumnIds_1 = state.displayedColumns.items
                    .filter(function (item) {
                    return !item.locked;
                })
                    .map(function (item) {
                    return item.id;
                });
            });
            var modalInstance = this.modalService.open(SkyColumnSelectorComponent, [
                {
                    provide: SkyColumnSelectorContext,
                    useValue: {
                        columns: columns_1,
                        selectedColumnIds: selectedColumnIds_1
                    }
                }
            ]);
            modalInstance.closed.subscribe(function (result) {
                if (result.reason === 'save' && result.data) {
                    var newSelectedIds_1 = result.data;
                    var newDisplayedColumns_1 = [];
                    _this.gridView.gridState.take(1)
                        .subscribe(function (state) {
                        newDisplayedColumns_1 = state.columns.items.filter(function (item) {
                            return newSelectedIds_1.indexOf(item.id) > -1 || item.locked;
                        });
                    });
                    _this.gridView.gridDispatcher.next(new ListViewDisplayedGridColumnsLoadAction(newDisplayedColumns_1, true));
                }
            });
        }
    };
    return SkyListColumnSelectorActionComponent;
}());
export { SkyListColumnSelectorActionComponent };
SkyListColumnSelectorActionComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-list-column-selector-action',
                template: "<sky-list-secondary-action *ngIf=\"isInGridView | async\">\n  <button type=\"button\" (click)=\"openColumnSelector()\">\n    Choose columns\n  </button>\n</sky-list-secondary-action>\n"
            },] },
];
/** @nocollapse */
SkyListColumnSelectorActionComponent.ctorParameters = function () { return [
    { type: ListState, },
    { type: SkyModalService, },
]; };
SkyListColumnSelectorActionComponent.propDecorators = {
    'gridView': [{ type: Input },],
};
//# sourceMappingURL=list-column-selector-action.component.js.map