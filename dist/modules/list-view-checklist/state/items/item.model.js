var ListViewChecklistItemModel = (function () {
    function ListViewChecklistItemModel(id, data) {
        this.id = id;
        if (data) {
            this.label = data.label;
            this.description = data.description;
        }
    }
    return ListViewChecklistItemModel;
}());
export { ListViewChecklistItemModel };
//# sourceMappingURL=item.model.js.map