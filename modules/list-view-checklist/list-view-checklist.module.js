import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SkyCheckboxModule } from '../checkbox';
import { SkyListViewChecklistComponent } from './list-view-checklist.component';
import { SkyListViewChecklistItemComponent } from './list-view-checklist-item.component';
import { SkyResourcesModule } from '../resources';
var SkyListViewChecklistModule = (function () {
    function SkyListViewChecklistModule() {
    }
    return SkyListViewChecklistModule;
}());
export { SkyListViewChecklistModule };
SkyListViewChecklistModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SkyListViewChecklistComponent,
                    SkyListViewChecklistItemComponent
                ],
                exports: [
                    SkyListViewChecklistComponent,
                    SkyListViewChecklistItemComponent
                ],
                imports: [
                    CommonModule,
                    FormsModule,
                    SkyCheckboxModule,
                    SkyResourcesModule
                ]
            },] },
];
/** @nocollapse */
SkyListViewChecklistModule.ctorParameters = function () { return []; };
//# sourceMappingURL=list-view-checklist.module.js.map