import { Injectable, Renderer } from '@angular/core';
var SkyTextExpandRepeaterAdapterService = (function () {
    function SkyTextExpandRepeaterAdapterService(renderer) {
        this.renderer = renderer;
    }
    SkyTextExpandRepeaterAdapterService.prototype.getItems = function (elRef) {
        return elRef.nativeElement.querySelectorAll('.sky-text-expand-repeater-item');
    };
    SkyTextExpandRepeaterAdapterService.prototype.hideItem = function (item) {
        this.renderer.setElementStyle(item, 'display', 'none');
    };
    SkyTextExpandRepeaterAdapterService.prototype.showItem = function (item) {
        this.renderer.setElementStyle(item, 'display', 'list-item');
    };
    SkyTextExpandRepeaterAdapterService.prototype.getContainerHeight = function (containerEl) {
        return containerEl.nativeElement.offsetHeight;
    };
    SkyTextExpandRepeaterAdapterService.prototype.setContainerHeight = function (containerEl, height) {
        this.renderer.setElementStyle(containerEl.nativeElement, 'max-height', height);
    };
    return SkyTextExpandRepeaterAdapterService;
}());
export { SkyTextExpandRepeaterAdapterService };
SkyTextExpandRepeaterAdapterService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SkyTextExpandRepeaterAdapterService.ctorParameters = function () { return [
    { type: Renderer, },
]; };
//# sourceMappingURL=text-expand-repeater-adapter.service.js.map