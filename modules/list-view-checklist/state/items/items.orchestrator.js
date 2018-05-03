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
import { ChecklistStateOrchestrator } from '../checklist-state.rxstate';
import { AsyncList } from 'microedge-rxstate/dist';
import { ListViewChecklistItemModel } from './item.model';
import { ListViewChecklistItemsLoadAction } from './actions';
var moment = require('moment');
var ListViewChecklistItemsOrchestrator = (function (_super) {
    __extends(ListViewChecklistItemsOrchestrator, _super);
    /* istanbul ignore next */
    function ListViewChecklistItemsOrchestrator() {
        var _this = _super.call(this) || this;
        _this.register(ListViewChecklistItemsLoadAction, _this.load);
        return _this;
    }
    ListViewChecklistItemsOrchestrator.prototype.load = function (state, action) {
        var newListItems = action.items.map(function (item) { return new ListViewChecklistItemModel(item.id, item); });
        if (action.refresh) {
            return new AsyncList(newListItems.slice(), action.dataChanged ? moment() : state.lastUpdate, false, state.count);
        }
        return new AsyncList(state.items.concat(newListItems), action.dataChanged ? moment() : state.lastUpdate, false, action.itemCount);
    };
    return ListViewChecklistItemsOrchestrator;
}(ChecklistStateOrchestrator));
export { ListViewChecklistItemsOrchestrator };
//# sourceMappingURL=items.orchestrator.js.map