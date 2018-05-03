import { Component } from '@angular/core';
var SkyFilterInlineDemoComponent = (function () {
    function SkyFilterInlineDemoComponent() {
        this.filtersActive = false;
        this.showInlineFilters = false;
        this.fruitType = 'any';
        this.hideOrange = false;
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
        this.appliedFilters = [];
        this.filteredItems = this.items.slice();
    }
    SkyFilterInlineDemoComponent.prototype.filterButtonClicked = function () {
        this.showInlineFilters = !this.showInlineFilters;
    };
    SkyFilterInlineDemoComponent.prototype.fruitTypeChange = function (newValue) {
        this.fruitType = newValue;
        this.setFilterActiveState();
    };
    SkyFilterInlineDemoComponent.prototype.hideOrangeChange = function (newValue) {
        this.hideOrange = newValue;
        this.setFilterActiveState();
    };
    SkyFilterInlineDemoComponent.prototype.setFilterActiveState = function () {
        this.appliedFilters = [];
        if (this.fruitType !== 'any') {
            this.appliedFilters.push({
                name: 'fruitType',
                value: this.fruitType
            });
        }
        if (this.hideOrange) {
            this.appliedFilters.push({
                name: 'hideOrange',
                value: true
            });
        }
        this.filtersActive = this.appliedFilters.length > 0;
        this.filteredItems = this.filterItems(this.items, this.appliedFilters);
    };
    SkyFilterInlineDemoComponent.prototype.orangeFilterFailed = function (filter, item) {
        return filter.name === 'hideOrange' && filter.value && item.color === 'orange';
    };
    SkyFilterInlineDemoComponent.prototype.fruitTypeFilterFailed = function (filter, item) {
        return filter.name === 'fruitType' && filter.value !== 'any' && filter.value !== item.type;
    };
    SkyFilterInlineDemoComponent.prototype.itemIsShown = function (filters, item) {
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
    SkyFilterInlineDemoComponent.prototype.filterItems = function (items, filters) {
        var i, passesFilter, result = [];
        for (i = 0; i < items.length; i++) {
            passesFilter = this.itemIsShown(filters, items[i]);
            if (passesFilter) {
                result.push(items[i]);
            }
        }
        return result;
    };
    return SkyFilterInlineDemoComponent;
}());
export { SkyFilterInlineDemoComponent };
SkyFilterInlineDemoComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-filter-inline-demo',
                template: "<div>\n  <sky-toolbar>\n    <sky-toolbar-section>\n      <sky-toolbar-item>\n        <sky-filter-button\n          [active]=\"filtersActive\"\n          (filterButtonClick)=\"filterButtonClicked()\">\n        </sky-filter-button>\n      </sky-toolbar-item>\n    </sky-toolbar-section>\n  </sky-toolbar>\n  <sky-filter-inline [hidden]=\"!showInlineFilters\">\n    <sky-filter-inline-item>\n      <label for=\"sky-demo-select-type\">Fruit type</label>\n      <select\n        id=\"sky-demo-select-type\"\n        [ngModel]=\"fruitType\"\n        (ngModelChange)=\"fruitTypeChange($event)\">\n        <option value=\"any\">Any fruit</option>\n        <option value=\"citrus\">Citrus</option>\n        <option value=\"berry\">Berry</option>\n      </select>\n    </sky-filter-inline-item>\n    <sky-filter-inline-item>\n      <sky-checkbox\n        [ngModel]=\"hideOrange\"\n        (ngModelChange)=\"hideOrangeChange($event)\"\n        >\n        <sky-checkbox-label>\n          Hide orange fruits\n        </sky-checkbox-label>\n      </sky-checkbox>\n    </sky-filter-inline-item>\n  </sky-filter-inline>\n  <sky-repeater expandMode=\"none\">\n    <sky-repeater-item *ngFor=\"let item of filteredItems\">\n      <sky-repeater-item-title>\n        {{item.name}}\n      </sky-repeater-item-title>\n      <sky-repeater-item-content>\n        <div>\n          {{item.description}}\n        </div>\n      </sky-repeater-item-content>\n    </sky-repeater-item>\n  </sky-repeater>\n\n</div>\n"
            },] },
];
/** @nocollapse */
SkyFilterInlineDemoComponent.ctorParameters = function () { return []; };
//# sourceMappingURL=filter-inline-demo.component.js.map