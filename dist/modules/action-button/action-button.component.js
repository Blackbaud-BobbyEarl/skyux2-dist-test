import { Component, EventEmitter, Output } from '@angular/core';
var SkyActionButtonComponent = (function () {
    function SkyActionButtonComponent() {
        this.actionClick = new EventEmitter();
    }
    SkyActionButtonComponent.prototype.buttonClicked = function () {
        this.actionClick.emit();
    };
    SkyActionButtonComponent.prototype.enterPress = function () {
        this.actionClick.emit();
    };
    return SkyActionButtonComponent;
}());
export { SkyActionButtonComponent };
SkyActionButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-action-button',
                styles: [".sky-action-button {\n  border-top: 1px solid #cdcfd2;\n  border-bottom: 1px solid #cdcfd2;\n  border-left: 1px solid #cdcfd2;\n  border-right: 1px solid #cdcfd2;\n  max-width: 236px;\n  cursor: pointer;\n  display: inline-block;\n  padding-top: 20px;\n  padding-right: 20px;\n  padding-left: 20px;\n  padding-bottom: 30px;\n  text-align: center;\n}\n\n.sky-action-button:hover {\n  border-color: #c2c4c6;\n}\n\n@media (min-width: 768px) {\n  .sky-action-button {\n    padding: 30px 20px;\n  }\n}\n\n@media (max-width: 767px) {\n  .sky-action-button-icon-header-container {\n    margin-bottom: 20px;\n  }\n  .sky-action-button {\n    max-width: none;\n    display: block;\n    margin-left: 15px;\n    margin-right: 15px;\n  }\n}\n"],
                template: "<div\n  class=\"sky-action-button sky-btn-default sky-rounded-corners\"\n  role=\"button\"\n  (click)=\"buttonClicked()\"\n  (keydown.enter)=\"enterPress()\"\n  tabindex=\"0\"\n  >\n  <div class=\"sky-action-button-icon-header-container\">\n    <ng-content select=\"sky-action-button-icon\"></ng-content>\n    <ng-content select=\"sky-action-button-header\"></ng-content>\n  </div>\n  <ng-content select=\"sky-action-button-details\"></ng-content>\n</div>\n"
            },] },
];
/** @nocollapse */
SkyActionButtonComponent.ctorParameters = function () { return []; };
SkyActionButtonComponent.propDecorators = {
    'actionClick': [{ type: Output },],
};
//# sourceMappingURL=action-button.component.js.map