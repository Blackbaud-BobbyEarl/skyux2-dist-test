import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
var SkySectionedFormService = (function () {
    function SkySectionedFormService() {
        this.requiredChange = new BehaviorSubject(undefined);
        this.invalidChange = new BehaviorSubject(undefined);
    }
    SkySectionedFormService.prototype.requiredFieldChanged = function (required) {
        this.requiredChange.next(required);
    };
    SkySectionedFormService.prototype.invalidFieldChanged = function (invalid) {
        this.invalidChange.next(invalid);
    };
    return SkySectionedFormService;
}());
export { SkySectionedFormService };
SkySectionedFormService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SkySectionedFormService.ctorParameters = function () { return []; };
//# sourceMappingURL=sectioned-form.service.js.map