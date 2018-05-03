import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SkyModalInstance } from '../../core';
var SkyWizardDemoFormComponent = (function () {
    function SkyWizardDemoFormComponent(instance) {
        this.instance = instance;
        this.title = 'Wizard example';
    }
    Object.defineProperty(SkyWizardDemoFormComponent.prototype, "step2Disabled", {
        get: function () {
            return !this.requiredValue1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyWizardDemoFormComponent.prototype, "step3Disabled", {
        get: function () {
            return this.step2Disabled || !this.requiredValue2;
        },
        enumerable: true,
        configurable: true
    });
    SkyWizardDemoFormComponent.prototype.validateStep1 = function () {
        return true;
    };
    return SkyWizardDemoFormComponent;
}());
export { SkyWizardDemoFormComponent };
SkyWizardDemoFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-demo-wizard-form',
                template: "<sky-modal>\n  <sky-modal-header>\n    {{title}}\n  </sky-modal-header>\n  <sky-modal-content>\n    <sky-tabset tabStyle=\"wizard\" #wizardDemo>\n      <sky-tab\n        tabHeading=\"Step 1\"\n        active=\"true\">\n        <label>\n          Enter text to continue:\n          <input class=\"sky-form-control\" type=\"text\" [(ngModel)]=\"requiredValue1\" />\n        </label>\n      </sky-tab>\n      <sky-tab\n        tabHeading=\"Step 2\"\n        [disabled]=\"step2Disabled\">\n        <sky-checkbox [(ngModel)]=\"requiredValue2\">\n          <sky-checkbox-label>\n            Select this checkbox to enable step 3.\n          </sky-checkbox-label>\n        </sky-checkbox>\n      </sky-tab>\n      <sky-tab\n        tabHeading=\"Step 3\"\n        [disabled]=\"step3Disabled\">\n        Some other content.\n      </sky-tab>\n    </sky-tabset>\n  </sky-modal-content>\n  <sky-modal-footer>\n    <sky-tabset-nav-button buttonType=\"previous\" [tabset]=\"wizardDemo\"></sky-tabset-nav-button>\n    <sky-tabset-nav-button buttonType=\"next\" [tabset]=\"wizardDemo\"></sky-tabset-nav-button>\n    <button\n      type=\"button\"\n      class=\"sky-btn sky-btn-default\"\n      (click)=\"instance.close()\">\n      Save and close\n    </button>\n    <button\n      type=\"button\"\n      class=\"sky-btn sky-btn-link\"\n      (click)=\"instance.cancel()\">\n      Cancel\n    </button>\n  </sky-modal-footer>\n</sky-modal>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
SkyWizardDemoFormComponent.ctorParameters = function () { return [
    { type: SkyModalInstance, },
]; };
//# sourceMappingURL=wizard-demo-form.component.js.map