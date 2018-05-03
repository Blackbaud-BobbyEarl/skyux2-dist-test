import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
/**
 * Auto-incrementing integer used to generate unique ids for checkbox components.
 */
var nextId = 0;
/**
 * Provider Expression that allows sky-checkbox to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)].
 */
// tslint:disable:no-forward-ref no-use-before-declare
export var SKY_RADIO_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return SkyRadioComponent; }),
    multi: true
};
// tslint:enable
var SkyRadioComponent = (function () {
    function SkyRadioComponent() {
        /**
         * Hidden label for screen readers.
         */
        this.label = '';
        this.id = "sky-radio-" + ++nextId;
        this.disabled = false;
        this.tabindex = 0;
    }
    Object.defineProperty(SkyRadioComponent.prototype, "inputId", {
        get: function () {
            return "input-" + this.id;
        },
        enumerable: true,
        configurable: true
    });
    SkyRadioComponent.prototype.onInputBlur = function () {
        this.onTouchedCallback();
    };
    SkyRadioComponent.prototype.onRadioChanged = function (newValue) {
        if (this.disabled) {
            return;
        }
        if (newValue === this.selectedValue) {
            return;
        }
        this.selectedValue = newValue;
        this.onChangeCallback(newValue);
    };
    // Satisfying ControlValueAccessor interface.
    SkyRadioComponent.prototype.writeValue = function (value) {
        if (value === undefined) {
            return;
        }
        this.selectedValue = value;
    };
    // onChanged callback set by ControlValueAccessor.
    SkyRadioComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    // onTouched callback set by ControlValueAccessor.
    SkyRadioComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    // Satisfying ControlValueAccessor interface.
    /* istanbul ignore next */
    SkyRadioComponent.prototype.onTouchedCallback = function () {
        return function () { };
    };
    return SkyRadioComponent;
}());
export { SkyRadioComponent };
SkyRadioComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-radio',
                template: "<label class=\"sky-radio-wrapper\">\n  <input type=\"radio\"\n        [id]=\"inputId\"\n        [ngModel]=\"selectedValue\"\n        [disabled]=\"disabled\"\n        [name]=\"name\"\n        [value]=\"value\"\n        [tabIndex]=\"tabindex\"\n        [attr.aria-label]=\"label\"\n        [attr.aria-labelledby]=\"labelledBy\"\n        (blur)=\"onInputBlur()\"\n        (ngModelChange)=\"onRadioChanged($event)\"/>\n  <span class=\"sky-radio\"></span>\n  <ng-content select=\"sky-radio-label\"></ng-content>\n</label>\n",
                styles: [".sky-radio-wrapper {\n  display: inline-block;\n  margin-bottom: 5px;\n  cursor: pointer;\n}\n\n.sky-radio-wrapper input {\n  opacity: 0;\n  position: absolute;\n  height: 22px;\n  width: 22px;\n  margin: 0;\n  padding: 0;\n  cursor: pointer;\n}\n\n.sky-radio {\n  border-top: 1px solid #cdcfd2;\n  border-bottom: 1px solid #cdcfd2;\n  border-left: 1px solid #cdcfd2;\n  border-right: 1px solid #cdcfd2;\n  cursor: pointer;\n  display: inline-block;\n  height: 22px;\n  margin: 0;\n  padding: 0;\n  vertical-align: middle;\n  width: 22px;\n  text-align: center;\n  font-size: 15px;\n  border-radius: 50%;\n  line-height: 19px;\n}\n\n.sky-radio-wrapper input:hover + .sky-radio {\n  border: 2px solid #007ca6;\n}\n\n.sky-radio-wrapper input:checked + .sky-radio {\n  background-color: #007ca6;\n  border-color: #007ca6;\n  border-width: 1px;\n}\n\n.sky-radio-wrapper input:checked + .sky-radio:before {\n  color: #ffffff;\n  content: \"\\f00c\";\n  font-family: FontAwesome;\n  font-size: 13px;\n}\n\n.sky-radio-wrapper input:disabled + .sky-radio {\n  background-color: #eeeeef;\n  border-top: 1px solid #e2e3e4;\n  border-bottom: 1px solid #e2e3e4;\n  border-left: 1px solid #e2e3e4;\n  border-right: 1px solid #e2e3e4;\n  cursor: default;\n}\n\n.sky-radio-wrapper input:focus + .sky-radio {\n  outline: thin dotted;\n  outline: -webkit-focus-ring-color auto 5px;\n}\n"],
                providers: [SKY_RADIO_CONTROL_VALUE_ACCESSOR]
            },] },
];
/** @nocollapse */
SkyRadioComponent.ctorParameters = function () { return []; };
SkyRadioComponent.propDecorators = {
    'label': [{ type: Input },],
    'labelledBy': [{ type: Input },],
    'id': [{ type: Input },],
    'disabled': [{ type: Input },],
    'tabindex': [{ type: Input },],
    'name': [{ type: Input },],
    'value': [{ type: Input },],
};
//# sourceMappingURL=radio.component.js.map