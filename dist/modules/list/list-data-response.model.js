var ListDataResponseModel = (function () {
    function ListDataResponseModel(data) {
        if (data !== undefined) {
            this.count = data.count;
            this.items = data.items;
        }
    }
    return ListDataResponseModel;
}());
export { ListDataResponseModel };
//# sourceMappingURL=list-data-response.model.js.map