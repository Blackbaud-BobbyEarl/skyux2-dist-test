var ListToolbarItemModel = (function () {
    function ListToolbarItemModel(data) {
        if (data) {
            this.template = data.template;
            this.location = data.location;
            this.view = data.view;
            this.id = data.id;
        }
    }
    return ListToolbarItemModel;
}());
export { ListToolbarItemModel };
//# sourceMappingURL=toolbar-item.model.js.map