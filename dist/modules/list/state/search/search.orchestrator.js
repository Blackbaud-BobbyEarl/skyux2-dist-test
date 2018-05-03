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
import { ListSearchModel } from './search.model';
import { ListSearchSetSearchTextAction } from './set-search-text.action';
import { ListSearchSetFunctionsAction } from './set-functions.action';
import { ListSearchSetFieldSelectorsAction } from './set-field-selectors.action';
import { ListSearchSetOptionsAction } from './set-options.action';
var ListSearchOrchestrator = (function (_super) {
    __extends(ListSearchOrchestrator, _super);
    /* istanbul ignore next */
    function ListSearchOrchestrator() {
        var _this = _super.call(this) || this;
        _this
            .register(ListSearchSetSearchTextAction, _this.setSearchText)
            .register(ListSearchSetFunctionsAction, _this.setFunctions)
            .register(ListSearchSetFieldSelectorsAction, _this.setFieldSelectors)
            .register(ListSearchSetOptionsAction, _this.setOptions);
        return _this;
    }
    ListSearchOrchestrator.prototype.setSearchText = function (state, action) {
        return new ListSearchModel(Object.assign({}, state, { searchText: action.searchText ? action.searchText : '' }));
    };
    ListSearchOrchestrator.prototype.setFunctions = function (state, action) {
        return new ListSearchModel(Object.assign({}, state, { functions: action.functions.slice() }));
    };
    ListSearchOrchestrator.prototype.setFieldSelectors = function (state, action) {
        return new ListSearchModel(Object.assign({}, state, { fieldSelectors: action.fieldSelectors.slice() }));
    };
    ListSearchOrchestrator.prototype.setOptions = function (state, action) {
        var result = state;
        /* istanbul ignore else */
        if (action.searchTextAction) {
            result = this.setSearchText(result, action.searchTextAction);
        }
        /* istanbul ignore else */
        if (action.setFieldSelectorsAction) {
            result = this.setFieldSelectors(result, action.setFieldSelectorsAction);
        }
        /* istanbul ignore else */
        if (action.setFunctionsAction) {
            result = this.setFunctions(result, action.setFunctionsAction);
        }
        return result;
    };
    return ListSearchOrchestrator;
}(ListStateOrchestrator));
export { ListSearchOrchestrator };
//# sourceMappingURL=search.orchestrator.js.map