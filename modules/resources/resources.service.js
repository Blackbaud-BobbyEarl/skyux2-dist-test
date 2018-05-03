import { Injectable } from '@angular/core';
import { SkyResources } from './resources';
var SkyResourcesService = (function () {
    function SkyResourcesService() {
    }
    SkyResourcesService.prototype.getString = function (name) {
        return SkyResources.getString(name);
    };
    return SkyResourcesService;
}());
export { SkyResourcesService };
SkyResourcesService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SkyResourcesService.ctorParameters = function () { return []; };
//# sourceMappingURL=resources.service.js.map