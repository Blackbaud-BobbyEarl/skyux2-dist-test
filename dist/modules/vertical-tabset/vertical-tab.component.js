import { Component, Input, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { SkyVerticalTabsetService } from './vertical-tabset.service';
var SkyVerticalTabComponent = (function () {
    function SkyVerticalTabComponent(tabsetService, changeRef) {
        this.tabsetService = tabsetService;
        this.changeRef = changeRef;
        this.active = false;
        this.disabled = false;
        this._showTabRightArrow = false;
        this._mobileSubscription = new Subject();
    }
    Object.defineProperty(SkyVerticalTabComponent.prototype, "showTabRightArrow", {
        get: function () {
            return this._showTabRightArrow && this.tabsetService.isMobile();
        },
        set: function (value) {
            this._showTabRightArrow = value;
        },
        enumerable: true,
        configurable: true
    });
    SkyVerticalTabComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tabsetService.switchingMobile
            .subscribe(function (mobile) { return _this.changeRef.detectChanges(); });
        this.tabsetService.addTab(this);
    };
    SkyVerticalTabComponent.prototype.ngOnDestroy = function () {
        this._mobileSubscription.unsubscribe();
    };
    SkyVerticalTabComponent.prototype.tabIndex = function () {
        if (!this.disabled) {
            return 0;
        }
        else {
            return -1;
        }
    };
    SkyVerticalTabComponent.prototype.activateTab = function () {
        if (!this.disabled) {
            this.active = true;
            this.tabsetService.activateTab(this);
            this.changeRef.markForCheck();
        }
    };
    SkyVerticalTabComponent.prototype.tabDeactivated = function () {
        this.changeRef.detectChanges();
    };
    return SkyVerticalTabComponent;
}());
export { SkyVerticalTabComponent };
SkyVerticalTabComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-vertical-tab',
                template: "<a \n  class=\"sky-vertical-tab\"\n  [ngClass]=\"{\n    'sky-vertical-tab-active': active, \n    'sky-vertical-tab-disabled': disabled\n  }\"\n  (click)=\"activateTab()\"\n  (keyup.enter)=\"activateTab()\"\n  [tabIndex]=\"tabIndex()\"\n  [attr.aria-selected]=\"active\"\n>\n  <div class=\"sky-vertical-tab-display\">\n    <div class=\"sky-vertical-tab-heading\">\n      <span class=\"sky-vertical-tab-heading-value\">{{ tabHeading }}</span>\n      <span \n        class=\"sky-vertical-tab-count\"\n        *ngIf=\"tabHeaderCount || tabHeaderCount === 0\">\n        ({{ tabHeaderCount }})\n      </span>\n    </div>\n\n    <i \n      *ngIf=\"showTabRightArrow\"\n      class=\"fa fa-chevron-right sky-vertical-tab-right-arrow\"\n    >\n    </i>\n  </div>\n</a>\n\n<div #tabContentWrapper>\n  <div \n    class=\"sky-vertical-tab-content-pane\"\n    [ngClass]=\"{'sky-vertical-tab-hidden': !active}\"\n  >\n    <ng-content></ng-content>\n  <div>\n</div>\n",
                styles: [".sky-vertical-tab {\n  cursor: pointer;\n  padding: 7px 0 7px 10px;\n  margin: 5px 0 5px 10px;\n  color: #282b31;\n  display: flex;\n  text-decoration: none;\n}\n\n.sky-vertical-tab:hover {\n  background-color: #eeeeef;\n}\n\n.sky-vertical-tab:focus {\n  outline: thin dotted;\n  outline: -webkit-focus-ring-color auto 5px;\n}\n\n.sky-vertical-tab:hover .sky-vertical-tab-right-arrow {\n  color: #979ba2;\n}\n\n.sky-vertical-tab-active {\n  background-color: #eeeeef;\n  color: #282b31;\n  padding-left: 6px;\n  border-left: 4px solid #00b4f1;\n}\n\n.sky-vertical-tab-hidden {\n  display: none;\n}\n\n.sky-vertical-tab-display {\n  display: flex;\n  flex-grow: 1;\n}\n\n.sky-vertical-tab-heading {\n  flex-grow: 1;\n}\n\n.sky-vertical-tab-count {\n  margin-left: 5px;\n}\n\n.sky-vertical-tab-disabled {\n  cursor: not-allowed;\n  font-style: italic;\n  opacity: 0.8;\n  pointer-events: none;\n}\n\n.sky-vertical-tab-disabled:hover {\n  color: #686c73;\n}\n\n.sky-vertical-tab-right-arrow {\n  padding: 3px 10px 0 0;\n  color: #cdcfd2;\n}\n"],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
SkyVerticalTabComponent.ctorParameters = function () { return [
    { type: SkyVerticalTabsetService, },
    { type: ChangeDetectorRef, },
]; };
SkyVerticalTabComponent.propDecorators = {
    'active': [{ type: Input },],
    'tabHeading': [{ type: Input },],
    'tabHeaderCount': [{ type: Input },],
    'disabled': [{ type: Input },],
    'showTabRightArrow': [{ type: Input },],
    'tabContent': [{ type: ViewChild, args: ['tabContentWrapper',] },],
};
//# sourceMappingURL=vertical-tab.component.js.map