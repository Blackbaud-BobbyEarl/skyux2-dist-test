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
import { StateNode } from 'microedge-rxstate/dist';
import { ListToolbarStateModel } from './toolbar-state.model';
import { ListToolbarStateDispatcher } from './toolbar-state.rxstate';
import { ListToolbarConfigOrchestrator } from './config/config.orchestrator';
var ListToolbarState = (function (_super) {
    __extends(ListToolbarState, _super);
    function ListToolbarState(initialState, dispatcher) {
        var _this = _super.call(this, initialState, dispatcher) || this;
        _this
            .register('config', ListToolbarConfigOrchestrator)
            .begin();
        return _this;
    }
    return ListToolbarState;
}(StateNode));
export { ListToolbarState };
ListToolbarState.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ListToolbarState.ctorParameters = function () { return [
    { type: ListToolbarStateModel, },
    { type: ListToolbarStateDispatcher, },
]; };
//# sourceMappingURL=toolbar-state.state-node.js.map