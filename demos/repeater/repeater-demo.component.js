import { Component } from '@angular/core';
var SkyRepeaterDemoComponent = (function () {
    function SkyRepeaterDemoComponent() {
        this.expandMode = 'single';
        this.selectable = false;
        this.items = [
            {
                title: 'Call Robert Hernandez',
                note: 'Robert recently gave a very generous gift.  We should call him to thank him.',
                status: 'Completed',
                statusType: 'success'
            },
            {
                title: 'Send invitation to Spring Ball',
                note: 'The Spring Ball is coming up soon.  Let\'s get those invitations out!',
                status: 'Past due',
                statusType: 'warning'
            }
        ];
    }
    SkyRepeaterDemoComponent.prototype.addItem = function () {
        var next = this.items.length + 1;
        this.items.push({
            title: 'New reminder ' + next,
            note: 'This is a new reminder',
            expanded: true,
            status: 'Active',
            statusType: 'info'
        });
    };
    SkyRepeaterDemoComponent.prototype.removeItem = function () {
        this.items.pop();
    };
    return SkyRepeaterDemoComponent;
}());
export { SkyRepeaterDemoComponent };
SkyRepeaterDemoComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-repeater-demo',
                template: "<sky-repeater\n  [expandMode]=\"expandMode\">\n\n  <sky-repeater-item\n    *ngFor=\"let item of items\"\n    [isExpanded]=\"item.expanded\"\n    [selectable]=\"selectable\">\n\n    <sky-repeater-item-title\n      ng-if=\"repeaterCtrl.showTitle\">\n      <div class=\"pull-left\">\n        {{item.title}}\n      </div>\n      <div class=\"pull-right\">\n        <span\n          class=\"label\"\n          ng-class=\"repeaterCtrl.getStatusCls(item)\">\n          {{item.status}}\n        </span>\n      </div>\n    </sky-repeater-item-title>\n    <sky-repeater-item-content>\n      <div>\n        {{item.note}}\n      </div>\n    </sky-repeater-item-content>\n  </sky-repeater-item>\n</sky-repeater>\n\n<p>\n  <label>\n    Expand mode:\n    <select [(ngModel)]=\"expandMode\">\n      <option value=\"none\">\n        None\n      </option>\n      <option value=\"single\">\n        Single\n      </option>\n      <option value=\"multiple\">\n        Multiple\n      </option>\n    </select>\n  </label>\n  <button class=\"sky-btn\" (click)=\"addItem()\">Add item</button>\n  <button class=\"sky-btn\" (click)=\"removeItem()\">Remove last item</button>\n  <sky-checkbox [(ngModel)]=\"selectable\">\n    <sky-checkbox-label>\n      Show checkbox\n    </sky-checkbox-label>\n  </sky-checkbox>\n</p>\n"
            },] },
];
/** @nocollapse */
SkyRepeaterDemoComponent.ctorParameters = function () { return []; };
//# sourceMappingURL=repeater-demo.component.js.map