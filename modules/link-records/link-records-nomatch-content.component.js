import { Component, Input, TemplateRef, ContentChildren, ChangeDetectionStrategy } from '@angular/core';
var SkyLinkRecordsNoMatchContentComponent = (function () {
    function SkyLinkRecordsNoMatchContentComponent() {
    }
    Object.defineProperty(SkyLinkRecordsNoMatchContentComponent.prototype, "template", {
        get: function () {
            return this.templates.length > 0 ? this.templates.first : this.inputTemplate;
        },
        set: function (value) { this.inputTemplate = value; },
        enumerable: true,
        configurable: true
    });
    return SkyLinkRecordsNoMatchContentComponent;
}());
export { SkyLinkRecordsNoMatchContentComponent };
SkyLinkRecordsNoMatchContentComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-link-records-nomatch-content',
                template: '<ng-content></ng-content>',
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
SkyLinkRecordsNoMatchContentComponent.ctorParameters = function () { return []; };
SkyLinkRecordsNoMatchContentComponent.propDecorators = {
    'templates': [{ type: ContentChildren, args: [TemplateRef,] },],
    'template': [{ type: Input },],
};
//# sourceMappingURL=link-records-nomatch-content.component.js.map