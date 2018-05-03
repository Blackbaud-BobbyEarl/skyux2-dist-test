var ListItemsLoadAction = (function () {
    function ListItemsLoadAction(items, refresh, dataChanged, count) {
        if (refresh === void 0) { refresh = false; }
        if (dataChanged === void 0) { dataChanged = true; }
        this.items = items;
        this.refresh = refresh;
        this.dataChanged = dataChanged;
        this.count = count;
    }
    return ListItemsLoadAction;
}());
export { ListItemsLoadAction };
//# sourceMappingURL=load.action.js.map