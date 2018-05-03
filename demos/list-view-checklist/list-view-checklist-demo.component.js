import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/take';
var SkyListViewChecklistDemoComponent = (function () {
    function SkyListViewChecklistDemoComponent() {
        this.items = Observable.of([
            { id: '1', column1: 101, column2: 'Apple', column3: 'Anne eats apples' },
            { id: '2', column1: 202, column2: 'Banana', column3: 'Ben eats bananas' },
            { id: '3', column1: 303, column2: 'Pear', column3: 'Patty eats pears' },
            { id: '4', column1: 404, column2: 'Grape', column3: 'George eats grapes' },
            { id: '5', column1: 505, column2: 'Banana', column3: 'Becky eats bananas' },
            { id: '6', column1: 606, column2: 'Lemon', column3: 'Larry eats lemons' },
            { id: '7', column1: 707, column2: 'Strawberry', column3: 'Sally eats strawberries' }
        ]);
        this.selectedItems = [];
        this.selectMode = 'multiple';
    }
    SkyListViewChecklistDemoComponent.prototype.selectedItemsChange = function (selectedMap) {
        var _this = this;
        this.items.take(1).subscribe(function (items) {
            _this.selectedItems = items.filter(function (item) {
                return selectedMap.get(item.id);
            });
        });
    };
    return SkyListViewChecklistDemoComponent;
}());
export { SkyListViewChecklistDemoComponent };
SkyListViewChecklistDemoComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-list-view-checklist-demo',
                template: "<div style=\"margin-bottom: 10px;\">\n  <h3>\n    Selection mode\n  </h3>\n  <div>\n    <sky-radio\n      name=\"selectMode\"\n      [(ngModel)]=\"selectMode\"\n      value=\"multiple\">\n      <sky-radio-label>\n        Default select mode\n      </sky-radio-label>\n    </sky-radio>\n  </div>\n  <div>\n    <sky-radio\n      name=\"selectMode\"\n      [(ngModel)]=\"selectMode\"\n      value=\"single\">\n      <sky-radio-label>\n        Single select mode\n      </sky-radio-label>\n    </sky-radio>\n  </div>\n</div>\n\n<sky-list\n  [data]=\"items\"\n  (selectedIdsChange)=\"selectedItemsChange($event)\">\n  <sky-list-toolbar>\n  </sky-list-toolbar>\n  <sky-list-view-checklist\n    label=\"column2\"\n    description=\"column3\"\n    [selectMode]=\"selectMode\">\n  </sky-list-view-checklist>\n</sky-list>\n<div>\n  <label>Selected items:</label>\n  <ul>\n    <li *ngFor=\"let item of selectedItems\">\n      {{item.column2}}\n    </li>\n  </ul>\n</div>\n"
            },] },
];
/** @nocollapse */
SkyListViewChecklistDemoComponent.ctorParameters = function () { return []; };
//# sourceMappingURL=list-view-checklist-demo.component.js.map