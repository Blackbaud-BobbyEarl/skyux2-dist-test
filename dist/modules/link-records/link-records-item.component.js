import { Component, ChangeDetectionStrategy, Input, ViewChildren } from '@angular/core';
import 'rxjs/add/operator/distinctUntilChanged';
import { SkyLinkRecordsState, SkyLinkRecordsStateDispatcher } from './state';
import { SkyLinkRecordsMatchesSetStatusAction, SkyLinkRecordsMatchesSetItemAction } from './state/matches/actions';
import { SkyLinkRecordsFieldsClearFieldsAction, SkyLinkRecordsFieldsSetFieldsAction } from './state/fields/actions';
import { SkyLinkRecordsSelectedClearSelectedAction, SkyLinkRecordsSelectedSetSelectedAction } from './state/selected/actions';
import { SKY_LINK_RECORDS_STATUSES } from './link-records-statuses';
import { SkyLinkRecordsItemDiffComponent } from './link-records-item-diff.component';
import { SkyLinkRecordsFieldModel } from './state/fields/field.model';
var SkyLinkRecordsItemComponent = (function () {
    /* istanbul ignore next */
    function SkyLinkRecordsItemComponent(state, dispatcher) {
        this.state = state;
        this.dispatcher = dispatcher;
        this.STATUSES = SKY_LINK_RECORDS_STATUSES;
    }
    SkyLinkRecordsItemComponent.prototype.ngAfterContentInit = function () {
        if (this.record.status === this.STATUSES.Edit &&
            (!this.record.matchFields || this.record.matchFields.length === 0)) {
            this.link();
        }
    };
    Object.defineProperty(SkyLinkRecordsItemComponent.prototype, "updatedFieldsTotal", {
        get: function () {
            var _this = this;
            return this.state
                .map(function (s) { return s.selected.item[_this.record.key] || {}; })
                .map(function (fields) { return Object.keys(fields).filter(function (k) { return fields[k]; }).length; })
                .distinctUntilChanged();
        },
        enumerable: true,
        configurable: true
    });
    SkyLinkRecordsItemComponent.prototype.link = function () {
        this.dispatcher.next(new SkyLinkRecordsMatchesSetStatusAction(this.record.key, this.STATUSES.Linked));
    };
    SkyLinkRecordsItemComponent.prototype.unlink = function () {
        this.dispatcher.next(new SkyLinkRecordsMatchesSetStatusAction(this.record.key, this.STATUSES.NoMatch));
        this.dispatcher.next(new SkyLinkRecordsMatchesSetItemAction(this.record.key, undefined));
        this.dispatcher.next(new SkyLinkRecordsSelectedClearSelectedAction(this.record.key));
        this.dispatcher.next(new SkyLinkRecordsFieldsClearFieldsAction(this.record.key));
    };
    SkyLinkRecordsItemComponent.prototype.create = function () {
        this.dispatcher.next(new SkyLinkRecordsMatchesSetStatusAction(this.record.key, this.STATUSES.Created));
        this.dispatcher.next(new SkyLinkRecordsMatchesSetItemAction(this.record.key, this.record.item));
    };
    SkyLinkRecordsItemComponent.prototype.edit = function () {
        var _this = this;
        var filteredMatchFields = [];
        if (this.record.match.item) {
            // filter possible match fields to show fields between item and item match with different values
            filteredMatchFields = Object.keys(this.record.match.item)
                .filter(function (id) { return _this.record.item.hasOwnProperty(id)
                && _this.record.match.item.hasOwnProperty(id)
                && _this.record.matchFields.findIndex(function (f) { return f.key === id; }) > -1
                && (_this.record.item[id] && _this.record.item[id].toString().trim().length > 0)
                && _this.record.item[id] !== _this.record.match.item[id]; }).map(function (id) {
                var field = _this.record.matchFields.find(function (f) { return f.key === id; });
                return new SkyLinkRecordsFieldModel({
                    key: id,
                    label: field && field.label && field.label.trim().length > 0 ? field.label : id,
                    currentValue: _this.record.match.item[id],
                    newValue: _this.record.item[id]
                });
            });
        }
        if (filteredMatchFields.length === 0) {
            this.dispatcher.next(new SkyLinkRecordsMatchesSetStatusAction(this.record.key, this.STATUSES.Linked));
        }
        else if (!this.showNewFieldValues && filteredMatchFields.every(function (match) {
            return !match.currentValue && match.newValue && match.newValue.length > 0;
        })) {
            this.dispatcher.next(new SkyLinkRecordsMatchesSetStatusAction(this.record.key, this.STATUSES.Linked));
        }
        else {
            this.dispatcher.next(new SkyLinkRecordsMatchesSetStatusAction(this.record.key, this.STATUSES.Edit));
        }
        this.dispatcher.next(new SkyLinkRecordsFieldsSetFieldsAction(this.record.key, filteredMatchFields));
        if (filteredMatchFields.length > 0) {
            this.state.map(function (s) { return s.selected.item; })
                .filter(function (s) { return _this.selectedByDefault !== undefined; })
                .take(1)
                .subscribe(function (selected) {
                filteredMatchFields.forEach(function (matchField) {
                    if (selected[_this.record.key] && selected[_this.record.key].hasOwnProperty(matchField.key)) {
                        return;
                    }
                    if (typeof _this.selectedByDefault === 'string') {
                        _this.selectedByDefault = String(_this.selectedByDefault) === 'true';
                    }
                    _this.dispatcher.next(new SkyLinkRecordsSelectedSetSelectedAction(_this.record.key, matchField.key, _this.selectedByDefault));
                });
            });
        }
    };
    SkyLinkRecordsItemComponent.prototype.cancelEdit = function () {
        this.dispatcher.next(new SkyLinkRecordsMatchesSetStatusAction(this.record.key, this.STATUSES.Suggested));
        this.dispatcher.next(new SkyLinkRecordsSelectedClearSelectedAction(this.record.key));
        this.dispatcher.next(new SkyLinkRecordsFieldsClearFieldsAction(this.record.key));
    };
    return SkyLinkRecordsItemComponent;
}());
export { SkyLinkRecordsItemComponent };
SkyLinkRecordsItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-link-records-item',
                template: "<div *ngIf=\"record.status == STATUSES.Suggested || record.status == STATUSES.Selected\" class=\"link-records-item-info\">\n  {{'link_records_item_info_match' | skyResources}}\n</div>\n<div *ngIf=\"record.status == STATUSES.Linked\" class=\"link-records-item-info\">\n  {{'link_records_item_info_linked' | skyResources}}\n</div>\n<div *ngIf=\"record.status == STATUSES.NoMatch\" class=\"link-records-item-info\">\n  {{'link_records_item_info_no_match' | skyResources}}\n</div>\n<div *ngIf=\"record.status == STATUSES.Created\" class=\"link-records-item-info\">\n  {{'link_records_item_info_created' | skyResources}}\n</div>\n<div *ngIf=\"record.status == STATUSES.Edit\" class=\"link-records-item-info\">\n  {{'link_records_item_info_edit' | skyResources}}\n</div>\n<div class=\"link-records-item\">\n  <div class=\"link-records-item-original sky-shadow\">\n    <div class=\"link-records-item-header\">\n      <sky-link-records-renderer [item]=\"record.item\" [match]=\"record.match\" [fields]=\"record.matchFields\" [template]=\"itemTitleTemplate || defaultItemTitleTemplate\"></sky-link-records-renderer>\n    </div>\n    <sky-link-records-renderer *ngIf=\"record.status != STATUSES.Edit\" class=\"link-records-item-content\" [item]=\"record.item\" [match]=\"record.match\" [fields]=\"record.matchFields\" [template]=\"itemTemplate || defaultItemTemplate\"></sky-link-records-renderer>\n    <sky-link-records-item-diff *ngIf=\"record.status == STATUSES.Edit\" [key]=\"record.key\" [item]=\"record.item\" [match]=\"record.match\" [fields]=\"record.matchFields\" [readOnly]=\"true\"  [showNewFieldValues]=\"showNewFieldValues\" class=\"link-records-item-content\">\n    </sky-link-records-item-diff>\n    <div class=\"link-records-item-footer\"></div>\n  </div>\n  <div class=\"link-records-item-status\">\n    <div class=\"link-records-item-status-content\"><i class=\"fa\"\n      [class.fa-check]=\"record.status == STATUSES.Linked\"\n      [class.fa-pencil]=\"record.status == STATUSES.Edit\"\n      [class.fa-plus-circle]=\"record.status == STATUSES.Created\"\n      [class.fa-question-circle]=\"record.status == STATUSES.Suggested || record.status == STATUSES.NoMatch || record.status == STATUSES.Selected\"\n    ></i></div>\n  </div>\n  <div class=\"link-records-item-match sky-shadow\">\n    <div class=\"link-records-item-header\">\n      <div *ngIf=\"record.status == STATUSES.Created\">\n          {{'link_records_item_header_created' | skyResources}}\n      </div>\n      <div *ngIf=\"record.status == STATUSES.NoMatch\">\n          {{'link_records_item_header_no_match' | skyResources}}\n      </div>\n      <div *ngIf=\"record.status == STATUSES.Suggested || record.status == STATUSES.Selected || record.status == STATUSES.Linked || record.status == STATUSES.Edit\">\n          {{'link_records_item_header_match' | skyResources}}\n      </div>\n    </div>\n    <sky-link-records-renderer *ngIf=\"record.status != STATUSES.Edit && record.status != STATUSES.NoMatch && record.status != STATUSES.Selected\" class=\"link-records-item-content\" [item]=\"record.item\" [match]=\"record.match\" [fields]=\"record.matchFields\" [template]=\"matchTemplate || defaultMatchTemplateContent\"></sky-link-records-renderer>\n    <sky-link-records-renderer *ngIf=\"record.status == STATUSES.NoMatch || record.status == STATUSES.Selected\" class=\"link-records-item-content\" [item]=\"record.item\" [match]=\"record.match\" [fields]=\"record.matchFields\" [template]=\"noMatchTemplate || defaultNoMatchTemplateContent\"></sky-link-records-renderer>\n    <sky-link-records-item-diff *ngIf=\"record.status == STATUSES.Edit\" [key]=\"record.key\" [item]=\"record.item\" [match]=\"record.match\" [fields]=\"record.matchFields\" [selectedByDefault]=\"selectedByDefault\" [showNewFieldValues]=\"showNewFieldValues\" class=\"link-records-item-content\"></sky-link-records-item-diff>\n    <div class=\"link-records-item-footer\">\n      <button *ngIf=\"record.status == STATUSES.Suggested || record.status == STATUSES.Selected\" (click)=\"edit()\" class=\"sky-btn sky-btn-primary\">\n          {{'link_records_item_footer_link' | skyResources}}\n      </button>\n      <button *ngIf=\"record.status == STATUSES.Suggested || record.status == STATUSES.Selected\" (click)=\"unlink()\" class=\"sky-btn sky-btn-default\">\n          {{'link_records_item_footer_search' | skyResources}}\n      </button>\n      <button *ngIf=\"record.status == STATUSES.Linked || record.status == STATUSES.Created\" (click)=\"unlink()\" class=\"sky-btn sky-btn-link\">\n          {{'link_records_item_footer_unlink' | skyResources}}\n      </button>\n      <button *ngIf=\"record.status == STATUSES.NoMatch\" (click)=\"create()\" class=\"sky-btn sky-btn-default\">\n          {{'link_records_item_footer_create' | skyResources}}\n      </button>\n      <button *ngIf=\"record.status == STATUSES.Edit\" (click)=\"link()\" class=\"sky-btn sky-btn-primary\">\n        {{ (updatedFieldsTotal | async) > 0 ? ('link_records_item_footer_link_with_updating' | skyResources) + ' (' + (updatedFieldsTotal | async) + ')' : ('link_records_item_footer_link_without_updating' | skyResources) }}\n      </button>\n      <button *ngIf=\"record.status == STATUSES.Edit\" (click)=\"cancelEdit()\" class=\"sky-btn sky-btn-link\">\n          {{'link_records_item_footer_cancel' | skyResources}}\n      </button>\n    </div>\n  </div>\n</div>\n\n<ng-template #defaultItemTitleTemplate let-item=\"item\">\n  {{'link_records_item_title_default' | skyResources}}\n</ng-template>\n<ng-template #defaultItemTemplate let-item=\"item\">\n  {{ item?.id }}\n</ng-template>\n<ng-template #defaultMatchTemplateContent let-match=\"match\">\n  {{ match?.item?.id}}\n</ng-template>\n<ng-template #defaultNoMatchTemplateContent let-match=\"match\">\n    {{'link_records_item_content_no_match' | skyResources}}\n</ng-template>\n",
                styles: [".sky-btn {\n  background-color: transparent;\n  border-top: 1px solid #cdcfd2;\n  border-bottom: 1px solid #cdcfd2;\n  border-left: 1px solid #cdcfd2;\n  border-right: 1px solid #cdcfd2;\n  border-radius: 3px;\n  color: #282b31;\n  cursor: pointer;\n  display: inline-block;\n  white-space: nowrap;\n  padding: 6px 12px;\n  line-height: 1.42857;\n  font-size: 15px;\n}\n\n.sky-btn:hover {\n  border-top: 1px solid #e2e3e4;\n  border-bottom: 1px solid #e2e3e4;\n  border-left: 1px solid #e2e3e4;\n  border-right: 1px solid #e2e3e4;\n  color: #282b31;\n}\n\n.sky-btn.sky-btn-disabled, .sky-btn[disabled] {\n  cursor: not-allowed;\n  pointer-events: none;\n  opacity: .65;\n  box-shadow: none;\n}\n\n.sky-btn-default {\n  color: #282b31;\n  background-color: #ffffff;\n  border-color: #cdcfd2;\n}\n\n.sky-btn-default:hover, .sky-btn-default:active, .sky-btn-default.sky-btn-active {\n  color: #282b31;\n  background-color: #eeeeef;\n  border-color: #b2b5ba;\n}\n\n.sky-btn-default:active, .sky-btn-default.sky-btn-active {\n  background-image: none;\n}\n\n.sky-btn-default.sky-btn-disabled, .sky-btn-default.sky-btn-disabled:hover, .sky-btn-default.sky-btn-disabled:focus, .sky-btn-default.sky-btn-disabled.sky-btn-focus, .sky-btn-default.sky-btn-disabled:active, .sky-btn-default.sky-btn-disabled.sky-btn-active, .sky-btn-default[disabled], .sky-btn-default[disabled]:hover, .sky-btn-default[disabled]:focus, .sky-btn-default[disabled].sky-btn-focus, .sky-btn-default[disabled]:active, .sky-btn-default[disabled].sky-btn-active,\nfieldset[disabled] .sky-btn-default,\nfieldset[disabled] .sky-btn-default:hover,\nfieldset[disabled] .sky-btn-default:focus,\nfieldset[disabled] .sky-btn-default.sky-btn-focus,\nfieldset[disabled] .sky-btn-default:active,\nfieldset[disabled] .sky-btn-default.sky-btn-active {\n  background-color: #ffffff;\n  border-color: #cdcfd2;\n}\n\n.sky-btn-primary {\n  color: #ffffff;\n  background-color: #007ca6;\n  border-color: #007ca6;\n}\n\n.sky-btn-primary:hover, .sky-btn-primary:active, .sky-btn-primary.sky-btn-active {\n  color: #ffffff;\n  background-color: #005673;\n  border-color: #005673;\n}\n\n.sky-btn-primary:active, .sky-btn-primary.sky-btn-active {\n  background-image: none;\n}\n\n.sky-btn-primary.sky-btn-disabled, .sky-btn-primary.sky-btn-disabled:hover, .sky-btn-primary.sky-btn-disabled:focus, .sky-btn-primary.sky-btn-disabled.sky-btn-focus, .sky-btn-primary.sky-btn-disabled:active, .sky-btn-primary.sky-btn-disabled.sky-btn-active, .sky-btn-primary[disabled], .sky-btn-primary[disabled]:hover, .sky-btn-primary[disabled]:focus, .sky-btn-primary[disabled].sky-btn-focus, .sky-btn-primary[disabled]:active, .sky-btn-primary[disabled].sky-btn-active,\nfieldset[disabled] .sky-btn-primary,\nfieldset[disabled] .sky-btn-primary:hover,\nfieldset[disabled] .sky-btn-primary:focus,\nfieldset[disabled] .sky-btn-primary.sky-btn-focus,\nfieldset[disabled] .sky-btn-primary:active,\nfieldset[disabled] .sky-btn-primary.sky-btn-active {\n  background-color: #007ca6;\n  border-color: #007ca6;\n}\n\n.sky-btn-link, .sky-btn-link-inline {\n  color: #007ca6;\n  background-color: transparent;\n  border-color: transparent;\n}\n\n.sky-btn-link:hover, .sky-btn-link-inline:hover {\n  color: #005673;\n  background-color: transparent;\n  border-color: transparent;\n  text-decoration: underline;\n  outline: none;\n}\n\n.sky-btn-link-inline {\n  font-size: inherit;\n  line-height: inherit;\n  display: inline;\n  padding: 0;\n  border: none;\n  vertical-align: top;\n}\n\n.sky-btn-link-inline:hover {\n  border: none;\n}\n\n.sky-btn-sm {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n}\n\n.sky-btn.sky-btn-active {\n  outline: 0;\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n}\n\n.sky-btn-tab {\n  background-color: transparent;\n  border: none;\n  border-radius: 4px 4px 0 0;\n  color: #686c73;\n  cursor: pointer;\n  display: inline-block;\n  font-weight: 600;\n  line-height: 1.8;\n  padding: 8px 16px;\n}\n\n.sky-btn-tab:hover {\n  background-color: #eeeeef;\n  color: #282b31;\n  text-decoration: none;\n}\n\n.sky-btn-tab-close {\n  background-color: transparent;\n  border: none;\n  color: #686c73;\n  cursor: pointer;\n  line-height: 1.4;\n  margin-left: 5px;\n}\n\n.sky-btn-tab-close:hover {\n  color: #282b31;\n  transition: color 150ms;\n}\n\n.sky-tab-header-count {\n  font-weight: 400;\n  color: #007ca6;\n  margin-left: 5px;\n}\n\n.sky-btn-tab-selected {\n  background-color: #007ca6;\n  color: #fff;\n}\n\n.sky-btn-tab-selected:hover {\n  background-color: #007ca6;\n  color: #fff;\n}\n\n.sky-btn-tab-selected .sky-btn-tab-close, .sky-btn-tab-selected .sky-tab-header-count {\n  color: #fff;\n}\n\n.sky-btn-tab-wizard {\n  background-color: #ffffff;\n  border-top: 1px solid #e2e3e4;\n  border-bottom: 1px solid #e2e3e4;\n  border-left: 1px solid #e2e3e4;\n  border-right: 1px solid #e2e3e4;\n  border-radius: 3px;\n  font-weight: 400;\n  color: #282b31;\n  line-height: 1.6em;\n  margin-right: 5px;\n  padding-bottom: 5px;\n  padding-top: 5px;\n}\n\n.sky-btn-tab-wizard:hover, .sky-btn-tab-wizard:focus {\n  text-decoration: none;\n  color: #282b31;\n  background-color: #eeeeef;\n}\n\n.sky-btn-tab-wizard.sky-btn-tab-selected {\n  background-color: #81d4f7;\n  border-color: #81d4f7;\n  color: #282b31;\n}\n\n.sky-btn-tab-wizard.sky-btn-tab-disabled {\n  cursor: not-allowed;\n  pointer-events: none;\n  background-color: #eeeeef;\n  color: #686c73;\n  box-shadow: none;\n}\n\n:host {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 710px;\n}\n\n:host .link-records-item-info {\n  font-family: \"Blackbaud Sans\", \"Helvetica Neue\", Arial, sans-serif;\n  color: #282b31;\n  font-weight: 600;\n  font-size: 16px;\n  text-align: center;\n}\n\n:host .link-records-item {\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  justify-content: center;\n  margin: 10px 0 40px;\n}\n\n:host .link-records-item-original,\n:host .link-records-item-match {\n  border-top: 1px solid #e2e3e4;\n  border-bottom: 1px solid #e2e3e4;\n  border-right: 1px solid #e2e3e4;\n  border-left: 1px solid #e2e3e4;\n  background-color: #ffffff;\n  display: flex;\n  flex-direction: column;\n  min-height: 200px;\n  width: 350px;\n}\n\n:host .link-records-item-original .link-records-item-content,\n:host .link-records-item-match .link-records-item-content {\n  flex-grow: 1;\n  padding: 10px 20px 10px 25px;\n  word-break: break-all;\n}\n\n:host .link-records-item-original .link-records-item-header,\n:host .link-records-item-original .link-records-item-footer,\n:host .link-records-item-match .link-records-item-header,\n:host .link-records-item-match .link-records-item-footer {\n  display: flex;\n  flex-direction: row;\n  min-height: 48px;\n}\n\n:host .link-records-item-original .link-records-item-header,\n:host .link-records-item-match .link-records-item-header {\n  border-bottom: 1px solid #e2e3e4;\n  font-family: \"Blackbaud Sans\", \"Helvetica Neue\", Arial, sans-serif;\n  color: #686c73;\n  font-weight: 300;\n  font-size: 19px;\n  padding: 10px;\n}\n\n:host .link-records-item-original .link-records-item-footer,\n:host .link-records-item-match .link-records-item-footer {\n  border-top: 1px solid #e2e3e4;\n  padding: 7px 10px;\n}\n\n:host .link-records-item-original .link-records-item-footer button.sky-btn:not(:first-child),\n:host .link-records-item-match .link-records-item-footer button.sky-btn:not(:first-child) {\n  margin-left: 10px;\n}\n\n:host .link-records-item-original .link-records-item-footer button.sky-btn.sky-btn-link, :host .link-records-item-original .link-records-item-footer button.sky-btn.sky-btn-link-inline,\n:host .link-records-item-match .link-records-item-footer button.sky-btn.sky-btn-link,\n:host .link-records-item-match .link-records-item-footer button.sky-btn.sky-btn-link-inline {\n  margin-left: 0;\n}\n\n:host .link-records-item-original .link-records-item-footer button.sky-btn.sky-btn-link:first-child, :host .link-records-item-original .link-records-item-footer button.sky-btn.sky-btn-link-inline:first-child,\n:host .link-records-item-match .link-records-item-footer button.sky-btn.sky-btn-link:first-child,\n:host .link-records-item-match .link-records-item-footer button.sky-btn.sky-btn-link-inline:first-child {\n  margin-left: -10px;\n}\n\n:host .link-records-item-status {\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  flex-direction: row;\n}\n\n:host .link-records-item-status-content {\n  border-top: 1px solid #e2e3e4;\n  border-bottom: 1px solid #e2e3e4;\n  border-right: 1px solid #e2e3e4;\n  border-left: 1px solid #e2e3e4;\n  background-color: #ffffff;\n  border-radius: 22px;\n  height: 45px;\n  margin: -18px;\n  text-align: center;\n  width: 45px;\n  z-index: 1;\n}\n\n:host .link-records-item-status-content i {\n  color: #71bf43;\n  font-size: 29px;\n  margin: 7px 0 0;\n}\n\n:host .link-records-item-status-content i.fa-question-circle, :host .link-records-item-status-content i.fa-pencil {\n  color: #fbb034;\n}\n\n@media (max-width: 768px) {\n  :host {\n    width: 350px;\n  }\n  :host .link-records-item {\n    flex-direction: column;\n  }\n}\n"],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
SkyLinkRecordsItemComponent.ctorParameters = function () { return [
    { type: SkyLinkRecordsState, },
    { type: SkyLinkRecordsStateDispatcher, },
]; };
SkyLinkRecordsItemComponent.propDecorators = {
    'record': [{ type: Input },],
    'itemTemplate': [{ type: Input },],
    'matchTemplate': [{ type: Input },],
    'noMatchTemplate': [{ type: Input },],
    'itemTitleTemplate': [{ type: Input },],
    'selectedByDefault': [{ type: Input },],
    'showNewFieldValues': [{ type: Input },],
    'viewItems': [{ type: ViewChildren, args: [SkyLinkRecordsItemDiffComponent,] },],
};
//# sourceMappingURL=link-records-item.component.js.map