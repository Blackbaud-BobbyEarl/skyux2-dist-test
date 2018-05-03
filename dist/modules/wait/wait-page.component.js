import { Component, Input } from '@angular/core';
var SkyWaitPageComponent = (function () {
    function SkyWaitPageComponent() {
    }
    return SkyWaitPageComponent;
}());
export { SkyWaitPageComponent };
SkyWaitPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-wait-page',
                template: "<div class=\"sky-wait-page\">\n  <sky-wait  [isWaiting]=\"hasNonBlockingWait\" isFullPage=\"true\" isNonBlocking=\"true\">\n  </sky-wait>\n  <sky-wait [isWaiting]=\"hasBlockingWait\" isFullPage=\"true\">\n  </sky-wait>\n</div>\n",
                styles: [".sky-wait-page /deep/ .sky-wait-mask-loading-fixed {\n  z-index: 2000;\n}\n"]
            },] },
];
/** @nocollapse */
SkyWaitPageComponent.ctorParameters = function () { return []; };
SkyWaitPageComponent.propDecorators = {
    'hasBlockingWait': [{ type: Input },],
    'hasNonBlockingWait': [{ type: Input },],
};
//# sourceMappingURL=wait-page.component.js.map