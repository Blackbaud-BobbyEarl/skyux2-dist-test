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
import { ListStateOrchestrator } from '../list-state.rxstate';
import { AsyncList } from 'microedge-rxstate/dist';
var moment = require('moment');
import { ListItemModel } from './item.model';
import { ListItemsSetLoadingAction, ListItemsLoadAction } from './actions';
var ListItemsOrchestrator = (function (_super) {
    __extends(ListItemsOrchestrator, _super);
    /* istanbul ignore next */
    function ListItemsOrchestrator() {
        var _this = _super.call(this) || this;
        _this
            .register(ListItemsSetLoadingAction, _this.setLoading)
            .register(ListItemsLoadAction, _this.load);
        return _this;
    }
    ListItemsOrchestrator.prototype.setLoading = function (state, action) {
        return new AsyncList(state.items, state.lastUpdate, action.loading, state.count);
    };
    ListItemsOrchestrator.prototype.load = function (state, action) {
        var newListItems = action.items.map(function (g) { return new ListItemModel(g.id, g.data); });
        var resultItems = (action.refresh) ? newListItems.slice() : state.items.concat(newListItems);
        var count = action.count === undefined ? resultItems.length : action.count;
        return new AsyncList(resultItems, action.dataChanged ? moment() : state.lastUpdate, false, count);
    };
    return ListItemsOrchestrator;
}(ListStateOrchestrator));
export { ListItemsOrchestrator };
//# sourceMappingURL=items.orchestrator.js.map