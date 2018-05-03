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
import { ListPagingModel } from './paging.model';
import { ListPagingSetMaxPagesAction, ListPagingSetItemsPerPageAction, ListPagingSetPageNumberAction } from './actions';
var ListPagingOrchestrator = (function (_super) {
    __extends(ListPagingOrchestrator, _super);
    /* istanbul ignore next */
    function ListPagingOrchestrator() {
        var _this = _super.call(this) || this;
        _this
            .register(ListPagingSetMaxPagesAction, _this.setMaxPages)
            .register(ListPagingSetItemsPerPageAction, _this.setItemsPerPage)
            .register(ListPagingSetPageNumberAction, _this.setPageNumber);
        return _this;
    }
    ListPagingOrchestrator.prototype.setMaxPages = function (state, action) {
        return new ListPagingModel(Object.assign({}, state, { maxDisplayedPages: Number(action.maxPages) }));
    };
    ListPagingOrchestrator.prototype.setItemsPerPage = function (state, action) {
        return new ListPagingModel(Object.assign({}, state, { itemsPerPage: Number(action.itemsPerPage) }));
    };
    ListPagingOrchestrator.prototype.setPageNumber = function (state, action) {
        return new ListPagingModel(Object.assign({}, state, { pageNumber: Number(action.pageNumber) }));
    };
    return ListPagingOrchestrator;
}(ListStateOrchestrator));
export { ListPagingOrchestrator };
//# sourceMappingURL=paging.orchestrator.js.map