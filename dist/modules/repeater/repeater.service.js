import { EventEmitter, Injectable } from '@angular/core';
var SkyRepeaterService = (function () {
    function SkyRepeaterService() {
        this.itemCollapseStateChange = new EventEmitter();
    }
    SkyRepeaterService.prototype.onItemCollapseStateChange = function (item) {
        this.itemCollapseStateChange.emit(item);
    };
    return SkyRepeaterService;
}());
export { SkyRepeaterService };
SkyRepeaterService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SkyRepeaterService.ctorParameters = function () { return []; };
//# sourceMappingURL=repeater.service.js.map