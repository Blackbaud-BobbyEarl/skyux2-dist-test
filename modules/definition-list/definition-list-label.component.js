import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SkyDefinitionListService } from './definition-list.service';
var SkyDefinitionListLabelComponent = (function () {
    function SkyDefinitionListLabelComponent(service) {
        this.service = service;
    }
    return SkyDefinitionListLabelComponent;
}());
export { SkyDefinitionListLabelComponent };
SkyDefinitionListLabelComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-definition-list-label',
                template: "<div\n    class=\"sky-field-label sky-definition-list-label\"\n    [ngStyle]=\"{\n      'width': (service.labelWidth | async) || ''\n    }\"\n>\n  <ng-content></ng-content>\n</div>\n",
                styles: [":host {\n  flex: 0 0 90px;\n}\n\n.sky-definition-list-label {\n  margin-right: 10px;\n  word-wrap: break-word;\n}\n"],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
SkyDefinitionListLabelComponent.ctorParameters = function () { return [
    { type: SkyDefinitionListService, },
]; };
//# sourceMappingURL=definition-list-label.component.js.map