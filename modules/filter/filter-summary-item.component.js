import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
var SkyFilterSummaryItemComponent = (function () {
    function SkyFilterSummaryItemComponent() {
        this.dismissible = true;
        this.dismiss = new EventEmitter();
        this.itemClick = new EventEmitter();
    }
    SkyFilterSummaryItemComponent.prototype.onItemDismiss = function () {
        this.dismiss.emit();
    };
    SkyFilterSummaryItemComponent.prototype.onItemClick = function () {
        this.itemClick.emit();
    };
    SkyFilterSummaryItemComponent.prototype.onItemKeypress = function () {
        this.itemClick.emit();
    };
    return SkyFilterSummaryItemComponent;
}());
export { SkyFilterSummaryItemComponent };
SkyFilterSummaryItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-filter-summary-item',
                styles: [".sky-filter-summary-item {\n  display: inline-block;\n}\n"],
                template: "<div\n  class=\"sky-filter-summary-item\"\n  (click)=\"onItemClick()\"\n  (keypress.enter)=\"onItemKeypress()\">\n  <sky-token\n    [dismissible]=\"dismissible\"\n    (dismiss)=\"onItemDismiss()\">\n    <ng-content>\n    </ng-content>\n  </sky-token>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
SkyFilterSummaryItemComponent.ctorParameters = function () { return []; };
SkyFilterSummaryItemComponent.propDecorators = {
    'dismissible': [{ type: Input },],
    'dismiss': [{ type: Output },],
    'itemClick': [{ type: Output },],
};
//# sourceMappingURL=filter-summary-item.component.js.map