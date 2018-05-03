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
import { GridStateModel } from './grid-state.model';
import { GridStateDispatcher } from './grid-state.rxstate';
import { ListViewGridColumnsOrchestrator } from './columns/columns.orchestrator';
import { ListViewDisplayedGridColumnsOrchestrator } from './displayed-columns/displayed-columns.orchestrator';
var GridState = (function (_super) {
    __extends(GridState, _super);
    function GridState(initialState, dispatcher) {
        var _this = _super.call(this, initialState, dispatcher) || this;
        _this
            .register('columns', ListViewGridColumnsOrchestrator)
            .register('displayedColumns', ListViewDisplayedGridColumnsOrchestrator)
            .begin();
        return _this;
    }
    return GridState;
}(StateNode));
export { GridState };
GridState.decorators = [
    { type: Injectable },
];
/** @nocollapse */
GridState.ctorParameters = function () { return [
    { type: GridStateModel, },
    { type: GridStateDispatcher, },
]; };
//# sourceMappingURL=grid-state.state-node.js.map