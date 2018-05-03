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
import { AsyncList } from 'microedge-rxstate/dist';
var moment = require('moment');
import { SkyLinkRecordsResultModel } from './result.model';
import { SkyLinkRecordsResultsLoadAction } from './actions';
var SkyLinkRecordsResultsOrchestrator = (function (_super) {
    __extends(SkyLinkRecordsResultsOrchestrator, _super);
    function SkyLinkRecordsResultsOrchestrator() {
        var _this = _super.call(this) || this;
        _this
            .register(SkyLinkRecordsResultsLoadAction, _this.load);
        return _this;
    }
    SkyLinkRecordsResultsOrchestrator.prototype.load = function (state, action) {
        var newResults = action.results.filter(function (c) { return c; }).map(function (g) { return new SkyLinkRecordsResultModel(g); });
        if (action.refresh) {
            return new AsyncList(newResults, moment());
        }
        return new AsyncList(state.items.concat(newResults), moment());
    };
    return SkyLinkRecordsResultsOrchestrator;
}(SkyLinkRecordsStateOrchestrator));
export { SkyLinkRecordsResultsOrchestrator };
//# sourceMappingURL=results.orchestrator.js.map