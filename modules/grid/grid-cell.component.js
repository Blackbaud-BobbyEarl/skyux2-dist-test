import { Component, Input, ViewChild, ViewContainerRef, ChangeDetectionStrategy } from '@angular/core';
import { getData } from '../list/helpers';
var SkyGridCellComponent = (function () {
    function SkyGridCellComponent() {
    }
    SkyGridCellComponent.prototype.ngOnInit = function () {
        this.container.createEmbeddedView(this.template, this);
    };
    Object.defineProperty(SkyGridCellComponent.prototype, "row", {
        get: function () {
            return this.item.data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyGridCellComponent.prototype, "value", {
        get: function () {
            if (this.item.data && (this.fieldSelector || this.columnId)) {
                return getData(this.item.data, this.fieldSelector || this.columnId);
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    return SkyGridCellComponent;
}());
export { SkyGridCellComponent };
SkyGridCellComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-grid-cell',
                template: '<ng-template #cell></ng-template>',
                styles: [":host {\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding: 8px;\n}\n"],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
SkyGridCellComponent.ctorParameters = function () { return []; };
SkyGridCellComponent.propDecorators = {
    'item': [{ type: Input },],
    'columnId': [{ type: Input },],
    'template': [{ type: Input },],
    'fieldSelector': [{ type: Input },],
    'container': [{ type: ViewChild, args: ['cell', { read: ViewContainerRef },] },],
};
//# sourceMappingURL=grid-cell.component.js.map