import { ChangeDetectionStrategy, Component } from '@angular/core';
var SkyDefinitionListHeadingComponent = (function () {
    function SkyDefinitionListHeadingComponent() {
    }
    return SkyDefinitionListHeadingComponent;
}());
export { SkyDefinitionListHeadingComponent };
SkyDefinitionListHeadingComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-definition-list-heading',
                template: "<div class=\"sky-subsection-heading sky-definition-list-heading\">\n  <ng-content></ng-content>\n</div>\n",
                styles: [".sky-definition-list-heading {\n  margin-bottom: 5px;\n}\n"],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
SkyDefinitionListHeadingComponent.ctorParameters = function () { return []; };
//# sourceMappingURL=definition-list-heading.component.js.map