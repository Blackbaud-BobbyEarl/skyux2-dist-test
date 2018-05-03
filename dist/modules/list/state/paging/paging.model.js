var ListPagingModel = (function () {
    function ListPagingModel(data) {
        if (data !== undefined) {
            this.itemsPerPage = data.itemsPerPage || 10;
            this.maxDisplayedPages = data.maxDisplayedPages || 5;
            this.pageCount = data.pageCount || 0;
            this.pageNumber = data.pageNumber || 1;
        }
    }
    return ListPagingModel;
}());
export { ListPagingModel };
//# sourceMappingURL=paging.model.js.map