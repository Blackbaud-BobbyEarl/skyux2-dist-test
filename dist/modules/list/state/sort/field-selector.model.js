var ListSortFieldSelectorModel = (function () {
    function ListSortFieldSelectorModel(data) {
        this.descending = false;
        if (data) {
            this.fieldSelector = data.fieldSelector;
            this.descending = data.descending;
        }
    }
    return ListSortFieldSelectorModel;
}());
export { ListSortFieldSelectorModel };
//# sourceMappingURL=field-selector.model.js.map