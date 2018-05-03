import { Injectable } from '@angular/core';
import { SkyLinkRecordsStateDispatcher } from './state';
import { SkyLinkRecordsMatchesSetStatusAction, SkyLinkRecordsMatchesSetItemAction } from './state/matches/actions';
import { SKY_LINK_RECORDS_STATUSES } from './link-records-statuses';
var SkyLinkRecordsApi = (function () {
    function SkyLinkRecordsApi(dispatcher) {
        this.dispatcher = dispatcher;
    }
    SkyLinkRecordsApi.prototype.addSelectedItem = function (key, item) {
        this.dispatcher.next(new SkyLinkRecordsMatchesSetStatusAction(key, SKY_LINK_RECORDS_STATUSES.Selected));
        this.dispatcher.next(new SkyLinkRecordsMatchesSetItemAction(key, item));
    };
    SkyLinkRecordsApi.prototype.removeSelectedItem = function (key) {
        this.dispatcher.next(new SkyLinkRecordsMatchesSetStatusAction(key, SKY_LINK_RECORDS_STATUSES.NoMatch));
        this.dispatcher.next(new SkyLinkRecordsMatchesSetItemAction(key, undefined));
    };
    return SkyLinkRecordsApi;
}());
export { SkyLinkRecordsApi };
SkyLinkRecordsApi.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SkyLinkRecordsApi.ctorParameters = function () { return [
    { type: SkyLinkRecordsStateDispatcher, },
]; };
//# sourceMappingURL=link-records-api.js.map