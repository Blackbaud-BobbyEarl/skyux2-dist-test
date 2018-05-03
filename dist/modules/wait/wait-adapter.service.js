import { Injectable, Renderer } from '@angular/core';
var SkyWaitAdapterService = (function () {
    function SkyWaitAdapterService(renderer) {
        this.renderer = renderer;
    }
    SkyWaitAdapterService.prototype.setWaitBounds = function (waitEl) {
        this.renderer.setElementStyle(waitEl.nativeElement.parentElement, 'position', 'relative');
    };
    SkyWaitAdapterService.prototype.removeWaitBounds = function (waitEl) {
        this.renderer.setElementStyle(waitEl.nativeElement.parentElement, 'position', undefined);
    };
    SkyWaitAdapterService.prototype.setBusyState = function (waitEl, isFullPage, isWaiting) {
        var busyEl = isFullPage ? document.body : waitEl.nativeElement.parentElement;
        var state = isWaiting ? 'true' : undefined;
        this.renderer.setElementAttribute(busyEl, 'aria-busy', state);
    };
    return SkyWaitAdapterService;
}());
export { SkyWaitAdapterService };
SkyWaitAdapterService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SkyWaitAdapterService.ctorParameters = function () { return [
    { type: Renderer, },
]; };
//# sourceMappingURL=wait-adapter.service.js.map