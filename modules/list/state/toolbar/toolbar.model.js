var ListToolbarModel = (function () {
    function ListToolbarModel(data) {
        this.items = [];
        if (data) {
            this.exists = data.exists;
            this.items = data.items;
            this.type = data.type;
        }
    }
    return ListToolbarModel;
}());
export { ListToolbarModel };
//# sourceMappingURL=toolbar.model.js.map