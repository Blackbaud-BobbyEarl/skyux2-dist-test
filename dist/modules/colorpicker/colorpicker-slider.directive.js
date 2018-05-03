// spell-checker:ignore Colorpicker
import { Directive, Input, Output, ElementRef, EventEmitter, HostListener } from '@angular/core';
var SkyColorpickerSliderDirective = (function () {
    function SkyColorpickerSliderDirective(el) {
        var _this = this;
        this.el = el;
        this.newColorContrast = new EventEmitter();
        this.listenerMove = function (event) { _this.move(event); };
        this.listenerStop = function () { _this.stop(); };
    }
    SkyColorpickerSliderDirective.prototype.setCursor = function (event) {
        var height = this.el.nativeElement.offsetHeight;
        var width = this.el.nativeElement.offsetWidth;
        var xAxis = Math.max(0, Math.min(this.getX(event), width));
        var yAxis = Math.max(0, Math.min(this.getY(event), height));
        if (this.xAxis !== undefined && this.yAxis !== undefined) {
            this.newColorContrast.emit({
                xCoordinate: xAxis / width,
                yCoordinate: (1 - yAxis / height),
                xAxis: this.xAxis,
                yAxis: this.yAxis
            });
        }
        else {
            this.newColorContrast.emit({
                xCoordinate: xAxis / width,
                maxRange: this.xAxis
            });
        }
        /* // No vertical bars
         if (this.xAxis === undefined && this.yAxis !== undefined) {
              this.newColorContrast.emit({ yCoordinate: yAxis / height, maxRange: this.yAxis });
        } */
    };
    SkyColorpickerSliderDirective.prototype.move = function (event) {
        event.preventDefault();
        this.setCursor(event);
    };
    SkyColorpickerSliderDirective.prototype.start = function (event) {
        this.setCursor(event);
        document.addEventListener('mousemove', this.listenerMove);
        document.addEventListener('touchmove', this.listenerMove);
        document.addEventListener('mouseup', this.listenerStop);
        document.addEventListener('touchend', this.listenerStop);
    };
    SkyColorpickerSliderDirective.prototype.stop = function () {
        document.removeEventListener('mousemove', this.listenerMove);
        document.removeEventListener('touchmove', this.listenerMove);
        document.removeEventListener('mouseup', this.listenerStop);
        document.removeEventListener('touchend', this.listenerStop);
    };
    SkyColorpickerSliderDirective.prototype.getX = function (event) {
        return (
        /* Ignoring event.touches as tests are not run on a touch device. */
        /* istanbul ignore next */
        event.pageX !== undefined ? event.pageX : event.touches[0].pageX)
            - this.el.nativeElement.getBoundingClientRect().left
            - window.pageXOffset;
    };
    SkyColorpickerSliderDirective.prototype.getY = function (event) {
        return (
        /* Ignoring event.touches as tests are not run on a touch device. */
        /* istanbul ignore next */
        event.pageY !== undefined ? event.pageY : event.touches[0].pageY)
            - this.el.nativeElement.getBoundingClientRect().top
            - window.pageYOffset;
    };
    return SkyColorpickerSliderDirective;
}());
export { SkyColorpickerSliderDirective };
SkyColorpickerSliderDirective.decorators = [
    { type: Directive, args: [{
                selector: '[skyColorpickerSlider]'
            },] },
];
/** @nocollapse */
SkyColorpickerSliderDirective.ctorParameters = function () { return [
    { type: ElementRef, },
]; };
SkyColorpickerSliderDirective.propDecorators = {
    'newColorContrast': [{ type: Output },],
    'skyColorpickerSlider': [{ type: Input },],
    'color': [{ type: Input },],
    'xAxis': [{ type: Input },],
    'yAxis': [{ type: Input },],
    'start': [{ type: HostListener, args: ['touchstart', ['$event'],] }, { type: HostListener, args: ['mousedown', ['$event'],] },],
};
//# sourceMappingURL=colorpicker-slider.directive.js.map