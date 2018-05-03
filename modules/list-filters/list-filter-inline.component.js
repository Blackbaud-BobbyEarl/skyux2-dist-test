import { Component, ContentChildren } from '@angular/core';
import { SkyListFilterInlineItemComponent } from './list-filter-inline-item.component';
import { ListStateDispatcher } from '../list/state';
import { ListFilterModel } from '../list/state';
import { SkyListFilterInlineModel } from './list-filter-inline.model';
var SkyListFilterInlineComponent = (function () {
    function SkyListFilterInlineComponent(dispatcher) {
        this.dispatcher = dispatcher;
        this.inlineFilters = [];
    }
    SkyListFilterInlineComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.inlineFilters = this.filters.map(function (filter) {
            return new SkyListFilterInlineModel({
                name: filter.name,
                filterFunction: filter.filterFunction,
                template: filter.template,
                value: filter.value,
                defaultValue: filter.defaultValue
            });
        });
        this.inlineFilters.forEach(function (filter) {
            filter.onChange.subscribe(function (value) {
                _this.applyFilters();
            });
        });
        this.dispatcher.filtersUpdate(this.getFilterModelFromInline(this.inlineFilters));
    };
    SkyListFilterInlineComponent.prototype.applyFilters = function () {
        this.dispatcher.filtersUpdate(this.getFilterModelFromInline(this.inlineFilters));
    };
    SkyListFilterInlineComponent.prototype.getFilterModelFromInline = function (inlineFilters) {
        return inlineFilters.map(function (filter) {
            return new ListFilterModel({
                name: filter.name,
                value: filter.value,
                filterFunction: filter.filterFunction,
                defaultValue: filter.defaultValue
            });
        });
    };
    return SkyListFilterInlineComponent;
}());
export { SkyListFilterInlineComponent };
SkyListFilterInlineComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-list-filter-inline',
                template: "<ng-content></ng-content>\n\n<sky-filter-inline>\n  <sky-filter-inline-item\n    *ngFor=\"let filter of inlineFilters\">\n    <sky-list-filter-inline-item-renderer\n      [template]=\"filter.template\"\n      [filter]=\"filter\">\n    </sky-list-filter-inline-item-renderer>\n  </sky-filter-inline-item>\n</sky-filter-inline>\n"
            },] },
];
/** @nocollapse */
SkyListFilterInlineComponent.ctorParameters = function () { return [
    { type: ListStateDispatcher, },
]; };
SkyListFilterInlineComponent.propDecorators = {
    'filters': [{ type: ContentChildren, args: [SkyListFilterInlineItemComponent,] },],
};
//# sourceMappingURL=list-filter-inline.component.js.map