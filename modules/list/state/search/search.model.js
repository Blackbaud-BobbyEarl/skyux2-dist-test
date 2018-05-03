var ListSearchModel = (function () {
    function ListSearchModel(data) {
        this.searchText = '';
        this.functions = [];
        this.fieldSelectors = [];
        if (data) {
            this.searchText = data.searchText;
            this.functions = data.functions.slice();
            this.fieldSelectors = data.fieldSelectors;
        }
    }
    return ListSearchModel;
}());
export { ListSearchModel };
//# sourceMappingURL=search.model.js.map