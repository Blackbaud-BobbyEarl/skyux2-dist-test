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
import { Component, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import { ListDataProvider, ListDataResponseModel } from '../../core';
var DemoListProvider = (function (_super) {
    __extends(DemoListProvider, _super);
    function DemoListProvider() {
        var _this = _super.call(this) || this;
        _this.remoteCount = new BehaviorSubject(0);
        _this.items = Observable.of([
            {
                id: '1',
                data: {
                    column1: 101, column2: 'Apple', column3: 'Anne eats apples'
                }
            },
            {
                id: '2',
                data: {
                    column1: 202, column2: 'Banana', column3: 'Ben eats bananas'
                }
            },
            {
                id: '3',
                data: {
                    column1: 303, column2: 'Pear', column3: 'Patty eats pears'
                }
            },
            {
                id: '4',
                data: {
                    column1: 404, column2: 'Grape', column3: 'George eats grapes'
                }
            },
            {
                id: '5',
                data: {
                    column1: 505, column2: 'Banana', column3: 'Becky eats bananas'
                }
            },
            {
                id: '6',
                data: {
                    column1: 606, column2: 'Lemon', column3: 'Larry eats lemons'
                }
            },
            {
                id: '7',
                data: {
                    column1: 707, column2: 'Strawberry', column3: 'Sally eats strawberries'
                }
            }
        ]);
        return _this;
    }
    DemoListProvider.prototype.get = function (request) {
        /*
          In get() you get data based on a given ListDataRequestModel.
          You can fetch data remotely here and return an Observable<ListDataResponseModel>.
        */
        return this.fakeHttpRequest(request);
    };
    DemoListProvider.prototype.count = function () {
        return this.remoteCount;
    };
    DemoListProvider.prototype.fakeHttpRequest = function (request) {
        var _this = this;
        return this.items.map(function (items) {
            var searchedList = items;
            if (request.search.searchText) {
                var searchText_1 = request.search.searchText.toLowerCase();
                searchedList = items.filter(function (item) {
                    return (item.data.column2.toLowerCase().indexOf(searchText_1) > -1 ||
                        item.data.column3.toLowerCase().indexOf(searchText_1) > -1);
                });
            }
            var itemStart = (request.pageNumber - 1) * request.pageSize;
            var pagedResult = searchedList.slice(itemStart, itemStart + request.pageSize);
            _this.remoteCount.next(searchedList.length);
            return new ListDataResponseModel({
                count: searchedList.length,
                items: pagedResult
            });
        });
    };
    return DemoListProvider;
}(ListDataProvider));
export { DemoListProvider };
DemoListProvider.decorators = [
    { type: Injectable },
];
/** @nocollapse */
DemoListProvider.ctorParameters = function () { return []; };
var SkyListProviderDemoComponent = (function () {
    function SkyListProviderDemoComponent(listDataProvider) {
        this.listDataProvider = listDataProvider;
    }
    return SkyListProviderDemoComponent;
}());
export { SkyListProviderDemoComponent };
SkyListProviderDemoComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-list-provider-demo',
                template: "<sky-list [dataProvider]=\"listDataProvider\">\n  <sky-list-toolbar></sky-list-toolbar>\n\n  <sky-list-view-grid fit=\"scroll\">\n    <sky-grid-column field=\"column1\" heading=\"Column1\"></sky-grid-column>\n    <sky-grid-column field=\"column2\" heading=\"Column2\"></sky-grid-column>\n    <sky-grid-column field=\"column3\" heading=\"Column3\"></sky-grid-column>\n  </sky-list-view-grid>\n\n  <sky-list-paging pageSize=\"5\"></sky-list-paging>\n</sky-list>\n",
                providers: [DemoListProvider]
            },] },
];
/** @nocollapse */
SkyListProviderDemoComponent.ctorParameters = function () { return [
    { type: DemoListProvider, },
]; };
//# sourceMappingURL=list-provider-demo.component.js.map