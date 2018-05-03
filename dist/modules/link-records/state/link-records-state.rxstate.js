var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Injectable } from '@angular/core';
import { StateDispatcher, StateOrchestrator } from 'microedge-rxstate/dist';
var SkyLinkRecordsStateDispatcher = (function (_super) {
    __extends(SkyLinkRecordsStateDispatcher, _super);
    function SkyLinkRecordsStateDispatcher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SkyLinkRecordsStateDispatcher;
}(StateDispatcher));
export { SkyLinkRecordsStateDispatcher };
SkyLinkRecordsStateDispatcher.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SkyLinkRecordsStateDispatcher.ctorParameters = function () { return []; };
var SkyLinkRecordsStateOrchestrator = (function (_super) {
    __extends(SkyLinkRecordsStateOrchestrator, _super);
    function SkyLinkRecordsStateOrchestrator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SkyLinkRecordsStateOrchestrator;
}(StateOrchestrator));
export { SkyLinkRecordsStateOrchestrator };
//# sourceMappingURL=link-records-state.rxstate.js.map