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
import { Injectable } from '@angular/core';
import { StateNode } from 'microedge-rxstate/dist';
import { ListStateModel } from './list-state.model';
import { ListStateDispatcher } from './list-state.rxstate';
import { ListFiltersOrchestrator } from './filters/filters.orchestrator';
import { ListItemsOrchestrator } from './items/items.orchestrator';
import { ListPagingOrchestrator } from './paging/paging.orchestrator';
import { ListViewsOrchestrator } from './views/views.orchestrator';
import { ListToolbarOrchestrator } from './toolbar/toolbar.orchestrator';
import { ListSearchOrchestrator } from './search/search.orchestrator';
import { ListSelectedOrchestrator } from './selected/selected.orchestrator';
import { ListSortOrchestrator } from './sort/sort.orchestrator';
var ListState = (function (_super) {
    __extends(ListState, _super);
    function ListState(dispatcher) {
        var _this = _super.call(this, new ListStateModel(), dispatcher) || this;
        _this
            .register('filters', ListFiltersOrchestrator)
            .register('items', ListItemsOrchestrator)
            .register('paging', ListPagingOrchestrator)
            .register('search', ListSearchOrchestrator)
            .register('sort', ListSortOrchestrator)
            .register('toolbar', ListToolbarOrchestrator)
            .register('views', ListViewsOrchestrator)
            .register('selected', ListSelectedOrchestrator)
            .begin();
        return _this;
    }
    return ListState;
}(StateNode));
export { ListState };
ListState.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ListState.ctorParameters = function () { return [
    { type: ListStateDispatcher, },
]; };
//# sourceMappingURL=list-state.state-node.js.map