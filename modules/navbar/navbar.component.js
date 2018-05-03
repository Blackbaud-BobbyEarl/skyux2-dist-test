import { Component } from '@angular/core';
var SkyNavbarComponent = (function () {
    function SkyNavbarComponent() {
    }
    return SkyNavbarComponent;
}());
export { SkyNavbarComponent };
SkyNavbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-navbar',
                template: "<div class=\"sky-navbar\">\n  <ng-content></ng-content>\n</div>\n",
                styles: [".sky-navbar {\n  background-color: #2f4050;\n  display: flex;\n  align-items: flex-start;\n  flex-direction: row;\n}\n"]
            },] },
];
/** @nocollapse */
SkyNavbarComponent.ctorParameters = function () { return []; };
//# sourceMappingURL=navbar.component.js.map