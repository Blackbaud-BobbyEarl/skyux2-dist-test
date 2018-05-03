import { Directive, Input, forwardRef, HostListener, Renderer, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { SkyDateFormatter } from './date-formatter';
import { SkyDatepickerConfigService } from './datepicker-config.service';
// tslint:disable:no-forward-ref no-use-before-declare
var SKY_DATEPICKER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return SkyDatepickerInputDirective; }),
    multi: true
};
var SKY_DATEPICKER_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(function () { return SkyDatepickerInputDirective; }),
    multi: true
};
// tslint:enable
var SkyDatepickerInputDirective = (function () {
    function SkyDatepickerInputDirective(renderer, elRef, config) {
        this.renderer = renderer;
        this.elRef = elRef;
        this.config = config;
        this.skyDatepickerNoValidate = false;
        this.dateFormatter = new SkyDateFormatter();
        /*istanbul ignore next */
        this._onChange = function (_) { };
        /*istanbul ignore next */
        this._onTouched = function () { };
        this._validatorChange = function () { };
        this.configureOptions();
    }
    SkyDatepickerInputDirective.prototype.configureOptions = function () {
        Object.assign(this, this.config);
    };
    SkyDatepickerInputDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.renderer.setElementClass(this.elRef.nativeElement, 'sky-form-control', true);
        this.pickerChangedSubscription =
            this.skyDatepickerInput.dateChanged.subscribe(function (newDate) {
                _this.writeValue(newDate);
                _this._onChange(newDate);
            });
    };
    SkyDatepickerInputDirective.prototype.ngOnDestroy = function () {
        /* istanbul ignore else */
        /* sanity check */
        if (this.pickerChangedSubscription) {
            this.pickerChangedSubscription.unsubscribe();
        }
    };
    SkyDatepickerInputDirective.prototype.ngOnChanges = function (changes) {
        if (changes['minDate']) {
            this._validatorChange();
            this.skyDatepickerInput.setMinDate(this.minDate);
        }
        if (changes['maxDate']) {
            this._validatorChange();
            this.skyDatepickerInput.setMaxDate(this.maxDate);
        }
    };
    SkyDatepickerInputDirective.prototype.onChange = function (event) {
        var newValue = event.target.value;
        // need to parse date here:
        this.modelValue = this.dateFormatter.getDateFromString(newValue, this.dateFormat);
        if (this.dateFormatter.dateIsValid(this.modelValue)) {
            this._onChange(this.modelValue);
            this.writeModelValue(this.modelValue);
        }
        else {
            this._onChange(newValue);
        }
    };
    SkyDatepickerInputDirective.prototype.onBlur = function () {
        this._onTouched();
    };
    SkyDatepickerInputDirective.prototype.registerOnChange = function (fn) { this._onChange = fn; };
    SkyDatepickerInputDirective.prototype.registerOnTouched = function (fn) { this._onTouched = fn; };
    SkyDatepickerInputDirective.prototype.registerOnValidatorChange = function (fn) { this._validatorChange = fn; };
    SkyDatepickerInputDirective.prototype.writeValue = function (value) {
        if (value && this.dateFormatter.dateIsValid(value)) {
            this.modelValue = value;
        }
        else if (value) {
            this.modelValue = this.dateFormatter.getDateFromString(value, this.dateFormat);
            if (value !== this.modelValue && this.dateFormatter.dateIsValid(this.modelValue)) {
                this._onChange(this.modelValue);
            }
        }
        if (this.dateFormatter.dateIsValid(this.modelValue)) {
            this.writeModelValue(this.modelValue);
        }
        else if (value) {
            this.renderer.setElementProperty(this.elRef.nativeElement, 'value', value);
        }
    };
    SkyDatepickerInputDirective.prototype.validate = function (control) {
        var value = control.value;
        if (!value) {
            return undefined;
        }
        var dateValue = this.dateFormatter.getDateFromString(value, this.dateFormat);
        if (!this.dateFormatter.dateIsValid(dateValue) && !this.skyDatepickerNoValidate) {
            return {
                'skyDate': {
                    invalid: control.value
                }
            };
        }
        if (this.minDate &&
            this.dateFormatter.dateIsValid(this.minDate) &&
            this.dateFormatter.dateIsValid(value) &&
            value < this.minDate) {
            return {
                'skyDate': {
                    minDate: this.minDate
                }
            };
        }
        if (this.maxDate &&
            this.dateFormatter.dateIsValid(this.maxDate) &&
            this.dateFormatter.dateIsValid(value) &&
            value > this.maxDate) {
            return {
                'skyDate': {
                    maxDate: this.maxDate
                }
            };
        }
        return undefined;
    };
    SkyDatepickerInputDirective.prototype.writeModelValue = function (model) {
        this.renderer.setElementProperty(this.elRef.nativeElement, 'value', this.dateFormatter.format(model, this.dateFormat));
        this.skyDatepickerInput.setSelectedDate(model);
    };
    return SkyDatepickerInputDirective;
}());
export { SkyDatepickerInputDirective };
SkyDatepickerInputDirective.decorators = [
    { type: Directive, args: [{
                selector: '[skyDatepickerInput]',
                providers: [
                    SKY_DATEPICKER_VALUE_ACCESSOR,
                    SKY_DATEPICKER_VALIDATOR
                ]
            },] },
];
/** @nocollapse */
SkyDatepickerInputDirective.ctorParameters = function () { return [
    { type: Renderer, },
    { type: ElementRef, },
    { type: SkyDatepickerConfigService, },
]; };
SkyDatepickerInputDirective.propDecorators = {
    'skyDatepickerInput': [{ type: Input },],
    'dateFormat': [{ type: Input },],
    'skyDatepickerNoValidate': [{ type: Input },],
    'minDate': [{ type: Input },],
    'maxDate': [{ type: Input },],
    'onChange': [{ type: HostListener, args: ['change', ['$event'],] },],
    'onBlur': [{ type: HostListener, args: ['blur',] },],
};
//# sourceMappingURL=datepicker-input.directive.js.map