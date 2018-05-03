import { Injectable } from '@angular/core';
import { SkyWindowRefService } from '../window';
var SkyModalAdapterService = (function () {
    function SkyModalAdapterService(windowRef) {
        this.windowRef = windowRef;
        this.docRef = this.windowRef.getWindow().document;
        this.bodyEl = this.windowRef.getWindow().document.body;
    }
    SkyModalAdapterService.prototype.addHostEl = function () {
        this.bodyEl.appendChild(this.docRef.createElement('sky-modal-host'));
    };
    SkyModalAdapterService.prototype.removeHostEl = function () {
        this.bodyEl.removeChild(this.docRef.querySelector('sky-modal-host'));
    };
    SkyModalAdapterService.prototype.toggleFullPageModalClass = function (isAddFull) {
        if (isAddFull) {
            this.addClassToBody(SkyModalAdapterService.MODAL_BODY_FULL_CLASS);
        }
        else {
            this.removeClassFromBody(SkyModalAdapterService.MODAL_BODY_FULL_CLASS);
        }
    };
    SkyModalAdapterService.prototype.setPageScroll = function (isAdd) {
        if (isAdd) {
            this.addClassToBody(SkyModalAdapterService.MODAL_BODY_CLASS);
        }
        else {
            this.removeClassFromBody(SkyModalAdapterService.MODAL_BODY_CLASS);
        }
    };
    SkyModalAdapterService.prototype.getModalOpener = function () {
        return this.docRef.activeElement;
    };
    SkyModalAdapterService.prototype.addClassToBody = function (className) {
        this.bodyEl.classList.add(className);
    };
    SkyModalAdapterService.prototype.removeClassFromBody = function (className) {
        this.bodyEl.classList.remove(className);
    };
    return SkyModalAdapterService;
}());
export { SkyModalAdapterService };
SkyModalAdapterService.MODAL_BODY_FULL_CLASS = 'sky-modal-body-full-page';
SkyModalAdapterService.MODAL_BODY_CLASS = 'sky-modal-body-open';
SkyModalAdapterService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SkyModalAdapterService.ctorParameters = function () { return [
    { type: SkyWindowRefService, },
]; };
//# sourceMappingURL=modal-adapter.service.js.map