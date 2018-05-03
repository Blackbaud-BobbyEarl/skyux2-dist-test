import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
var SkyListFiltersInlineDemoComponent = (function () {
    function SkyListFiltersInlineDemoComponent() {
        this.items = Observable.of([
            {
                id: 0,
                name: 'Orange',
                description: 'A round, orange fruit.',
                type: 'citrus',
                color: 'orange'
            },
            {
                id: 1,
                name: 'Mango',
                description: 'Delicious in smoothies, but don\'t eat the skin.',
                type: 'other',
                color: 'orange'
            },
            {
                id: 2,
                name: 'Lime',
                description: 'A sour, green fruit used in many drinks.',
                type: 'citrus',
                color: 'green'
            },
            {
                id: 3,
                name: 'Strawberry',
                description: 'A red fruit that goes well with shortcake.',
                type: 'berry',
                color: 'red'
            },
            {
                id: 4,
                name: 'Blueberry',
                description: 'A small, blue fruit often found in muffins.',
                type: 'berry',
                color: 'blue'
            }
        ]);
    }
    SkyListFiltersInlineDemoComponent.prototype.fruitTypeFilterFunction = function (item, filterValue) {
        return filterValue === 'any' || filterValue === item.data.type;
    };
    SkyListFiltersInlineDemoComponent.prototype.hideOrangeFilterFunction = function (item, filterValue) {
        return !filterValue || (filterValue && item.data.color !== 'orange');
    };
    return SkyListFiltersInlineDemoComponent;
}());
export { SkyListFiltersInlineDemoComponent };
SkyListFiltersInlineDemoComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-list-filters-inline-demo',
                template: "<sky-list\n  [data]=\"items\"\n  [defaultView]=\"grid\">\n  <sky-list-toolbar>\n    <sky-list-secondary-actions>\n      <sky-list-secondary-action>\n        <button type=\"button\">\n          Option\n        </button>\n      </sky-list-secondary-action>\n    </sky-list-secondary-actions>\n    <sky-list-toolbar-sort\n      label=\"Fruit name (A - Z)\"\n      field=\"name\"\n      [descending]=\"false\"\n      type=\"string\"\n    >\n    </sky-list-toolbar-sort>\n    <sky-list-toolbar-sort\n      label=\"Fruit name (Z - A)\"\n      field=\"name\"\n      [descending]=\"true\"\n      type=\"string\"\n    >\n    </sky-list-toolbar-sort>\n    <sky-list-filter-inline>\n      <sky-list-filter-inline-item\n        name=\"fruitType\"\n        [filter]=\"fruitTypeFilterFunction\"\n        value=\"any\"\n        defaultValue=\"any\">\n        <ng-template let-filter=\"filter\">\n          <label for=\"sky-demo-select-type\">Fruit type</label>\n          <select\n            id=\"sky-demo-select-type\"\n            [ngModel]=\"filter.value\"\n            (ngModelChange)=\"filter.changed($event)\">\n            <option value=\"any\">Any fruit</option>\n            <option value=\"citrus\">Citrus</option>\n            <option value=\"berry\">Berry</option>\n          </select>\n        </ng-template>\n      </sky-list-filter-inline-item>\n      <sky-list-filter-inline-item\n        name=\"hideOrange\"\n        [filter]=\"hideOrangeFilterFunction\">\n        <ng-template let-filter=\"filter\">\n          <sky-checkbox\n            [ngModel]=\"filter.value\"\n            (ngModelChange)=\"filter.changed($event)\">\n            <sky-checkbox-label>\n              Hide orange fruits\n            </sky-checkbox-label>\n          </sky-checkbox>\n        </ng-template>\n      </sky-list-filter-inline-item>\n    </sky-list-filter-inline>\n  </sky-list-toolbar>\n  <sky-list-view-grid fit=\"scroll\" #grid>\n    <sky-grid-column\n      field=\"name\"\n      heading=\"Name\">\n    </sky-grid-column>\n    <sky-grid-column\n      field=\"description\"\n      heading=\"Description\">\n    </sky-grid-column>\n  </sky-list-view-grid>\n </sky-list>\n"
            },] },
];
/** @nocollapse */
SkyListFiltersInlineDemoComponent.ctorParameters = function () { return []; };
//# sourceMappingURL=list-filters-inline-demo.component.js.map