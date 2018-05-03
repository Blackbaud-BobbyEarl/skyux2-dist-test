import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
var SkyListToolbarCustomDemoComponent = (function () {
    function SkyListToolbarCustomDemoComponent() {
        this.items = Observable.of([
            { id: '1', column1: 101, column2: 'Apple', column3: 'Anne eats apples' },
            { id: '2', column1: 202, column2: 'Banana', column3: 'Ben eats bananas' },
            { id: '3', column1: 303, column2: 'Pear', column3: 'Patty eats pears' },
            { id: '4', column1: 404, column2: 'Grape', column3: 'George eats grapes' },
            { id: '5', column1: 505, column2: 'Banana', column3: 'Becky eats bananas' },
            { id: '6', column1: 606, column2: 'Lemon', column3: 'Larry eats lemons' },
            { id: '7', column1: 707, column2: 'Strawberry', column3: 'Sally eats strawberries' }
        ]);
    }
    return SkyListToolbarCustomDemoComponent;
}());
export { SkyListToolbarCustomDemoComponent };
SkyListToolbarCustomDemoComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-list-toolbar-custom-demo',
                template: "<sky-list [data]=\"items\" [defaultView]=\"grid\">\n  <sky-list-toolbar>\n    <sky-list-toolbar-item id=\"custom-item\" location=\"left\">\n      <ng-template><button class=\"sky-btn sky-btn-default\">Left</button></ng-template>\n    </sky-list-toolbar-item>\n    <sky-list-toolbar-item id=\"custom-item2\" location=\"center\" index=\"1\">\n      <ng-template><button class=\"sky-btn sky-btn-default\">Center</button></ng-template>\n    </sky-list-toolbar-item>\n    <sky-list-toolbar-item\n      id=\"custom-item3\"\n      location=\"right\"\n      index=\"1\">\n      <ng-template>\n        <button class=\"sky-btn sky-btn-default\">Right</button>\n      </ng-template>\n    </sky-list-toolbar-item>\n  </sky-list-toolbar>\n\n  <sky-list-view-grid fit=\"scroll\" #grid>\n    <sky-grid-column field=\"column1\" heading=\"Column1\"></sky-grid-column>\n    <sky-grid-column field=\"column2\" heading=\"Column2\"></sky-grid-column>\n  </sky-list-view-grid>\n</sky-list>\n"
            },] },
];
/** @nocollapse */
SkyListToolbarCustomDemoComponent.ctorParameters = function () { return []; };
//# sourceMappingURL=list-toolbar-custom-demo.component.js.map