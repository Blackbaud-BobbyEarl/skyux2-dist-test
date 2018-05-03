import { AsyncList } from 'microedge-rxstate/dist';
var GridStateModel = (function () {
    function GridStateModel() {
        this.columns = new AsyncList();
        this.displayedColumns = new AsyncList();
    }
    return GridStateModel;
}());
export { GridStateModel };
//# sourceMappingURL=grid-state.model.js.map