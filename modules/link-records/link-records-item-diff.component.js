import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/take';
import { SkyLinkRecordsState, SkyLinkRecordsStateDispatcher } from './state';
import { SkyLinkRecordsSelectedSetSelectedAction } from './state/selected/actions';
import { SKY_LINK_RECORDS_STATUSES } from './link-records-statuses';
var SkyLinkRecordsItemDiffComponent = (function () {
    /* istanbul ignore next */
    function SkyLinkRecordsItemDiffComponent(state, dispatcher) {
        this.state = state;
        this.dispatcher = dispatcher;
        this.STATUSES = SKY_LINK_RECORDS_STATUSES;
        this.readOnly = false;
    }
    SkyLinkRecordsItemDiffComponent.prototype.ngOnInit = function () {
        if (this.key === undefined) {
            throw new Error("'key' is required.");
        }
    };
    SkyLinkRecordsItemDiffComponent.prototype.setFieldSelected = function (fieldKey, ev) {
        this.dispatcher.next(new SkyLinkRecordsSelectedSetSelectedAction(this.key, fieldKey, ev.checked));
    };
    SkyLinkRecordsItemDiffComponent.prototype.trackByFieldKey = function (index, field) {
        return field.key;
    };
    Object.defineProperty(SkyLinkRecordsItemDiffComponent.prototype, "fieldValues", {
        get: function () {
            var _this = this;
            return Observable.combineLatest(this.state.map(function (s) { return s.fields.item[_this.key] || []; }).distinctUntilChanged(), this.state.map(function (s) { return s.selected.item[_this.key] || {}; }).distinctUntilChanged(), function (fields, selected) {
                return fields.map(function (f) {
                    var checkCurrentValue = _this.showNewFieldValues ? true : f.currentValue;
                    return {
                        field: checkCurrentValue && f.newValue &&
                            f.newValue.toString().trim().length > 0 ? f : undefined,
                        selected: selected[f.key] || false
                    };
                });
            });
        },
        enumerable: true,
        configurable: true
    });
    return SkyLinkRecordsItemDiffComponent;
}());
export { SkyLinkRecordsItemDiffComponent };
SkyLinkRecordsItemDiffComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-link-records-item-diff',
                template: "<table>\n  <thead>\n    <tr *ngIf=\"readOnly\">\n      <th>{{'link_records_item_diff_header_field' | skyResources}}</th>\n      <th>{{'link_records_item_diff_header_current_value' | skyResources}}</th>\n    </tr>\n    <tr *ngIf=\"!readOnly\">\n      <th>{{'link_records_item_diff_header_new_value' | skyResources}}</th>\n      <th class=\"link-records-item-diff-update\">{{'link_records_item_diff_header_update' | skyResources}}</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let fieldValue of fieldValues | async; trackBy: trackByFieldKey\" [attr.cmp-id]=\"fieldValue.field?.key\">\n      <td *ngIf=\"readOnly && fieldValue.field\">{{ fieldValue.field.label }}</td>\n      <td *ngIf=\"readOnly && fieldValue.field\" class=\"link-records-item-diff-value\" [class.item-deemphasized]=\"fieldValue.selected\" [class.item-highlighted]=\"!fieldValue.selected\">{{ fieldValue.field.currentValue || ('link_records_item_diff_content_no_value' | skyResources) }}</td>\n      <td *ngIf=\"!readOnly && fieldValue.field\" class=\"link-records-item-diff-value\" [class.item-deemphasized]=\"!fieldValue.selected\" [class.item-highlighted]=\"fieldValue.selected\">{{ fieldValue.field.newValue }}</td>\n      <td *ngIf=\"!readOnly && fieldValue.field\" class=\"link-records-item-diff-update\">\n        <sky-checkbox [checked]=\"fieldValue.selected\" (change)=\"setFieldSelected(fieldValue.field.key, $event)\"></sky-checkbox>\n      </td>\n    </tr>\n  </tbody>\n</table>\n",
                styles: [":host {\n  display: block;\n  width: 100%;\n}\n\n:host table {\n  border-collapse: collapse;\n  width: 100%;\n}\n\n:host table th {\n  font-family: \"Blackbaud Sans\", \"Helvetica Neue\", Arial, sans-serif;\n  color: #686c73;\n  font-weight: 400;\n  font-size: 15px;\n}\n\n:host table th,\n:host table td {\n  padding: 10px 10px 10px 0;\n  text-align: left;\n}\n\n:host table th.link-records-item-diff-update,\n:host table td.link-records-item-diff-update {\n  word-break: normal;\n  text-align: center;\n  width: 50px;\n}\n\n:host table th.link-records-item-diff-value,\n:host table td.link-records-item-diff-value {\n  word-break: break-all;\n  white-space: pre-line;\n}\n\n:host table th.item-deemphasized,\n:host table td.item-deemphasized {\n  font-family: \"Blackbaud Sans\", \"Helvetica Neue\", Arial, sans-serif;\n  color: #686c73;\n  font-weight: 400;\n  font-size: 15px;\n  font-style: italic;\n}\n\n:host table th.item-highlighted,\n:host table td.item-highlighted {\n  font-weight: 600;\n}\n\n:host table tbody tr {\n  border-bottom: 1px dotted #cdcfd2;\n}\n\n:host table tbody tr:first-child {\n  border-top: 1px dotted #cdcfd2;\n}\n\n:host /deep/ sky-checkbox .sky-checkbox {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: auto;\n}\n"],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
SkyLinkRecordsItemDiffComponent.ctorParameters = function () { return [
    { type: SkyLinkRecordsState, },
    { type: SkyLinkRecordsStateDispatcher, },
]; };
SkyLinkRecordsItemDiffComponent.propDecorators = {
    'readOnly': [{ type: Input },],
    'key': [{ type: Input },],
    'item': [{ type: Input },],
    'match': [{ type: Input },],
    'fields': [{ type: Input },],
    'selectedByDefault': [{ type: Input },],
    'showNewFieldValues': [{ type: Input },],
};
//# sourceMappingURL=link-records-item-diff.component.js.map