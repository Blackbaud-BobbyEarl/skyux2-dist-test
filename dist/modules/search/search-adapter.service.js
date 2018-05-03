import { Injectable, Renderer } from '@angular/core';
var SkySearchAdapterService = (function () {
    function SkySearchAdapterService(renderer) {
        this.renderer = renderer;
    }
    SkySearchAdapterService.prototype.selectInput = function (searchEl) {
        this.renderer.invokeElementMethod(this.getInputEl(searchEl), 'select');
    };
    SkySearchAdapterService.prototype.focusInput = function (searchEl) {
        this.renderer.invokeElementMethod(this.getInputEl(searchEl), 'focus');
    };
    SkySearchAdapterService.prototype.startInputAnimation = function (searchEl) {
        var buttonWidth = this.getSearchOpenButtonEl(searchEl).clientWidth;
        var offsetWidth = this.getSearchContainerEl(searchEl).offsetLeft;
        var minWidth = buttonWidth + offsetWidth;
        this.getInputContainerEl(searchEl).style.minWidth = minWidth.toString() + 'px';
        this.renderer.setElementStyle(this.getInputContainerEl(searchEl), 'min-width', minWidth.toString() + 'px');
    };
    SkySearchAdapterService.prototype.endInputAnimation = function (searchEl) {
        this.renderer.setElementStyle(this.getInputContainerEl(searchEl), 'min-width', undefined);
    };
    SkySearchAdapterService.prototype.getInputContainerEl = function (searchEl) {
        return searchEl.nativeElement.querySelector('.sky-search-input-container');
    };
    SkySearchAdapterService.prototype.getSearchOpenButtonEl = function (searchEl) {
        return searchEl.nativeElement.querySelector('.sky-search-btn-open');
    };
    SkySearchAdapterService.prototype.getSearchContainerEl = function (searchEl) {
        return searchEl.nativeElement.querySelector('.sky-search-container');
    };
    SkySearchAdapterService.prototype.getInputEl = function (searchEl) {
        return searchEl.nativeElement.querySelector('input');
    };
    return SkySearchAdapterService;
}());
export { SkySearchAdapterService };
SkySearchAdapterService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SkySearchAdapterService.ctorParameters = function () { return [
    { type: Renderer, },
]; };
//# sourceMappingURL=search-adapter.service.js.map