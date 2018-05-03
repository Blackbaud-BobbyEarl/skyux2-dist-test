import { Component } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { SkyColorpickerMessageType } from '../../core';
var SkyColorpickerDemoComponent = (function () {
    function SkyColorpickerDemoComponent() {
        this.selectedColor1 = '#2889e5';
        this.selectedOutputFormat1 = 'rgba';
        this.selectedOutputFormat3 = 'rgba';
        this.presetColors1 = [
            '#333333',
            '#888888',
            '#EFEFEF',
            '#FFF',
            '#BD4040',
            '#617FC2',
            '#60AC68',
            '#3486BA',
            '#E87134',
            '#DA9C9C',
            '#A1B1A7',
            '#68AFEF'
        ];
        this.colorpickerController = new Subject();
        this.showResetButton = false;
    }
    SkyColorpickerDemoComponent.prototype.onSelectedColorChanged = function (args) {
        console.log('You selected this color:', args);
    };
    SkyColorpickerDemoComponent.prototype.openColorpicker = function () {
        this.sendMessage(SkyColorpickerMessageType.Open);
    };
    SkyColorpickerDemoComponent.prototype.resetColorpicker = function () {
        this.sendMessage(SkyColorpickerMessageType.Reset);
    };
    SkyColorpickerDemoComponent.prototype.toggleResetButton = function () {
        this.sendMessage(SkyColorpickerMessageType.ToggleResetButton);
    };
    SkyColorpickerDemoComponent.prototype.sendMessage = function (type) {
        var message = { type: type };
        this.colorpickerController.next(message);
    };
    return SkyColorpickerDemoComponent;
}());
export { SkyColorpickerDemoComponent };
SkyColorpickerDemoComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-colorpicker-demo',
                template: "<h3>\n  Colorpicker types and formats\n</h3>\n\n<div style=\"margin-bottom: 10px\">\n  <sky-colorpicker\n    (selectedColorChanged)=\"onSelectedColorChanged($event)\"\n    #colorPickerExample1>\n    <input\n      [skyColorpickerInput]=\"colorPickerExample1\"\n      [(ngModel)]=\"color1\"\n      [presetColors]=\"presetColors1\"\n      [initialColor]=\"selectedColor1\"\n      [outputFormat]=\"selectedOutputFormat1\">\n  </sky-colorpicker>\n</div>\n\n<sky-definition-list>\n  <sky-definition-list-content>\n    <sky-definition-list-label>\n      RGBA\n    </sky-definition-list-label>\n    <sky-definition-list-value\n      *ngIf=\"color1?.rgba\">\n      {{color1?.rgba?.red}},\n      {{color1?.rgba?.green}},\n      {{color1?.rgba?.blue}},\n      {{color1?.rgba?.alpha}}\n    </sky-definition-list-value>\n  </sky-definition-list-content>\n  <sky-definition-list-content>\n    <sky-definition-list-label>\n      HSLA\n    </sky-definition-list-label>\n    <sky-definition-list-value\n      *ngIf=\"color1?.hsla\">\n      {{color1?.hsla?.hue}},\n      {{color1?.hsla?.saturation}},\n      {{color1?.hsla?.lightness}},\n      {{color1?.hsla?.alpha}}\n    </sky-definition-list-value>\n  </sky-definition-list-content>\n  <sky-definition-list-content>\n    <sky-definition-list-label>\n      HSVA\n    </sky-definition-list-label>\n    <sky-definition-list-value\n      *ngIf=\"color1?.hsva\">\n      {{color1?.hsva?.hue}},\n      {{color1?.hsva?.saturation}},\n      {{color1?.hsva?.value}},\n      {{color1?.hsva?.alpha}}\n    </sky-definition-list-value>\n  </sky-definition-list-content>\n  <sky-definition-list-content>\n    <sky-definition-list-label>\n      CMYK\n    </sky-definition-list-label>\n    <sky-definition-list-value\n      *ngIf=\"color1?.cmyk\">\n      {{color1?.cmyk?.cyan}},\n      {{color1?.cmyk?.magenta}},\n      {{color1?.cmyk?.yellow}},\n      {{color1?.cmyk?.key}}\n    </sky-definition-list-value>\n  </sky-definition-list-content>\n</sky-definition-list>\n\n<div style=\"margin-bottom: 10px\">\n  <sky-colorpicker #colorPickerExample2>\n    <input\n      type=\"text\"\n      [skyColorpickerInput]=\"colorPickerExample2\"\n      [(ngModel)]=\"color2\">\n  </sky-colorpicker>\n</div>\n\n<sky-definition-list>\n  <sky-definition-list-content>\n    <sky-definition-list-label>\n      HEX\n    </sky-definition-list-label>\n    <sky-definition-list-value *ngIf=\"color2?.hex\">\n      {{color2?.hex}}\n    </sky-definition-list-value>\n  </sky-definition-list-content>\n  <sky-definition-list-content>\n    <sky-definition-list-label>\n      RGBA CSS\n    </sky-definition-list-label>\n    <sky-definition-list-value *ngIf=\"color2?.rgbaText\">\n      <div style=\"margin-bottom: 5px;\">\n        {{color2?.rgbaText}}\n      </div>\n      <div style=\"border-color: #999;width: 28px;height: 28px;border-radius: 50%;border-width: 2px;border-style: solid;\">\n        <div [style.background-color]=\"color2?.rgbaText\" style=\"width:24px;height:24px;    border-radius: 50%;\">&nbsp;</div>\n      </div>\n    </sky-definition-list-value>\n  </sky-definition-list-content>\n</sky-definition-list>\n\n<h3>\n  Interacting with a colorpicker programmatically\n</h3>\n\n<sky-colorpicker\n  [messageStream]=\"colorpickerController\"\n  [showResetButton]=\"showResetButton\"\n  (selectedColorChanged)=\"onSelectedColorChanged($event)\"\n  #colorPickerExample3>\n  <input\n    [skyColorpickerInput]=\"colorPickerExample3\"\n    [(ngModel)]=\"color3\"\n    [outputFormat]=\"selectedOutputFormat3\">\n</sky-colorpicker>\n\n<sky-definition-list>\n  <sky-definition-list-content>\n    <sky-definition-list-label>\n      HEX\n    </sky-definition-list-label>\n    <sky-definition-list-value *ngIf=\"color3?.hex\">\n      {{color3?.hex}}\n    </sky-definition-list-value>\n  </sky-definition-list-content>\n  <sky-definition-list-content>\n    <sky-definition-list-label>\n      RGBA CSS\n    </sky-definition-list-label>\n    <sky-definition-list-value *ngIf=\"color3?.rgbaText\">\n      <div style=\"margin-bottom: 5px;\">\n        {{color3?.rgbaText}}\n      </div>\n      <div style=\"border-color:#999; width:28px; height:28px; border-radius:50%; border-width:2px; border-style:solid;\">\n        <div\n          [style.background-color]=\"color3?.rgbaText\"\n          style=\"width:24px; height:24px; border-radius:50%;\">\n        </div>\n      </div>\n    </sky-definition-list-value>\n  </sky-definition-list-content>\n</sky-definition-list>\n\n<p>\n  <button\n    type=\"button\"\n    class=\"sky-btn sky-btn-default\"\n    (click)=\"openColorpicker()\">\n    Open colorpicker\n  </button>\n\n  <button\n    type=\"button\"\n    class=\"sky-btn sky-btn-default\"\n    (click)=\"resetColorpicker()\">\n    Reset colorpicker\n  </button>\n\n  <button\n    type=\"button\"\n    class=\"sky-btn sky-btn-default\"\n    (click)=\"toggleResetButton()\">\n    Toggle reset button\n  </button>\n</p>\n"
            },] },
];
/** @nocollapse */
SkyColorpickerDemoComponent.ctorParameters = function () { return []; };
//# sourceMappingURL=colorpicker-demo.component.js.map