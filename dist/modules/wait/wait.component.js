import { Component, Input, ElementRef } from '@angular/core';
import { SkyWaitAdapterService } from './wait-adapter.service';
var SkyWaitComponent = (function () {
    function SkyWaitComponent(elRef, adapterService) {
        this.elRef = elRef;
        this.adapterService = adapterService;
    }
    Object.defineProperty(SkyWaitComponent.prototype, "isWaiting", {
        get: function () {
            return this._isWaiting;
        },
        set: function (value) {
            if (value && !this._isFullPage) {
                this.adapterService.setWaitBounds(this.elRef);
            }
            else if (!value && !this._isFullPage) {
                this.adapterService.removeWaitBounds(this.elRef);
            }
            this.adapterService.setBusyState(this.elRef, this._isFullPage, value);
            this._isWaiting = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyWaitComponent.prototype, "isFullPage", {
        get: function () {
            return this._isFullPage;
        },
        set: function (value) {
            if (value) {
                this.adapterService.removeWaitBounds(this.elRef);
            }
            else if (!value && this._isWaiting) {
                this.adapterService.setWaitBounds(this.elRef);
            }
            this._isFullPage = value;
        },
        enumerable: true,
        configurable: true
    });
    return SkyWaitComponent;
}());
export { SkyWaitComponent };
SkyWaitComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-wait',
                template: "<div class=\"sky-wait-container\">\n  <div\n    *ngIf=\"isWaiting\"\n    [ngClass]=\"{\n      'sky-wait-mask-loading-fixed': isFullPage,\n      'sky-wait-mask-loading-non-blocking': isNonBlocking,\n      'sky-wait-mask-loading-blocking': !isNonBlocking\n      }\"\n    >\n    <div class=\"sky-wait\">\n      <div class=\"sky-wait-double-bounce1\"></div>\n      <div class=\"sky-wait-double-bounce2\"></div>\n    </div>\n  </div>\n</div>\n\n",
                styles: [".sky-wait-mask-loading-blocking {\n  margin: auto;\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  background-color: rgba(255, 255, 255, 0.7);\n  z-index: 1000;\n}\n\n.sky-wait-mask-loading-fixed {\n  position: fixed;\n}\n\n.sky-wait {\n  width: 50px;\n  height: 50px;\n  margin-top: -25px;\n  margin-left: -25px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n}\n\n.sky-wait-mask-loading-non-blocking {\n  bottom: 0;\n}\n\n.sky-wait-mask-loading-non-blocking .sky-wait {\n  top: auto;\n  right: auto;\n  bottom: 0;\n  left: 0;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.sky-wait-double-bounce1, .sky-wait-double-bounce2 {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background-color: #71bf43;\n  opacity: 0.6;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\n  animation: sk-bounce 2.0s infinite ease-in-out;\n}\n\n.sky-wait-double-bounce2 {\n  -webkit-animation-delay: -1.0s;\n  animation-delay: -1.0s;\n}\n\n@-webkit-keyframes sk-bounce {\n  0%, 100% {\n    -webkit-transform: scale(0);\n  }\n  50% {\n    -webkit-transform: scale(1);\n  }\n}\n\n@keyframes sk-bounce {\n  0%, 100% {\n    transform: scale(0);\n    -webkit-transform: scale(0);\n  }\n  50% {\n    transform: scale(1);\n    -webkit-transform: scale(1);\n  }\n}\n\n.sky-wait-container.sky-wait-active {\n  position: relative;\n}\n"],
                providers: [SkyWaitAdapterService]
            },] },
];
/** @nocollapse */
SkyWaitComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: SkyWaitAdapterService, },
]; };
SkyWaitComponent.propDecorators = {
    'isWaiting': [{ type: Input },],
    'isFullPage': [{ type: Input },],
    'isNonBlocking': [{ type: Input },],
};
//# sourceMappingURL=wait.component.js.map