import { Component, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { SkyDropdownMessageType } from '../dropdown';
import { SkyColorpickerMessageType } from './types';
import { SkyColorpickerService } from './colorpicker.service';
import { SliderPosition, SliderDimension } from './colorpicker-classes';
var componentIdIndex = 0;
var SkyColorpickerComponent = (function () {
    function SkyColorpickerComponent(service) {
        this.service = service;
        this.selectedColorChanged = new EventEmitter();
        this.messageStream = new Subject();
        this.showResetButton = true;
        this.dropdownController = new Subject();
        this.ngUnsubscribe = new Subject();
        componentIdIndex++;
        this.idIndex = componentIdIndex;
        this.skyColorpickerRedId = 'sky-colorpicker-red-' + this.idIndex;
        this.skyColorpickerHexId = 'sky-colorpicker-hex-' + this.idIndex;
        this.skyColorpickerRedId = 'sky-colorpicker-red-' + this.idIndex;
        this.skyColorpickerGreenId = 'sky-colorpicker-green-' + this.idIndex;
        this.skyColorpickerBlueId = 'sky-colorpicker-blue-' + this.idIndex;
        this.skyColorpickerAlphaId = 'sky-colorpicker-alpha-' + this.idIndex;
    }
    SkyColorpickerComponent.prototype.keyboardInput = function (event) {
        /* Ignores in place for valid code that is only used in IE and Edge */
        /* istanbul ignore next */
        var code = event.code || event.key;
        /* istanbul ignore else */
        if (code && code.toLowerCase().indexOf('esc') === 0) {
            this.closeColorPicker.nativeElement.click();
        }
    };
    SkyColorpickerComponent.prototype.setDialog = function (instance, elementRef, color, outputFormat, presetColors, alphaChannel) {
        this.initialColor = color;
        this.outputFormat = outputFormat;
        this.presetColors = presetColors;
        this.alphaChannel = alphaChannel;
        if (this.outputFormat === 'rgba') {
            this.format = 1;
        }
        else if (this.outputFormat === 'hsla') {
            this.format = 2;
        }
        else {
            this.format = 0;
        }
    };
    SkyColorpickerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sliderDimMax = new SliderDimension(182, 270, 170, 182);
        this.slider = new SliderPosition(0, 0, 0, 0);
        this.messageStream
            .takeUntil(this.ngUnsubscribe)
            .subscribe(function (message) {
            _this.handleIncomingMessages(message);
        });
    };
    SkyColorpickerComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    SkyColorpickerComponent.prototype.closePicker = function () {
        this.setColorFromString(this.initialColor);
        this.closeDropdown();
    };
    SkyColorpickerComponent.prototype.resetPickerColor = function () {
        this.sendMessage(SkyColorpickerMessageType.Reset);
    };
    SkyColorpickerComponent.prototype.applyColor = function () {
        this.selectedColorChanged.emit(this.selectedColor);
        this.initialColor = this.selectedColor.rgbaText;
        this.closeDropdown();
    };
    SkyColorpickerComponent.prototype.setColorFromString = function (value) {
        var hsva;
        if (this.alphaChannel === 'hex8') {
            hsva = this.service.stringToHsva(value, true);
            if (!hsva && !this.hsva) {
                hsva = this.service.stringToHsva(value, false);
            }
        }
        else {
            hsva = this.service.stringToHsva(value, false);
        }
        if (hsva) {
            this.hsva = hsva;
            this.update();
        }
    };
    Object.defineProperty(SkyColorpickerComponent.prototype, "hue", {
        set: function (change) {
            this.hsva.hue = change.xCoordinate / change.maxRange;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyColorpickerComponent.prototype, "red", {
        set: function (change) {
            var rgba = this.service.hsvaToRgba(this.hsva);
            rgba.red = change.colorValue / change.maxRange;
            this.hsva = this.service.rgbaToHsva(rgba);
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyColorpickerComponent.prototype, "green", {
        set: function (change) {
            var rgba = this.service.hsvaToRgba(this.hsva);
            rgba.green = change.colorValue / change.maxRange;
            this.hsva = this.service.rgbaToHsva(rgba);
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyColorpickerComponent.prototype, "blue", {
        set: function (change) {
            var rgba = this.service.hsvaToRgba(this.hsva);
            rgba.blue = change.colorValue / change.maxRange;
            this.hsva = this.service.rgbaToHsva(rgba);
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyColorpickerComponent.prototype, "alphaAxis", {
        set: function (change) {
            this.hsva.alpha = change.xCoordinate / change.maxRange;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyColorpickerComponent.prototype, "alphaColor", {
        set: function (change) {
            this.hsva.alpha = change.colorValue / change.maxRange;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyColorpickerComponent.prototype, "hex", {
        set: function (change) {
            this.setColorFromString(change.color);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyColorpickerComponent.prototype, "saturationAndLightness", {
        set: function (value) {
            this.hsva.saturation = value.xCoordinate / value.xAxis;
            this.hsva.value = value.yCoordinate / value.yAxis;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    SkyColorpickerComponent.prototype.update = function () {
        var hsla = this.service.hsva2hsla(this.hsva);
        var dHsla = this.service.denormalizeHSLA(hsla);
        var rgba = this.service.hsvaToRgba(this.hsva);
        var dRgba = this.service.denormalizeRGBA(rgba);
        var hsva = {
            'hue': this.hsva.hue,
            'saturation': 1,
            'value': 1,
            'alpha': 1
        };
        var hueRgba = this.service.denormalizeRGBA(this.service.hsvaToRgba(hsva));
        this.hslaText = dHsla;
        this.rgbaText = dRgba;
        this.hexText = this.service.hexText(dRgba, this.alphaChannel === 'hex8');
        this.alphaSliderColor = "rgba(" + dRgba.red + "," + dRgba.green + "," + dRgba.blue + "," + dRgba.alpha + ")";
        this.hueSliderColor = "rgba(" + hueRgba.red + "," + hueRgba.green + "," + hueRgba.blue + "," + rgba.alpha + ")";
        if (this.format === 0 && this.hsva.alpha < 1 && this.alphaChannel === 'hex6') {
            this.format++;
        }
        var lastOutput = this.outputColor;
        this.outputColor = this.service.outputFormat(this.hsva, this.outputFormat, this.alphaChannel === 'hex8');
        this.selectedColor = this.service.skyColorpickerOut(this.hsva);
        this.slider = new SliderPosition((this.hsva.hue) * this.sliderDimMax.hue - 8, this.hsva.saturation * this.sliderDimMax.saturation - 8, (1 - this.hsva.value) * this.sliderDimMax.value - 8, this.hsva.alpha * this.sliderDimMax.alpha - 8);
        if (lastOutput !== this.outputColor) {
            this.selectedColorChanged.emit(this.selectedColor);
        }
    };
    SkyColorpickerComponent.prototype.sendMessage = function (type) {
        this.messageStream.next({ type: type });
    };
    SkyColorpickerComponent.prototype.handleIncomingMessages = function (message) {
        /* tslint:disable-next-line:switch-default */
        switch (message.type) {
            case SkyColorpickerMessageType.Open:
                this.dropdownController.next({
                    type: SkyDropdownMessageType.Open
                });
                break;
            case SkyColorpickerMessageType.Reset:
                this.setColorFromString('#fff');
                break;
            case SkyColorpickerMessageType.ToggleResetButton:
                this.showResetButton = !this.showResetButton;
                break;
        }
    };
    SkyColorpickerComponent.prototype.closeDropdown = function () {
        this.dropdownController.next({
            type: SkyDropdownMessageType.Close
        });
    };
    return SkyColorpickerComponent;
}());
export { SkyColorpickerComponent };
SkyColorpickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-colorpicker',
                template: "<div\n  class=\"sky-input-group\"\n  [ngClass]=\"{ 'sky-colorpicker-hidden': !isVisible }\">\n  <ng-content>\n  </ng-content>\n  <sky-dropdown\n    [messageStream]=\"dropdownController\">\n    <sky-dropdown-menu>\n      <div class=\"sky-colorpicker-container\">\n        <div\n          class=\"sky-colorpicker\"\n          #colorPicker>\n          <div\n            [skyColorpickerSlider]\n            [style.background-color]=\"hueSliderColor\"\n            [xAxis]=\"1\"\n            [yAxis]=\"1\"\n            (newColorContrast)=\"saturationAndLightness=$event\"\n            class=\"saturation-lightness\"\n            [color]=\"slider.saturation - slider.value\">\n            <div\n              [style.left.px]=\"slider.saturation\"\n              [style.top.px]=\"slider.value\"\n              class=\"cursor\">\n            </div>\n          </div>\n          <div class=\"box\">\n            <div class=\"left\">\n              <div class=\"selected-color-background\">\n              </div>\n              <div\n                [style.background-color]=\"selectedColor?.rgbaText\"\n                class=\"selected-color\">\n              </div>\n            </div>\n            <div class=\"right\">\n              <div\n                [skyColorpickerSlider]\n                [xAxis]=\"1\"\n                (newColorContrast)=\"hue=$event\"\n                class=\"hue\"\n                #hueSlider>\n                <div\n                  [style.left.px]=\"slider.hue\"\n                  class=\"cursor\">\n                </div>\n              </div>\n              <div\n                [skyColorpickerSlider]\n                [style.background-color]=\"alphaSliderColor\"\n                [xAxis]=\"1\"\n                (newColorContrast)=\"alphaAxis=$event\"\n                class=\"alpha\"\n                #alphaSlider>\n                <div\n                  [style.left.px]=\"slider.alpha\"\n                  class=\"cursor\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"rgba-text\">\n            <div class=\"box\">\n              <label\n                [for]=\"skyColorpickerHexId\"\n                [attr.aria-label]=\"'colorpicker_hex_aria' | skyResources\">\n                {{ 'colorpicker_hex' | skyResources }}\n              </label>\n              <label\n                [for]=\"skyColorpickerRedId\"\n                [attr.aria-label]=\"'colorpicker_red_aria' | skyResources\">\n                {{ 'colorpicker_red' | skyResources }}\n              </label>\n              <label\n                [for]=\"skyColorpickerGreenId\"\n                [attr.aria-label]=\"'colorpicker_green_aria' | skyResources\">\n                {{ 'colorpicker_green' | skyResources }}\n              </label>\n              <label\n                [for]=\"skyColorpickerBlueId\"\n                [attr.aria-label]=\"'colorpicker_blue_aria' | skyResources\">\n                {{ 'colorpicker_blue' | skyResources }}\n              </label>\n              <label\n                [for]=\"skyColorpickerAlphaId\"\n                [attr.aria-label]=\"'colorpicker_alpha_aria' | skyResources\">\n                {{ 'colorpicker_alpha' | skyResources }}\n              </label>\n            </div>\n            <div class=\"box\">\n              <input\n                [id]=\"skyColorpickerHexId\"\n                [skyColorpickerText]\n                (newColorContrast)=\"hex=$event\"\n                [value]=\"hexText\"\n                pattern=\"^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$\">\n              <input\n                [id]=\"skyColorpickerRedId\"\n                [skyColorpickerText]\n                type=\"number\"\n                pattern=\"[0-9]*\"\n                min=\"0\"\n                max=\"255\"\n                [maxRange]=\"255\"\n                (newColorContrast)=\"red=$event\"\n                [value]=\"rgbaText?.red\">\n              <input\n                [id]=\"skyColorpickerGreenId\"\n                [skyColorpickerText]\n                type=\"number\"\n                pattern=\"[0-9]*\"\n                min=\"0\"\n                max=\"255\"\n                [maxRange]=\"255\"\n                (newColorContrast)=\"green=$event\"\n                [value]=\"rgbaText?.green\">\n              <input\n                [id]=\"skyColorpickerBlueId\"\n                [skyColorpickerText]\n                type=\"number\"\n                pattern=\"[0-9]*\"\n                min=\"0\"\n                max=\"255\"\n                [maxRange]=\"255\"\n                (newColorContrast)=\"blue=$event\"\n                [value]=\"rgbaText?.blue\">\n              <input\n                [id]=\"skyColorpickerAlphaId\"\n                [skyColorpickerText]\n                type=\"number\"\n                pattern=\"[0-9]+([.,][0-9]{1,2})?\"\n                min=\"0\"\n                max=\"1\"\n                step=\"0.1\"\n                [maxRange]=\"1\"\n                (newColorContrast)=\"alphaColor=$event\"\n                [value]=\"rgbaText?.alpha\">\n            </div>\n          </div>\n\n          <div\n            *ngIf=\"presetColors && presetColors.length\"\n            class=\"sky-colorpicker-preset-color-area\">\n            <button\n              *ngFor=\"let color of presetColors | slice:0:12; let i = index;\"\n              class=\"sky-preset-color\"\n              type=\"button\"\n              [attr.aria-label]=\"('colorpicker_preset_color' | skyResources) + ' ' + color\"[style.backgroundColor]=\"color\"\n              (click)=\"setColorFromString(color)\">\n            </button>\n          </div>\n        </div>\n\n        <div class=\"sky-colorpicker-container sky-colorpicker-footer\">\n          <section class=\"sky-colorpicker-column\">\n            <button\n              class=\"sky-btn sky-btn-primary sky-btn-colorpicker-apply\"\n              type=\"button\"\n              [attr.aria-label]=\"'colorpicker_apply' | skyResources\"\n              (click)=\"applyColor()\">\n              {{ 'colorpicker_apply' | skyResources }}\n            </button>\n            <button\n              class=\"sky-btn sky-btn-link sky-btn-colorpicker-close\"\n              type=\"button\"\n              [attr.aria-label]=\"'colorpicker_close' | skyResources\"\n              (click)=\"closePicker()\"\n              #closeColorPicker>\n              {{ 'colorpicker_close' | skyResources }}\n            </button>\n          </section>\n        </div>\n      </div>\n    </sky-dropdown-menu>\n  </sky-dropdown>\n<div *ngIf=\"showResetButton\">\n  <button\n    class=\"sky-colorpicker-reset-button\"\n    type=\"button\"\n    [attr.aria-label]=\"'colorpicker_reset' | skyResources\"\n    (click)=\"resetPickerColor()\">\n  </button>\n</div>\n</div>\n",
                styles: [":host-context(sky-colorpicker) ::ng-deep .sky-dropdown-button {\n  padding: 0;\n  position: relative;\n  z-index: 1;\n  border-color: transparent;\n  left: -30px;\n  height: 30px;\n  width: 30px;\n  color: transparent;\n  background-color: transparent;\n}\n\n:host-context(sky-colorpicker) /deep/ .sky-colorpicker-input {\n  background-image: url(\"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2230%22%20height%3D%2230%22%20viewBox%3D%220%200%2030%2030%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%3Cdefs%3E%3Cpath%20id%3D%22a%22%20d%3D%22M0%200h30v30H0V0zm14.5%204H4v22h14v-8h8V4H14.5z%22%2F%3E%3C%2Fdefs%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cuse%20fill%3D%22%23FFF%22%20xlink%3Ahref%3D%22%23a%22%2F%3E%3Cpath%20stroke%3D%22%23CCC%22%20d%3D%22M.5.5v29h29V.5H.5zm18%2018v8h-15v-23h23v15h-8z%22%2F%3E%3Cpath%20fill%3D%22%23292A2B%22%20d%3D%22M23.5%2025L21%2022h5%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");\n  width: 30px;\n  height: 30px;\n  background-repeat: 20px;\n  border: none;\n  pointer-events: none;\n  z-index: 1;\n  flex: none;\n}\n\n.sky-colorpicker-reset-button::before {\n  content: '\\f00d';\n  font-family: FontAwesome;\n  font-size: 15px;\n}\n\n.sky-colorpicker-reset-button {\n  background-color: #ffffff;\n  margin: 0px;\n  border-top: 1px solid #e2e3e4;\n  border-right: 1px solid #e2e3e4;\n  border-bottom: 1px solid #e2e3e4;\n  border-left: 1px solid #e2e3e4;\n  box-shadow: inset 0 0 0 2px #ffffff, inset 0 0 0 3px #cdcfd2;\n  width: 30px;\n  height: 30px;\n  position: relative;\n  left: -25px;\n  cursor: pointer;\n  color: #686c73;\n}\n\n.sky-colorpicker-reset-button:hover {\n  color: #383a3d;\n}\n\n.sky-colorpicker-hidden {\n  width: 0px;\n  height: 0px;\n  overflow: hidden;\n}\n\n.sky-colorpicker-footer {\n  background-color: #ffffff;\n  padding: 15px;\n  border-top: 1px solid #e2e3e4;\n}\n\n.sky-colorpicker * {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  margin: 0;\n}\n\n.sky-colorpicker {\n  cursor: default;\n  width: 270px;\n  height: auto;\n  background-color: #ffffff;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.sky-colorpicker i {\n  cursor: default;\n  position: relative;\n}\n\n.sky-colorpicker input {\n  text-align: center;\n  font-size: 14px;\n  height: 26px;\n  color: #282b31;\n  -moz-appearance: textfield;\n}\n\n.sky-colorpicker input:invalid {\n  box-shadow: none;\n}\n\n.sky-colorpicker input:-moz-submit-invalid {\n  box-shadow: none;\n}\n\n.sky-colorpicker input:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n.sky-colorpicker input::-webkit-inner-spin-button, .sky-colorpicker input::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n.sky-colorpicker .button-area {\n  padding: 0 15px 15px 15px;\n  text-align: right;\n}\n\n.sky-colorpicker .sky-colorpicker-preset-color-area {\n  padding-left: 9px;\n  padding-right: 9px;\n  padding-bottom: 15px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  flex-flow: row wrap;\n}\n\n.sky-colorpicker .sky-colorpicker-preset-color-area .sky-preset-color {\n  cursor: pointer;\n  display: flex;\n  width: 32px;\n  height: 32px;\n  margin: 5px;\n  border-top: 1px solid #e2e3e4;\n  border-right: 1px solid #e2e3e4;\n  border-bottom: 1px solid #e2e3e4;\n  border-left: 1px solid #e2e3e4;\n}\n\n.sky-colorpicker .sky-colorpicker-preset-color-area .sky-preset-color:hover {\n  cursor: pointer;\n  border: #ffffff solid 2px;\n  margin: 4px;\n  width: 34px;\n  height: 34px;\n  box-shadow: 0 0 0 1px #cdcfd2, 0 0 0 2px #e2e3e4;\n}\n\n.sky-colorpicker .arrow {\n  height: 0;\n  width: 0;\n  border-style: solid;\n  position: absolute;\n  z-index: 999999;\n}\n\n.sky-colorpicker div.cursor-sv {\n  cursor: default;\n  position: relative;\n  -moz-border-radius: 50%;\n  -webkit-border-radius: 50%;\n  border-radius: 50%;\n  -khtml-border-radius: 50%;\n  width: 14px;\n  height: 14px;\n  border-top: 1px solid #cdcfd2;\n  border-right: 1px solid #cdcfd2;\n  border-bottom: 1px solid #cdcfd2;\n  border-left: 1px solid #cdcfd2;\n}\n\n.sky-colorpicker div.cursor {\n  cursor: default;\n  position: relative;\n  -moz-border-radius: 50%;\n  -webkit-border-radius: 50%;\n  border-radius: 50%;\n  -khtml-border-radius: 50%;\n  width: 17px;\n  height: 17px;\n  border: #686c73 solid 2px;\n}\n\n.sky-colorpicker .saturation-lightness {\n  cursor: pointer;\n  width: 100%;\n  height: 170px;\n  border: none;\n  background-size: 100% 100%;\n  background-image: url(\"data:image/png;base64,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\");\n}\n\n.sky-colorpicker .box {\n  display: flex;\n  padding: 4px 8px;\n}\n\n.sky-colorpicker .box .left {\n  position: relative;\n  padding: 16px 8px;\n}\n\n.sky-colorpicker .box .right {\n  flex: 1 1 auto;\n  padding: 12px 8px;\n}\n\n.sky-colorpicker .hue {\n  cursor: pointer;\n  width: 100%;\n  height: 16px;\n  border: none;\n  margin-bottom: 16px;\n  background-size: 100% 100%;\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwkUFWbCCAAAAFxJREFUaN7t0kEKg0AQAME2x83/n2qu5qCgD1iDhCoYdpnbQC9bbY1qVO/jvc6k3ad91s7/7F1/csgPrujuQ17BDYSFsBAWwgJhISyEBcJCWAgLhIWwEBYIi2f7Ar/1TCgFH2X9AAAAAElFTkSuQmCC\");\n}\n\n.sky-colorpicker .alpha {\n  cursor: pointer;\n  width: 100%;\n  height: 16px;\n  border: none;\n  background-size: 100% 100%;\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwYQlZMa3gAAAWVJREFUaN7tmEGO6jAQRCsOArHgBpyAJYGjcGocxAm4A2IHpmoWE0eBH+ezmFlNvU06shJ3W6VEelWMUQAIIF9f6qZpimsA1LYtS2uF51/u27YVAFZVRUkEoGHdPV/sIcbIEIIkUdI/9Xa7neyv61+SWFUVAVCSct00TWn2fv6u3+Ecfd3tXzy/0+nEUu+SPjo/kqzrmiQpScN6v98XewfA8/lMkiLJ2WxGSUopcT6fM6U0NX9/frfbjev1WtfrlZfLhYfDQQHG/AIOlnGwjINlHCxjHCzjYJm/TJWdCwquJXseFFzGwDNNeiKMOJTO8xQdDQaeB29+K9efeLaBo9J7vdvtJj1RjFFjfiv7qv95tjx/7leSQgh93e1ffMeIp6O+YQjho/N791t1XVOSSI7N//K+4/GoxWLBx+PB5/Op5XLJ+/3OlJJWqxU3m83ovv5iGf8KjYNlHCxjHCzjYBkHy5gf5gusvQU7U37jTAAAAABJRU5ErkJggg==\");\n}\n\n.sky-colorpicker .selected-color {\n  width: 40px;\n  height: 40px;\n  top: 16px;\n  left: 8px;\n  position: absolute;\n  -moz-border-radius: 50%;\n  -webkit-border-radius: 50%;\n  border-radius: 50%;\n  -khtml-border-radius: 50%;\n}\n\n.sky-colorpicker .selected-color-background {\n  width: 40px;\n  height: 40px;\n  -moz-border-radius: 50%;\n  -webkit-border-radius: 50%;\n  border-radius: 50%;\n  -khtml-border-radius: 50%;\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAh0lEQVRYR+2W0QlAMQgD60zdfwOdqa8TmI/wQMr5K0I5bZLIzLOa2nt37VVVbd+dDx5obgCC3KBLwJ2ff4PnVidkf+ucIhw80HQaCLo3DMH3CRK3iFsmAWVl6hPNDwt8EvNE5q+YuEXcMgkonVM6SdyCoEvAnZ8v1Hjx817MilmxSUB5rdLJDycZgUAZUch/AAAAAElFTkSuQmCC\");\n}\n\n.sky-colorpicker .hsla-text,\n.sky-colorpicker .rgba-text {\n  width: 100%;\n  font-size: 18px;\n  padding: 7px;\n}\n\n.sky-colorpicker .hsla-text .box,\n.sky-colorpicker .rgba-text .box {\n  padding: 0 8px 8px 8px;\n}\n\n.sky-colorpicker .hsla-text .box input:first-of-type,\n.sky-colorpicker .rgba-text .box input:first-of-type {\n  flex: 2;\n}\n\n.sky-colorpicker .hsla-text .box input,\n.sky-colorpicker .rgba-text .box input {\n  min-width: 0;\n  flex: 1;\n  margin: 0;\n  float: left;\n  margin-right: 8px;\n  border-top: 1px solid #e2e3e4;\n  border-right: 1px solid #e2e3e4;\n  border-bottom: 1px solid #e2e3e4;\n  border-left: 1px solid #e2e3e4;\n  padding: 1px;\n}\n\n.sky-colorpicker .hsla-text .box input:last-child,\n.sky-colorpicker .rgba-text .box input:last-child {\n  margin-right: 0;\n}\n\n.sky-colorpicker .hsla-text .box label:first-of-type,\n.sky-colorpicker .rgba-text .box label:first-of-type {\n  flex: 2;\n}\n\n.sky-colorpicker .hsla-text .box label,\n.sky-colorpicker .rgba-text .box label {\n  flex: 1;\n  text-align: left;\n  margin-right: 8px;\n}\n\n.sky-colorpicker .hsla-text .box label:last-child,\n.sky-colorpicker .rgba-text .box label:last-child {\n  margin-right: 0;\n}\n\n.sky-colorpicker .hex-text {\n  width: 100%;\n  font-size: 14px;\n  padding: 4px 8px;\n}\n\n.sky-colorpicker .hex-text .box {\n  padding: 0 24px 8px 8px;\n}\n\n.sky-colorpicker .hex-text .box input {\n  flex: 1 1 auto;\n  border-top: 1px solid #e2e3e4;\n  border-right: 1px solid #e2e3e4;\n  border-bottom: 1px solid #e2e3e4;\n  border-left: 1px solid #e2e3e4;\n  padding: 1px;\n}\n\n.sky-colorpicker .hex-text .box div {\n  flex: 1 1 auto;\n  text-align: center;\n  color: #686c73;\n  float: left;\n  clear: left;\n}\n"]
            },] },
];
/** @nocollapse */
SkyColorpickerComponent.ctorParameters = function () { return [
    { type: SkyColorpickerService, },
]; };
SkyColorpickerComponent.propDecorators = {
    'selectedColorChanged': [{ type: Output },],
    'messageStream': [{ type: Input },],
    'showResetButton': [{ type: Input },],
    'closeColorPicker': [{ type: ViewChild, args: ['closeColorPicker',] },],
    'keyboardInput': [{ type: HostListener, args: ['document:keydown', ['$event'],] },],
};
//# sourceMappingURL=colorpicker.component.js.map