import { Component } from '@angular/core';
import { FlyoutDemoContext } from './flyout-demo-context';
var SkyFlyoutDemoInternalComponent = (function () {
    function SkyFlyoutDemoInternalComponent(context) {
        this.context = context;
    }
    return SkyFlyoutDemoInternalComponent;
}());
export { SkyFlyoutDemoInternalComponent };
SkyFlyoutDemoInternalComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-flyout-demo-internal',
                template: "<sky-page-summary>\n  <sky-page-summary-alert>\n    <sky-alert\n      alertType=\"info\">\n      The internal flyout content is dynamic!\n    </sky-alert>\n  </sky-page-summary-alert>\n  <sky-page-summary-image>\n    <sky-avatar\n      [name]=\"context.name\"\n      [canChange]=\"false\">\n    </sky-avatar>\n  </sky-page-summary-image>\n  <sky-page-summary-title>\n    {{context.name}}\n  </sky-page-summary-title>\n  <sky-page-summary-subtitle>\n    Board member\n  </sky-page-summary-subtitle>\n  <sky-page-summary-status>\n    <sky-label\n      labelType=\"success\">\n      Fundraiser\n    </sky-label>\n    <sky-label>Inactive</sky-label>\n  </sky-page-summary-status>\n  <sky-page-summary-content>\n    This is the arbitrary content section.\n  </sky-page-summary-content>\n</sky-page-summary>\n"
            },] },
];
/** @nocollapse */
SkyFlyoutDemoInternalComponent.ctorParameters = function () { return [
    { type: FlyoutDemoContext, },
]; };
//# sourceMappingURL=flyout-demo-internal.component.js.map