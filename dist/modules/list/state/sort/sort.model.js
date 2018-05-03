var ListSortModel = (function () {
    function ListSortModel(data) {
        this.available = [];
        this.global = [];
        this.fieldSelectors = [];
        if (data) {
            this.available = data.available;
            this.global = data.global;
            this.fieldSelectors = data.fieldSelectors;
        }
    }
    return ListSortModel;
}());
export { ListSortModel };
//# sourceMappingURL=sort.model.js.map