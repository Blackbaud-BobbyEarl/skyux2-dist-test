import { Component } from '@angular/core';
var SkyActionButtonHeaderComponent = (function () {
    function SkyActionButtonHeaderComponent() {
    }
    return SkyActionButtonHeaderComponent;
}());
export { SkyActionButtonHeaderComponent };
SkyActionButtonHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-action-button-header',
                styles: [".sky-action-button-header {\n  display: inline-block;\n  font-family: \"Blackbaud Sans Condensed\", \"Helvetica Neue Condensed\", \"Arial Narrow\";\n  color: #282b31;\n  font-weight: 300;\n  font-size: 26px;\n}\n\n@media (max-width: 767px) {\n  .sky-action-button-header {\n    margin-left: 5px;\n    margin-right: 5px;\n  }\n}\n\n@media (min-width: 768px) {\n  .sky-action-button-header {\n    display: block;\n    margin-bottom: 20px;\n  }\n}\n"],
                template: "<div class=\"sky-action-button-header\">\n  <ng-content></ng-content>\n</div>\n"
            },] },
];
/** @nocollapse */
SkyActionButtonHeaderComponent.ctorParameters = function () { return []; };
//# sourceMappingURL=action-button-header.component.js.map