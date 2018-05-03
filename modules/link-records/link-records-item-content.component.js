import { Component, Input, TemplateRef, ContentChildren, ChangeDetectionStrategy } from '@angular/core';
var SkyLinkRecordsItemContentComponent = (function () {
    function SkyLinkRecordsItemContentComponent() {
    }
    Object.defineProperty(SkyLinkRecordsItemContentComponent.prototype, "template", {
        get: function () {
            return this.templates.length > 0 ? this.templates.first : this.inputTemplate;
        },
        set: function (value) { this.inputTemplate = value; },
        enumerable: true,
        configurable: true
    });
    return SkyLinkRecordsItemContentComponent;
}());
export { SkyLinkRecordsItemContentComponent };
SkyLinkRecordsItemContentComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-link-records-item-content',
                template: '<ng-content></ng-content>',
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
SkyLinkRecordsItemContentComponent.ctorParameters = function () { return []; };
SkyLinkRecordsItemContentComponent.propDecorators = {
    'templates': [{ type: ContentChildren, args: [TemplateRef,] },],
    'template': [{ type: Input },],
};
//# sourceMappingURL=link-records-item-content.component.js.map