import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import { SKY_LINK_RECORDS_STATUSES, SkyLinkRecordsComponent, SkyLinkRecordsMatchModel } from '../../core';
var getWindow = function () {
    return window;
};
var SkyLinkRecordsDemoComponent = (function () {
    function SkyLinkRecordsDemoComponent() {
        this.matchFields = [{ key: 'description' }, { key: 'name' }];
        this.newItem = { id: '99', address: 999, name: 'Lime', description: 'Laura eats limes.' };
        this.items = Observable.of([
            { id: '1', address: 101, name: 'Apple', description: 'Anne eats apples' },
            { id: '2', address: 202, name: 'Banana', description: 'Ben eats bananas' },
            { id: '3', address: 303, name: 'Pear', description: 'Patty eats pears' },
            { id: '4', address: 404, name: 'Grape', description: 'George eats grapes' },
            { id: '5', address: 505, name: 'Banana', description: 'Becky eats bananas' },
            { id: '6', address: 606, name: 'Lemon', description: 'Larry eats lemons' },
            { id: '7', address: 707, name: 'Kiwi', description: 'Kim eats kiwis.' },
            { id: '8', address: 808, name: 'Strawberry', description: 'Sally eats strawberries' }
        ]);
        this.matches = Observable.of([
            new SkyLinkRecordsMatchModel({
                key: '1',
                status: SKY_LINK_RECORDS_STATUSES.Edit,
                item: { id: '11', address: 111, name: 'Big Apple', description: 'George and his apples' }
            }),
            new SkyLinkRecordsMatchModel({
                key: '2',
                status: undefined,
                item: undefined
            }),
            new SkyLinkRecordsMatchModel({
                key: '3',
                status: SKY_LINK_RECORDS_STATUSES.NoMatch,
                item: undefined
            }),
            new SkyLinkRecordsMatchModel({
                key: '5',
                status: SKY_LINK_RECORDS_STATUSES.Suggested,
                item: { id: '55', address: 555, name: 'Huge Banana', description: 'Barry loves bananas.' }
            }),
            new SkyLinkRecordsMatchModel({
                key: '6',
                status: SKY_LINK_RECORDS_STATUSES.Selected,
                item: { id: '66', address: 666, name: 'Lovely Lemons', description: 'Lisa loves lemons.' }
            }),
            new SkyLinkRecordsMatchModel({
                key: '7',
                status: SKY_LINK_RECORDS_STATUSES.Created,
                item: undefined
            }),
            new SkyLinkRecordsMatchModel({
                key: '8',
                status: SKY_LINK_RECORDS_STATUSES.Linked,
                item: {
                    id: '88',
                    address: 888,
                    name: 'Strawberry Shortcake',
                    description: 'Steve loves strawberries'
                }
            })
        ]);
        this.window = getWindow();
    }
    SkyLinkRecordsDemoComponent.prototype.showResults = function () {
        var _this = this;
        this.item.results.take(1).subscribe(function (r) { return _this.window.alert(JSON.stringify(r)); });
    };
    return SkyLinkRecordsDemoComponent;
}());
export { SkyLinkRecordsDemoComponent };
SkyLinkRecordsDemoComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-link-records-demo',
                template: "<h3>\n  Link records child templates\n</h3>\n\n<sky-link-records\n  [items]=\"items\"\n  [matches]=\"matches\"\n  [matchFields]=\"matchFields\"\n  [showNewFieldValues]=\"false\">\n\n  <sky-link-records-item-title>\n    <ng-template\n      let-item=\"item\">\n      Applicant\n    </ng-template>\n  </sky-link-records-item-title>\n\n  <sky-link-records-item-content>\n    <ng-template\n      let-item=\"item\">\n      <div>Original Item</div>\n      <div>{{ item?.id }}</div>\n      <div>{{ item?.name }}</div>\n      <div>{{ item?.description }}</div>\n    </ng-template>\n  </sky-link-records-item-content>\n\n  <sky-link-records-match-content>\n    <ng-template let-match=\"match\">\n      <div>Match Item</div>\n      <div>{{ match?.item?.id }}</div>\n      <div>{{ match?.item?.name }}</div>\n      <div>{{ match?.item?.description }}</div>\n    </ng-template>\n  </sky-link-records-match-content>\n\n  <sky-link-records-nomatch-content>\n    <ng-template\n      let-item=\"item\"\n      let-match=\"match\"\n      let-api=\"api\">\n      <div *ngIf=\"match?.item\">\n        <div>Match Item</div>\n        <div>{{ match?.item?.id }}</div>\n        <div>{{ match?.item?.name }}</div>\n        <div>{{ match?.item?.description }}</div>\n      </div>\n      <div *ngIf=\"!match?.item\">\n        <div>Match Search</div>\n        <button\n          class=\"sky-btn sky-btn-default\"\n          (click)=\"api.addSelectedItem(item?.id, newItem)\">\n          Test Select\n        </button>\n      </div>\n    </ng-template>\n  </sky-link-records-nomatch-content>\n</sky-link-records>\n\n<button\n  class=\"sky-btn sky-btn-default\"\n  (click)=\"showResults()\">\n  Show Results\n</button>\n\n<h3>\n  Default link with templates\n</h3>\n\n<sky-link-records\n  [items]=\"items\"\n  [matches]=\"matches\"\n  [itemTemplate]=\"item\"\n  [matchTemplate]=\"match\"\n  [matchFields]=\"matchFields\">\n</sky-link-records>\n\n<ng-template #itemTitle let-item=\"item\">Custom Title</ng-template>\n\n<ng-template #item let-item=\"item\">\n  <div>{{ item?.name }}</div>\n  <div>{{ item?.description }}</div>\n</ng-template>\n\n<ng-template #match let-match=\"match\">\n  <div>Custom Label:</div>\n  <div>{{ match?.item?.name }}</div>\n  <div>{{ match?.item?.description }}</div>\n</ng-template>\n\n<button\n  class=\"sky-btn sky-btn-default\"\n  (click)=\"showResults()\">\n  Show Results\n</button>\n"
            },] },
];
/** @nocollapse */
SkyLinkRecordsDemoComponent.ctorParameters = function () { return []; };
SkyLinkRecordsDemoComponent.propDecorators = {
    'item': [{ type: ViewChild, args: [SkyLinkRecordsComponent,] },],
};
//# sourceMappingURL=link-records-demo.component.js.map