import { Component } from '@angular/core';
import { SkyModalService } from '../../core';
import { SkyFilterDemoModalComponent } from './filter-demo-modal.component';
import { SkyFilterDemoModalContext } from './filter-demo-modal-context';
var SkyFilterDemoComponent = (function () {
    function SkyFilterDemoComponent(modal) {
        this.modal = modal;
        this.appliedFilters = [];
        this.items = [
            {
                name: 'Orange',
                description: 'A round, orange fruit.',
                type: 'citrus',
                color: 'orange'
            },
            {
                name: 'Mango',
                description: 'Delicious in smoothies, but don\'t eat the skin.',
                type: 'other',
                color: 'orange'
            },
            {
                name: 'Lime',
                description: 'A sour, green fruit used in many drinks.',
                type: 'citrus',
                color: 'green'
            },
            {
                name: 'Strawberry',
                description: 'A red fruit that goes well with shortcake.',
                type: 'berry',
                color: 'red'
            },
            {
                name: 'Blueberry',
                description: 'A small, blue fruit often found in muffins.',
                type: 'berry',
                color: 'blue'
            }
        ];
        this.filteredItems = this.items.slice();
    }
    SkyFilterDemoComponent.prototype.filterButtonClicked = function () {
        var _this = this;
        var modalInstance = this.modal.open(SkyFilterDemoModalComponent, [{
                provide: SkyFilterDemoModalContext,
                useValue: {
                    appliedFilters: this.appliedFilters
                }
            }]);
        modalInstance.closed.subscribe(function (result) {
            if (result.reason === 'save') {
                _this.appliedFilters = result.data.slice();
                _this.filteredItems = _this.filterItems(_this.items, _this.appliedFilters);
            }
        });
    };
    SkyFilterDemoComponent.prototype.onDismiss = function (index) {
        this.appliedFilters.splice(index, 1);
        this.filteredItems = this.filterItems(this.items, this.appliedFilters);
    };
    SkyFilterDemoComponent.prototype.orangeFilterFailed = function (filter, item) {
        return filter.name === 'hideOrange' && filter.value && item.color === 'orange';
    };
    SkyFilterDemoComponent.prototype.fruitTypeFilterFailed = function (filter, item) {
        return filter.name === 'fruitType' && filter.value !== 'any' && filter.value !== item.type;
    };
    SkyFilterDemoComponent.prototype.itemIsShown = function (filters, item) {
        var passesFilter = true, j;
        for (j = 0; j < filters.length; j++) {
            if (this.orangeFilterFailed(filters[j], item)) {
                passesFilter = false;
            }
            else if (this.fruitTypeFilterFailed(filters[j], item)) {
                passesFilter = false;
            }
        }
        return passesFilter;
    };
    SkyFilterDemoComponent.prototype.filterItems = function (items, filters) {
        var i, passesFilter, result = [];
        for (i = 0; i < items.length; i++) {
            passesFilter = this.itemIsShown(filters, items[i]);
            if (passesFilter) {
                result.push(items[i]);
            }
        }
        return result;
    };
    return SkyFilterDemoComponent;
}());
export { SkyFilterDemoComponent };
SkyFilterDemoComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-filter-demo',
                template: "<div>\n  <sky-toolbar>\n    <sky-toolbar-section>\n      <sky-toolbar-item>\n        <sky-filter-button\n          (filterButtonClick)=\"filterButtonClicked()\">\n        </sky-filter-button>\n      </sky-toolbar-item>\n    </sky-toolbar-section>\n    <sky-toolbar-section *ngIf=\"appliedFilters && appliedFilters.length > 0\">\n      <sky-filter-summary>\n        <sky-filter-summary-item\n          *ngFor=\"let item of appliedFilters; let i = index\"\n          (dismiss)=\"onDismiss(i)\"\n          (itemClick)=\"filterButtonClicked()\">\n          {{item.label}}\n        </sky-filter-summary-item>\n      </sky-filter-summary>\n    </sky-toolbar-section>\n  </sky-toolbar>\n  <sky-repeater expandMode=\"none\">\n    <sky-repeater-item *ngFor=\"let item of filteredItems\">\n      <sky-repeater-item-title>\n        {{item.name}}\n      </sky-repeater-item-title>\n      <sky-repeater-item-content>\n        <div>\n          {{item.description}}\n        </div>\n      </sky-repeater-item-content>\n    </sky-repeater-item>\n  </sky-repeater>\n\n</div>\n"
            },] },
];
/** @nocollapse */
SkyFilterDemoComponent.ctorParameters = function () { return [
    { type: SkyModalService, },
]; };
//# sourceMappingURL=filter-demo.component.js.map