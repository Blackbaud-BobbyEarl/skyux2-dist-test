import { Component, EventEmitter, Output } from '@angular/core';
var SkyHelpInlineComponent = (function () {
    function SkyHelpInlineComponent() {
        this.actionClick = new EventEmitter();
    }
    SkyHelpInlineComponent.prototype.buttonClicked = function () {
        this.actionClick.emit();
    };
    return SkyHelpInlineComponent;
}());
export { SkyHelpInlineComponent };
SkyHelpInlineComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-help-inline',
                styles: [".sky-help-inline {\n  color: #007ca6;\n  font-size: 15px;\n  background-color: transparent;\n  border: none;\n  display: inline-block;\n}\n\n.sky-help-inline:hover {\n  color: #005673;\n  transition: color 150ms;\n}\n"],
                template: "<button\n    class=\"sky-help-inline fa fa-info-circle\"\n    (click)=\"buttonClicked()\"\n    [attr.aria-label]=\"'show_help_content' | skyResources\"\n    >\n</button>"
            },] },
];
/** @nocollapse */
SkyHelpInlineComponent.ctorParameters = function () { return []; };
SkyHelpInlineComponent.propDecorators = {
    'actionClick': [{ type: Output },],
};
//# sourceMappingURL=help-inline.component.js.map