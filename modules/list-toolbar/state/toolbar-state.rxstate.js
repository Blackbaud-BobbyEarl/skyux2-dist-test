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
var ListToolbarStateDispatcher = (function (_super) {
    __extends(ListToolbarStateDispatcher, _super);
    function ListToolbarStateDispatcher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ListToolbarStateDispatcher;
}(StateDispatcher));
export { ListToolbarStateDispatcher };
ListToolbarStateDispatcher.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ListToolbarStateDispatcher.ctorParameters = function () { return []; };
var ListToolbarStateOrchestrator = (function (_super) {
    __extends(ListToolbarStateOrchestrator, _super);
    function ListToolbarStateOrchestrator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ListToolbarStateOrchestrator;
}(StateOrchestrator));
export { ListToolbarStateOrchestrator };
//# sourceMappingURL=toolbar-state.rxstate.js.map