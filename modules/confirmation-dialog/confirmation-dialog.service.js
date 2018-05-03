import { Injectable } from '@angular/core';
import { SkyConfirmationDialogInstance } from './confirmation-dialog.instance';
import { SkyModalService } from '../modal/modal.service';
var SkyConfirmationDialogService = (function () {
    function SkyConfirmationDialogService(modal) {
        this.modal = modal;
    }
    SkyConfirmationDialogService.prototype.open = function (config) {
        var instance = new SkyConfirmationDialogInstance();
        return instance.open(this.modal, config);
    };
    return SkyConfirmationDialogService;
}());
export { SkyConfirmationDialogService };
SkyConfirmationDialogService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SkyConfirmationDialogService.ctorParameters = function () { return [
    { type: SkyModalService, },
]; };
//# sourceMappingURL=confirmation-dialog.service.js.map