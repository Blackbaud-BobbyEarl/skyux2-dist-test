import { Component } from '@angular/core';
import { SkyModalService } from '../../core';
import { SkySectionedModalFormDemoComponent } from './sectioned-modal-form-demo.component';
var SkySectionedFormDemoComponent = (function () {
    function SkySectionedFormDemoComponent(modal) {
        this.modal = modal;
    }
    SkySectionedFormDemoComponent.prototype.openModal = function () {
        var modalInstance = this.modal.open(SkySectionedModalFormDemoComponent);
        modalInstance.closed.subscribe(function (result) {
            if (result.reason === 'cancel') {
                console.log("Modal cancelled with data " + result.data);
            }
            else if (result.reason === 'save') {
                console.log("Modal saved with data " + result.data);
            }
        });
    };
    SkySectionedFormDemoComponent.prototype.ngAfterContentChecked = function () {
        this.activeIndexDisplay = this._activeIndex;
    };
    SkySectionedFormDemoComponent.prototype.updateIndex = function (newIndex) {
        this._activeIndex = newIndex;
    };
    return SkySectionedFormDemoComponent;
}());
export { SkySectionedFormDemoComponent };
SkySectionedFormDemoComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-sectioned-form-demo',
                template: "<h3>Sectioned form \u2014 Index: {{ activeIndexDisplay }}</h3>\n<div style=\"height: 150px;\">\n  <sky-sectioned-form (indexChanged)=\"updateIndex($event)\" >\n    <sky-sectioned-form-section heading=\"Basic information\">\n      <sky-demo-information-form>\n      </sky-demo-information-form>\n    </sky-sectioned-form-section>\n    <sky-sectioned-form-section heading=\"Addresses\" itemCount=\"2\" active=\"true\">\n      <sky-demo-address-form></sky-demo-address-form>\n    </sky-sectioned-form-section>\n    <sky-sectioned-form-section heading=\"Phone numbers\" itemCount=\"3\">\n      <sky-demo-phone-form></sky-demo-phone-form>\n    </sky-sectioned-form-section>\n  </sky-sectioned-form>\n</div>\n\n<h3>With a modal</h3>\n<button type=\"button\" class=\"sky-btn sky-btn-default\" (click)=\"openModal()\">\n  Open sectioned form\n</button>"
            },] },
];
/** @nocollapse */
SkySectionedFormDemoComponent.ctorParameters = function () { return [
    { type: SkyModalService, },
]; };
//# sourceMappingURL=sectioned-form-demo.component.js.map