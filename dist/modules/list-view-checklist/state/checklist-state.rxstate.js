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
var ChecklistStateDispatcher = (function (_super) {
    __extends(ChecklistStateDispatcher, _super);
    function ChecklistStateDispatcher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ChecklistStateDispatcher;
}(StateDispatcher));
export { ChecklistStateDispatcher };
ChecklistStateDispatcher.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ChecklistStateDispatcher.ctorParameters = function () { return []; };
var ChecklistStateOrchestrator = (function (_super) {
    __extends(ChecklistStateOrchestrator, _super);
    function ChecklistStateOrchestrator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ChecklistStateOrchestrator;
}(StateOrchestrator));
export { ChecklistStateOrchestrator };
//# sourceMappingURL=checklist-state.rxstate.js.map