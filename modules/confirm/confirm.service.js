import { Injectable } from '@angular/core';
import { SkyModalService } from '../modal';
import { SkyConfirmModalContext } from './confirm-modal-context';
import { SkyConfirmComponent } from './confirm.component';
import { SkyConfirmInstance } from './confirm-instance';
var SkyConfirmService = (function () {
    function SkyConfirmService(modalService) {
        this.modalService = modalService;
    }
    SkyConfirmService.prototype.open = function (config) {
        var modalInstance = this.modalService.open(SkyConfirmComponent, {
            providers: [{
                    provide: SkyConfirmModalContext,
                    useValue: config
                }]
        });
        var confirmInstance = new SkyConfirmInstance();
        modalInstance.closed.subscribe(function (args) {
            var result = args.data;
            // The modal was closed using the ESC key.
            if (result === undefined) {
                result = {
                    action: 'cancel'
                };
            }
            confirmInstance.closed.emit(result);
            confirmInstance.closed.complete();
        });
        return confirmInstance;
    };
    return SkyConfirmService;
}());
export { SkyConfirmService };
SkyConfirmService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SkyConfirmService.ctorParameters = function () { return [
    { type: SkyModalService, },
]; };
//# sourceMappingURL=confirm.service.js.map