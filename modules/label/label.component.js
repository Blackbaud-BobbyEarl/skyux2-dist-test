import { Component, Input } from '@angular/core';
var SkyLabelComponent = (function () {
    function SkyLabelComponent() {
    }
    return SkyLabelComponent;
}());
export { SkyLabelComponent };
SkyLabelComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-label',
                template: "<span class=\"sky-label\" [ngClass]=\"labelType ? 'sky-label-' + labelType : 'sky-label-info'\">\n  <ng-content></ng-content>\n</span>\n",
                styles: [".sky-label {\n  color: #282b31;\n  display: inline;\n  border-radius: 10rem;\n  font-weight: 400;\n  line-height: 2.2;\n  margin: 0 3px;\n  padding: .3em .6em .3em .6em;\n  white-space: nowrap;\n}\n\n.sky-label-success {\n  background-color: #b7da9b;\n}\n\n.sky-label-success:before {\n  content: \"\\f00c\";\n  font-family: FontAwesome;\n}\n\n.sky-label-info {\n  background-color: #81d4f7;\n}\n\n.sky-label-info:before {\n  content: \"\\f06a\";\n  font-family: FontAwesome;\n}\n\n.sky-label-warning {\n  background-color: #ffd597;\n}\n\n.sky-label-warning:before {\n  content: \"\\f071\";\n  font-family: FontAwesome;\n}\n\n.sky-label-danger {\n  background-color: #f7a08f;\n}\n\n.sky-label-danger:before {\n  content: \"\\f071\";\n  font-family: FontAwesome;\n}\n"]
            },] },
];
/** @nocollapse */
SkyLabelComponent.ctorParameters = function () { return []; };
SkyLabelComponent.propDecorators = {
    'labelType': [{ type: Input },],
};
//# sourceMappingURL=label.component.js.map