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
import { GridStateOrchestrator } from '../grid-state.rxstate';
import { AsyncList } from 'microedge-rxstate/dist';
import { SkyGridColumnModel } from '../../../grid';
import { ListViewGridColumnsLoadAction } from './actions';
var moment = require('moment');
var ListViewGridColumnsOrchestrator = (function (_super) {
    __extends(ListViewGridColumnsOrchestrator, _super);
    /* istanbul ignore next */
    function ListViewGridColumnsOrchestrator() {
        var _this = _super.call(this) || this;
        _this
            .register(ListViewGridColumnsLoadAction, _this.load);
        return _this;
    }
    ListViewGridColumnsOrchestrator.prototype.load = function (state, action) {
        var newColumns = action.columns.map(function (g) { return new SkyGridColumnModel(g.template, g); });
        if (action.refresh) {
            return new AsyncList(newColumns.slice(), moment());
        }
        return new AsyncList(state.items.concat(newColumns), moment());
    };
    return ListViewGridColumnsOrchestrator;
}(GridStateOrchestrator));
export { ListViewGridColumnsOrchestrator };
//# sourceMappingURL=columns.orchestrator.js.map