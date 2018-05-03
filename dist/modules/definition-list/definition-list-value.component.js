import { Component } from '@angular/core';
import { SkyDefinitionListService } from './definition-list.service';
var SkyDefinitionListValueComponent = (function () {
    function SkyDefinitionListValueComponent(service) {
        this.service = service;
    }
    return SkyDefinitionListValueComponent;
}());
export { SkyDefinitionListValueComponent };
SkyDefinitionListValueComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-definition-list-value',
                template: "<div class=\"sky-definition-list-value\">\n  <span #valueEl>\n    <ng-content></ng-content>\n  </span>\n  <span class=\"sky-deemphasized\" *ngIf=\"!valueEl.innerText.trim()\">\n    {{ (service.defaultValue | async) || ('definition_list_none_found' | skyResources) }}\n  </span>\n</div>\n",
                styles: [":host {\n  flex: 1;\n}\n"]
            },] },
];
/** @nocollapse */
SkyDefinitionListValueComponent.ctorParameters = function () { return [
    { type: SkyDefinitionListService, },
]; };
//# sourceMappingURL=definition-list-value.component.js.map