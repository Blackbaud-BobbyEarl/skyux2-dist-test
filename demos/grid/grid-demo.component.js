import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
var SkyGridDemoComponent = (function () {
    function SkyGridDemoComponent() {
        this.items = [
            { id: '1', column1: 101, column2: 'Apple', column3: 'Anne eats apples', composite: 'Comp A' },
            { id: '2', column1: 202, column2: 'Banana', column3: 'Ben eats bananas', composite: 'Comp B' },
            { id: '3', column1: 303, column2: 'Pear', column3: 'Patty eats pears', composite: 'Comp C' },
            { id: '4', column1: 404, column2: 'Grape', column3: 'George eats grapes', composite: 'Comp D' },
            { id: '5', column1: 505, column2: 'Banana', column3: 'Becky eats bananas',
                composite: 'Comp E' },
            { id: '6', column1: 606, column2: 'Lemon', column3: 'Larry eats lemons', composite: 'Comp F' },
            { id: '7', column1: 707, column2: 'Strawberry', column3: 'Sally eats strawberries',
                composite: 'Comp G' }
        ];
        this.asyncHeading = new BehaviorSubject('');
    }
    SkyGridDemoComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Simulate async request:
        setTimeout(function () {
            _this.asyncHeading.next('Column1');
        }, 1000);
    };
    SkyGridDemoComponent.prototype.sortChanged = function (activeSort) {
        var sortField = activeSort.fieldSelector;
        var descending = activeSort.descending;
        this.items = this.items.sort(function (a, b) {
            var value1 = a[sortField];
            var value2 = b[sortField];
            if (value1 && typeof value1 === 'string') {
                value1 = value1.toLowerCase();
            }
            if (value2 && typeof value2 === 'string') {
                value2 = value2.toLowerCase();
            }
            if (value1 === value2) {
                return 0;
            }
            var result = value1 > value2 ? 1 : -1;
            if (descending) {
                result *= -1;
            }
            return result;
        }).slice();
    };
    return SkyGridDemoComponent;
}());
export { SkyGridDemoComponent };
SkyGridDemoComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-grid-demo',
                template: "<sky-grid\n  fit=\"scroll\"\n  [data]=\"items\"\n  (sortFieldChange)=\"sortChanged($event)\">\n  <sky-grid-column\n    id=\"column1\"\n    field=\"column1\"\n    [heading]=\"asyncHeading | async\">\n  </sky-grid-column>\n  <sky-grid-column\n    id=\"column2\"\n    field=\"column2\"\n    heading=\"Column2\">\n  </sky-grid-column>\n  <sky-grid-column\n    id=\"column3\"\n    field=\"column3\"\n    heading=\"Column3\">\n  </sky-grid-column>\n  <sky-grid-column\n    id=\"composite\"\n    field=\"composite\"\n    heading=\"Composite column\"\n    [template]=\"customColumnTemplate\">\n  </sky-grid-column>\n</sky-grid>\n\n<ng-template\n  let-row=\"row\"\n  let-value=\"value\"\n  #customColumnTemplate>\n  <div>\n    Value: {{value}}\n  </div>\n  <div>\n    Column 2: {{row.column2}}\n  </div>\n</ng-template>\n"
            },] },
];
/** @nocollapse */
SkyGridDemoComponent.ctorParameters = function () { return []; };
//# sourceMappingURL=grid-demo.component.js.map