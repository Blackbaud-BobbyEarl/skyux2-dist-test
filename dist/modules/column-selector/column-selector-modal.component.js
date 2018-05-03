import { Component } from '@angular/core';
import { SkyModalInstance } from '../modal';
import { SkyColumnSelectorContext } from './column-selector-context';
var SkyColumnSelectorComponent = (function () {
    function SkyColumnSelectorComponent(context, instance) {
        this.context = context;
        this.instance = instance;
        this.newSelectedColumnIds = [];
        this.newSelectedColumnIds = context.selectedColumnIds;
    }
    SkyColumnSelectorComponent.prototype.selectedColumnsChange = function (selectedMap) {
        var _this = this;
        this.newSelectedColumnIds = [];
        selectedMap.forEach(function (value, key) {
            if (value) {
                _this.newSelectedColumnIds.push(key);
            }
        });
    };
    SkyColumnSelectorComponent.prototype.cancelChanges = function () {
        this.instance.cancel();
    };
    SkyColumnSelectorComponent.prototype.applyChanges = function () {
        this.instance.save(this.newSelectedColumnIds);
    };
    return SkyColumnSelectorComponent;
}());
export { SkyColumnSelectorComponent };
SkyColumnSelectorComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-column-selector',
                template: "<sky-modal>\n  <sky-modal-header>\n    {{'grid_column_picker_header' | skyResources}}\n  </sky-modal-header>\n  <sky-modal-content>\n    <sky-list #list\n      [data]=\"context.columns\"\n      [selectedIds]=\"context.selectedColumnIds\"\n      (selectedIdsChange)=\"selectedColumnsChange($event)\">\n      <sky-list-toolbar\n        [placeholder]=\"'grid_column_picker_search_placeholder' | skyResources\">\n      </sky-list-toolbar>\n\n      <sky-list-view-checklist label=\"heading\" description=\"description\">\n      </sky-list-view-checklist>\n    </sky-list>\n  </sky-modal-content>\n  <sky-modal-footer>\n    <button\n      sky-cmp-id=\"apply-changes\"\n      class=\"sky-btn sky-btn-primary\"\n      (click)=\"applyChanges()\">\n      {{'grid_column_picker_submit' | skyResources}}\n    </button>\n    <button\n      sky-cmp-id=\"cancel\"\n      class=\"sky-btn sky-btn-link\"\n      (click)=\"cancelChanges()\">\n      {{'grid_column_picker_cancel' | skyResources}}\n    </button>\n  </sky-modal-footer>\n</sky-modal>\n"
            },] },
];
/** @nocollapse */
SkyColumnSelectorComponent.ctorParameters = function () { return [
    { type: SkyColumnSelectorContext, },
    { type: SkyModalInstance, },
]; };
//# sourceMappingURL=column-selector-modal.component.js.map