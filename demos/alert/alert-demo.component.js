import { Component } from '@angular/core';
var SkyAlertDemoComponent = (function () {
    function SkyAlertDemoComponent() {
        this.closeable = true;
        this.closed = false;
        this.alertType = 'warning';
    }
    SkyAlertDemoComponent.prototype.openAlert = function () {
        this.closed = false;
    };
    return SkyAlertDemoComponent;
}());
export { SkyAlertDemoComponent };
SkyAlertDemoComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-alert-demo',
                template: "<sky-alert\n  [alertType]=\"alertType\"\n  [closeable]=\"closeable\"\n  [closed]=\"closed\">\n  This is a sample alert.\n</sky-alert>\n<select [(ngModel)]=\"alertType\">\n  <option value=\"info\">info</option>\n  <option value=\"success\">success</option>\n  <option value=\"warning\">warning</option>\n  <option value=\"danger\">danger</option>\n</select>\n<sky-checkbox [(ngModel)]=\"closeable\">\n  <sky-checkbox-label>Closeable</sky-checkbox-label>\n</sky-checkbox>\n"
            },] },
];
/** @nocollapse */
SkyAlertDemoComponent.ctorParameters = function () { return []; };
//# sourceMappingURL=alert-demo.component.js.map