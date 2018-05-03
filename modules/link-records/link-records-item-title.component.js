import { Component, Input, TemplateRef, ContentChildren, ChangeDetectionStrategy } from '@angular/core';
var SkyLinkRecordsItemTitleComponent = (function () {
    function SkyLinkRecordsItemTitleComponent() {
    }
    Object.defineProperty(SkyLinkRecordsItemTitleComponent.prototype, "template", {
        get: function () {
            return this.templates.length > 0 ? this.templates.first : this.inputTemplate;
        },
        set: function (value) { this.inputTemplate = value; },
        enumerable: true,
        configurable: true
    });
    return SkyLinkRecordsItemTitleComponent;
}());
export { SkyLinkRecordsItemTitleComponent };
SkyLinkRecordsItemTitleComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-link-records-item-title',
                template: '<ng-content></ng-content>',
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
SkyLinkRecordsItemTitleComponent.ctorParameters = function () { return []; };
SkyLinkRecordsItemTitleComponent.propDecorators = {
    'templates': [{ type: ContentChildren, args: [TemplateRef,] },],
    'template': [{ type: Input },],
};
//# sourceMappingURL=link-records-item-title.component.js.map