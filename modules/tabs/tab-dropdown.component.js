import { Component, EventEmitter, Input, Output } from '@angular/core';
var SkyTabDropdownComponent = (function () {
    function SkyTabDropdownComponent() {
        this.tabClick = new EventEmitter();
        this.closeClick = new EventEmitter();
    }
    Object.defineProperty(SkyTabDropdownComponent.prototype, "activeTabHeading", {
        get: function () {
            var activeTab = this.tabs.filter(function (item) {
                return item.active;
            });
            /*istanbul ignore else */
            if (activeTab.length > 0) {
                return activeTab[0].tabHeading;
            }
            /* istanbul ignore next */
            /* sanity check */
            return '';
        },
        enumerable: true,
        configurable: true
    });
    SkyTabDropdownComponent.prototype.selectTab = function (tab) {
        if (!tab.disabled) {
            this.tabClick.emit(tab);
        }
    };
    SkyTabDropdownComponent.prototype.closeTab = function (tab) {
        this.closeClick.emit(tab);
    };
    return SkyTabDropdownComponent;
}());
export { SkyTabDropdownComponent };
SkyTabDropdownComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-tab-dropdown',
                template: "<div class=\"sky-tab-dropdown\">\n  <sky-dropdown buttonType=\"tab\">\n    <sky-dropdown-button>\n      {{ activeTabHeading }}\n    </sky-dropdown-button>\n    <sky-dropdown-menu>\n      <sky-dropdown-item\n        *ngFor=\"let tab of tabs\">\n        <div\n          class=\"sky-tab-dropdown-item\"\n          [ngClass]=\"{ 'sky-tab-dropdown-item-selected': tab.active }\">\n          <button\n            type=\"button\"\n            class=\"sky-btn sky-tab-dropdown-item-btn\"\n            [ngClass]=\"{ 'sky-btn-disabled': tab.disabled }\"\n            (click)=\"selectTab(tab)\">\n            {{ tab.tabHeading }}\n          </button>\n          <button\n            type=\"button\"\n            class=\"sky-btn sky-tab-dropdown-item-close\"\n            *ngIf=\"tab.allowClose\"\n            (click)=\"closeTab(tab)\">\n            <i class=\"fa fa-remove\"></i>\n          </button>\n        </div>\n      </sky-dropdown-item>\n    </sky-dropdown-menu>\n  </sky-dropdown>\n</div>\n",
                styles: [".sky-tab-dropdown ::ng-deep .sky-dropdown-item {\n  margin: 0;\n}\n\n.sky-tab-dropdown-button {\n  max-width: 300px;\n}\n\n.sky-tab-dropdown-item {\n  display: flex;\n  padding: 0;\n  transition: background-color 150ms;\n  min-width: 300px;\n}\n\n.sky-tab-dropdown-item:hover:not(.sky-tab-dropdown-item-selected) {\n  background-color: #eeeeef;\n}\n\n.sky-tab-dropdown-item-btn {\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  flex-grow: 1;\n  padding: 10px;\n  text-align: left;\n}\n\n.sky-tab-dropdown-item-close {\n  background-color: transparent;\n  border: none;\n  padding: 10px;\n}\n\n.sky-tab-dropdown-item-selected {\n  background-color: #007ca6;\n}\n\n.sky-tab-dropdown-item-selected:hover {\n  background-color: #007ca6;\n}\n\n.sky-tab-dropdown-item-selected .sky-tab-dropdown-item-btn,\n.sky-tab-dropdown-item-selected .sky-tab-dropdown-item-close {\n  color: #fff;\n}\n"]
            },] },
];
/** @nocollapse */
SkyTabDropdownComponent.ctorParameters = function () { return []; };
SkyTabDropdownComponent.propDecorators = {
    'tabs': [{ type: Input },],
    'tabClick': [{ type: Output },],
    'closeClick': [{ type: Output },],
};
//# sourceMappingURL=tab-dropdown.component.js.map