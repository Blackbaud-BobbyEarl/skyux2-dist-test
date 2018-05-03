import { Injectable } from '@angular/core';
var SkyPageSummaryAdapterService = (function () {
    function SkyPageSummaryAdapterService() {
    }
    SkyPageSummaryAdapterService.prototype.updateKeyInfoLocation = function (elRef, isXS) {
        var el = elRef.nativeElement;
        var keyInfoContainerEl = el.querySelector('.sky-page-summary-key-info-container');
        if (isXS) {
            el.querySelector('.sky-page-summary-key-info-xs').appendChild(keyInfoContainerEl);
        }
        else {
            el.querySelector('.sky-page-summary-key-info-sm').appendChild(keyInfoContainerEl);
        }
    };
    return SkyPageSummaryAdapterService;
}());
export { SkyPageSummaryAdapterService };
SkyPageSummaryAdapterService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SkyPageSummaryAdapterService.ctorParameters = function () { return []; };
//# sourceMappingURL=page-summary-adapter.service.js.map