import { Injectable } from '@angular/core';
var SkyLogService = (function () {
    function SkyLogService() {
    }
    SkyLogService.prototype.warn = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        /*istanbul ignore else */
        if (window.console) {
            window.console.warn.apply(window.console, arguments);
        }
    };
    return SkyLogService;
}());
export { SkyLogService };
SkyLogService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SkyLogService.ctorParameters = function () { return []; };
//# sourceMappingURL=log.service.js.map