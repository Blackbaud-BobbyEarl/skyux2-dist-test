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
import { SkyLinkRecordsStateModel } from './link-records-state.model';
import { SkyLinkRecordsStateDispatcher } from './link-records-state.rxstate';
import { SkyLinkRecordsMatchesOrchestrator } from './matches/matches.orchestrator';
import { SkyLinkRecordsFieldsOrchestrator } from './fields/fields.orchestrator';
import { SkyLinkRecordsResultsOrchestrator } from './results/results.orchestrator';
import { SkyLinkRecordsSelectedOrchestrator } from './selected/selected.orchestrator';
var SkyLinkRecordsState = (function (_super) {
    __extends(SkyLinkRecordsState, _super);
    function SkyLinkRecordsState(initialState, dispatcher) {
        var _this = _super.call(this, initialState, dispatcher) || this;
        _this
            .register('matches', SkyLinkRecordsMatchesOrchestrator)
            .register('fields', SkyLinkRecordsFieldsOrchestrator)
            .register('results', SkyLinkRecordsResultsOrchestrator)
            .register('selected', SkyLinkRecordsSelectedOrchestrator)
            .begin();
        return _this;
    }
    return SkyLinkRecordsState;
}(StateNode));
export { SkyLinkRecordsState };
SkyLinkRecordsState.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SkyLinkRecordsState.ctorParameters = function () { return [
    { type: SkyLinkRecordsStateModel, },
    { type: SkyLinkRecordsStateDispatcher, },
]; };
//# sourceMappingURL=link-records-state.state-node.js.map