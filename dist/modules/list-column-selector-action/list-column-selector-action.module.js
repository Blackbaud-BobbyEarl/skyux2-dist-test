import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkyListColumnSelectorActionComponent } from './list-column-selector-action.component';
import { SkyResourcesModule } from '../resources';
import { SkyModalModule } from '../modal';
import { SkyListSecondaryActionsModule } from '../list-secondary-actions';
var SkyListColumnSelectorActionModule = (function () {
    function SkyListColumnSelectorActionModule() {
    }
    return SkyListColumnSelectorActionModule;
}());
export { SkyListColumnSelectorActionModule };
SkyListColumnSelectorActionModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SkyListColumnSelectorActionComponent
                ],
                imports: [
                    CommonModule,
                    SkyResourcesModule,
                    SkyModalModule,
                    SkyListSecondaryActionsModule
                ],
                exports: [
                    SkyListColumnSelectorActionComponent
                ]
            },] },
];
/** @nocollapse */
SkyListColumnSelectorActionModule.ctorParameters = function () { return []; };
//# sourceMappingURL=list-column-selector-action.module.js.map