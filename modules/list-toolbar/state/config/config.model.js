var ListToolbarConfigModel = (function () {
    function ListToolbarConfigModel(data) {
        this.searchEnabled = true;
        this.sortSelectorEnabled = true;
        if (data) {
            this.searchEnabled = data.searchEnabled;
            this.sortSelectorEnabled = data.sortSelectorEnabled;
        }
    }
    return ListToolbarConfigModel;
}());
export { ListToolbarConfigModel };
//# sourceMappingURL=config.model.js.map