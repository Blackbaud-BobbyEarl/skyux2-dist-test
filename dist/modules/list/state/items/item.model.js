var ListItemModel = (function () {
    function ListItemModel(id, data) {
        if (id === undefined) {
            throw new Error('All list item models require an ID');
        }
        this.id = id;
        if (data !== undefined) {
            this.data = data;
        }
    }
    return ListItemModel;
}());
export { ListItemModel };
//# sourceMappingURL=item.model.js.map