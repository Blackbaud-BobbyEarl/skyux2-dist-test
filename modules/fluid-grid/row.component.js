import { Component, Input } from '@angular/core';
var SkyRowComponent = (function () {
    function SkyRowComponent() {
        this.reverseColumnOrder = false;
    }
    return SkyRowComponent;
}());
export { SkyRowComponent };
SkyRowComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-row',
                template: "<div class=\"sky-row\" \n  [ngClass]=\"{ 'sky-row-reverse': reverseColumnOrder }\">\n  <ng-content></ng-content>\n</div>\n",
                styles: [".sky-row {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  margin-left: -15px;\n  margin-right: -15px;\n  flex-direction: row;\n}\n\n@media (min-width: 768px) {\n  .sky-row.sky-row-reverse {\n    flex-direction: row-reverse;\n  }\n}\n"]
            },] },
];
/** @nocollapse */
SkyRowComponent.ctorParameters = function () { return []; };
SkyRowComponent.propDecorators = {
    'reverseColumnOrder': [{ type: Input },],
};
//# sourceMappingURL=row.component.js.map