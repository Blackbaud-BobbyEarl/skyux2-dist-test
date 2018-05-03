import { Injectable, RendererFactory2 } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import { SkyWindowRefService } from '../window';
var SkyAutocompleteAdapterService = (function () {
    function SkyAutocompleteAdapterService(rendererFactory, windowRef) {
        this.rendererFactory = rendererFactory;
        this.windowRef = windowRef;
        this.renderer = this.rendererFactory.createRenderer(undefined, undefined);
    }
    SkyAutocompleteAdapterService.prototype.watchDropdownWidth = function (elementRef) {
        var _this = this;
        Observable
            .fromEvent(this.windowRef.getWindow(), 'resize')
            .subscribe(function () {
            _this.setDropdownWidth(elementRef);
        });
        this.windowRef.getWindow().setTimeout(function () {
            _this.setDropdownWidth(elementRef);
        });
    };
    SkyAutocompleteAdapterService.prototype.setDropdownWidth = function (elementRef) {
        var dropdownContainer = elementRef.nativeElement.querySelector('.sky-popover-container');
        var width = elementRef.nativeElement.getBoundingClientRect().width;
        this.renderer.setStyle(dropdownContainer, 'width', width + "px");
    };
    return SkyAutocompleteAdapterService;
}());
export { SkyAutocompleteAdapterService };
SkyAutocompleteAdapterService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SkyAutocompleteAdapterService.ctorParameters = function () { return [
    { type: RendererFactory2, },
    { type: SkyWindowRefService, },
]; };
//# sourceMappingURL=autocomplete-adapter.service.js.map