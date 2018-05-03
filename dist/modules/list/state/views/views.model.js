var ListViewsModel = (function () {
    function ListViewsModel(data) {
        this.views = [];
        if (data) {
            this.active = data.active;
            this.views = data.views;
        }
    }
    return ListViewsModel;
}());
export { ListViewsModel };
//# sourceMappingURL=views.model.js.map