import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkyColumnSelectorComponent } from './column-selector-modal.component';
import { SkyResourcesModule } from '../resources';
import { SkyModalModule } from '../modal';
import { SkyListModule } from '../list';
import { SkyListToolbarModule } from '../list-toolbar';
import { SkyListViewChecklistModule } from '../list-view-checklist';
var SkyColumnSelectorModule = (function () {
    function SkyColumnSelectorModule() {
    }
    return SkyColumnSelectorModule;
}());
export { SkyColumnSelectorModule };
SkyColumnSelectorModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SkyColumnSelectorComponent
                ],
                imports: [
                    CommonModule,
                    SkyResourcesModule,
                    SkyModalModule,
                    SkyListModule,
                    SkyListToolbarModule,
                    SkyListViewChecklistModule
                ],
                exports: [
                    SkyColumnSelectorComponent
                ],
                entryComponents: [
                    SkyColumnSelectorComponent
                ]
            },] },
];
/** @nocollapse */
SkyColumnSelectorModule.ctorParameters = function () { return []; };
//# sourceMappingURL=column-selector-modal.module.js.map