import { Injectable } from '@angular/core';
var SkyWindowRefService = (function () {
    function SkyWindowRefService() {
    }
    SkyWindowRefService.prototype.getWindow = function () {
        return window;
    };
    return SkyWindowRefService;
}());
export { SkyWindowRefService };
SkyWindowRefService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SkyWindowRefService.ctorParameters = function () { return []; };
//# sourceMappingURL=window-ref.service.js.map