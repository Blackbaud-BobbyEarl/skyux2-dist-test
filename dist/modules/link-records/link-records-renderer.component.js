import { Component, Input, ViewChild, ViewContainerRef, ChangeDetectionStrategy } from '@angular/core';
import { SkyLinkRecordsApi } from './link-records-api';
var SkyLinkRecordsRendererComponent = (function () {
    function SkyLinkRecordsRendererComponent(api) {
        this.api = api;
    }
    SkyLinkRecordsRendererComponent.prototype.ngOnInit = function () {
        /* istanbul ignore else */
        if (this.template !== undefined) {
            this.container.createEmbeddedView(this.template, this);
        }
    };
    return SkyLinkRecordsRendererComponent;
}());
export { SkyLinkRecordsRendererComponent };
SkyLinkRecordsRendererComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-link-records-renderer',
                template: '<ng-template #container></ng-template>',
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
SkyLinkRecordsRendererComponent.ctorParameters = function () { return [
    { type: SkyLinkRecordsApi, },
]; };
SkyLinkRecordsRendererComponent.propDecorators = {
    'item': [{ type: Input },],
    'match': [{ type: Input },],
    'fields': [{ type: Input },],
    'template': [{ type: Input },],
    'container': [{ type: ViewChild, args: ['container', { read: ViewContainerRef },] },],
};
//# sourceMappingURL=link-records-renderer.component.js.map