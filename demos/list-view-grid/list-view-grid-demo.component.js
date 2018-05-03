import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
var SkyListViewGridDemoComponent = (function () {
    function SkyListViewGridDemoComponent() {
        this.items = Observable.of([
            { id: '1', column1: 101, column2: 'Apple', column3: 'Anne eats apples' },
            { id: '2', column1: 202, column2: 'Banana', column3: 'Ben eats bananas' },
            { id: '3', column1: 303, column2: 'Pear', column3: 'Patty eats pears' },
            { id: '4', column1: 404, column2: 'Grape', column3: 'George eats grapes' },
            { id: '5', column1: 505, column2: 'Banana', column3: 'Becky eats bananas' },
            { id: '6', column1: 606, column2: 'Lemon', column3: 'Larry eats lemons' },
            { id: '7', column1: 707, column2: 'Strawberry', column3: 'Sally eats strawberries' }
        ]);
        this.asyncHeading = new BehaviorSubject('');
    }
    SkyListViewGridDemoComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Simulate async request:
        setTimeout(function () {
            _this.asyncHeading.next('Column1');
        }, 1000);
    };
    return SkyListViewGridDemoComponent;
}());
export { SkyListViewGridDemoComponent };
SkyListViewGridDemoComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-list-view-grid-demo',
                template: "<sky-list [data]=\"items\" [defaultView]=\"grid\">\n  <sky-list-toolbar>\n    <sky-list-secondary-actions>\n      <sky-list-column-selector-action [gridView]=\"grid\">\n      </sky-list-column-selector-action>\n    </sky-list-secondary-actions>\n  </sky-list-toolbar>\n\n  <sky-list-view-grid fit=\"scroll\" #grid>\n    <sky-grid-column\n      field=\"control\"\n      [locked]=\"true\"\n      [template]=\"customCellTemplate\">\n    </sky-grid-column>\n    <sky-grid-column\n      field=\"column1\"\n      [locked]=\"true\"\n      [heading]=\"asyncHeading | async\"\n      description=\"A numbered column\">\n    </sky-grid-column>\n    <sky-grid-column\n      field=\"column2\"\n      heading=\"Column2\"\n      description=\"A fruit column\">\n    </sky-grid-column>\n    <sky-grid-column\n      field=\"column3\"\n      heading=\"Column3\"\n      description=\"A sentence column\">\n    </sky-grid-column>\n  </sky-list-view-grid>\n</sky-list>\n\n<ng-template\n  #customCellTemplate\n  let-row=\"row\">\n  <sky-dropdown buttonType=\"context-menu\">\n    <sky-dropdown-menu>\n      <sky-dropdown-item>\n        <button type=\"button\">\n          Option 1\n        </button>\n      </sky-dropdown-item>\n      <sky-dropdown-item>\n        <button type=\"button\">\n          Option 2\n        </button>\n      </sky-dropdown-item>\n      <sky-dropdown-item>\n        <button type=\"button\">\n          Option 3\n        </button>\n      </sky-dropdown-item>\n    </sky-dropdown-menu>\n  </sky-dropdown>\n</ng-template>\n"
            },] },
];
/** @nocollapse */
SkyListViewGridDemoComponent.ctorParameters = function () { return []; };
//# sourceMappingURL=list-view-grid-demo.component.js.map