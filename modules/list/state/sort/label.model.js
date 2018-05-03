var ListSortLabelModel = (function () {
    function ListSortLabelModel(data) {
        this.global = false;
        this.descending = false;
        if (data) {
            this.text = data.text;
            this.fieldType = data.fieldType;
            this.fieldSelector = data.fieldSelector;
            this.global = data.global;
            this.descending = data.descending;
        }
    }
    return ListSortLabelModel;
}());
export { ListSortLabelModel };
//# sourceMappingURL=label.model.js.map