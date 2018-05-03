import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { SkyModalService } from '../modal';
import { SkyResourcesService } from '../resources';
import { SkySelectFieldPickerContext } from './select-field-picker-context';
import { SkySelectFieldPickerComponent } from './select-field-picker.component';
var SkySelectFieldComponent = (function () {
    function SkySelectFieldComponent(changeDetector, modalService, resourcesService) {
        this.changeDetector = changeDetector;
        this.modalService = modalService;
        this.resourcesService = resourcesService;
        // Angular automatically constructs these methods.
        /* istanbul ignore next */
        this.onChange = function (value) { };
        /* istanbul ignore next */
        this.onTouched = function () { };
    }
    Object.defineProperty(SkySelectFieldComponent.prototype, "descriptorKey", {
        get: function () {
            return this._descriptorKey || 'label';
        },
        set: function (value) {
            this._descriptorKey = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkySelectFieldComponent.prototype, "disabled", {
        get: function () {
            return this._disabled || false;
        },
        set: function (value) {
            this._disabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkySelectFieldComponent.prototype, "selectMode", {
        get: function () {
            return this._selectMode || 'multiple';
        },
        set: function (value) {
            this._selectMode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkySelectFieldComponent.prototype, "multipleSelectOpenButtonText", {
        get: function () {
            return this._multipleSelectOpenButtonText ||
                this.resourcesService.getString('select_field_multiple_select_open_button');
        },
        set: function (value) {
            this._multipleSelectOpenButtonText = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkySelectFieldComponent.prototype, "singleSelectClearButtonTitle", {
        get: function () {
            return this._singleSelectClearButtonTitle ||
                this.resourcesService.getString('select_field_single_select_clear_button_title');
        },
        set: function (value) {
            this._singleSelectClearButtonTitle = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkySelectFieldComponent.prototype, "singleSelectOpenButtonTitle", {
        get: function () {
            return this._singleSelectOpenButtonTitle ||
                this.resourcesService.getString('select_field_single_select_open_button_title');
        },
        set: function (value) {
            this._singleSelectOpenButtonTitle = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkySelectFieldComponent.prototype, "singleSelectPlaceholderText", {
        get: function () {
            return this._singleSelectPlaceholderText ||
                this.resourcesService.getString('select_field_single_select_placeholder');
        },
        set: function (value) {
            this._singleSelectPlaceholderText = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkySelectFieldComponent.prototype, "pickerHeading", {
        get: function () {
            if (this._pickerHeading) {
                return this._pickerHeading;
            }
            return this.resourcesService.getString("select_field_" + this.selectMode + "_select_picker_heading");
        },
        set: function (value) {
            this._pickerHeading = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkySelectFieldComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
            this.onChange(this.value);
            this.onTouched();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkySelectFieldComponent.prototype, "singleSelectModeValue", {
        get: function () {
            var value = this.value;
            if (value) {
                return value[this.descriptorKey];
            }
            return '';
        },
        enumerable: true,
        configurable: true
    });
    SkySelectFieldComponent.prototype.onTokensChange = function (change) {
        var _this = this;
        if (!change || change === this.tokens) {
            return;
        }
        var newIds = change.map(function (token) { return token.value.id; });
        this.data.take(1).subscribe(function (items) {
            var newValues = items.filter(function (item) { return newIds.indexOf(item.id) > -1; });
            _this.value = newValues;
            _this.setTokensFromValue();
            _this.changeDetector.markForCheck();
        });
    };
    SkySelectFieldComponent.prototype.openPicker = function () {
        var _this = this;
        var pickerContext = new SkySelectFieldPickerContext();
        pickerContext.headingText = this.pickerHeading;
        pickerContext.data = this.data;
        pickerContext.selectedValue = this.value;
        pickerContext.selectMode = this.selectMode;
        var modalInstance = this.modalService.open(SkySelectFieldPickerComponent, {
            providers: [{
                    provide: SkySelectFieldPickerContext,
                    useValue: pickerContext
                }]
        });
        modalInstance.closed.subscribe(function (result) {
            if (result.reason === 'save') {
                if (_this.selectMode === 'single') {
                    _this.writeValue(result.data[0]);
                }
                else {
                    _this.writeValue(result.data);
                }
            }
        });
    };
    SkySelectFieldComponent.prototype.writeValue = function (value) {
        if (this.disabled) {
            return;
        }
        if (value) {
            this.value = value;
            this.setTokensFromValue();
            this.changeDetector.markForCheck();
        }
    };
    SkySelectFieldComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    SkySelectFieldComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    SkySelectFieldComponent.prototype.setDisabledState = function (disabled) {
        this.disabled = disabled;
        this.changeDetector.markForCheck();
    };
    SkySelectFieldComponent.prototype.clearSelection = function () {
        this.value = undefined;
    };
    SkySelectFieldComponent.prototype.setTokensFromValue = function () {
        var tokens = [];
        // Tokens only appear for multiple select mode.
        if (this.selectMode === 'single') {
            return;
        }
        // Collapse the tokens into a single token if the user has selected many options.
        if (this.value.length > 5) {
            tokens = [{
                    value: (_a = {},
                        _a[this.descriptorKey] = this.resourcesService
                            .getString('select_field_multiple_select_summary')
                            .replace('{0}', this.value.length.toString()),
                        _a)
                }];
        }
        else {
            tokens = this.value.map(function (value) { return ({ value: value }); });
        }
        this.tokens = tokens;
        var _a;
    };
    return SkySelectFieldComponent;
}());
export { SkySelectFieldComponent };
SkySelectFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-select-field',
                template: "<div class=\"sky-select-field\">\n  <ng-container\n    *ngTemplateOutlet=\"(selectMode === 'multiple') ? multipleSelectMode : singleSelectMode \">\n  </ng-container>\n</div>\n\n<ng-template #multipleSelectMode>\n  <div class=\"sky-select-field-multiple-select-mode\">\n    <button\n      class=\"sky-btn sky-btn-default\"\n      type=\"button\"\n      [attr.aria-label]=\"ariaLabel\"\n      [attr.aria-labelledby]=\"ariaLabelledBy\"\n      [disabled]=\"disabled\"\n      (click)=\"openPicker()\">\n      <i\n        class=\"fa fa-plus-circle\"\n        aria-hidden=\"true\">\n      </i>\n      {{ multipleSelectOpenButtonText }}\n    </button>\n    <sky-tokens\n      *ngIf=\"tokens && tokens.length\"\n      [disabled]=\"disabled\"\n      [displayWith]=\"descriptorKey\"\n      [tokens]=\"tokens\"\n      (tokensChange)=\"onTokensChange($event)\"\n      (tokenSelected)=\"openPicker()\">\n    </sky-tokens>\n  </div>\n</ng-template>\n\n<ng-template #singleSelectMode>\n  <div class=\"sky-select-field-single-select-mode\">\n    <div\n      class=\"sky-input-group sky-btn sky-btn-default\"\n      role=\"button\"\n      [attr.tabindex]=\"(disabled) ? false : 0\"\n      [attr.aria-label]=\"ariaLabel\"\n      [attr.aria-labelledby]=\"ariaLabelledBy\"\n      [attr.title]=\"singleSelectOpenButtonTitle\"\n      [ngClass]=\"{ 'sky-btn-disabled': disabled }\"\n      (click)=\"openPicker()\"\n      (keydown.enter)=\"openPicker();$event.preventDefault();$event.stopPropagation();\">\n      <div class=\"sky-form-control\">\n        {{ singleSelectModeValue }}\n        <div\n          *ngIf=\"!singleSelectModeValue\"\n          class=\"sky-deemphasized\">\n          {{ singleSelectPlaceholderText }}\n        </div>\n      </div>\n      <div class=\"sky-input-group-btn\">\n        <button\n          *ngIf=\"singleSelectModeValue\"\n          class=\"sky-btn\"\n          type=\"button\"\n          [attr.title]=\"singleSelectClearButtonTitle\"\n          [disabled]=\"disabled\"\n          (click)=\"clearSelection();$event.stopPropagation();\"\n          (keydown.enter)=\"clearSelection();$event.preventDefault();$event.stopPropagation();\">\n          <i\n            class=\"fa fa-times\"\n            aria-hidden=\"true\">\n          </i>\n        </button>\n      </div>\n      <div class=\"sky-input-group-btn\">\n        <button\n          class=\"sky-btn\"\n          type=\"button\"\n          [attr.title]=\"'select_field_single_select_open_button_title' | skyResources\"\n          [disabled]=\"disabled\"\n          (click)=\"openPicker();$event.stopPropagation();\">\n          <i\n            class=\"fa fa-sort\"\n            aria-hidden=\"true\">\n          </i>\n        </button>\n      </div>\n    </div>\n  </div>\n</ng-template>\n",
                styles: [".sky-select-field-multiple-select-mode > .sky-btn {\n  margin-bottom: 10px;\n}\n\n.sky-select-field-single-select-mode .sky-input-group {\n  padding: 0;\n}\n\n.sky-select-field-single-select-mode .sky-input-group .sky-form-control,\n.sky-select-field-single-select-mode .sky-input-group .sky-btn {\n  border: 0;\n}\n\n.sky-select-field-single-select-mode .sky-input-group:hover {\n  cursor: pointer;\n}\n\n.sky-select-field-single-select-mode .sky-input-group .sky-form-control + .sky-input-group-btn .sky-btn {\n  padding-right: 5px;\n}\n\n.sky-select-field-single-select-mode .sky-input-group .sky-input-group-btn + .sky-input-group-btn .sky-btn {\n  padding-left: 5px;\n}\n"],
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    SkyResourcesService,
                    {
                        provide: NG_VALUE_ACCESSOR,
                        /* tslint:disable-next-line:no-forward-ref */
                        useExisting: forwardRef(function () { return SkySelectFieldComponent; }),
                        multi: true
                    }
                ]
            },] },
];
/** @nocollapse */
SkySelectFieldComponent.ctorParameters = function () { return [
    { type: ChangeDetectorRef, },
    { type: SkyModalService, },
    { type: SkyResourcesService, },
]; };
SkySelectFieldComponent.propDecorators = {
    'ariaLabel': [{ type: Input },],
    'ariaLabelledBy': [{ type: Input },],
    'data': [{ type: Input },],
    'descriptorKey': [{ type: Input },],
    'disabled': [{ type: Input },],
    'selectMode': [{ type: Input },],
    'multipleSelectOpenButtonText': [{ type: Input },],
    'singleSelectClearButtonTitle': [{ type: Input },],
    'singleSelectOpenButtonTitle': [{ type: Input },],
    'singleSelectPlaceholderText': [{ type: Input },],
    'pickerHeading': [{ type: Input },],
};
//# sourceMappingURL=select-field.component.js.map