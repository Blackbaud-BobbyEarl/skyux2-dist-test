import { Injectable, RendererFactory2 } from '@angular/core';
import { SkyWindowRefService } from '../window';
var SkyFlyoutAdapterService = (function () {
    function SkyFlyoutAdapterService(rendererFactory, windowRef) {
        this.rendererFactory = rendererFactory;
        this.windowRef = windowRef;
        this.renderer = this.rendererFactory.createRenderer(undefined, undefined);
    }
    SkyFlyoutAdapterService.prototype.appendToBody = function (element) {
        var body = this.windowRef.getWindow().document.body;
        this.renderer.appendChild(body, element);
    };
    SkyFlyoutAdapterService.prototype.removeHostElement = function () {
        var document = this.windowRef.getWindow().document;
        var hostElement = document.querySelector('sky-flyout');
        this.renderer.removeChild(document.body, hostElement);
    };
    SkyFlyoutAdapterService.prototype.adjustHeaderForHelp = function (header) {
        var windowObj = this.windowRef.getWindow();
        var helpWidget = windowObj.document.getElementById('bb-help-invoker');
        if (helpWidget) {
            this.renderer.addClass(header.nativeElement, 'sky-flyout-help-shim');
        }
    };
    return SkyFlyoutAdapterService;
}());
export { SkyFlyoutAdapterService };
SkyFlyoutAdapterService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SkyFlyoutAdapterService.ctorParameters = function () { return [
    { type: RendererFactory2, },
    { type: SkyWindowRefService, },
]; };
//# sourceMappingURL=flyout-adapter.service.js.map