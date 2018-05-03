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
import { SKY_LINK_RECORDS_STATUSES } from '../../link-records-statuses';
import { SkyLinkRecordsMatchModel } from './match.model';
import { SkyLinkRecordsMatchesLoadAction, SkyLinkRecordsMatchesSetStatusAction, SkyLinkRecordsMatchesSetItemAction } from './actions';
var SkyLinkRecordsMatchesOrchestrator = (function (_super) {
    __extends(SkyLinkRecordsMatchesOrchestrator, _super);
    function SkyLinkRecordsMatchesOrchestrator() {
        var _this = _super.call(this) || this;
        _this
            .register(SkyLinkRecordsMatchesLoadAction, _this.load)
            .register(SkyLinkRecordsMatchesSetStatusAction, _this.setStatus)
            .register(SkyLinkRecordsMatchesSetItemAction, _this.setItem);
        return _this;
    }
    SkyLinkRecordsMatchesOrchestrator.prototype.load = function (state, action) {
        var newMatches = action.matches
            .filter(function (m) { return m; })
            .map(function (m) { return new SkyLinkRecordsMatchModel(m); })
            .filter(function (m) { return m.status !== SKY_LINK_RECORDS_STATUSES.NoMatch
            || !SKY_LINK_RECORDS_STATUSES.isValid(status); });
        if (action.refresh) {
            return new AsyncList(newMatches.slice(), moment());
        }
        return new AsyncList(state.items.concat(newMatches), moment());
    };
    SkyLinkRecordsMatchesOrchestrator.prototype.setStatus = function (state, action) {
        var newMatches = state.items
            .filter(function (m) { return m; })
            .map(function (m) {
            var match = new SkyLinkRecordsMatchModel(m);
            if (match.key === action.key) {
                match.status = action.status;
            }
            return match;
        })
            .filter(function (m) { return m.status !== SKY_LINK_RECORDS_STATUSES.NoMatch
            || !SKY_LINK_RECORDS_STATUSES.isValid(status); });
        return new AsyncList(newMatches.slice(), moment());
    };
    SkyLinkRecordsMatchesOrchestrator.prototype.setItem = function (state, action) {
        var newMatches = state.items
            .filter(function (m) { return m; })
            .map(function (m) {
            var match = new SkyLinkRecordsMatchModel(m);
            if (match.key === action.key) {
                match.item = (action.item) ? Object.assign({}, action.item) : undefined;
            }
            return match;
        })
            .filter(function (m) { return m.status !== SKY_LINK_RECORDS_STATUSES.NoMatch
            || !SKY_LINK_RECORDS_STATUSES.isValid(status); });
        return new AsyncList(newMatches.slice(), moment());
    };
    return SkyLinkRecordsMatchesOrchestrator;
}(SkyLinkRecordsStateOrchestrator));
export { SkyLinkRecordsMatchesOrchestrator };
//# sourceMappingURL=matches.orchestrator.js.map