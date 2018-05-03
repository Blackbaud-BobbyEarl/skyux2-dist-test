var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, forwardRef, Input, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import { Subject } from 'rxjs/Subject';
import { SkyAutocompleteInputDirective } from '../autocomplete';
import { SkyTokensMessageType } from '../tokens';
import { SkyWindowRefService } from '../window';
import { SkyLookupAutocompleteAdapter } from './lookup-autocomplete-adapter';
var SkyLookupComponent = (function (_super) {
    __extends(SkyLookupComponent, _super);
    function SkyLookupComponent(changeDetector, elementRef, windowRef) {
        var _this = _super.call(this) || this;
        _this.changeDetector = changeDetector;
        _this.elementRef = elementRef;
        _this.windowRef = windowRef;
        _this.disabled = false;
        _this.isInputFocused = false;
        _this.tokensController = new Subject();
        _this.ngUnsubscribe = new Subject();
        _this.idle = new Subject();
        _this.markForTokenFocusOnKeyUp = false;
        // Angular automatically constructs these methods.
        /* istanbul ignore next */
        _this.onChange = function (value) { };
        /* istanbul ignore next */
        _this.onTouched = function () { };
        return _this;
    }
    Object.defineProperty(SkyLookupComponent.prototype, "tokens", {
        get: function () {
            return this._tokens;
        },
        set: function (value) {
            this._tokens = value;
            this.onChange(this.value);
            this.onTouched();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyLookupComponent.prototype, "value", {
        get: function () {
            if (!this.tokens) {
                return [];
            }
            return this.tokens.map(function (token) { return token.value; });
        },
        enumerable: true,
        configurable: true
    });
    SkyLookupComponent.prototype.ngAfterContentInit = function () {
        if (!this.disabled) {
            this.addEventListeners();
        }
    };
    SkyLookupComponent.prototype.ngOnDestroy = function () {
        this.removeEventListeners();
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
        this.tokensController.complete();
    };
    SkyLookupComponent.prototype.onAutocompleteSelectionChange = function (change) {
        this.addToSelected(change.selectedItem);
        this.focusInput();
    };
    SkyLookupComponent.prototype.onTokensChange = function (change) {
        if (!change) {
            return;
        }
        if (change.length === 0) {
            this.focusInput();
        }
        if (this.tokens !== change) {
            this.tokens = change;
        }
    };
    SkyLookupComponent.prototype.onTokensFocusIndexOverRange = function () {
        var _this = this;
        this.windowRef.getWindow().setTimeout(function () {
            _this.focusInput();
        });
    };
    SkyLookupComponent.prototype.onTokensKeyUp = function (event) {
        var _this = this;
        var key = event.key.toLowerCase();
        if (key === 'backspace') {
            this.sendTokensMessage(SkyTokensMessageType.RemoveActiveToken);
            this.sendTokensMessage(SkyTokensMessageType.FocusPreviousToken);
            event.preventDefault();
        }
        if (key === 'delete') {
            this.sendTokensMessage(SkyTokensMessageType.RemoveActiveToken);
            this.windowRef.getWindow().setTimeout(function () {
                _this.sendTokensMessage(SkyTokensMessageType.FocusActiveToken);
            });
            event.preventDefault();
        }
    };
    SkyLookupComponent.prototype.writeValue = function (value) {
        if (value && !this.disabled) {
            var copy = this.cloneItems(value);
            this.tokens = this.parseTokens(copy);
        }
    };
    SkyLookupComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    SkyLookupComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    // Allows Angular to disable the input.
    SkyLookupComponent.prototype.setDisabledState = function (disabled) {
        this.removeEventListeners();
        if (!disabled) {
            this.addEventListeners();
        }
        this.disabled = disabled;
        this.changeDetector.markForCheck();
    };
    SkyLookupComponent.prototype.clearSearchText = function () {
        this.autocompleteInputDirective.value = undefined;
    };
    SkyLookupComponent.prototype.addToSelected = function (item) {
        var selectedItems = [];
        if (this.tokens) {
            selectedItems = this.tokens.map(function (token) { return token.value; });
        }
        // Add the new item.
        selectedItems = selectedItems.concat(item);
        this.writeValue(selectedItems);
        this.clearSearchText();
    };
    SkyLookupComponent.prototype.addEventListeners = function () {
        this.idle = new Subject();
        this.focusTokensOnInputKeyUp();
        this.focusInputOnHostClick();
    };
    SkyLookupComponent.prototype.removeEventListeners = function () {
        this.idle.next();
        this.idle.complete();
    };
    SkyLookupComponent.prototype.focusTokensOnInputKeyUp = function () {
        var _this = this;
        var inputElement = this.lookupInput.nativeElement;
        // Handles when to focus on the tokens.
        // Check for empty search text on keydown, before the escape key is fully pressed.
        // (Otherwise, a single character being escaped would register as empty on keyup.)
        // If empty on keydown, set a flag so that the appropriate action can be taken on keyup.
        Observable
            .fromEvent(inputElement, 'keydown')
            .takeUntil(this.idle)
            .subscribe(function (event) {
            var key = event.key.toLowerCase();
            if (key === 'left' ||
                key === 'arrowleft' ||
                key === 'backspace') {
                var isSearchEmpty = (!_this.lookupInput.nativeElement.value);
                if (isSearchEmpty) {
                    _this.markForTokenFocusOnKeyUp = true;
                }
                else {
                    _this.markForTokenFocusOnKeyUp = false;
                }
            }
        });
        Observable
            .fromEvent(inputElement, 'keyup')
            .takeUntil(this.idle)
            .subscribe(function (event) {
            var key = event.key.toLowerCase();
            if (key === 'left' ||
                key === 'arrowleft' ||
                key === 'backspace') {
                /* istanbul ignore else */
                if (_this.markForTokenFocusOnKeyUp) {
                    _this.sendTokensMessage(SkyTokensMessageType.FocusLastToken);
                    event.preventDefault();
                }
            }
            event.stopPropagation();
        });
    };
    SkyLookupComponent.prototype.focusInputOnHostClick = function () {
        var _this = this;
        var hostElement = this.elementRef.nativeElement;
        var documentObj = this.windowRef.getWindow().document;
        // Handles focusing the input when the host is clicked.
        // The input should NOT be focused if other elements (tokens, etc.)
        // are currently focused or being tabbed through.
        Observable
            .fromEvent(documentObj, 'mousedown')
            .takeUntil(this.idle)
            .subscribe(function (event) {
            _this.isInputFocused = hostElement.contains(event.target);
        });
        Observable
            .fromEvent(documentObj, 'focusin')
            .takeUntil(this.idle)
            .subscribe(function (event) {
            _this.isInputFocused = hostElement.contains(event.target);
        });
        Observable
            .fromEvent(hostElement, 'mouseup')
            .takeUntil(this.idle)
            .subscribe(function () {
            var classList = documentObj.activeElement.classList;
            if (!classList || !classList.contains('sky-token')) {
                _this.focusInput();
            }
        });
    };
    SkyLookupComponent.prototype.focusInput = function () {
        this.lookupInput.nativeElement.focus();
    };
    SkyLookupComponent.prototype.cloneItems = function (items) {
        return items.map(function (item) {
            return __assign({}, item);
        });
    };
    SkyLookupComponent.prototype.parseTokens = function (data) {
        return data.map(function (item) {
            return {
                value: item
            };
        });
    };
    SkyLookupComponent.prototype.sendTokensMessage = function (type) {
        this.tokensController.next({ type: type });
    };
    return SkyLookupComponent;
}(SkyLookupAutocompleteAdapter));
export { SkyLookupComponent };
SkyLookupComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-lookup',
                template: "<div\n  class=\"sky-lookup\"\n  [ngClass]=\"{\n    'sky-lookup-focused': isInputFocused,\n    'sky-lookup-disabled': disabled\n  }\">\n  <sky-autocomplete\n    [data]=\"data\"\n    [descriptorProperty]=\"descriptorProperty\"\n    [propertiesToSearch]=\"propertiesToSearch\"\n    [search]=\"search\"\n    [searchFilters]=\"searchFilters\"\n    [searchResultsLimit]=\"searchResultsLimit\"\n    [searchResultTemplate]=\"searchResultTemplate\"\n    [searchTextMinimumCharacters]=\"searchTextMinimumCharacters\"\n    (selectionChange)=\"onAutocompleteSelectionChange($event)\">\n\n    <div class=\"sky-lookup-search sky-form-control\">\n      <sky-tokens\n        [disabled]=\"disabled\"\n        [displayWith]=\"descriptorProperty\"\n        [focusable]=\"false\"\n        [messageStream]=\"tokensController\"\n        [tokens]=\"tokens\"\n        (keyup)=\"onTokensKeyUp($event)\"\n        (tokensChange)=\"onTokensChange($event)\"\n        (focusIndexOverRange)=\"onTokensFocusIndexOverRange()\">\n\n        <textarea\n          skyAutocomplete\n          class=\"sky-form-control\"\n          [disabled]=\"disabled\"\n          [attr.aria-label]=\"ariaLabel\"\n          [attr.aria-labelledby]=\"ariaLabelledBy\"\n          [attr.placeholder]=\"placeholderText\"\n          (keydown.enter)=\"$event.preventDefault();\"\n          (keyup.escape)=\"clearSearchText();$event.preventDefault();\"\n          (keyup.delete)=\"$event.stopPropagation();\"\n          #lookupInput>\n        </textarea>\n      </sky-tokens>\n    </div>\n  </sky-autocomplete>\n</div>\n",
                styles: [".sky-lookup textarea {\n  resize: none;\n  border: 0;\n  overflow: hidden;\n  height: 1.42857em;\n  box-sizing: content-box;\n  padding: 0;\n  display: inline-flex;\n  background-color: transparent;\n}\n\n.sky-lookup textarea:focus {\n  outline: none;\n  box-shadow: none;\n}\n\n.sky-lookup ::ng-deep\nsky-tokens:focus {\n  outline: none;\n}\n\n.sky-lookup ::ng-deep\nsky-tokens .sky-tokens {\n  margin-top: -5px;\n  margin-bottom: -5px;\n}\n\n.sky-lookup ::ng-deep\nsky-tokens .sky-tokens .sky-tokens-content {\n  padding-top: 5px;\n  padding-bottom: 5px;\n  padding-left: 11px;\n  flex-basis: 100px;\n}\n\n.sky-lookup-search {\n  cursor: text;\n  background-color: #ffffff;\n  padding-left: 3px;\n}\n\n.sky-lookup-disabled .sky-lookup-search {\n  cursor: default;\n}\n\n.sky-lookup-focused .sky-lookup-search {\n  box-shadow: 0 0 8px rgba(0, 180, 241, 0.6);\n  border: 1px solid #00b4f1;\n  outline: none;\n}\n\n.sky-lookup-focused ::ng-deep .sky-tokens-content {\n  flex-basis: 100px;\n}\n"],
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        /* tslint:disable-next-line:no-forward-ref */
                        useExisting: forwardRef(function () { return SkyLookupComponent; }),
                        multi: true
                    }],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
SkyLookupComponent.ctorParameters = function () { return [
    { type: ChangeDetectorRef, },
    { type: ElementRef, },
    { type: SkyWindowRefService, },
]; };
SkyLookupComponent.propDecorators = {
    'ariaLabel': [{ type: Input },],
    'ariaLabelledBy': [{ type: Input },],
    'disabled': [{ type: Input },],
    'placeholderText': [{ type: Input },],
    'autocompleteInputDirective': [{ type: ViewChild, args: [SkyAutocompleteInputDirective,] },],
    'lookupInput': [{ type: ViewChild, args: ['lookupInput',] },],
};
//# sourceMappingURL=lookup.component.js.map