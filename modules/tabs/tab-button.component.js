import { Component, EventEmitter, Input, Output } from '@angular/core';
var SkyTabButtonComponent = (function () {
    function SkyTabButtonComponent() {
        this.tabClick = new EventEmitter();
        this.closeClick = new EventEmitter();
    }
    SkyTabButtonComponent.prototype.doTabClick = function () {
        if (!this.disabled) {
            this.tabClick.emit(undefined);
        }
    };
    SkyTabButtonComponent.prototype.doCloseClick = function () {
        this.closeClick.emit(undefined);
    };
    SkyTabButtonComponent.prototype.keyDownFunction = function (event) {
        if (event.keyCode === 13) {
            this.doTabClick();
        }
    };
    return SkyTabButtonComponent;
}());
export { SkyTabButtonComponent };
SkyTabButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-tab-button',
                template: "<a\n    class=\"sky-btn-tab\"\n    [ngClass]=\"{\n      'sky-btn-tab-wizard': tabStyle === 'wizard',\n      'sky-btn-tab-selected': active,\n      'sky-btn-tab-disabled': disabled,\n      'sky-tab-btn-closeable': allowClose\n    }\"\n    tabindex=\"0\"\n    (keydown)=\"keyDownFunction($event)\"\n    (click)=\"doTabClick()\"\n    role=\"tab\"\n    [attr.aria-selected]=\"active\"\n>\n  {{tabHeading}}\n  <span\n    class=\"sky-tab-header-count\"\n    *ngIf=\"tabHeaderCount || tabHeaderCount === 0\"\n  >\n    {{tabHeaderCount}}\n  </span>\n  <button\n      type=\"button\"\n      class=\"sky-btn-tab-close\"\n      [attr.aria-label]=\"'tab_close' | skyResources\"\n      *ngIf=\"allowClose\"\n      (click)=\"doCloseClick();$event.stopPropagation()\"\n  >\n    <i class=\"fa fa-remove\"></i>\n  </button>\n</a>\n",
                styles: [".sky-tab-button-close {\n  color: #686c73;\n  line-height: 1.4;\n  margin-left: 5px;\n}\n\n.sky-tab-button-close:hover {\n  color: #282b31;\n  transition: color 150ms;\n}\n\n.sky-btn-tab-selected .sky-tab-button-close {\n  color: #fff;\n}\n\n.sky-btn-tab.sky-tab-btn-closeable {\n  padding-right: 10px;\n}\n"]
            },] },
];
/** @nocollapse */
SkyTabButtonComponent.ctorParameters = function () { return []; };
SkyTabButtonComponent.propDecorators = {
    'tabHeading': [{ type: Input },],
    'tabHeaderCount': [{ type: Input },],
    'tabStyle': [{ type: Input },],
    'active': [{ type: Input },],
    'allowClose': [{ type: Input },],
    'disabled': [{ type: Input },],
    'tabClick': [{ type: Output },],
    'closeClick': [{ type: Output },],
};
//# sourceMappingURL=tab-button.component.js.map