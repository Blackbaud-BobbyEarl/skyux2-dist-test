import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
var SkyListToolbarDemoComponent = (function () {
    function SkyListToolbarDemoComponent() {
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
    return SkyListToolbarDemoComponent;
}());
export { SkyListToolbarDemoComponent };
SkyListToolbarDemoComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-list-toolbar-demo',
                template: "\n<sky-list [data]=\"items\" [defaultView]=\"grid\">\n  <sky-list-toolbar>\n    <sky-list-secondary-actions>\n      <sky-list-secondary-action>\n        <button type=\"button\">\n          Option\n        </button>\n      </sky-list-secondary-action>\n    </sky-list-secondary-actions>\n    <sky-list-toolbar-sort\n      label=\"Fruit name (A - Z)\"\n      field=\"column2\"\n      [descending]=\"false\"\n      type=\"string\"\n    >\n    </sky-list-toolbar-sort>\n    <sky-list-toolbar-sort\n      label=\"Fruit name (Z - A)\"\n      field=\"column2\"\n      [descending]=\"true\"\n      type=\"string\"\n    >\n    </sky-list-toolbar-sort>\n  </sky-list-toolbar>\n\n  <sky-list-view-grid fit=\"scroll\" #grid>\n    <sky-grid-column\n      field=\"column1\"\n      heading=\"Column1\"\n      [isSortable]=\"false\">\n    </sky-grid-column>\n    <sky-grid-column field=\"column2\" heading=\"Column2\">\n    </sky-grid-column>\n  </sky-list-view-grid>\n </sky-list>\n"
            },] },
];
/** @nocollapse */
SkyListToolbarDemoComponent.ctorParameters = function () { return []; };
//# sourceMappingURL=list-toolbar-demo.component.js.map