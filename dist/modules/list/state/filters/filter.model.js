var ListFilterModel = (function () {
    function ListFilterModel(data) {
        this.dismissible = true;
        if (data) {
            this.name = data.name;
            this.label = data.label;
            this.filterFunction = data.filterFunction;
            this.value = data.value;
            this.dismissible = data.dismissible;
            this.defaultValue = data.defaultValue;
        }
    }
    return ListFilterModel;
}());
export { ListFilterModel };
//# sourceMappingURL=filter.model.js.map