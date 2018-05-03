import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
var SkySortService = (function () {
    function SkySortService() {
        this.selectedItem = new BehaviorSubject('');
    }
    SkySortService.prototype.selectItem = function (sortItem) {
        this.selectedItem.next(sortItem);
    };
    return SkySortService;
}());
export { SkySortService };
SkySortService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SkySortService.ctorParameters = function () { return []; };
//# sourceMappingURL=sort.service.js.map