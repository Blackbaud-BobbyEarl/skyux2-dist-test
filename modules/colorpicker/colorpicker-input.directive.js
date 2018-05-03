import { ElementRef, Directive, forwardRef, HostListener, Input, Renderer } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SkyColorpickerService } from './colorpicker.service';
// tslint:disable:no-forward-ref no-use-before-declare
var SKY_COLORPICKER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return SkyColorpickerInputDirective; }),
    multi: true
};
var SKY_COLORPICKER_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(function () { return SkyColorpickerInputDirective; }),
    multi: true
};
// tslint:enable
var SKY_COLORPICKER_DEFAULT_COLOR = '#FFFFFF';
var SkyColorpickerInputDirective = (function () {
    function SkyColorpickerInputDirective(elementRef, renderer, service) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.service = service;
        this.returnFormat = 'rgba';
        this.outputFormat = 'rgba';
        this.presetColors = ['#333', '#888', '#EFEFEF', '#FFF'];
        this.alphaChannel = 'hex6';
        this._initialColor = SKY_COLORPICKER_DEFAULT_COLOR;
        /*istanbul ignore next */
        this._onChange = function (_) { };
        /*istanbul ignore next */
        this._onTouched = function () { };
        this._validatorChange = function () { };
    }
    Object.defineProperty(SkyColorpickerInputDirective.prototype, "initialColor", {
        get: function () {
            return this._initialColor;
        },
        set: function (value) {
            this._initialColor = value || SKY_COLORPICKER_DEFAULT_COLOR;
        },
        enumerable: true,
        configurable: true
    });
    SkyColorpickerInputDirective.prototype.changeInput = function (event) {
        var value = event.target.value;
        this.skyColorpickerInput.setColorFromString(value);
    };
    SkyColorpickerInputDirective.prototype.onChange = function (event) {
        var newValue = event.target.value;
        this.modelValue = this.formatter(newValue);
        this._validatorChange();
        this._onChange(this.modelValue);
        this.writeModelValue(this.modelValue);
    };
    SkyColorpickerInputDirective.prototype.onBlur = function (event) {
        this._onTouched();
    };
    SkyColorpickerInputDirective.prototype.ngOnInit = function () {
        var _this = this;
        var element = this.elementRef.nativeElement;
        this.renderer.setElementClass(element, 'sky-form-control', true);
        this.skyColorpickerInput.initialColor = this.initialColor;
        this.skyColorpickerInput.returnFormat = this.returnFormat;
        this.pickerChangedSubscription =
            this.skyColorpickerInput.selectedColorChanged.subscribe(function (newColor) {
                _this.writeValue(newColor);
                _this._onChange(newColor);
            });
        this.skyColorpickerInput.setColorFromString(this.initialColor);
        var typeAttr = element.getAttribute('type');
        if (typeAttr && typeAttr === 'hidden') {
            this.skyColorpickerInput.isVisible = false;
        }
        else {
            this.skyColorpickerInput.isVisible = true;
        }
    };
    SkyColorpickerInputDirective.prototype.ngOnDestroy = function () {
        this.pickerChangedSubscription.unsubscribe();
    };
    SkyColorpickerInputDirective.prototype.setColorPickerDefaults = function () {
        this.skyColorpickerInput.setDialog(this, this.elementRef, this.initialColor, this.outputFormat, this.presetColors, this.alphaChannel);
    };
    SkyColorpickerInputDirective.prototype.ngOnChanges = function (changes) {
        this._validatorChange();
        this.skyColorpickerInput.returnFormat = this.returnFormat;
        this.setColorPickerDefaults();
    };
    SkyColorpickerInputDirective.prototype.registerOnChange = function (fn) { this._onChange = fn; };
    SkyColorpickerInputDirective.prototype.registerOnTouched = function (fn) { this._onTouched = fn; };
    SkyColorpickerInputDirective.prototype.registerOnValidatorChange = function (fn) { this._validatorChange = fn; };
    SkyColorpickerInputDirective.prototype.writeValue = function (value) {
        if (value) {
            this.modelValue = this.formatter(value);
            this.writeModelValue(this.modelValue);
        }
    };
    SkyColorpickerInputDirective.prototype.validate = function (control) {
        var value = control.value;
        if (!value) {
            return;
        }
        // Validation
    };
    SkyColorpickerInputDirective.prototype.writeModelValue = function (model) {
        var setElementValue = model.rgbaText;
        var element = this.elementRef.nativeElement;
        var output;
        // tslint:disable-next-line:switch-default
        switch (this.outputFormat) {
            case 'rgba':
                output = model.rgbaText;
                break;
            case 'hsla':
                output = model.hslaText;
                break;
            case 'cmyk':
                output = model.cmykText;
                break;
            case 'hex':
                output = model.hex;
                break;
        }
        this.skyColorpickerInput.setColorFromString(output);
        this.renderer.setElementStyle(element, 'background-color', setElementValue);
        this.renderer.setElementStyle(element, 'color', setElementValue);
        this.renderer.setElementProperty(element, 'value', output);
        this.renderer.setElementClass(element, 'sky-colorpicker-input', true);
    };
    SkyColorpickerInputDirective.prototype.formatter = function (color) {
        if (color && typeof color !== 'string') {
            return color;
        }
        var formatColor;
        var hsva = this.service.stringToHsva(color, this.alphaChannel === 'hex8');
        formatColor = this.service.skyColorpickerOut(hsva);
        return formatColor;
    };
    return SkyColorpickerInputDirective;
}());
export { SkyColorpickerInputDirective };
SkyColorpickerInputDirective.decorators = [
    { type: Directive, args: [{
                selector: '[skyColorpickerInput]',
                providers: [
                    SKY_COLORPICKER_VALUE_ACCESSOR,
                    SKY_COLORPICKER_VALIDATOR
                ]
            },] },
];
/** @nocollapse */
SkyColorpickerInputDirective.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer, },
    { type: SkyColorpickerService, },
]; };
SkyColorpickerInputDirective.propDecorators = {
    'skyColorpickerInput': [{ type: Input },],
    'initialColor': [{ type: Input },],
    'returnFormat': [{ type: Input },],
    'outputFormat': [{ type: Input },],
    'presetColors': [{ type: Input },],
    'alphaChannel': [{ type: Input },],
    'changeInput': [{ type: HostListener, args: ['input', ['$event'],] },],
    'onChange': [{ type: HostListener, args: ['change', ['$event'],] },],
    'onBlur': [{ type: HostListener, args: ['blur',] },],
};
//# sourceMappingURL=colorpicker-input.directive.js.map