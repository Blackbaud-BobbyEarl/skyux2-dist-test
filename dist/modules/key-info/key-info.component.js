import { Component, Input } from '@angular/core';
var SkyKeyInfoComponent = (function () {
    function SkyKeyInfoComponent() {
        this.layout = 'vertical';
    }
    return SkyKeyInfoComponent;
}());
export { SkyKeyInfoComponent };
SkyKeyInfoComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-key-info',
                template: "<div\n    class=\"sky-key-info\"\n    [ngClass]=\"{\n      'sky-key-info-horizontal': layout === 'horizontal'\n    }\"\n>\n  <div class=\"sky-key-info-value\">\n    <ng-content select=\"sky-key-info-value\"></ng-content>\n  </div>\n  <div class=\"sky-key-info-label\">\n    <ng-content select=\"sky-key-info-label\"></ng-content>\n  </div>\n</div>\n",
                styles: [".sky-key-info {\n  display: inline-block;\n  margin-right: 30px;\n}\n\n.sky-key-info-value {\n  font-family: \"Blackbaud Sans Condensed\", \"Helvetica Neue Condensed\", \"Arial Narrow\";\n  color: #282b31;\n  font-weight: 500;\n  font-size: 22px;\n}\n\n.sky-key-info-label {\n  font-family: \"Blackbaud Sans\", \"Helvetica Neue\", Arial, sans-serif;\n  color: #686c73;\n  font-weight: 400;\n  font-size: 15px;\n}\n\n.sky-key-info-horizontal .sky-key-info-value,\n.sky-key-info-horizontal .sky-key-info-label {\n  display: inline-block;\n}\n\n.sky-key-info-horizontal .sky-key-info-label {\n  margin-left: 5px;\n}\n"]
            },] },
];
/** @nocollapse */
SkyKeyInfoComponent.ctorParameters = function () { return []; };
SkyKeyInfoComponent.propDecorators = {
    'layout': [{ type: Input },],
};
//# sourceMappingURL=key-info.component.js.map