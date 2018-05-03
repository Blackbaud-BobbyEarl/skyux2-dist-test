import { Component, ViewChild } from '@angular/core';
import { SkyListSecondaryActionsService } from './list-secondary-actions.service';
var SkyListSecondaryActionComponent = (function () {
    function SkyListSecondaryActionComponent(actionService) {
        this.actionService = actionService;
    }
    SkyListSecondaryActionComponent.prototype.ngAfterContentInit = function () {
        this.actionService.addSecondaryAction({
            template: this.templateRef
        });
    };
    return SkyListSecondaryActionComponent;
}());
export { SkyListSecondaryActionComponent };
SkyListSecondaryActionComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-list-secondary-action',
                template: "<ng-template #listSecondaryAction>\n  <ng-content></ng-content>\n</ng-template>\n"
            },] },
];
/** @nocollapse */
SkyListSecondaryActionComponent.ctorParameters = function () { return [
    { type: SkyListSecondaryActionsService, },
]; };
SkyListSecondaryActionComponent.propDecorators = {
    'templateRef': [{ type: ViewChild, args: ['listSecondaryAction',] },],
};
//# sourceMappingURL=list-secondary-action.component.js.map