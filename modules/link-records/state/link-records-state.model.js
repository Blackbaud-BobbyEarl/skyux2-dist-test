import { AsyncList, AsyncItem } from 'microedge-rxstate/dist';
var SkyLinkRecordsStateModel = (function () {
    function SkyLinkRecordsStateModel() {
        this.matches = new AsyncList();
        this.fields = new AsyncItem({});
        this.results = new AsyncList();
        this.selected = new AsyncItem({});
    }
    return SkyLinkRecordsStateModel;
}());
export { SkyLinkRecordsStateModel };
//# sourceMappingURL=link-records-state.model.js.map