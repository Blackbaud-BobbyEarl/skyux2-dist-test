import { Component } from '@angular/core';
var SkyTileContentComponent = (function () {
    function SkyTileContentComponent() {
    }
    return SkyTileContentComponent;
}());
export { SkyTileContentComponent };
SkyTileContentComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-tile-content',
                styles: [":host /deep/ sky-tile-content-section:not(:last-child) .sky-tile-content-section {\n  border-bottom: 1px solid #e2e3e4;\n}\n"],
                template: "<ng-content></ng-content>\n"
            },] },
];
/** @nocollapse */
SkyTileContentComponent.ctorParameters = function () { return []; };
//# sourceMappingURL=tile-content.component.js.map