import { EventEmitter } from '@angular/core';
import { SkyModalCloseArgs } from './modal-close-args';
var SkyModalInstance = (function () {
    function SkyModalInstance() {
        this.closed = new EventEmitter();
        this.helpOpened = new EventEmitter();
    }
    SkyModalInstance.prototype.close = function (result, reason) {
        if (reason === undefined) {
            reason = 'close';
        }
        this.closeModal(reason, result);
    };
    SkyModalInstance.prototype.cancel = function (result) {
        this.closeModal('cancel', result);
    };
    SkyModalInstance.prototype.save = function (result) {
        this.closeModal('save', result);
    };
    SkyModalInstance.prototype.openHelp = function (helpKey) {
        this.helpOpened.emit(helpKey);
    };
    SkyModalInstance.prototype.closeModal = function (type, result) {
        var args = new SkyModalCloseArgs();
        args.reason = type;
        args.data = result;
        this.closed.emit(args);
        this.closed.complete();
    };
    return SkyModalInstance;
}());
export { SkyModalInstance };
//# sourceMappingURL=modal-instance.js.map