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
import { SkyLinkRecordsStateOrchestrator } from '../link-records-state.rxstate';
import { AsyncItem } from 'microedge-rxstate/dist';
var moment = require('moment');
import { SkyLinkRecordsSelectedSetSelectedAction, SkyLinkRecordsSelectedClearSelectedAction } from './actions';
var SkyLinkRecordsSelectedOrchestrator = (function (_super) {
    __extends(SkyLinkRecordsSelectedOrchestrator, _super);
    function SkyLinkRecordsSelectedOrchestrator() {
        var _this = _super.call(this) || this;
        _this
            .register(SkyLinkRecordsSelectedSetSelectedAction, _this.setSelected)
            .register(SkyLinkRecordsSelectedClearSelectedAction, _this.clearSelected);
        return _this;
    }
    SkyLinkRecordsSelectedOrchestrator.prototype.setSelected = function (state, action) {
        var newStateItem = Object.assign({}, state.item);
        var fields = (newStateItem[action.key]) ? Object.assign({}, newStateItem[action.key]) : {};
        fields[action.fieldKey] = action.selected;
        newStateItem[action.key] = fields;
        return new AsyncItem(newStateItem, moment(), state.loading);
    };
    SkyLinkRecordsSelectedOrchestrator.prototype.clearSelected = function (state, action) {
        var newStateItem = Object.assign({}, state.item);
        newStateItem[action.key] = undefined;
        return new AsyncItem(newStateItem, moment(), state.loading);
    };
    return SkyLinkRecordsSelectedOrchestrator;
}(SkyLinkRecordsStateOrchestrator));
export { SkyLinkRecordsSelectedOrchestrator };
//# sourceMappingURL=selected.orchestrator.js.map