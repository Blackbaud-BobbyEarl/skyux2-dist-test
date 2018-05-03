import { Injectable, EventEmitter } from '@angular/core';
import { SkyConfirmationDialogConfig } from './confirmation-dialog-config';
import { SkyConfirmationDialogComponent } from './confirmation-dialog.component';
var SkyConfirmationDialogInstance = (function () {
    function SkyConfirmationDialogInstance() {
        this.closed = new EventEmitter();
    }
    SkyConfirmationDialogInstance.prototype.open = function (modal, config) {
        var _this = this;
        var options = {
            providers: [{ provide: SkyConfirmationDialogConfig, useValue: config }]
        };
        this.modalInstance = modal.open(SkyConfirmationDialogComponent, options);
        this.modalInstance.closed.subscribe(function (result) {
            _this.closed.emit(result.data);
        });
        return this;
    };
    return SkyConfirmationDialogInstance;
}());
export { SkyConfirmationDialogInstance };
SkyConfirmationDialogInstance.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SkyConfirmationDialogInstance.ctorParameters = function () { return []; };
//# sourceMappingURL=confirmation-dialog.instance.js.map