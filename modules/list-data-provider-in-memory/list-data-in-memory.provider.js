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
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ListDataProvider } from '../list/list-data.provider';
import { ListDataResponseModel } from '../list/list-data-response.model';
import { ListItemModel } from '../list/state/items/item.model';
import { compare, getData } from '../list/helpers';
var moment = require('moment');
var SkyListInMemoryDataProvider = (function (_super) {
    __extends(SkyListInMemoryDataProvider, _super);
    function SkyListInMemoryDataProvider(data, searchFunction) {
        var _this = _super.call(this, data) || this;
        _this.items = new BehaviorSubject([]);
        _this.searchFunction = searchFunction;
        if (data) {
            data.subscribe(function (items) {
                _this.items.next(items.map(function (d) {
                    return new ListItemModel(d.id || moment().toDate().getTime().toString(), d);
                }));
            });
        }
        return _this;
    }
    SkyListInMemoryDataProvider.prototype.count = function () {
        return this.items.map(function (items) { return items.length; });
    };
    SkyListInMemoryDataProvider.prototype.get = function (request) {
        return this.filteredItems(request).map(function (result) {
            if (request.pageNumber && request.pageSize) {
                var itemStart = (request.pageNumber - 1) * request.pageSize;
                var pagedResult = result.slice(itemStart, itemStart + request.pageSize);
                return new ListDataResponseModel({
                    count: result.length,
                    items: pagedResult
                });
            }
            else {
                return new ListDataResponseModel({
                    count: result.length,
                    items: result
                });
            }
        });
    };
    SkyListInMemoryDataProvider.prototype.filteredItems = function (request) {
        var _this = this;
        return this.items.map(function (items) {
            var dataChanged = false;
            var search = request.search;
            var sort = request.sort;
            var filters = request.filters;
            if (_this.lastItems === undefined || _this.lastItems !== items) {
                dataChanged = true;
                _this.lastItems = items;
            }
            var searchChanged = false;
            if (_this.lastSearch === undefined || _this.lastSearch !== search) {
                searchChanged = true;
                _this.lastSearch = search;
            }
            var filtersChanged = false;
            if (_this.lastFilters === undefined || _this.lastFilters !== filters) {
                filtersChanged = true;
                _this.lastFilters = filters;
            }
            var result = items;
            if (!dataChanged && !filtersChanged && _this.lastFilterResults !== undefined) {
                result = _this.lastFilterResults;
            }
            else if (filters && filters.length > 0) {
                result = result.filter(function (item) {
                    for (var i = 0; i < filters.length; i++) {
                        var filter = filters[i];
                        if (filter.value === undefined ||
                            filter.value === '' ||
                            filter.value === false ||
                            filter.value === filter.defaultValue) {
                            continue;
                        }
                        if (!filter.filterFunction(item, filter.value)) {
                            return false;
                        }
                    }
                    return true;
                });
                _this.lastFilterResults = result;
            }
            else {
                _this.lastFilterResults = undefined;
            }
            if (!dataChanged && !searchChanged && _this.lastSearchResults !== undefined) {
                result = _this.lastSearchResults;
            }
            else if (search && search.searchText !== undefined && search.searchText.length > 0) {
                var searchText_1 = search.searchText.toLowerCase();
                var searchFunctions_1;
                if (_this.searchFunction !== undefined) {
                    searchFunctions_1 = [_this.searchFunction];
                }
                else {
                    searchFunctions_1 = search.functions;
                }
                result = result.filter(function (item) {
                    var isMatch = false;
                    for (var i = 0; i < searchFunctions_1.length; i++) {
                        var searchFunction = searchFunctions_1[i];
                        var searchResult = searchFunction(item.data, searchText_1);
                        if ((typeof searchResult === 'string' && searchResult.indexOf(searchText_1) !== -1) ||
                            searchResult === true) {
                            isMatch = true;
                            break;
                        }
                    }
                    return isMatch;
                });
                _this.lastSearchResults = result;
            }
            else {
                _this.lastSearchResults = undefined;
            }
            if (sort && sort.fieldSelectors.length > 0) {
                result = result.slice().sort(function (item1, item2) {
                    var compareResult = 0;
                    for (var i = 0; i < sort.fieldSelectors.length; i++) {
                        var selector = sort.fieldSelectors[i];
                        var value1 = getData(item1.data, selector.fieldSelector);
                        var value2 = getData(item2.data, selector.fieldSelector);
                        compareResult = compare(value1, value2);
                        if (selector.descending && compareResult !== 0) {
                            compareResult *= -1;
                        }
                        if (compareResult !== 0) {
                            break;
                        }
                    }
                    return compareResult;
                });
            }
            return result;
        });
    };
    return SkyListInMemoryDataProvider;
}(ListDataProvider));
export { SkyListInMemoryDataProvider };
//# sourceMappingURL=list-data-in-memory.provider.js.map