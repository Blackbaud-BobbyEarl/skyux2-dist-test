import { Component, ViewContainerRef, ViewChild, Input } from '@angular/core';
var SkyListFilterInlineItemRendererComponent = (function () {
    function SkyListFilterInlineItemRendererComponent() {
    }
    SkyListFilterInlineItemRendererComponent.prototype.ngOnInit = function () {
        /* istanbul ignore else */
        /* sanity check */
        if (this.template !== undefined) {
            this.container.createEmbeddedView(this.template, this);
        }
    };
    return SkyListFilterInlineItemRendererComponent;
}());
export { SkyListFilterInlineItemRendererComponent };
SkyListFilterInlineItemRendererComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-list-filter-inline-item-renderer',
                template: '<ng-template #container></ng-template>'
            },] },
];
/** @nocollapse */
SkyListFilterInlineItemRendererComponent.ctorParameters = function () { return []; };
SkyListFilterInlineItemRendererComponent.propDecorators = {
    'template': [{ type: Input },],
    'filter': [{ type: Input },],
    'container': [{ type: ViewChild, args: ['container', { read: ViewContainerRef },] },],
};
//# sourceMappingURL=list-filter-inline-item-renderer.component.js.map