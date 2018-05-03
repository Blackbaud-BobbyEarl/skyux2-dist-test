import { Injectable } from '@angular/core';
var SkyWaitPageAdapterService = (function () {
    function SkyWaitPageAdapterService() {
    }
    SkyWaitPageAdapterService.prototype.addPageWaitEl = function () {
        document.body.appendChild(document.createElement('sky-wait-page'));
    };
    SkyWaitPageAdapterService.prototype.removePageWaitEl = function () {
        document.body.removeChild(document.querySelector('sky-wait-page'));
    };
    return SkyWaitPageAdapterService;
}());
export { SkyWaitPageAdapterService };
SkyWaitPageAdapterService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SkyWaitPageAdapterService.ctorParameters = function () { return []; };
//# sourceMappingURL=wait-page-adapter.service.js.map