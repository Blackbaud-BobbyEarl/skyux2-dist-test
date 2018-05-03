export function skyAutocompleteDefaultSearchFunction(options) {
    var filterData = function (searchText, data) {
        return data.filter(function (item) {
            if (!options.searchFilters || !options.searchFilters.length) {
                return true;
            }
            // Find the first failing filter (we can skip the others if one fails).
            var failedFilter = options.searchFilters
                .find(function (filter) {
                return !(filter.call({}, searchText, item));
            });
            return (failedFilter === undefined);
        });
    };
    var search = function (searchText, data) {
        var searchTextLower = searchText.toLowerCase();
        var filteredData = filterData(searchText, data);
        var results = [];
        var _loop_1 = function (i, n) {
            var limitReached = (options.searchResultsLimit &&
                options.searchResultsLimit <= results.length);
            if (limitReached) {
                return { value: results };
            }
            var result = filteredData[i];
            var isMatch = options.propertiesToSearch.find(function (property) {
                var value = (result[property] || '').toString().toLowerCase();
                return (value.indexOf(searchTextLower) > -1);
            });
            if (isMatch) {
                results.push(result);
            }
        };
        for (var i = 0, n = filteredData.length; i < n; i++) {
            var state_1 = _loop_1(i, n);
            if (typeof state_1 === "object")
                return state_1.value;
        }
        return results;
    };
    return search;
}
//# sourceMappingURL=autocomplete-default-search-function.js.map