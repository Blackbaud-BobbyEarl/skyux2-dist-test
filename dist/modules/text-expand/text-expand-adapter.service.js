import { Injectable, Renderer } from '@angular/core';
var SkyTextExpandAdapterService = (function () {
    function SkyTextExpandAdapterService(renderer) {
        this.renderer = renderer;
    }
    SkyTextExpandAdapterService.prototype.getContainerHeight = function (containerEl) {
        return containerEl.nativeElement.offsetHeight;
    };
    SkyTextExpandAdapterService.prototype.setContainerHeight = function (containerEl, height) {
        this.renderer.setElementStyle(containerEl.nativeElement, 'max-height', height);
    };
    SkyTextExpandAdapterService.prototype.setText = function (textEl, text) {
        textEl.nativeElement.textContent = text;
    };
    return SkyTextExpandAdapterService;
}());
export { SkyTextExpandAdapterService };
SkyTextExpandAdapterService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SkyTextExpandAdapterService.ctorParameters = function () { return [
    { type: Renderer, },
]; };
//# sourceMappingURL=text-expand-adapter.service.js.map