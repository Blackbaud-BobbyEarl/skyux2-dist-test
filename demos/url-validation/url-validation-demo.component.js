import { Component } from '@angular/core';
var SkyUrlValidationDemoComponent = (function () {
    function SkyUrlValidationDemoComponent() {
    }
    return SkyUrlValidationDemoComponent;
}());
export { SkyUrlValidationDemoComponent };
SkyUrlValidationDemoComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-url-validation-demo',
                template: "<input\n  skyUrlValidation\n  class=\"sky-form-control\"\n  [(ngModel)]=\"url\"\n  #input=\"ngModel\">\n\n<div\n  class=\"sky-error-label\"\n  *ngIf=\"input.errors && input.errors.skyUrl && (input.dirty && input.touched)\">\n  <span\n    [hidden]=\"!input.errors.skyUrl.invalid\">\n    Please enter valid url with format http(s)://site.domain\n  </span>\n</div>\n"
            },] },
];
/** @nocollapse */
SkyUrlValidationDemoComponent.ctorParameters = function () { return []; };
//# sourceMappingURL=url-validation-demo.component.js.map