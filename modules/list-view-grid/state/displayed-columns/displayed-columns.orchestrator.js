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
import { ListViewDisplayedGridColumnsLoadAction } from './actions';
var moment = require('moment');
var ListViewDisplayedGridColumnsOrchestrator = (function (_super) {
    __extends(ListViewDisplayedGridColumnsOrchestrator, _super);
    /* istanbul ignore next */
    function ListViewDisplayedGridColumnsOrchestrator() {
        var _this = _super.call(this) || this;
        _this
            .register(ListViewDisplayedGridColumnsLoadAction, _this.load);
        return _this;
    }
    ListViewDisplayedGridColumnsOrchestrator.prototype.load = function (state, action) {
        var newColumns = action.columns.map(function (g) { return new SkyGridColumnModel(g.template, g); });
        if (action.refresh) {
            return new AsyncList(newColumns.slice(), moment());
        }
        return new AsyncList(state.items.concat(newColumns), moment());
    };
    return ListViewDisplayedGridColumnsOrchestrator;
}(GridStateOrchestrator));
export { ListViewDisplayedGridColumnsOrchestrator };
//# sourceMappingURL=displayed-columns.orchestrator.js.map