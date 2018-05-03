import { Component } from '@angular/core';
var SkyPagingDemoComponent = (function () {
    function SkyPagingDemoComponent() {
        this.currentPage = 1;
    }
    return SkyPagingDemoComponent;
}());
export { SkyPagingDemoComponent };
SkyPagingDemoComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-paging-demo',
                template: "<div>\n  <sky-paging\n    pageSize=\"2\"\n    maxPages=\"3\"\n    [(currentPage)]=\"currentPage\"\n    itemCount=\"8\">\n  </sky-paging>\n  <span>Current page is {{currentPage}}</span>\n</div>\n"
            },] },
];
/** @nocollapse */
SkyPagingDemoComponent.ctorParameters = function () { return []; };
//# sourceMappingURL=paging-demo.component.js.map