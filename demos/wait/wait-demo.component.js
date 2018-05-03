import { Component } from '@angular/core';
import { SkyWaitService } from '../../core';
var SkyWaitDemoComponent = (function () {
    function SkyWaitDemoComponent(waitSvc) {
        this.waitSvc = waitSvc;
        this.isWaiting = false;
    }
    SkyWaitDemoComponent.prototype.showPageWait = function (isBlocking) {
        var _this = this;
        if (isBlocking) {
            this.waitSvc.beginBlockingPageWait();
            setTimeout(function () {
                _this.waitSvc.endBlockingPageWait();
            }, 2000);
        }
        else {
            this.waitSvc.beginNonBlockingPageWait();
            setTimeout(function () {
                _this.waitSvc.endNonBlockingPageWait();
            }, 2000);
        }
    };
    return SkyWaitDemoComponent;
}());
export { SkyWaitDemoComponent };
SkyWaitDemoComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-wait-demo',
                template: "<button type=\"button\" class=\"sky-btn sky-btn-default\" (click)=\"isWaiting = !isWaiting\">Toggle element wait</button>\n\n\n<div style=\"height: 200px; width: 200px; margin-top: 10px;\">\n  A large area that can be waited with the <code>sky-wait</code> directive.\n  <sky-wait [isWaiting]=\"isWaiting\">\n  </sky-wait>\n</div>\n\n<button type=\"button\" class=\"sky-btn sky-btn-default\" (click)=\"showPageWait(true)\">Show page wait</button>\n\n<button type=\"button\" class=\"sky-btn sky-btn-default\" (click)=\"showPageWait(false)\">Show non-blocking page wait</button>\n"
            },] },
];
/** @nocollapse */
SkyWaitDemoComponent.ctorParameters = function () { return [
    { type: SkyWaitService, },
]; };
//# sourceMappingURL=wait-demo.component.js.map