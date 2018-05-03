var ListDataRequestModel = (function () {
    function ListDataRequestModel(data) {
        if (data !== undefined) {
            this.filters = data.filters;
            this.pageSize = data.pageSize;
            this.pageNumber = data.pageNumber;
            this.search = data.search;
            this.sort = data.sort;
        }
    }
    return ListDataRequestModel;
}());
export { ListDataRequestModel };
//# sourceMappingURL=list-data-request.model.js.map