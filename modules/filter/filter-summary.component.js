import { Component, ChangeDetectionStrategy } from '@angular/core';
var SkyFilterSummaryComponent = (function () {
    function SkyFilterSummaryComponent() {
    }
    return SkyFilterSummaryComponent;
}());
export { SkyFilterSummaryComponent };
SkyFilterSummaryComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-filter-summary',
                styles: [".sky-filter-summary-header {\n  margin-right: 10px;\n  font-weight: 600;\n}\n\n.sky-filter-summary {\n  background-color: #ffffff;\n  overflow-x: auto;\n  display: flex;\n  align-items: center;\n}\n\n.sky-filter-summary-items {\n  white-space: nowrap;\n}\n"],
                template: "<div class=\"sky-filter-summary\">\n  <span class=\"sky-filter-summary-header\">{{'filter_summary_header' | skyResources}}:</span>\n  <div class=\"sky-filter-summary-items\">\n      <ng-content></ng-content>\n  </div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
SkyFilterSummaryComponent.ctorParameters = function () { return []; };
//# sourceMappingURL=filter-summary.component.js.map