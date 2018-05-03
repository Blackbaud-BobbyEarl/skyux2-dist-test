import { Component } from '@angular/core';
var SkyHelpInlineDemoComponent = (function () {
    function SkyHelpInlineDemoComponent() {
    }
    SkyHelpInlineDemoComponent.prototype.givingActionClick = function () {
        alert('Giving help inline clicked');
    };
    SkyHelpInlineDemoComponent.prototype.emailActionClick = function () {
        alert('enter email in format joe@abc.com');
    };
    return SkyHelpInlineDemoComponent;
}());
export { SkyHelpInlineDemoComponent };
SkyHelpInlineDemoComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-help-inline-demo',
                template: "<div>\n  <h2>\n    Giving\n    <sky-help-inline\n      (actionClick)=\"givingActionClick()\">\n    </sky-help-inline>\n  </h2>\n\n  <h4>\n    Email entry\n    <sky-help-inline\n      (actionClick)=\"emailActionClick()\">\n    </sky-help-inline>\n  </h4>\n\n  <input placeholder=\"Enter email\">\n</div>\n"
            },] },
];
/** @nocollapse */
SkyHelpInlineDemoComponent.ctorParameters = function () { return []; };
//# sourceMappingURL=help-inline-demo.component.js.map