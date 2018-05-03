import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
var SkyFilterButtonComponent = (function () {
    function SkyFilterButtonComponent() {
        this.active = false;
        this.filterButtonClick = new EventEmitter();
    }
    SkyFilterButtonComponent.prototype.filterButtonOnClick = function () {
        this.filterButtonClick.emit(undefined);
    };
    return SkyFilterButtonComponent;
}());
export { SkyFilterButtonComponent };
SkyFilterButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-filter-button',
                styles: [".sky-filter-btn-active, .sky-filter-btn-active:hover, .sky-filter-btn-active:focus {\n  color: #71bf43;\n  border: 2px solid #71bf43;\n  padding: 5px 11px;\n  /* offset the thicker border to avoid button size change */\n}\n\n.sky-filter-btn-active:hover, .sky-filter-btn-active:focus {\n  color: #282b31;\n}\n"],
                template: "<button\n  [attr.title]=\"'filter_button_title' | skyResources\"\n  [ngClass]=\"{'sky-filter-btn-active sky-rounded-corners': active}\"\n  type=\"button\"\n  class=\"sky-btn sky-btn-default sky-filter-btn\"\n  (click)=\"filterButtonOnClick()\">\n  <i class=\"fa fa-lg fa-filter\"></i>\n</button>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
SkyFilterButtonComponent.ctorParameters = function () { return []; };
SkyFilterButtonComponent.propDecorators = {
    'active': [{ type: Input },],
    'filterButtonClick': [{ type: Output },],
};
//# sourceMappingURL=filter-button.component.js.map