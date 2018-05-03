import { Component } from '@angular/core';
var SkyToolbarSectionComponent = (function () {
    function SkyToolbarSectionComponent() {
    }
    return SkyToolbarSectionComponent;
}());
export { SkyToolbarSectionComponent };
SkyToolbarSectionComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-toolbar-section',
                styles: [".sky-toolbar-section {\n  padding: 5px 10px;\n  display: flex;\n  align-items: center;\n  position: relative;\n  min-height: 49px;\n}\n"],
                template: "<div class=\"sky-toolbar-section\">\n  <ng-content></ng-content>\n</div>\n"
            },] },
];
/** @nocollapse */
SkyToolbarSectionComponent.ctorParameters = function () { return []; };
//# sourceMappingURL=toolbar-section.component.js.map