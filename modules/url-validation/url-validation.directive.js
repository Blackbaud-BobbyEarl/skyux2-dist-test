import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
// tslint:disable:no-forward-ref no-use-before-declare
var SKY_URL_VALIDATION_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(function () { return SkyUrlValidationDirective; }),
    multi: true
};
// tslint:enable
var SkyUrlValidationDirective = (function () {
    function SkyUrlValidationDirective() {
    }
    SkyUrlValidationDirective.prototype.validate = function (control) {
        var value = control.value;
        if (!value) {
            return;
        }
        if (!this.urlIsValid(value)) {
            return {
                'skyUrl': {
                    invalid: control.value
                }
            };
        }
    };
    SkyUrlValidationDirective.prototype.urlIsValid = function (url) {
        var regex = /^((http|https):\/\/)?([\w\-]+\.)+[\w\-]+/i;
        return regex.test(url);
    };
    return SkyUrlValidationDirective;
}());
export { SkyUrlValidationDirective };
SkyUrlValidationDirective.decorators = [
    { type: Directive, args: [{
                selector: '[skyUrlValidation]',
                providers: [SKY_URL_VALIDATION_VALIDATOR]
            },] },
];
/** @nocollapse */
SkyUrlValidationDirective.ctorParameters = function () { return []; };
//# sourceMappingURL=url-validation.directive.js.map