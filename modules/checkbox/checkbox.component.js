import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
/**
 * Monotonically increasing integer used to auto-generate unique ids for checkbox components.
 */
var nextId = 0;
/**
 * Provider Expression that allows sky-checkbox to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)].
 */
// tslint:disable:no-forward-ref no-use-before-declare
export var SKY_CHECKBOX_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return SkyCheckboxComponent; }),
    multi: true
};
// A simple change event emitted by the SkyCheckbox component.
var SkyCheckboxChange = (function () {
    function SkyCheckboxChange() {
    }
    return SkyCheckboxChange;
}());
export { SkyCheckboxChange };
// tslint:enable
var SkyCheckboxComponent = (function () {
    function SkyCheckboxComponent() {
        /**
         * Hidden label for screen readers.
         */
        this.label = '';
        this.id = "sky-checkbox-" + ++nextId;
        this.disabled = false;
        this.tabindex = 0;
        this.name = "sky-checkbox-" + ++nextId;
        this.change = new EventEmitter();
        this._checked = false;
        /** Called when the checkbox is blurred. Needed to properly implement ControlValueAccessor. */
        /*istanbul ignore next */
        this.onTouched = function () { };
        this._controlValueAccessorChangeFn = function (value) { };
    }
    Object.defineProperty(SkyCheckboxComponent.prototype, "inputId", {
        get: function () {
            return "input-" + this.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyCheckboxComponent.prototype, "checked", {
        get: function () {
            return this._checked;
        },
        set: function (checked) {
            if (checked !== this.checked) {
                this._checked = checked;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Implemented as part of ControlValueAccessor.
     */
    SkyCheckboxComponent.prototype.writeValue = function (value) {
        this.checked = !!value;
    };
    /**
     * Implemented as part of ControlValueAccessor.
     */
    SkyCheckboxComponent.prototype.registerOnChange = function (fn) {
        this._controlValueAccessorChangeFn = fn;
    };
    /**
     * Implemented as part of ControlValueAccessor.
     */
    SkyCheckboxComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    /**
     * Event handler for checkbox input element.
     * Toggles checked state if element is not disabled.
     */
    SkyCheckboxComponent.prototype.onInteractionEvent = function (event) {
        // We always have to stop propagation on the change event.
        // Otherwise the change event, from the input element, will bubble up and
        // emit its event object to the `change` output.
        event.stopPropagation();
        if (!this.disabled) {
            this._toggle();
            this._emitChangeEvent();
        }
    };
    SkyCheckboxComponent.prototype.onInputBlur = function () {
        this.onTouched();
    };
    SkyCheckboxComponent.prototype._emitChangeEvent = function () {
        var event = new SkyCheckboxChange();
        event.source = this;
        event.checked = this._checked;
        this._controlValueAccessorChangeFn(this._checked);
        this.change.emit(event);
    };
    /**
     * Toggles the `checked` value between true and false
     */
    SkyCheckboxComponent.prototype._toggle = function () {
        this.checked = !this.checked;
    };
    return SkyCheckboxComponent;
}());
export { SkyCheckboxComponent };
SkyCheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-checkbox',
                template: "<label class=\"sky-checkbox-wrapper\" [ngClass]=\"{'sky-checkbox-wrapper-disabled': disabled}\">\n  <input type=\"checkbox\"\n        [id]=\"inputId\"\n        [checked]=\"checked\"\n        [disabled]=\"disabled\"\n        [name]=\"name\"\n        [tabIndex]=\"tabindex\"\n        [attr.aria-label]=\"label\"\n        [attr.aria-labelledby]=\"labelledBy\"\n        (blur)=\"onInputBlur()\"\n        (change)=\"onInteractionEvent($event)\"/>\n  <span class=\"sky-checkbox\"></span>\n  <ng-content select=\"sky-checkbox-label\"></ng-content>\n</label>\n",
                styles: [".sky-checkbox-wrapper {\n  cursor: pointer;\n  position: relative;\n}\n\n.sky-checkbox-wrapper.sky-checkbox-wrapper-disabled, .sky-checkbox-wrapper.sky-checkbox-wrapper-disabled input {\n  cursor: default;\n}\n\n.sky-checkbox-wrapper input {\n  opacity: 0;\n  position: absolute;\n  height: 22px;\n  width: 22px;\n  margin: 0;\n  padding: 0;\n  cursor: pointer;\n}\n\n.sky-checkbox {\n  background-color: #ffffff;\n  border-top: 1px solid #cdcfd2;\n  border-bottom: 1px solid #cdcfd2;\n  border-left: 1px solid #cdcfd2;\n  border-right: 1px solid #cdcfd2;\n  display: inline-block;\n  height: 22px;\n  margin: 0;\n  padding: 0;\n  vertical-align: middle;\n  width: 22px;\n  text-align: center;\n  font-size: 15px;\n  line-height: 19px;\n}\n\n.sky-checkbox-wrapper input:hover + .sky-checkbox {\n  border: 2px solid #007ca6;\n}\n\n.sky-checkbox-wrapper input:checked + .sky-checkbox {\n  background-color: #007ca6;\n  border-color: #007ca6;\n  border-width: 1px;\n}\n\n.sky-checkbox-wrapper input:checked + .sky-checkbox:before {\n  color: #ffffff;\n  content: \"\\f00c\";\n  font-family: FontAwesome;\n  font-size: 13px;\n}\n\n.sky-checkbox-wrapper input:disabled + .sky-checkbox {\n  background-color: #eeeeef;\n  border-top: 1px solid #e2e3e4;\n  border-bottom: 1px solid #e2e3e4;\n  border-left: 1px solid #e2e3e4;\n  border-right: 1px solid #e2e3e4;\n}\n\n.sky-checkbox-wrapper input:focus + .sky-checkbox {\n  outline: thin dotted;\n  outline: -webkit-focus-ring-color auto 5px;\n}\n"],
                providers: [SKY_CHECKBOX_CONTROL_VALUE_ACCESSOR]
            },] },
];
/** @nocollapse */
SkyCheckboxComponent.ctorParameters = function () { return []; };
SkyCheckboxComponent.propDecorators = {
    'label': [{ type: Input },],
    'labelledBy': [{ type: Input },],
    'id': [{ type: Input },],
    'disabled': [{ type: Input },],
    'tabindex': [{ type: Input },],
    'name': [{ type: Input },],
    'change': [{ type: Output },],
    'checked': [{ type: Input },],
};
//# sourceMappingURL=checkbox.component.js.map