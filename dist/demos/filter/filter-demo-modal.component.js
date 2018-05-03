import { Component } from '@angular/core';
import { SkyModalInstance } from '../../core';
import { SkyFilterDemoModalContext } from './filter-demo-modal-context';
var SkyFilterDemoModalComponent = (function () {
    function SkyFilterDemoModalComponent(context, instance) {
        this.context = context;
        this.instance = instance;
        this.fruitType = 'any';
        if (this.context &&
            this.context.appliedFilters &&
            this.context.appliedFilters.length > 0) {
            this.setFormFilters(this.context.appliedFilters);
        }
        else {
            this.clearAllFilters();
        }
    }
    SkyFilterDemoModalComponent.prototype.applyFilters = function () {
        var result = this.getAppliedFiltersArray();
        this.instance.save(result);
    };
    SkyFilterDemoModalComponent.prototype.clearAllFilters = function () {
        this.hideOrange = false;
        this.fruitType = 'any';
    };
    SkyFilterDemoModalComponent.prototype.cancel = function () {
        this.instance.cancel();
    };
    SkyFilterDemoModalComponent.prototype.getAppliedFiltersArray = function () {
        var appliedFilters = [];
        if (this.fruitType !== 'any') {
            appliedFilters.push({
                name: 'fruitType',
                value: this.fruitType,
                label: this.fruitType
            });
        }
        if (this.hideOrange) {
            appliedFilters.push({
                name: 'hideOrange',
                value: true,
                label: 'hide orange fruits'
            });
        }
        return appliedFilters;
    };
    SkyFilterDemoModalComponent.prototype.setFormFilters = function (appliedFilters) {
        for (var i = 0; i < appliedFilters.length; i++) {
            if (appliedFilters[i].name === 'fruitType') {
                this.fruitType = appliedFilters[i].value;
            }
            if (appliedFilters[i].name === 'hideOrange') {
                this.hideOrange = appliedFilters[i].value;
            }
        }
    };
    return SkyFilterDemoModalComponent;
}());
export { SkyFilterDemoModalComponent };
SkyFilterDemoModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-demo-filter-modal-form',
                template: "<sky-modal>\n  <sky-modal-header>\n    Food preferences\n  </sky-modal-header>\n  <sky-modal-content>\n    <label for=\"sky-demo-select-type\">Fruit type</label>\n    <select id=\"sky-demo-select-type\" [(ngModel)]=\"fruitType\" class=\"sky-form-control\">\n      <option value=\"any\">Any fruit</option>\n      <option value=\"citrus\">Citrus</option>\n      <option value=\"berry\">Berry</option>\n    </select>\n    <div style=\"margin-top: 15px;\">\n      <sky-checkbox [(ngModel)]=\"hideOrange\">\n        <sky-checkbox-label>\n          Hide orange fruits\n        </sky-checkbox-label>\n      </sky-checkbox>\n    </div>\n  </sky-modal-content>\n  <sky-modal-footer>\n    <button\n      type=\"button\"\n      class=\"sky-btn sky-btn-primary\"\n      (click)=\"applyFilters()\">\n      Apply filters\n    </button>\n    <button\n      type=\"button\"\n      class=\"sky-btn sky-btn-link\"\n      (click)=\"clearAllFilters()\">\n      Clear all filters\n    </button>\n    <button\n      type=\"button\"\n      class=\"sky-btn sky-btn-link\"\n      (click)=\"cancel()\">\n      Cancel\n    </button>\n  </sky-modal-footer>\n</sky-modal>\n"
            },] },
];
/** @nocollapse */
SkyFilterDemoModalComponent.ctorParameters = function () { return [
    { type: SkyFilterDemoModalContext, },
    { type: SkyModalInstance, },
]; };
//# sourceMappingURL=filter-demo-modal.component.js.map