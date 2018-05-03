import { Component, Input, ContentChildren, TemplateRef, EventEmitter } from '@angular/core';
var SkyListFilterInlineItemComponent = (function () {
    function SkyListFilterInlineItemComponent() {
        /* tslint:enable:no-input-rename */
        this.onChange = new EventEmitter();
    }
    SkyListFilterInlineItemComponent.prototype.ngOnInit = function () {
        if (this.name === undefined || this.name.length === 0) {
            throw new Error('Inline filter requires a name.');
        }
    };
    Object.defineProperty(SkyListFilterInlineItemComponent.prototype, "template", {
        get: function () {
            return this.templates.length > 0 ? this.templates.first : this.templateInput;
        },
        enumerable: true,
        configurable: true
    });
    return SkyListFilterInlineItemComponent;
}());
export { SkyListFilterInlineItemComponent };
SkyListFilterInlineItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-list-filter-inline-item',
                template: '<ng-content></ng-content>'
            },] },
];
/** @nocollapse */
SkyListFilterInlineItemComponent.ctorParameters = function () { return []; };
SkyListFilterInlineItemComponent.propDecorators = {
    'name': [{ type: Input },],
    'value': [{ type: Input },],
    'defaultValue': [{ type: Input },],
    'filterFunction': [{ type: Input, args: ['filter',] },],
    'templateInput': [{ type: Input, args: ['template',] },],
    'templates': [{ type: ContentChildren, args: [TemplateRef,] },],
};
//# sourceMappingURL=list-filter-inline-item.component.js.map