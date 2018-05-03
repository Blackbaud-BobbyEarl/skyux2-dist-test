import { SkyLinkRecordsMatchModel } from './state/matches/match.model';
var SkyLinkRecordsItemModel = (function () {
    function SkyLinkRecordsItemModel(data) {
        if (data === void 0) { data = undefined; }
        this.match = new SkyLinkRecordsMatchModel();
        this.matchFields = [];
        /* istanbul ignore else */
        if (data !== undefined) {
            this.key = data.key;
            this.status = data.status;
            this.item = data.item;
            this.match = data.match;
            this.matchFields = data.matchFields || [];
        }
    }
    return SkyLinkRecordsItemModel;
}());
export { SkyLinkRecordsItemModel };
//# sourceMappingURL=link-records-item.model.js.map