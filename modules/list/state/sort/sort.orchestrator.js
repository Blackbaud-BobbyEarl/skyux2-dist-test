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
import { ListSortModel } from './sort.model';
import { ListSortLabelModel } from './label.model';
import { ListSortSetFieldSelectorsAction, ListSortSetAvailableAction, ListSortSetGlobalAction } from './actions';
var ListSortOrchestrator = (function (_super) {
    __extends(ListSortOrchestrator, _super);
    /* istanbul ignore next */
    function ListSortOrchestrator() {
        var _this = _super.call(this) || this;
        _this
            .register(ListSortSetFieldSelectorsAction, _this.setFieldSelectors)
            .register(ListSortSetAvailableAction, _this.setAvailable)
            .register(ListSortSetGlobalAction, _this.setGlobal);
        return _this;
    }
    ListSortOrchestrator.prototype.setFieldSelectors = function (state, action) {
        return new ListSortModel(Object.assign({}, state, { fieldSelectors: action.fieldSelectors }));
    };
    ListSortOrchestrator.prototype.setAvailable = function (state, action) {
        var newAvailable = action.available.map(function (available) { return new ListSortLabelModel(available); });
        return new ListSortModel(Object.assign({}, state, { available: newAvailable }));
    };
    ListSortOrchestrator.prototype.setGlobal = function (state, action) {
        var newGlobal = action.global.map(function (global) { return new ListSortLabelModel(global); });
        return new ListSortModel(Object.assign({}, state, { global: newGlobal }));
    };
    return ListSortOrchestrator;
}(ListStateOrchestrator));
export { ListSortOrchestrator };
//# sourceMappingURL=sort.orchestrator.js.map