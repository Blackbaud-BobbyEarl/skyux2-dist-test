import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SkyDefinitionListService } from './definition-list.service';
var SkyDefinitionListComponent = (function () {
    function SkyDefinitionListComponent(service) {
        this.service = service;
    }
    Object.defineProperty(SkyDefinitionListComponent.prototype, "labelWidth", {
        // TODO: figure out how to manage state here.
        set: function (value) {
            this.service.labelWidth.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyDefinitionListComponent.prototype, "defaultValue", {
        set: function (value) {
            this.service.defaultValue.next(value);
        },
        enumerable: true,
        configurable: true
    });
    return SkyDefinitionListComponent;
}());
export { SkyDefinitionListComponent };
SkyDefinitionListComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-definition-list',
                template: "<div class=\"sky-definition-list\">\n  <ng-content select=\"sky-definition-list-heading\"></ng-content>\n  <ng-content select=\"sky-definition-list-content\"></ng-content>\n</div>\n",
                styles: [".sky-definition-list {\n  margin-right: 50px;\n  margin-bottom: 20px;\n}\n"],
                providers: [SkyDefinitionListService],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
SkyDefinitionListComponent.ctorParameters = function () { return [
    { type: SkyDefinitionListService, },
]; };
SkyDefinitionListComponent.propDecorators = {
    'labelWidth': [{ type: Input },],
    'defaultValue': [{ type: Input },],
};
//# sourceMappingURL=definition-list.component.js.map