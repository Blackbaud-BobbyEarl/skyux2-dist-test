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
import { StateDispatcher, StateOrchestrator } from 'microedge-rxstate/dist';
import { ListViewsSetActiveAction } from './views/actions';
import { ListToolbarItemsLoadAction, ListToolbarItemsRemoveAction, ListToolbarSetExistsAction } from './toolbar/actions';
import { ListSearchSetFunctionsAction, ListSearchSetSearchTextAction, ListSearchSetFieldSelectorsAction, ListSearchSetOptionsAction } from './search/actions';
import { ListSortSetAvailableAction, ListSortSetFieldSelectorsAction, ListSortSetGlobalAction } from './sort/actions';
import { ListFiltersUpdateAction } from './filters/actions';
var ListStateOrchestrator = (function (_super) {
    __extends(ListStateOrchestrator, _super);
    function ListStateOrchestrator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ListStateOrchestrator;
}(StateOrchestrator));
export { ListStateOrchestrator };
var ListStateDispatcher = (function (_super) {
    __extends(ListStateDispatcher, _super);
    function ListStateDispatcher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListStateDispatcher.prototype.viewsSetActive = function (id) {
        this.next(new ListViewsSetActiveAction(id));
    };
    ListStateDispatcher.prototype.toolbarExists = function (exists) {
        this.next(new ListToolbarSetExistsAction(exists));
    };
    ListStateDispatcher.prototype.toolbarAddItems = function (items, index) {
        if (index === void 0) { index = -1; }
        this.next(new ListToolbarItemsLoadAction(items, index));
    };
    ListStateDispatcher.prototype.toolbarRemoveItems = function (ids) {
        this.next(new ListToolbarItemsRemoveAction(ids));
    };
    ListStateDispatcher.prototype.searchSetFunctions = function (sortFunctions) {
        this.next(new ListSearchSetFunctionsAction(sortFunctions));
    };
    ListStateDispatcher.prototype.searchSetFieldSelectors = function (fieldSelectors) {
        this.next(new ListSearchSetFieldSelectorsAction(fieldSelectors));
    };
    ListStateDispatcher.prototype.searchSetText = function (searchText) {
        this.next(new ListSearchSetSearchTextAction(searchText));
    };
    ListStateDispatcher.prototype.searchSetOptions = function (searchOptions) {
        this.next(new ListSearchSetOptionsAction(new ListSearchSetSearchTextAction(searchOptions.searchText), new ListSearchSetFieldSelectorsAction(searchOptions.fieldSelectors), new ListSearchSetFunctionsAction(searchOptions.functions)));
    };
    ListStateDispatcher.prototype.sortSetAvailable = function (sortLabels) {
        this.next(new ListSortSetAvailableAction(sortLabels));
    };
    ListStateDispatcher.prototype.sortSetFieldSelectors = function (fieldSelectors) {
        this.next(new ListSortSetFieldSelectorsAction(fieldSelectors));
    };
    ListStateDispatcher.prototype.sortSetGlobal = function (sortLabels) {
        this.next(new ListSortSetGlobalAction(sortLabels));
    };
    ListStateDispatcher.prototype.filtersUpdate = function (filters) {
        this.next(new ListFiltersUpdateAction(filters));
    };
    return ListStateDispatcher;
}(StateDispatcher));
export { ListStateDispatcher };
ListStateDispatcher.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ListStateDispatcher.ctorParameters = function () { return []; };
//# sourceMappingURL=list-state.rxstate.js.map