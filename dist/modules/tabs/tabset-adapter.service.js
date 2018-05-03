import { EventEmitter, Injectable } from '@angular/core';
var SkyTabsetAdapterService = (function () {
    function SkyTabsetAdapterService() {
        this.overflowChange = new EventEmitter();
        this.currentOverflow = false;
    }
    SkyTabsetAdapterService.prototype.init = function (elRef) {
        this.el = elRef.nativeElement.querySelector('.sky-tabset');
        this.tabsEl = elRef.nativeElement.querySelector('.sky-tabset-tabs');
        this.bntsEl = elRef.nativeElement.querySelector('.sky-tabset-btns');
        this.detectOverflow();
    };
    SkyTabsetAdapterService.prototype.detectOverflow = function () {
        if (this.el && this.tabsEl) {
            var elWidth = this.el.offsetWidth;
            var tabsElWidth = this.tabsEl.offsetWidth + this.bntsEl.offsetWidth;
            if (tabsElWidth < elWidth) {
                if (this.currentOverflow) {
                    this.currentOverflow = false;
                    this.overflowChange.emit(false);
                }
            }
            else if (!this.currentOverflow) {
                this.currentOverflow = true;
                this.overflowChange.emit(true);
            }
        }
    };
    return SkyTabsetAdapterService;
}());
export { SkyTabsetAdapterService };
SkyTabsetAdapterService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SkyTabsetAdapterService.ctorParameters = function () { return []; };
//# sourceMappingURL=tabset-adapter.service.js.map