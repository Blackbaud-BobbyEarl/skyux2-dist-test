import { Injectable } from '@angular/core';
var MutationObserverService = (function () {
    function MutationObserverService() {
    }
    MutationObserverService.prototype.create = function (callback) {
        return new MutationObserver(callback);
    };
    return MutationObserverService;
}());
export { MutationObserverService };
MutationObserverService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
MutationObserverService.ctorParameters = function () { return []; };
//# sourceMappingURL=mutation-observer-service.js.map