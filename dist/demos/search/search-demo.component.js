import { Component } from '@angular/core';
var SkySearchDemoComponent = (function () {
    function SkySearchDemoComponent() {
        this.items = [
            {
                title: 'Call Robert Hernandez',
                note: 'Robert recently gave a very generous gift. We should call to thank him.'
            },
            {
                title: 'Send invitation to ball',
                note: 'The Spring Ball is coming up soon. Let\'s get those invitations out!'
            },
            {
                title: 'Clean up desk',
                note: 'File and organize papers.'
            },
            {
                title: 'Investigate leads',
                note: 'Check out leads for important charity event funding.'
            },
            {
                title: 'Send thank you note',
                note: 'Send a thank you note to Timothy for his donation.'
            }
        ];
        this.displayedItems = this.items;
    }
    SkySearchDemoComponent.prototype.searchApplied = function (searchText) {
        var filteredItems = this.items;
        this.searchText = searchText;
        if (searchText) {
            filteredItems = this.items.filter(function (item) {
                var property;
                for (property in item) {
                    if (item.hasOwnProperty(property) && (property === 'title' || property === 'note')) {
                        if (item[property].indexOf(searchText) > -1) {
                            return true;
                        }
                    }
                }
                return false;
            });
        }
        this.displayedItems = filteredItems;
    };
    return SkySearchDemoComponent;
}());
export { SkySearchDemoComponent };
SkySearchDemoComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-search-demo',
                template: "<sky-toolbar>\n  <sky-toolbar-item>\n    <button\n      class=\"sky-btn sky-btn-default sky-demo-search-bar-item\"\n      (click)=\"searchApplied('Robert')\">\n      Predefined search text\n    </button>\n  </sky-toolbar-item>\n  <sky-toolbar-item>\n    <sky-search\n      [searchText]=\"searchText\"\n      (searchApply)=\"searchApplied($event)\">\n    </sky-search>\n  </sky-toolbar-item>\n</sky-toolbar>\n<div>\n  <sky-repeater expandMode=\"none\">\n    <sky-repeater-item *ngFor=\"let item of displayedItems\">\n      <sky-repeater-item-title>\n        {{item.title}}\n      </sky-repeater-item-title>\n      <sky-repeater-item-content>\n        <div>\n          {{item.note}}\n        </div>\n      </sky-repeater-item-content>\n    </sky-repeater-item>\n  </sky-repeater>\n</div>\n"
            },] },
];
/** @nocollapse */
SkySearchDemoComponent.ctorParameters = function () { return []; };
//# sourceMappingURL=search-demo.component.js.map