import { Component, Input } from '@angular/core';
import { SkyResourcesService } from '../resources/resources.service';
var buttonTypeNext = 'next';
var buttonTypePrevious = 'previous';
var SkyTabsetNavButtonComponent = (function () {
    function SkyTabsetNavButtonComponent(resources) {
        this.resources = resources;
    }
    Object.defineProperty(SkyTabsetNavButtonComponent.prototype, "buttonText", {
        get: function () {
            if (this._buttonText) {
                return this._buttonText;
            }
            switch (this.buttonType) {
                case buttonTypePrevious:
                    return this.resources.getString('wizard_navigator_previous');
                case buttonTypeNext:
                    return this.resources.getString('wizard_navigator_next');
                /* istanbul ignore next */
                default:
                    return '';
            }
        },
        set: function (value) {
            this._buttonText = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyTabsetNavButtonComponent.prototype, "disabled", {
        get: function () {
            var tabToSelect;
            switch (this.buttonType) {
                case buttonTypePrevious:
                    tabToSelect = this.previousTab;
                    break;
                case buttonTypeNext:
                    tabToSelect = this.nextTab;
                    break;
                /* istanbul ignore next */
                default:
                    break;
            }
            return !tabToSelect || tabToSelect.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyTabsetNavButtonComponent.prototype, "selectedTab", {
        get: function () {
            var selectedTab;
            if (this.tabset && this.tabset.tabs) {
                selectedTab = this.tabset.tabs.filter(function (tab) { return tab.active; })[0];
            }
            return selectedTab;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyTabsetNavButtonComponent.prototype, "nextTab", {
        get: function () {
            var selectedTab = this.selectedTab;
            if (selectedTab) {
                var tabs = this.tabset.tabs.toArray();
                return tabs[tabs.indexOf(selectedTab) + 1];
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyTabsetNavButtonComponent.prototype, "previousTab", {
        get: function () {
            var selectedTab = this.selectedTab;
            if (selectedTab) {
                var tabs = this.tabset.tabs.toArray();
                return tabs[tabs.indexOf(selectedTab) - 1];
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    SkyTabsetNavButtonComponent.prototype.buttonClick = function () {
        var tabToSelect;
        switch (this.buttonType) {
            case buttonTypePrevious:
                tabToSelect = this.previousTab;
                break;
            case buttonTypeNext:
                tabToSelect = this.nextTab;
                break;
            /* istanbul ignore next */
            default:
                break;
        }
        /* istanbul ignore else */
        if (tabToSelect && !tabToSelect.disabled) {
            this.tabset.selectTab(tabToSelect);
        }
    };
    return SkyTabsetNavButtonComponent;
}());
export { SkyTabsetNavButtonComponent };
SkyTabsetNavButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-tabset-nav-button',
                template: "<button\n  type=\"button\"\n  class=\"sky-btn sky-btn-default\"\n  (click)=\"buttonClick()\"\n  [disabled]=\"disabled\"\n>\n  {{ buttonText }}\n</button>\n"
            },] },
];
/** @nocollapse */
SkyTabsetNavButtonComponent.ctorParameters = function () { return [
    { type: SkyResourcesService, },
]; };
SkyTabsetNavButtonComponent.propDecorators = {
    'tabset': [{ type: Input },],
    'buttonType': [{ type: Input },],
    'buttonText': [{ type: Input },],
};
//# sourceMappingURL=tabset-nav-button.component.js.map