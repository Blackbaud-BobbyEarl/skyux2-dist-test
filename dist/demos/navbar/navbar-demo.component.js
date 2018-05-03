import { Component } from '@angular/core';
var SkyNavbarDemoComponent = (function () {
    function SkyNavbarDemoComponent() {
    }
    return SkyNavbarDemoComponent;
}());
export { SkyNavbarDemoComponent };
SkyNavbarDemoComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-navbar-demo',
                template: "<sky-navbar>\n  <sky-navbar-item>\n    <a routerLink=\"/\" routerLinkActive=\"sky-navbar-item-active\">\n      Selected item\n    </a>\n  </sky-navbar-item>\n  <sky-navbar-item>\n    <sky-dropdown>\n      <sky-dropdown-button>\n        Show dropdown\n      </sky-dropdown-button>\n      <sky-dropdown-menu>\n        <sky-dropdown-item>\n          <a routerLink=\"/\">Item 1</a>\n        </sky-dropdown-item>\n        <sky-dropdown-item>\n          <a routerLink=\"/\">Item 2</a>\n        </sky-dropdown-item>\n        <sky-dropdown-item>\n          <a routerLink=\"/\">Item 3</a>\n        </sky-dropdown-item>\n      </sky-dropdown-menu>\n    </sky-dropdown>\n  </sky-navbar-item>\n</sky-navbar>\n"
            },] },
];
/** @nocollapse */
SkyNavbarDemoComponent.ctorParameters = function () { return []; };
//# sourceMappingURL=navbar-demo.component.js.map