var ListViewChecklistItemsLoadAction = (function () {
    function ListViewChecklistItemsLoadAction(items, refresh, dataChanged, itemCount) {
        if (items === void 0) { items = []; }
        if (refresh === void 0) { refresh = false; }
        if (dataChanged === void 0) { dataChanged = true; }
        if (itemCount === void 0) { itemCount = items.length; }
        this.items = items;
        this.refresh = refresh;
        this.dataChanged = dataChanged;
        this.itemCount = itemCount;
    }
    return ListViewChecklistItemsLoadAction;
}());
export { ListViewChecklistItemsLoadAction };
//# sourceMappingURL=load.action.js.map