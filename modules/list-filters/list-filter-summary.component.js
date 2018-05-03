import { Component, Output, EventEmitter } from '@angular/core';
import { ListState, ListStateDispatcher } from '../list/state';
import 'rxjs/add/operator/take';
var SkyListFilterSummaryComponent = (function () {
    function SkyListFilterSummaryComponent(state, dispatcher) {
        this.state = state;
        this.dispatcher = dispatcher;
        this.summaryItemClick = new EventEmitter();
    }
    SkyListFilterSummaryComponent.prototype.ngAfterContentInit = function () {
        this.appliedFilters = this.state.map(function (state) {
            return state.filters;
        });
    };
    SkyListFilterSummaryComponent.prototype.filterSummaryItemDismiss = function (index) {
        var _this = this;
        this.appliedFilters.take(1).subscribe(function (filters) {
            filters.splice(index, 1);
            _this.dispatcher.filtersUpdate(filters.slice());
        });
    };
    SkyListFilterSummaryComponent.prototype.filterSummaryItemClick = function (item) {
        this.summaryItemClick.emit(item);
    };
    return SkyListFilterSummaryComponent;
}());
export { SkyListFilterSummaryComponent };
SkyListFilterSummaryComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-list-filter-summary',
                template: "<sky-filter-summary>\n  <sky-filter-summary-item\n    *ngFor=\"let item of appliedFilters | async; let i = index\"\n    (dismiss)=\"filterSummaryItemDismiss(i)\"\n    (itemClick)=\"filterSummaryItemClick(item)\"\n    [dismissible]=\"item.dismissible\"\n    >\n    {{item.label || item.value}}\n  </sky-filter-summary-item>\n</sky-filter-summary>\n"
            },] },
];
/** @nocollapse */
SkyListFilterSummaryComponent.ctorParameters = function () { return [
    { type: ListState, },
    { type: ListStateDispatcher, },
]; };
SkyListFilterSummaryComponent.propDecorators = {
    'summaryItemClick': [{ type: Output },],
};
//# sourceMappingURL=list-filter-summary.component.js.map