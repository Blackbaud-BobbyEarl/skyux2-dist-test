import { Component } from '@angular/core';
import { SkyModalService } from '../../core';
import { SkyWizardDemoFormComponent } from './wizard-demo-form.component';
var SkyWizardDemoComponent = (function () {
    function SkyWizardDemoComponent(modal) {
        this.modal = modal;
    }
    SkyWizardDemoComponent.prototype.openWizard = function () {
        this.modal.open(SkyWizardDemoFormComponent);
    };
    return SkyWizardDemoComponent;
}());
export { SkyWizardDemoComponent };
SkyWizardDemoComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-wizard-demo',
                template: "<button\n  type=\"button\"\n  class=\"sky-btn sky-btn-default\"\n  (click)=\"openWizard()\">\n  Open wizard\n</button>\n"
            },] },
];
/** @nocollapse */
SkyWizardDemoComponent.ctorParameters = function () { return [
    { type: SkyModalService, },
]; };
//# sourceMappingURL=wizard-demo.component.js.map