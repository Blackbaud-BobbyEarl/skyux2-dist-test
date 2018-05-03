import { Component } from '@angular/core';
var SkyEmailValidationDemoComponent = (function () {
    function SkyEmailValidationDemoComponent() {
    }
    return SkyEmailValidationDemoComponent;
}());
export { SkyEmailValidationDemoComponent };
SkyEmailValidationDemoComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-email-validation-demo',
                template: "<div style=\"max-width: 50%\">\n  <input\n    [(ngModel)]=\"emailValidator\"\n    class=\"sky-form-control\"\n    skyEmailValidation\n    #email=\"ngModel\">\n  <div\n    class=\"sky-error-label\"\n    *ngIf=\"email.errors && email.errors.skyEmail && (email.dirty && email.touched)\">\n    <span [hidden]=\"!email.errors.skyEmail.invalid\">\n      Please enter valid email with format joe@abc.com\n    </span>\n  </div>\n</div>\n"
            },] },
];
/** @nocollapse */
SkyEmailValidationDemoComponent.ctorParameters = function () { return []; };
//# sourceMappingURL=email-validation-demo.component.js.map