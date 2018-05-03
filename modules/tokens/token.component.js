import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
var SkyTokenComponent = (function () {
    function SkyTokenComponent(elementRef) {
        this.elementRef = elementRef;
        this.dismiss = new EventEmitter();
        this.tokenFocus = new EventEmitter();
    }
    Object.defineProperty(SkyTokenComponent.prototype, "disabled", {
        get: function () {
            return (this._disabled === true);
        },
        set: function (value) {
            this._disabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyTokenComponent.prototype, "dismissible", {
        get: function () {
            return (this._dismissible !== false);
        },
        set: function (value) {
            this._dismissible = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyTokenComponent.prototype, "focusable", {
        get: function () {
            return (this._focusable !== false);
        },
        set: function (value) {
            this._focusable = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyTokenComponent.prototype, "tabIndex", {
        get: function () {
            return (this.focusable) ? 0 : -1;
        },
        enumerable: true,
        configurable: true
    });
    SkyTokenComponent.prototype.dismissToken = function () {
        this.dismiss.emit();
    };
    SkyTokenComponent.prototype.focusElement = function () {
        this.elementRef.nativeElement.querySelector('.sky-token').focus();
    };
    return SkyTokenComponent;
}());
export { SkyTokenComponent };
SkyTokenComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-token',
                template: "<div\n  class=\"sky-token sky-btn sky-btn-default\"\n  role=\"button\"\n  [attr.tabindex]=\"tabIndex\"\n  [ngClass]=\"{ 'sky-btn-disabled': disabled }\"\n  [attr.aria-disabled]=\"disabled\"\n  (focus)=\"tokenFocus.emit()\">\n\n  <ng-content>\n  </ng-content>\n\n  <button\n    *ngIf=\"dismissible\"\n    type=\"button\"\n    class=\"sky-btn sky-token-btn-close\"\n    [attr.tabindex]=\"tabIndex\"\n    [attr.title]=\"'token_dismiss_button_title' | skyResources\"\n    [disabled]=\"disabled\"\n    (click)=\"dismissToken();$event.stopPropagation();\">\n    <i\n      class=\"fa fa-times\"\n      aria-hidden=\"true\"></i>\n  </button>\n</div>\n",
                styles: [".sky-token {\n  background-color: #c1e8fb;\n  border: 1px solid #00b4f1;\n  padding: 2px 8px;\n  display: inline-block;\n  user-select: none;\n}\n\n.sky-token:hover, .sky-token:focus {\n  background-color: #91d6f8;\n  border-color: #008ebe;\n  cursor: pointer;\n}\n\n.sky-token:focus {\n  box-shadow: 0 0 8px rgba(0, 180, 241, 0.6);\n  border: 1px solid #00b4f1;\n  outline: none;\n}\n\n.sky-btn-disabled {\n  cursor: default;\n  user-select: none;\n}\n\n.sky-token-btn-close {\n  background: transparent;\n  padding: 0;\n  border: 0;\n  margin-left: 2px;\n  opacity: .9;\n}\n\n.sky-token-btn-close:hover, .sky-token-btn-close:focus {\n  opacity: 1;\n}\n"],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
SkyTokenComponent.ctorParameters = function () { return [
    { type: ElementRef, },
]; };
SkyTokenComponent.propDecorators = {
    'disabled': [{ type: Input },],
    'dismissible': [{ type: Input },],
    'focusable': [{ type: Input },],
    'dismiss': [{ type: Output },],
    'tokenFocus': [{ type: Output },],
};
//# sourceMappingURL=token.component.js.map