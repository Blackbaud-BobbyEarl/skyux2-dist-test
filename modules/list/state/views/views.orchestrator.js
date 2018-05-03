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
import { ListViewsModel } from './views.model';
import { ListViewsLoadAction } from './load.action';
import { ListViewsSetActiveAction } from './set-active.action';
var ListViewsOrchestrator = (function (_super) {
    __extends(ListViewsOrchestrator, _super);
    /* istanbul ignore next */
    function ListViewsOrchestrator() {
        var _this = _super.call(this) || this;
        _this
            .register(ListViewsSetActiveAction, _this.setActive)
            .register(ListViewsLoadAction, _this.load);
        return _this;
    }
    ListViewsOrchestrator.prototype.setActive = function (state, action) {
        return new ListViewsModel(Object.assign({}, state, { active: action.view }));
    };
    ListViewsOrchestrator.prototype.load = function (state, action) {
        return new ListViewsModel(Object.assign({}, state, { views: action.views }));
    };
    return ListViewsOrchestrator;
}(ListStateOrchestrator));
export { ListViewsOrchestrator };
//# sourceMappingURL=views.orchestrator.js.map