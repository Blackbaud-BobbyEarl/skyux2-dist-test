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
import { SkyLinkRecordsFieldsSetFieldsAction, SkyLinkRecordsFieldsClearFieldsAction } from './actions';
var SkyLinkRecordsFieldsOrchestrator = (function (_super) {
    __extends(SkyLinkRecordsFieldsOrchestrator, _super);
    function SkyLinkRecordsFieldsOrchestrator() {
        var _this = _super.call(this) || this;
        _this
            .register(SkyLinkRecordsFieldsSetFieldsAction, _this.setFields)
            .register(SkyLinkRecordsFieldsClearFieldsAction, _this.clearFields);
        return _this;
    }
    SkyLinkRecordsFieldsOrchestrator.prototype.setFields = function (state, action) {
        var newStateItem = Object.assign({}, state.item);
        var fields = (newStateItem[action.key]) ? newStateItem[action.key] : [];
        var newFields = Object.assign(fields, action.fields).filter(function (f) { return f; });
        newStateItem[action.key] = newFields;
        return new AsyncItem(newStateItem, moment(), state.loading);
    };
    SkyLinkRecordsFieldsOrchestrator.prototype.clearFields = function (state, action) {
        var newStateItem = Object.assign({}, state.item);
        newStateItem[action.key] = undefined;
        return new AsyncItem(newStateItem, moment(), state.loading);
    };
    return SkyLinkRecordsFieldsOrchestrator;
}(SkyLinkRecordsStateOrchestrator));
export { SkyLinkRecordsFieldsOrchestrator };
//# sourceMappingURL=fields.orchestrator.js.map