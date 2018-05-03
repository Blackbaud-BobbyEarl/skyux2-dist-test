import { Component, ViewContainerRef, ViewChild, Input } from '@angular/core';
var SkyListToolbarItemRendererComponent = (function () {
    function SkyListToolbarItemRendererComponent() {
    }
    SkyListToolbarItemRendererComponent.prototype.ngOnInit = function () {
        if (this.template !== undefined) {
            this.container.createEmbeddedView(this.template, this);
        }
    };
    return SkyListToolbarItemRendererComponent;
}());
export { SkyListToolbarItemRendererComponent };
SkyListToolbarItemRendererComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-list-toolbar-item-renderer',
                template: '<ng-template #container></ng-template>'
            },] },
];
/** @nocollapse */
SkyListToolbarItemRendererComponent.ctorParameters = function () { return []; };
SkyListToolbarItemRendererComponent.propDecorators = {
    'template': [{ type: Input },],
    'container': [{ type: ViewChild, args: ['container', { read: ViewContainerRef },] },],
};
//# sourceMappingURL=list-toolbar-item-renderer.component.js.map