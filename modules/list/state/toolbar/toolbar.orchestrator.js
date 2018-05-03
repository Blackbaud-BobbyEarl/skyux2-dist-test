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
import { ListToolbarModel } from './toolbar.model';
import { ListToolbarItemModel } from './toolbar-item.model';
import { ListToolbarItemsLoadAction, ListToolbarItemsRemoveAction, ListToolbarSetExistsAction, ListToolbarSetTypeAction } from './actions';
var ListToolbarOrchestrator = (function (_super) {
    __extends(ListToolbarOrchestrator, _super);
    /* istanbul ignore next */
    function ListToolbarOrchestrator() {
        var _this = _super.call(this) || this;
        _this
            .register(ListToolbarSetExistsAction, _this.setExists)
            .register(ListToolbarItemsLoadAction, _this.load)
            .register(ListToolbarSetTypeAction, _this.setType)
            .register(ListToolbarItemsRemoveAction, _this.remove);
        return _this;
    }
    ListToolbarOrchestrator.prototype.setExists = function (state, action) {
        var newModel = new ListToolbarModel(state);
        newModel.exists = action.exists;
        return newModel;
    };
    ListToolbarOrchestrator.prototype.setType = function (state, action) {
        var newModel = new ListToolbarModel(state);
        newModel.type = action.type;
        return newModel;
    };
    ListToolbarOrchestrator.prototype.load = function (state, action) {
        var newModel = new ListToolbarModel(state);
        var newListItems = action.items.map(function (item) { return new ListToolbarItemModel(item); });
        var resultItems = state.items.slice();
        if (action.index === -1 || action.index > state.items.length) {
            resultItems = resultItems.concat(newListItems);
        }
        else if (action.index === 0) {
            resultItems = newListItems.concat(resultItems);
        }
        else {
            newListItems.reverse().forEach(function (item) { return resultItems.splice(action.index, 0, item); });
        }
        newModel.items = resultItems;
        return newModel;
    };
    ListToolbarOrchestrator.prototype.remove = function (state, action) {
        var newModel = new ListToolbarModel(state);
        newModel.items = newModel.items.filter(function (item) {
            return action.ids.indexOf(item.id) === -1;
        });
        return newModel;
    };
    return ListToolbarOrchestrator;
}(ListStateOrchestrator));
export { ListToolbarOrchestrator };
//# sourceMappingURL=toolbar.orchestrator.js.map