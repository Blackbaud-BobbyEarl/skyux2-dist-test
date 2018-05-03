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
import { ListFiltersUpdateAction } from './actions';
var ListFiltersOrchestrator = (function (_super) {
    __extends(ListFiltersOrchestrator, _super);
    /* istanbul ignore next */
    function ListFiltersOrchestrator() {
        var _this = _super.call(this) || this;
        _this
            .register(ListFiltersUpdateAction, _this.update);
        return _this;
    }
    ListFiltersOrchestrator.prototype.update = function (state, action) {
        return action.filters.slice();
    };
    return ListFiltersOrchestrator;
}(ListStateOrchestrator));
export { ListFiltersOrchestrator };
//# sourceMappingURL=filters.orchestrator.js.map