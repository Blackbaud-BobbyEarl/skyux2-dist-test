import { Component, ContentChildren, ChangeDetectionStrategy, Input, forwardRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/distinctUntilChanged';
import { SkyLinkRecordsState, SkyLinkRecordsStateDispatcher, SkyLinkRecordsStateModel } from './state';
import { SkyLinkRecordsMatchesLoadAction } from './state/matches/actions';
import { SkyLinkRecordsResultsLoadAction } from './state/results/actions';
import { SkyLinkRecordsMatchModel } from './state/matches/match.model';
import { SkyLinkRecordsResultModel } from './state/results/result.model';
import { SkyLinkRecordsItemModel } from './link-records-item.model';
import { SkyLinkRecordsItemTitleComponent } from './link-records-item-title.component';
import { SkyLinkRecordsItemContentComponent } from './link-records-item-content.component';
import { SkyLinkRecordsMatchContentComponent } from './link-records-match-content.component';
import { SkyLinkRecordsNoMatchContentComponent } from './link-records-nomatch-content.component';
import { SKY_LINK_RECORDS_STATUSES } from './link-records-statuses';
import { SkyLinkRecordsApi } from './link-records-api';
var SkyLinkRecordsComponent = (function () {
    /* tslint:enable */
    /* istanbul ignore next */
    function SkyLinkRecordsComponent(state, dispatcher) {
        this.state = state;
        this.dispatcher = dispatcher;
        this.items = Observable.of([]);
        this.matches = Observable.of([]);
        this.matchFields = Observable.of([]);
        this.keyIdSelector = 'id';
        this.selectedByDefault = true;
        this.showNewFieldValues = true;
        this.subscriptions = [];
    }
    SkyLinkRecordsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.items && !(this.items instanceof Observable)) {
            this.items = Observable.of(this.items);
        }
        if (this.matches && !(this.matches instanceof Observable)) {
            this.matches = Observable.of(this.matches);
        }
        if (this.matchFields && !(this.matchFields instanceof Observable)) {
            this.matchFields = Observable.of(this.matchFields);
        }
        this.matches.distinctUntilChanged().subscribe(function (matches) {
            _this.dispatcher.next(new SkyLinkRecordsMatchesLoadAction(matches, true));
        });
        this.matchFields.distinctUntilChanged().subscribe(function (fields) {
            if (fields.findIndex(function (f) { return f.key === _this.keyIdSelector; }) > -1) {
                throw new Error("'keyIdSelector' cannot be a match field.");
            }
        });
        var sub = Observable.combineLatest(this.state.map(function (s) { return s.matches.items; }).distinctUntilChanged(), this.state.map(function (s) { return s.fields.item; }).distinctUntilChanged(), this.state.map(function (s) { return s.selected.item; }).distinctUntilChanged(), function (matches, fields, selected) {
            var newResultItems = matches.map(function (match) {
                var newItem = new SkyLinkRecordsResultModel(match);
                if (newItem.status === SKY_LINK_RECORDS_STATUSES.Linked) {
                    newItem.item = { id: match.item.id };
                    var selection_1 = selected[match.key] || {};
                    var newFields = (fields[newItem.key]) ?
                        fields[newItem.key].filter(function (f) { return selection_1[f.key]; }) : [];
                    newFields.forEach(function (f) {
                        /* istanbul ignore else */
                        if (selection_1[f.key]) {
                            newItem.item[f.key] = f.newValue;
                        }
                    });
                }
                else {
                    newItem.item = undefined;
                }
                return newItem;
            }).filter(function (f) { return f !== undefined; });
            _this.dispatcher.next(new SkyLinkRecordsResultsLoadAction(newResultItems, true));
        }).subscribe();
        this.subscriptions.push(sub);
    };
    SkyLinkRecordsComponent.prototype.ngAfterContentInit = function () {
        if (this.nodeItemTitle.length > 0) {
            this.itemTitleTemplate = this.nodeItemTitle.first.template;
        }
        if (this.nodeItem.length > 0) {
            this.itemTemplate = this.nodeItem.first.template;
        }
        if (this.nodeMatch.length > 0) {
            this.matchTemplate = this.nodeMatch.first.template;
        }
        if (this.nodeNoMatch.length > 0) {
            this.noMatchTemplate = this.nodeNoMatch.first.template;
        }
    };
    SkyLinkRecordsComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (subscription) { return subscription.unsubscribe(); });
    };
    SkyLinkRecordsComponent.prototype.trackByRecordKey = function (index, item) {
        return item.key;
    };
    Object.defineProperty(SkyLinkRecordsComponent.prototype, "records", {
        get: function () {
            var _this = this;
            return Observable.combineLatest(this.items.distinctUntilChanged(), this.state.map(function (s) { return s.matches.items; }).distinctUntilChanged(), this.matchFields.distinctUntilChanged(), function (items, matches, fields) {
                return items.map(function (item) {
                    var itemMatches = matches.filter(function (match) { return match.key === item[_this.keyIdSelector]; });
                    var match = (itemMatches.length > 0) ? itemMatches[0] : new SkyLinkRecordsMatchModel();
                    return new SkyLinkRecordsItemModel({
                        key: item[_this.keyIdSelector],
                        status: (match.status) ? match.status : SKY_LINK_RECORDS_STATUSES.NoMatch,
                        item: item,
                        match: (match.status !== SKY_LINK_RECORDS_STATUSES.NoMatch) ? match : undefined,
                        matchFields: fields
                    });
                });
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyLinkRecordsComponent.prototype, "results", {
        get: function () {
            return this.state.map(function (s) { return s.results.items; }).distinctUntilChanged();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyLinkRecordsComponent.prototype, "recordMatches", {
        get: function () {
            return this.state.map(function (s) { return s.matches.items; }).distinctUntilChanged();
        },
        enumerable: true,
        configurable: true
    });
    return SkyLinkRecordsComponent;
}());
export { SkyLinkRecordsComponent };
SkyLinkRecordsComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-link-records',
                template: "<sky-link-records-item *ngFor=\"let record of records | async; trackBy: trackByRecordKey\"\n  [record]=\"record\"\n  [itemTemplate]=\"itemTemplate\"\n  [matchTemplate]=\"matchTemplate\"\n  [noMatchTemplate]=\"noMatchTemplate\"\n  [itemTitleTemplate]=\"itemTitleTemplate\"\n  [selectedByDefault]=\"selectedByDefault\"\n  [showNewFieldValues]=\"showNewFieldValues\"\n></sky-link-records-item>\n<ng-content></ng-content>\n",
                styles: [":host {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n"],
                providers: [
                    SkyLinkRecordsState,
                    SkyLinkRecordsStateDispatcher,
                    SkyLinkRecordsStateModel,
                    SkyLinkRecordsApi
                ],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
SkyLinkRecordsComponent.ctorParameters = function () { return [
    { type: SkyLinkRecordsState, },
    { type: SkyLinkRecordsStateDispatcher, },
]; };
SkyLinkRecordsComponent.propDecorators = {
    'items': [{ type: Input },],
    'matches': [{ type: Input },],
    'matchFields': [{ type: Input },],
    'itemTemplate': [{ type: Input },],
    'matchTemplate': [{ type: Input },],
    'noMatchTemplate': [{ type: Input },],
    'itemTitleTemplate': [{ type: Input },],
    'keyIdSelector': [{ type: Input },],
    'selectedByDefault': [{ type: Input },],
    'showNewFieldValues': [{ type: Input },],
    'nodeItemTitle': [{ type: ContentChildren, args: [forwardRef(function () { return SkyLinkRecordsItemTitleComponent; }),] },],
    'nodeItem': [{ type: ContentChildren, args: [forwardRef(function () { return SkyLinkRecordsItemContentComponent; }),] },],
    'nodeMatch': [{ type: ContentChildren, args: [forwardRef(function () { return SkyLinkRecordsMatchContentComponent; }),] },],
    'nodeNoMatch': [{ type: ContentChildren, args: [forwardRef(function () { return SkyLinkRecordsNoMatchContentComponent; }),] },],
};
//# sourceMappingURL=link-records.component.js.map