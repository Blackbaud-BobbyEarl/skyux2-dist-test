// spell-checker:ignore Colorpicker
import { Directive, Input, Output, EventEmitter, HostListener } from '@angular/core';
var SkyColorpickerTextDirective = (function () {
    function SkyColorpickerTextDirective() {
        this.newColorContrast = new EventEmitter();
    }
    SkyColorpickerTextDirective.prototype.changeInput = function (event) {
        var element = event.target;
        var elementValue = parseFloat(element.value);
        if (this.maxRange === undefined) {
            this.newColorContrast.emit({
                color: element.value,
                colorValue: undefined,
                maxRange: undefined
            });
        }
        if (!isNaN(elementValue) && elementValue >= 0 && elementValue <= this.maxRange) {
            this.newColorContrast.emit({
                color: this.color,
                colorValue: elementValue,
                maxRange: this.maxRange
            });
        }
    };
    return SkyColorpickerTextDirective;
}());
export { SkyColorpickerTextDirective };
SkyColorpickerTextDirective.decorators = [
    { type: Directive, args: [{
                selector: '[skyColorpickerText]'
            },] },
];
/** @nocollapse */
SkyColorpickerTextDirective.ctorParameters = function () { return []; };
SkyColorpickerTextDirective.propDecorators = {
    'newColorContrast': [{ type: Output },],
    'skyColorpickerText': [{ type: Input },],
    'color': [{ type: Input },],
    'maxRange': [{ type: Input },],
    'changeInput': [{ type: HostListener, args: ['input', ['$event'],] },],
};
//# sourceMappingURL=colorpicker-text.directive.js.map