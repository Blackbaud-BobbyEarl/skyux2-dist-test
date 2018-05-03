import { Component, Input, TemplateRef, ContentChildren, ChangeDetectionStrategy } from '@angular/core';
var SkyLinkRecordsMatchContentComponent = (function () {
    function SkyLinkRecordsMatchContentComponent() {
    }
    Object.defineProperty(SkyLinkRecordsMatchContentComponent.prototype, "template", {
        get: function () {
            return this.templates.length > 0 ? this.templates.first : this.inputTemplate;
        },
        set: function (value) { this.inputTemplate = value; },
        enumerable: true,
        configurable: true
    });
    return SkyLinkRecordsMatchContentComponent;
}());
export { SkyLinkRecordsMatchContentComponent };
SkyLinkRecordsMatchContentComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-link-records-match-content',
                template: '<ng-content></ng-content>',
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
SkyLinkRecordsMatchContentComponent.ctorParameters = function () { return []; };
SkyLinkRecordsMatchContentComponent.propDecorators = {
    'templates': [{ type: ContentChildren, args: [TemplateRef,] },],
    'template': [{ type: Input },],
};
//# sourceMappingURL=link-records-match-content.component.js.map