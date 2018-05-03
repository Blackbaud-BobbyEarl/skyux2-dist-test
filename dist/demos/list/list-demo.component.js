import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
var SkyListDemoComponent = (function () {
    function SkyListDemoComponent() {
        this.items = new BehaviorSubject([
            { id: '1', column1: 101, column2: 'Apple', column3: 'Anne eats apples' },
            { id: '2', column1: 202, column2: 'Banana', column3: 'Ben eats bananas' },
            { id: '3', column1: 303, column2: 'Pear', column3: 'Patty eats pears' },
            { id: '4', column1: 404, column2: 'Grape', column3: 'George eats grapes' },
            { id: '5', column1: 505, column2: 'Banana', column3: 'Becky eats bananas' },
            { id: '6', column1: 606, column2: 'Lemon', column3: 'Larry eats lemons' },
            { id: '7', column1: 707, column2: 'Strawberry', column3: 'Sally eats strawberries' }
        ]);
    }
    SkyListDemoComponent.prototype.changeData = function () {
        this.items.next([
            { id: '1', column1: 101, column2: 'blah', column3: 'Anne eats apples' },
            { id: '2', column1: 202, column2: 'me', column3: 'Ben eats bananas' },
            { id: '3', column1: 303, column2: 'q', column3: 'Patty eats pears' },
            { id: '4', column1: 404, column2: 'j', column3: 'George eats grapes' },
            { id: '5', column1: 505, column2: 'l', column3: 'Becky eats bananas' },
            { id: '6', column1: 606, column2: 'i', column3: 'Larry eats lemons' },
            { id: '7', column1: 707, column2: 't', column3: 'Sally eats strawberries' }
        ]);
    };
    return SkyListDemoComponent;
}());
export { SkyListDemoComponent };
SkyListDemoComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-list-demo',
                template: "<button\n  style=\"margin-bottom: 5px;\"\n  class=\"sky-btn sky-btn-default\"\n  (click)=\"changeData()\">\n  Change data\n</button>\n\n<sky-list [data]=\"items\">\n  <sky-list-toolbar></sky-list-toolbar>\n\n  <sky-list-view-grid fit=\"scroll\">\n    <sky-grid-column field=\"column1\" heading=\"Column1\"></sky-grid-column>\n    <sky-grid-column field=\"column2\" heading=\"Column2\"></sky-grid-column>\n    <sky-grid-column field=\"column3\" heading=\"Column3\"></sky-grid-column>\n  </sky-list-view-grid>\n\n  <sky-list-paging pageSize=\"5\"></sky-list-paging>\n</sky-list>\n\n"
            },] },
];
/** @nocollapse */
SkyListDemoComponent.ctorParameters = function () { return []; };
//# sourceMappingURL=list-demo.component.js.map