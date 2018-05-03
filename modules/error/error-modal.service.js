import { Injectable } from '@angular/core';
import { ErrorModalConfig } from './error-modal-config';
import { SkyErrorModalFormComponent } from './error-modal-form.component';
import { SkyModalService } from '../modal/modal.service';
var SkyErrorModalService = (function () {
    function SkyErrorModalService(modal) {
        this.modal = modal;
    }
    SkyErrorModalService.prototype.open = function (config) {
        var providers = [{ provide: ErrorModalConfig, useValue: config }];
        this.modal.open(SkyErrorModalFormComponent, providers);
    };
    return SkyErrorModalService;
}());
export { SkyErrorModalService };
SkyErrorModalService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SkyErrorModalService.ctorParameters = function () { return [
    { type: SkyModalService, },
]; };
//# sourceMappingURL=error-modal.service.js.map