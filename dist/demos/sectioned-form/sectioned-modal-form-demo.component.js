import { Component, ViewChild } from '@angular/core';
import { SkyModalInstance, SkySectionedFormComponent } from '../../core';
var SkySectionedModalFormDemoComponent = (function () {
    function SkySectionedModalFormDemoComponent(instance) {
        this.instance = instance;
        this.activeIndexDisplay = undefined;
        this.activeTab = true;
        this._activeIndex = undefined;
    }
    SkySectionedModalFormDemoComponent.prototype.ngAfterContentChecked = function () {
        this.activeIndexDisplay = this._activeIndex;
    };
    SkySectionedModalFormDemoComponent.prototype.updateIndex = function (newIndex) {
        this._activeIndex = newIndex;
    };
    SkySectionedModalFormDemoComponent.prototype.tabsHidden = function () {
        return !this.sectionedFormComponent.tabsVisible();
    };
    SkySectionedModalFormDemoComponent.prototype.showTabs = function () {
        this.sectionedFormComponent.showTabs();
    };
    return SkySectionedModalFormDemoComponent;
}());
export { SkySectionedModalFormDemoComponent };
SkySectionedModalFormDemoComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-sectioned-modal-form-demo',
                template: "<sky-modal>\n  <sky-modal-header>\n      Sectioned form \u2014 Index: {{ activeIndexDisplay }}\n  </sky-modal-header>\n  <sky-modal-content>\n    <sky-sectioned-form (indexChanged)=\"updateIndex($event)\">\n      <sky-sectioned-form-section heading=\"Basic information\">\n        <sky-demo-information-form>\n        </sky-demo-information-form>\n      </sky-sectioned-form-section>\n      <sky-sectioned-form-section heading=\"Addresses\" itemCount=\"2\" [active]=\"activeTab\">\n        <sky-demo-address-form></sky-demo-address-form>\n      </sky-sectioned-form-section>\n      <sky-sectioned-form-section heading=\"Phone numbers\" itemCount=\"3\">\n        <sky-demo-phone-form></sky-demo-phone-form>\n      </sky-sectioned-form-section>\n    </sky-sectioned-form>\n  </sky-modal-content>\n  <sky-modal-footer>\n    <button\n      type=\"button\"\n      *ngIf=\"tabsHidden()\"\n      class=\"sky-btn sky-btn-secondary\"\n      (click)=\"showTabs()\"\n    >\n      Show sections\n    </button>\n    <button\n      type=\"button\"\n      class=\"sky-btn sky-btn-primary\"\n      (click)=\"instance.save('Something cool')\"\n    >\n      Save\n    </button>\n    <button\n      type=\"button\"\n      class=\"sky-btn sky-btn-link\"\n      (click)=\"instance.cancel('Nevermind')\"\n    >\n      Cancel\n    </button>\n  </sky-modal-footer>\n  </sky-modal>\n  "
            },] },
];
/** @nocollapse */
SkySectionedModalFormDemoComponent.ctorParameters = function () { return [
    { type: SkyModalInstance, },
]; };
SkySectionedModalFormDemoComponent.propDecorators = {
    'sectionedFormComponent': [{ type: ViewChild, args: [SkySectionedFormComponent,] },],
};
//# sourceMappingURL=sectioned-modal-form-demo.component.js.map