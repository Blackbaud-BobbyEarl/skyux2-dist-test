import { Component } from '@angular/core';
var SkyActionButtonContainerComponent = (function () {
    function SkyActionButtonContainerComponent() {
    }
    return SkyActionButtonContainerComponent;
}());
export { SkyActionButtonContainerComponent };
SkyActionButtonContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-action-button-container',
                styles: ["@media (min-width: 768px) {\n  .sky-action-button-container {\n    display: flex;\n    align-items: stretch;\n  }\n}\n\n@media (max-width: 767px) {\n  .sky-action-button-container {\n    padding-top: 0;\n  }\n  .sky-action-button-container /deep/.sky-action-button {\n    margin-top: 20px;\n  }\n}\n\n.sky-action-button-container {\n  padding-top: 20px;\n}\n\n.sky-action-button-container /deep/.sky-action-button {\n  height: 100%;\n  min-width: 236px;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n"],
                template: "<div class=\"sky-action-button-container\">\n  <ng-content></ng-content>\n</div>\n"
            },] },
];
/** @nocollapse */
SkyActionButtonContainerComponent.ctorParameters = function () { return []; };
//# sourceMappingURL=action-button-container.component.js.map