import { Component } from '@angular/core';
var SkyModalFooterComponent = (function () {
    function SkyModalFooterComponent() {
    }
    return SkyModalFooterComponent;
}());
export { SkyModalFooterComponent };
SkyModalFooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-modal-footer',
                template: "<div class=\"sky-modal-footer-container\">\n  <ng-content></ng-content>\n</div>\n",
                styles: [".sky-modal-footer-container {\n  background-color: #fff;\n  padding: 15px;\n  border-top: 1px solid #e2e3e4;\n  /* Offset the margin-left of the link */\n}\n\n.sky-modal-footer-container /deep/ .sky-btn-link:first-child {\n  margin-left: -12px;\n}\n"]
            },] },
];
/** @nocollapse */
SkyModalFooterComponent.ctorParameters = function () { return []; };
//# sourceMappingURL=modal-footer.component.js.map