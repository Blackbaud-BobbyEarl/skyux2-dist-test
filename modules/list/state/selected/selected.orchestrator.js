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
import { AsyncItem } from 'microedge-rxstate/dist';
import { ListSelectedModel } from './selected.model';
import { ListSelectedLoadAction, ListSelectedSetLoadingAction, ListSelectedSetItemSelectedAction, ListSelectedSetItemsSelectedAction } from './actions';
var moment = require('moment');
var ListSelectedOrchestrator = (function (_super) {
    __extends(ListSelectedOrchestrator, _super);
    /* istanbul ignore next */
    function ListSelectedOrchestrator() {
        var _this = _super.call(this) || this;
        _this
            .register(ListSelectedSetLoadingAction, _this.setLoading)
            .register(ListSelectedSetItemSelectedAction, _this.setItemSelected)
            .register(ListSelectedSetItemsSelectedAction, _this.setItemsSelected)
            .register(ListSelectedLoadAction, _this.load);
        return _this;
    }
    ListSelectedOrchestrator.prototype.setLoading = function (state, action) {
        return new AsyncItem(state.item, state.lastUpdate, action.loading);
    };
    ListSelectedOrchestrator.prototype.load = function (state, action) {
        var newSelected = new ListSelectedModel();
        action.items.map(function (s) { return newSelected.selectedIdMap.set(s, true); });
        return new AsyncItem(Object.assign({}, state.item, newSelected), moment(), false);
    };
    ListSelectedOrchestrator.prototype.setItemSelected = function (state, action) {
        var newSelected = Object.assign({}, state.item);
        newSelected.selectedIdMap.set(action.id, action.selected);
        return new AsyncItem(newSelected, state.lastUpdate, state.loading);
    };
    ListSelectedOrchestrator.prototype.setItemsSelected = function (state, action) {
        var newSelected = action.refresh ? new ListSelectedModel() : Object.assign({}, state.item);
        action.items.map(function (s) { return newSelected.selectedIdMap.set(s, action.selected); });
        return new AsyncItem(newSelected, state.lastUpdate, state.loading);
    };
    return ListSelectedOrchestrator;
}(ListStateOrchestrator));
export { ListSelectedOrchestrator };
//# sourceMappingURL=selected.orchestrator.js.map