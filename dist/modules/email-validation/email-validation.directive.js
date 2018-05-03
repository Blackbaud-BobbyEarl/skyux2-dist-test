import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
// tslint:disable:no-forward-ref no-use-before-declare
var SKY_EMAIL_VALIDATION_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(function () { return SkyEmailValidationDirective; }),
    multi: true
};
// tslint:enable
var SkyEmailValidationDirective = (function () {
    function SkyEmailValidationDirective() {
    }
    SkyEmailValidationDirective.prototype.validate = function (control) {
        var value = control.value;
        if (!value) {
            return;
        }
        if (!this.emailIsValid(value)) {
            return {
                'skyEmail': {
                    invalid: control.value
                }
            };
        }
    };
    SkyEmailValidationDirective.prototype.emailIsValid = function (email) {
        var regex = /[\w\-]+@([\w\-]+\.)+[\w\-]+/;
        return regex.test(email);
    };
    return SkyEmailValidationDirective;
}());
export { SkyEmailValidationDirective };
SkyEmailValidationDirective.decorators = [
    { type: Directive, args: [{
                selector: '[skyEmailValidation]',
                providers: [SKY_EMAIL_VALIDATION_VALIDATOR]
            },] },
];
/** @nocollapse */
SkyEmailValidationDirective.ctorParameters = function () { return []; };
//# sourceMappingURL=email-validation.directive.js.map