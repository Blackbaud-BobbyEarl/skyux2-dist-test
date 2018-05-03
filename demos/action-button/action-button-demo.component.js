import { Component } from '@angular/core';
var SkyActionButtonDemoComponent = (function () {
    function SkyActionButtonDemoComponent() {
    }
    SkyActionButtonDemoComponent.prototype.filterActionClick = function () {
        alert('Filter action clicked');
    };
    SkyActionButtonDemoComponent.prototype.openActionClick = function () {
        alert('Open action clicked');
    };
    return SkyActionButtonDemoComponent;
}());
export { SkyActionButtonDemoComponent };
SkyActionButtonDemoComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-action-button-demo',
                template: "<sky-action-button-container>\n  <sky-action-button\n    (actionClick)=\"filterActionClick()\">\n    <sky-action-button-icon\n      iconType=\"filter\">\n    </sky-action-button-icon>\n    <sky-action-button-header>\n      Build a new list\n    </sky-action-button-header>\n    <sky-action-button-details>\n      Start from scratch and fine-tune with filters\n    </sky-action-button-details>\n  </sky-action-button>\n\n  <sky-action-button\n    (actionClick)=\"openActionClick()\">\n    <sky-action-button-icon\n      iconType=\"folder-open-o\">\n    </sky-action-button-icon>\n    <sky-action-button-header>\n      Open a saved list\n    </sky-action-button-header>\n    <sky-action-button-details>\n      Open a list with filters saved in the web view\n    </sky-action-button-details>\n  </sky-action-button>\n</sky-action-button-container>\n"
            },] },
];
/** @nocollapse */
SkyActionButtonDemoComponent.ctorParameters = function () { return []; };
//# sourceMappingURL=action-button-demo.component.js.map