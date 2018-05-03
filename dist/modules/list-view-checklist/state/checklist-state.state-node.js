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
import { ChecklistStateModel } from './checklist-state.model';
import { ChecklistStateDispatcher } from './checklist-state.rxstate';
import { ListViewChecklistItemsOrchestrator } from './items/items.orchestrator';
var ChecklistState = (function (_super) {
    __extends(ChecklistState, _super);
    function ChecklistState(initialState, dispatcher) {
        var _this = _super.call(this, initialState, dispatcher) || this;
        _this.register('items', ListViewChecklistItemsOrchestrator)
            .begin();
        return _this;
    }
    return ChecklistState;
}(StateNode));
export { ChecklistState };
ChecklistState.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ChecklistState.ctorParameters = function () { return [
    { type: ChecklistStateModel, },
    { type: ChecklistStateDispatcher, },
]; };
//# sourceMappingURL=checklist-state.state-node.js.map