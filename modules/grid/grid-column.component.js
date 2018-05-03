import { ChangeDetectionStrategy, Component, ContentChildren, EventEmitter, Input, TemplateRef } from '@angular/core';
var SkyGridColumnComponent = (function () {
    function SkyGridColumnComponent() {
        this.isSortable = true;
        /* tslint:disable:no-input-rename */
        this.searchFunction = this.search;
        /* tslint:enable:no-input-rename */
        this.headingChanges = new EventEmitter();
        this.headingModelChanges = new EventEmitter();
    }
    SkyGridColumnComponent.prototype.ngOnChanges = function (changes) {
        if (changes.heading && changes.heading.firstChange === false) {
            this.headingChanges.emit(this.heading);
            this.headingModelChanges.emit({
                value: this.heading,
                id: this.id,
                field: this.field
            });
        }
    };
    Object.defineProperty(SkyGridColumnComponent.prototype, "template", {
        get: function () {
            if (this.templates.length > 0) {
                return this.templates.first;
            }
            return this.templateInput;
        },
        enumerable: true,
        configurable: true
    });
    SkyGridColumnComponent.prototype.search = function (value, searchText) {
        /* tslint:disable:no-null-keyword */
        if (value !== undefined && value !== null) {
            return value.toString().toLowerCase().indexOf(searchText) !== -1;
        }
        /* tslint:enable */
        return false;
    };
    return SkyGridColumnComponent;
}());
export { SkyGridColumnComponent };
SkyGridColumnComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-grid-column',
                template: '<ng-content></ng-content>',
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
SkyGridColumnComponent.ctorParameters = function () { return []; };
SkyGridColumnComponent.propDecorators = {
    'id': [{ type: Input },],
    'heading': [{ type: Input },],
    'width': [{ type: Input },],
    'hidden': [{ type: Input },],
    'locked': [{ type: Input },],
    'field': [{ type: Input },],
    'type': [{ type: Input },],
    'description': [{ type: Input },],
    'isSortable': [{ type: Input },],
    'searchFunction': [{ type: Input, args: ['search',] },],
    'templateInput': [{ type: Input, args: ['template',] },],
    'templates': [{ type: ContentChildren, args: [TemplateRef,] },],
};
//# sourceMappingURL=grid-column.component.js.map