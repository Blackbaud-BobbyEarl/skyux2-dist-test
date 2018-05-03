import { Component } from '@angular/core';
var SkyPageSummaryKeyInfoComponent = (function () {
    function SkyPageSummaryKeyInfoComponent() {
    }
    return SkyPageSummaryKeyInfoComponent;
}());
export { SkyPageSummaryKeyInfoComponent };
SkyPageSummaryKeyInfoComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-page-summary-key-info',
                template: "<div class=\"sky-page-summary-key-info\">\n  <ng-content></ng-content>\n</div>\n",
                styles: ["@media (max-width: 767px) {\n  .sky-page-summary-key-info {\n    margin-top: 20px;\n  }\n}\n\n.sky-page-summary-key-info /deep/ .sky-key-info {\n  display: block;\n}\n"]
            },] },
];
/** @nocollapse */
SkyPageSummaryKeyInfoComponent.ctorParameters = function () { return []; };
//# sourceMappingURL=page-summary-key-info.component.js.map