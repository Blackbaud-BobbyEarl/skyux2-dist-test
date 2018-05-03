import { Directive, Input, forwardRef, HostListener, Renderer, ElementRef } from '@angular/core';
var moment = require('moment');
import { NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
// tslint:disable:no-forward-ref no-use-before-declare
var SKY_TIMEPICKER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return SkyTimepickerInputDirective; }),
    multi: true
};
var SKY_TIMEPICKER_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(function () { return SkyTimepickerInputDirective; }),
    multi: true
};
// tslint:enable
var SkyTimepickerInputDirective = (function () {
    function SkyTimepickerInputDirective(renderer, elRef) {
        this.renderer = renderer;
        this.elRef = elRef;
        /*istanbul ignore next */
        this._onChange = function (_) { };
        /*istanbul ignore next */
        this._onTouched = function () { };
        this._validatorChange = function () { };
    }
    SkyTimepickerInputDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.renderer.setElementClass(this.elRef.nativeElement, 'sky-form-control', true);
        this.pickerChangedSubscription =
            this.skyTimepickerInput.selectedTimeChanged.subscribe(function (newTime) {
                _this.writeValue(_this.formatter(newTime));
                _this._onChange(newTime);
            });
    };
    SkyTimepickerInputDirective.prototype.ngOnDestroy = function () {
        this.pickerChangedSubscription.unsubscribe();
    };
    SkyTimepickerInputDirective.prototype.ngOnChanges = function (changes) {
        this._validatorChange();
        this.skyTimepickerInput.setFormat(this.timeFormat);
        this.skyTimepickerInput.returnFormat = this.returnFormat;
    };
    SkyTimepickerInputDirective.prototype.onChange = function (event) {
        var newValue = event.target.value;
        this.modelValue = this.formatter(newValue);
        this._validatorChange();
        this._onChange(this.modelValue);
        this.writeModelValue(this.modelValue);
    };
    SkyTimepickerInputDirective.prototype.onBlur /* istanbul ignore next */ = function () {
        this._onTouched();
    };
    SkyTimepickerInputDirective.prototype.registerOnChange = function (fn) { this._onChange = fn; };
    SkyTimepickerInputDirective.prototype.registerOnTouched = function (fn) { this._onTouched = fn; };
    SkyTimepickerInputDirective.prototype.registerOnValidatorChange = function (fn) { this._validatorChange = fn; };
    SkyTimepickerInputDirective.prototype.writeValue = function (value) {
        this.modelValue = this.formatter(value);
        this.writeModelValue(this.modelValue);
    };
    SkyTimepickerInputDirective.prototype.validate = function (control) {
        var value = control.value;
        if (!value) {
            return undefined;
        }
        /* istanbul ignore next */
        if (value.local === 'Invalid date') {
            return {
                'skyTime': {
                    invalid: control.value
                }
            };
        }
        return undefined;
    };
    SkyTimepickerInputDirective.prototype.writeModelValue = function (model) {
        var setElementValue;
        if (model) {
            /* istanbul ignore next */
            if (moment(model).format(model.customFormat) === 'Invalid date') {
                setElementValue = '';
            }
            else {
                setElementValue = moment(model).format(model.customFormat);
            }
            this.renderer.setElementProperty(this.elRef.nativeElement, 'value', setElementValue);
        }
        this.skyTimepickerInput.selectedTime = model;
    };
    SkyTimepickerInputDirective.prototype.formatter = function (time) {
        if (time && typeof time !== 'string' && 'local' in time) {
            return time;
        }
        if (typeof time === 'string') {
            var currentFormat = void 0;
            var formatTime = void 0;
            if (this.timeFormat === 'hh') {
                currentFormat = 'h:mm A';
            }
            if (this.timeFormat === 'HH') {
                currentFormat = 'H:mm';
            }
            if (typeof this.returnFormat === 'undefined') {
                this.returnFormat = currentFormat;
            }
            formatTime = {
                'hour': moment(time, currentFormat).hour(),
                'minute': moment(time, currentFormat).minute(),
                'meridie': moment(time, currentFormat).format('A'),
                'timezone': parseInt(moment(time, currentFormat).format('Z'), 10),
                'iso8601': moment(time, currentFormat).toDate(),
                'local': moment(time, currentFormat).format(currentFormat),
                'customFormat': this.returnFormat
            };
            return formatTime;
        }
    };
    return SkyTimepickerInputDirective;
}());
export { SkyTimepickerInputDirective };
SkyTimepickerInputDirective.decorators = [
    { type: Directive, args: [{
                selector: '[skyTimepickerInput]',
                providers: [
                    SKY_TIMEPICKER_VALUE_ACCESSOR,
                    SKY_TIMEPICKER_VALIDATOR
                ]
            },] },
];
/** @nocollapse */
SkyTimepickerInputDirective.ctorParameters = function () { return [
    { type: Renderer, },
    { type: ElementRef, },
]; };
SkyTimepickerInputDirective.propDecorators = {
    'skyTimepickerInput': [{ type: Input },],
    'timeFormat': [{ type: Input },],
    'returnFormat': [{ type: Input },],
    'onChange': [{ type: HostListener, args: ['change', ['$event'],] },],
    'onBlur': [{ type: HostListener, args: ['blur',] },],
};
//# sourceMappingURL=timepicker.directive.js.map