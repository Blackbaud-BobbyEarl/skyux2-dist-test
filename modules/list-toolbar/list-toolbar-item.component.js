import { Component, Input, ContentChildren, TemplateRef } from '@angular/core';
var moment = require('moment');
var SkyListToolbarItemComponent = (function () {
    function SkyListToolbarItemComponent() {
        this.id = moment().toDate().getTime().toString();
        this.index = -1;
        this.location = 'left';
    }
    Object.defineProperty(SkyListToolbarItemComponent.prototype, "template", {
        get: function () {
            return this.templates.length > 0 ? this.templates.first : undefined;
        },
        enumerable: true,
        configurable: true
    });
    return SkyListToolbarItemComponent;
}());
export { SkyListToolbarItemComponent };
SkyListToolbarItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-list-toolbar-item',
                template: '<ng-content></ng-content>'
            },] },
];
/** @nocollapse */
SkyListToolbarItemComponent.ctorParameters = function () { return []; };
SkyListToolbarItemComponent.propDecorators = {
    'id': [{ type: Input },],
    'index': [{ type: Input },],
    'location': [{ type: Input },],
    'templates': [{ type: ContentChildren, args: [TemplateRef,] },],
};
//# sourceMappingURL=list-toolbar-item.component.js.map