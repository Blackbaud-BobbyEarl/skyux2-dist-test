import { Directive, ElementRef, EventEmitter, forwardRef, Renderer2 } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
var SkyAutocompleteInputDirective = (function () {
    function SkyAutocompleteInputDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.textChanges = new EventEmitter();
        this.blur = new EventEmitter();
        this.ngUnsubscribe = new Subject();
    }
    Object.defineProperty(SkyAutocompleteInputDirective.prototype, "displayWith", {
        get: function () {
            return this._displayWith;
        },
        set: function (value) {
            this._displayWith = value;
            this.textValue = this.value[this.displayWith];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyAutocompleteInputDirective.prototype, "value", {
        get: function () {
            return this._value || {};
        },
        set: function (value) {
            this._value = value;
            this.textValue = this.value[this.displayWith];
            this.onChange(this.value);
            this.onTouched();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyAutocompleteInputDirective.prototype, "textValue", {
        set: function (value) {
            this.elementRef.nativeElement.value = value || '';
        },
        enumerable: true,
        configurable: true
    });
    SkyAutocompleteInputDirective.prototype.ngOnInit = function () {
        var _this = this;
        var element = this.elementRef.nativeElement;
        this.setAttributes(element);
        Observable
            .fromEvent(element, 'keyup')
            .takeUntil(this.ngUnsubscribe)
            .subscribe(function () {
            _this.textChanges.emit({
                value: _this.elementRef.nativeElement.value
            });
        });
        Observable
            .fromEvent(element, 'blur')
            .takeUntil(this.ngUnsubscribe)
            .subscribe(function () {
            _this.checkValues();
        });
    };
    SkyAutocompleteInputDirective.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    SkyAutocompleteInputDirective.prototype.writeValue = function (value) {
        if (value) {
            this.value = value;
        }
    };
    SkyAutocompleteInputDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    SkyAutocompleteInputDirective.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    // Angular automatically constructs these methods.
    /* istanbul ignore next */
    SkyAutocompleteInputDirective.prototype.onChange = function (value) { };
    /* istanbul ignore next */
    SkyAutocompleteInputDirective.prototype.onTouched = function () { };
    SkyAutocompleteInputDirective.prototype.setAttributes = function (element) {
        this.renderer.setAttribute(element, 'autocomplete', 'off');
        this.renderer.setAttribute(element, 'autocapitalize', 'off');
        this.renderer.setAttribute(element, 'autocorrect', 'off');
        this.renderer.setAttribute(element, 'spellcheck', 'false');
        this.renderer.addClass(element, 'sky-form-control');
    };
    SkyAutocompleteInputDirective.prototype.checkValues = function () {
        var text = this.elementRef.nativeElement.value;
        var displayValue = this.value[this.displayWith];
        // If the search field contains text, make sure that the value
        // matches the selected descriptor key.
        if (text && displayValue) {
            if (text !== displayValue) {
                this.textValue = displayValue;
            }
        }
        else {
            // The search field is empty (or doesn't have a selected item),
            // so clear out the selected value.
            this.value = {};
        }
        this.blur.emit();
    };
    return SkyAutocompleteInputDirective;
}());
export { SkyAutocompleteInputDirective };
SkyAutocompleteInputDirective.decorators = [
    { type: Directive, args: [{
                selector: 'input[skyAutocomplete], textarea[skyAutocomplete]',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        /* tslint:disable-next-line:no-forward-ref */
                        useExisting: forwardRef(function () { return SkyAutocompleteInputDirective; }),
                        multi: true
                    }
                ]
            },] },
];
/** @nocollapse */
SkyAutocompleteInputDirective.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
]; };
//# sourceMappingURL=autocomplete-input.directive.js.map