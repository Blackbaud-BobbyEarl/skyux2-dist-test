import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
var SkyListViewChecklistItemComponent = (function () {
    function SkyListViewChecklistItemComponent() {
    }
    return SkyListViewChecklistItemComponent;
}());
export { SkyListViewChecklistItemComponent };
SkyListViewChecklistItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-list-view-checklist-item',
                template: "<div class=\"sky-list-view-checklist-item\">\n  <ng-content></ng-content>\n</div>\n",
                styles: [".sky-list-view-checklist-item {\n  display: block;\n  width: 100%;\n  cursor: pointer;\n}\n\n.sky-list-view-checklist-item:last-child {\n  border-bottom-width: 0;\n}\n\n.sky-list-view-checklist-item /deep/ sky-checkbox {\n  display: block;\n  position: relative;\n  width: 100%;\n  padding: 10px;\n  cursor: pointer;\n  border-bottom: 1px dotted #cdcfd2;\n}\n\n.sky-list-view-checklist-item /deep/ sky-checkbox-label {\n  flex: 1;\n  position: relative;\n  overflow: hidden;\n  white-space: nowrap;\n  cursor: pointer;\n  padding-left: 10px;\n}\n\n.sky-list-view-checklist-item /deep/ sky-checkbox-label div {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.sky-list-view-checklist-item /deep/ .sky-list-view-checklist-single-button {\n  background-color: transparent;\n  border: none;\n  border-bottom: 1px dotted #cdcfd2;\n  display: block;\n  text-align: left;\n  margin-bottom: 0;\n  padding: 10px;\n  width: 100%;\n  cursor: pointer;\n}\n\n.sky-list-view-checklist-item /deep/ .sky-list-view-checklist-single-button.sky-list-view-checklist-row-selected {\n  background-color: #f1eef6;\n}\n"],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
SkyListViewChecklistItemComponent.ctorParameters = function () { return []; };
SkyListViewChecklistItemComponent.propDecorators = {
    'item': [{ type: Input },],
};
//# sourceMappingURL=list-view-checklist-item.component.js.map