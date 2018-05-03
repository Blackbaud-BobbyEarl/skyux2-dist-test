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
import { ListToolbarStateOrchestrator } from '../toolbar-state.rxstate';
import { ListToolbarConfigModel } from './config.model';
import { ListToolbarConfigSetSearchEnabledAction, ListToolbarConfigSetSortSelectorEnabledAction } from './actions';
var ListToolbarConfigOrchestrator = (function (_super) {
    __extends(ListToolbarConfigOrchestrator, _super);
    /* istanbul ignore next */
    function ListToolbarConfigOrchestrator() {
        var _this = _super.call(this) || this;
        _this
            .register(ListToolbarConfigSetSearchEnabledAction, _this.setSearchEnabled)
            .register(ListToolbarConfigSetSortSelectorEnabledAction, _this.setSortSelectorEnabled);
        return _this;
    }
    ListToolbarConfigOrchestrator.prototype.setSearchEnabled = function (state, action) {
        return new ListToolbarConfigModel(Object.assign({}, state, { searchEnabled: action.enabled }));
    };
    ListToolbarConfigOrchestrator.prototype.setSortSelectorEnabled = function (state, action) {
        return new ListToolbarConfigModel(Object.assign({}, state, { sortSelectorEnabled: action.enabled }));
    };
    return ListToolbarConfigOrchestrator;
}(ListToolbarStateOrchestrator));
export { ListToolbarConfigOrchestrator };
//# sourceMappingURL=config.orchestrator.js.map