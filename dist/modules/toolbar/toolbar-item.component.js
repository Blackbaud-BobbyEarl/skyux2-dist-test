import { Component } from '@angular/core';
var SkyToolbarItemComponent = (function () {
    function SkyToolbarItemComponent() {
    }
    return SkyToolbarItemComponent;
}());
export { SkyToolbarItemComponent };
SkyToolbarItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-toolbar-item',
                styles: [".sky-toolbar-item {\n  margin-right: 5px;\n}\n"],
                template: "<div class=\"sky-toolbar-item\">\n  <ng-content></ng-content>\n</div>\n"
            },] },
];
/** @nocollapse */
SkyToolbarItemComponent.ctorParameters = function () { return []; };
//# sourceMappingURL=toolbar-item.component.js.map