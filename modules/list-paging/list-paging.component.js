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
import { Component, Input, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import 'rxjs/add/operator/distinctUntilChanged';
import { getValue } from 'microedge-rxstate/dist/helpers';
import { ListPagingComponent } from '../list/list-paging.component';
import { ListState, ListStateDispatcher } from '../list/state';
import { ListPagingSetMaxPagesAction, ListPagingSetItemsPerPageAction, ListPagingSetPageNumberAction } from '../list/state/paging/actions';
var SkyListPagingComponent = (function (_super) {
    __extends(SkyListPagingComponent, _super);
    function SkyListPagingComponent(state, dispatcher) {
        var _this = _super.call(this, state, dispatcher) || this;
        _this.pageSize = 10;
        _this.maxPages = 5;
        _this.pageNumber = 1;
        return _this;
    }
    SkyListPagingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentPageNumber = this.state.map(function (s) { return s.paging.pageNumber; });
        this.maxDisplayedPages = this.state.map(function (s) { return s.paging.maxDisplayedPages; });
        this.itemsPerPage = this.state.map(function (s) { return s.paging.itemsPerPage; });
        this.itemCount = this.state.map(function (s) {
            return s.items;
        })
            .scan(function (previousValue, newValue) {
            if (previousValue.lastUpdate > newValue.lastUpdate) {
                return previousValue;
            }
            else {
                return newValue;
            }
        })
            .map(function (result) {
            return result.count;
        })
            .distinctUntilChanged();
        // subscribe to or use inputs
        getValue(this.pageSize, function (pageSize) {
            return _this.dispatcher.next(new ListPagingSetItemsPerPageAction(Number(pageSize)));
        });
        getValue(this.maxPages, function (maxPages) {
            return _this.dispatcher.next(new ListPagingSetMaxPagesAction(Number(maxPages)));
        });
        getValue(this.pageNumber, function (pageNumber) {
            return _this.dispatcher.next(new ListPagingSetPageNumberAction(Number(pageNumber)));
        });
    };
    SkyListPagingComponent.prototype.pageChange = function (currentPage) {
        this.dispatcher.next(new ListPagingSetPageNumberAction(Number(currentPage)));
    };
    return SkyListPagingComponent;
}(ListPagingComponent));
export { SkyListPagingComponent };
SkyListPagingComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-list-paging',
                template: "<div>\n  <sky-paging\n    [pageSize]=\"itemsPerPage | async\"\n    [maxPages]=\"maxDisplayedPages | async\"\n    [currentPage]=\"currentPageNumber | async\"\n    [itemCount]=\"itemCount | async\"\n    (currentPageChange)=\"pageChange($event)\"\n    >\n  </sky-paging>\n</div>\n",
                providers: [
                    /* tslint:disable */
                    { provide: ListPagingComponent, useExisting: forwardRef(function () { return SkyListPagingComponent; }) }
                    /* tslint:enable */
                ],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
SkyListPagingComponent.ctorParameters = function () { return [
    { type: ListState, },
    { type: ListStateDispatcher, },
]; };
SkyListPagingComponent.propDecorators = {
    'pageSize': [{ type: Input },],
    'maxPages': [{ type: Input },],
    'pageNumber': [{ type: Input },],
};
//# sourceMappingURL=list-paging.component.js.map