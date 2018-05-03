import { Component } from '@angular/core';
import { SkyModalInstance, ListFilterModel } from '../../core';
import { SkyListFiltersModalDemoContext } from './list-filters-demo-modal-context';
var SkyListFiltersModalDemoComponent = (function () {
    function SkyListFiltersModalDemoComponent(context, instance) {
        this.context = context;
        this.instance = instance;
        this.fruitType = 'any';
        this.headerText = 'Filters';
        if (this.context && this.context.appliedFilters && this.context.appliedFilters.length > 0) {
            this.setFormFilters(this.context.appliedFilters);
        }
        else {
            this.clearAllFilters();
        }
    }
    SkyListFiltersModalDemoComponent.prototype.applyFilters = function () {
        var result = this.getAppliedFiltersArray();
        this.instance.save(result);
    };
    SkyListFiltersModalDemoComponent.prototype.clearAllFilters = function () {
        this.hideOrange = false;
        this.fruitType = 'any';
    };
    SkyListFiltersModalDemoComponent.prototype.cancel = function () {
        this.instance.cancel();
    };
    SkyListFiltersModalDemoComponent.prototype.fruitTypeFilterFunction = function (item, filterValue) {
        return filterValue === item.data.type;
    };
    SkyListFiltersModalDemoComponent.prototype.hideOrangeFilterFunction = function (item, filterValue) {
        return !filterValue || (filterValue && item.data.color !== 'orange');
    };
    SkyListFiltersModalDemoComponent.prototype.getAppliedFiltersArray = function () {
        var appliedFilters = [];
        if (this.fruitType !== 'any') {
            appliedFilters.push(new ListFilterModel({
                name: 'fruitType',
                value: this.fruitType,
                label: this.fruitType,
                filterFunction: this.fruitTypeFilterFunction
            }));
        }
        if (this.hideOrange) {
            appliedFilters.push(new ListFilterModel({
                name: 'hideOrange',
                value: true,
                label: 'hide orange fruits',
                filterFunction: this.hideOrangeFilterFunction
            }));
        }
        return appliedFilters;
    };
    SkyListFiltersModalDemoComponent.prototype.setFormFilters = function (appliedFilters) {
        for (var i = 0; i < appliedFilters.length; i++) {
            if (appliedFilters[i].name === 'fruitType') {
                this.fruitType = appliedFilters[i].value;
            }
            if (appliedFilters[i].name === 'hideOrange') {
                this.hideOrange = appliedFilters[i].value;
            }
        }
    };
    return SkyListFiltersModalDemoComponent;
}());
export { SkyListFiltersModalDemoComponent };
SkyListFiltersModalDemoComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-demo-filter-modal-form',
                template: "<sky-modal>\n  <sky-modal-header>\n    {{headerText}}\n  </sky-modal-header>\n  <sky-modal-content>\n    <label for=\"sky-demo-select-type\">Fruit type</label>\n    <select id=\"sky-demo-select-type\" [(ngModel)]=\"fruitType\" class=\"sky-form-control\">\n      <option value=\"any\">Any fruit</option>\n      <option value=\"citrus\">Citrus</option>\n      <option value=\"berry\">Berry</option>\n    </select>\n    <div style=\"margin-top: 15px;\">\n      <sky-checkbox [(ngModel)]=\"hideOrange\">\n        <sky-checkbox-label>\n          Hide orange fruits\n        </sky-checkbox-label>\n      </sky-checkbox>\n    </div>\n  </sky-modal-content>\n  <sky-modal-footer>\n    <button\n      type=\"button\"\n      class=\"sky-btn sky-btn-primary\"\n      (click)=\"applyFilters()\">\n      Apply filters\n    </button>\n    <button\n      type=\"button\"\n      class=\"sky-btn sky-btn-link\"\n      (click)=\"clearAllFilters()\">\n      Clear all filters\n    </button>\n    <button\n      type=\"button\"\n      class=\"sky-btn sky-btn-link\"\n      (click)=\"cancel()\">\n      Cancel\n    </button>\n  </sky-modal-footer>\n</sky-modal>"
            },] },
];
/** @nocollapse */
SkyListFiltersModalDemoComponent.ctorParameters = function () { return [
    { type: SkyListFiltersModalDemoContext, },
    { type: SkyModalInstance, },
]; };
//# sourceMappingURL=list-filters-demo-modal.component.js.map