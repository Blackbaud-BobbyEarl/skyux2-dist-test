import { Component } from '@angular/core';
import { ListState, ListStateDispatcher, ListItemsLoadAction, ListItemModel } from '../../core';
var SkyListPagingDemoComponent = (function () {
    function SkyListPagingDemoComponent(dispatcher) {
        this.dispatcher = dispatcher;
    }
    SkyListPagingDemoComponent.prototype.ngOnInit = function () {
        this.dispatcher.next(new ListItemsLoadAction([
            new ListItemModel('1'),
            new ListItemModel('2'),
            new ListItemModel('3'),
            new ListItemModel('4'),
            new ListItemModel('5'),
            new ListItemModel('6'),
            new ListItemModel('7')
        ], true));
    };
    return SkyListPagingDemoComponent;
}());
export { SkyListPagingDemoComponent };
SkyListPagingDemoComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-list-paging-demo',
                template: "<sky-list-paging\n  pageSize=\"2\"\n  maxPages=\"3\"\n  pageNumber=\"1\">\n</sky-list-paging>\n",
                providers: [
                    ListState,
                    ListStateDispatcher
                ]
            },] },
];
/** @nocollapse */
SkyListPagingDemoComponent.ctorParameters = function () { return [
    { type: ListStateDispatcher, },
]; };
//# sourceMappingURL=list-paging-demo.component.js.map