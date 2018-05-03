import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
var SkyDefinitionListService = (function () {
    function SkyDefinitionListService() {
        this.labelWidth = new BehaviorSubject('');
        this.defaultValue = new BehaviorSubject('');
    }
    return SkyDefinitionListService;
}());
export { SkyDefinitionListService };
SkyDefinitionListService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SkyDefinitionListService.ctorParameters = function () { return []; };
//# sourceMappingURL=definition-list.service.js.map