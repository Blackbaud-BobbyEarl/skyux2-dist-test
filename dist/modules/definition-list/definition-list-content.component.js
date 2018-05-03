import { ChangeDetectionStrategy, Component } from '@angular/core';
var SkyDefinitionListContentComponent = (function () {
    function SkyDefinitionListContentComponent() {
    }
    return SkyDefinitionListContentComponent;
}());
export { SkyDefinitionListContentComponent };
SkyDefinitionListContentComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-definition-list-content',
                template: "<div class=\"sky-definition-list-content\">\n  <ng-content></ng-content>\n</div>\n",
                styles: [".sky-definition-list-content {\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 5px;\n}\n"],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
SkyDefinitionListContentComponent.ctorParameters = function () { return []; };
//# sourceMappingURL=definition-list-content.component.js.map