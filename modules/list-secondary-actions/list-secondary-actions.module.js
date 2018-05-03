import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkyDropdownModule } from '../dropdown';
import { SkyListSecondaryActionsComponent } from './list-secondary-actions.component';
import { SkyListSecondaryActionComponent } from './list-secondary-action.component';
import { SkyResourcesModule } from '../resources';
var SkyListSecondaryActionsModule = (function () {
    function SkyListSecondaryActionsModule() {
    }
    return SkyListSecondaryActionsModule;
}());
export { SkyListSecondaryActionsModule };
SkyListSecondaryActionsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SkyListSecondaryActionsComponent,
                    SkyListSecondaryActionComponent
                ],
                imports: [
                    CommonModule,
                    SkyDropdownModule,
                    SkyResourcesModule
                ],
                exports: [
                    SkyListSecondaryActionsComponent,
                    SkyListSecondaryActionComponent
                ],
                providers: []
            },] },
];
/** @nocollapse */
SkyListSecondaryActionsModule.ctorParameters = function () { return []; };
//# sourceMappingURL=list-secondary-actions.module.js.map