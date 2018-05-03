import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkyWaitModule } from '../wait';
import { SkyGridModule } from '../grid';
import { SkyListViewGridComponent } from './list-view-grid.component';
var SkyListViewGridModule = (function () {
    function SkyListViewGridModule() {
    }
    return SkyListViewGridModule;
}());
export { SkyListViewGridModule };
SkyListViewGridModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SkyListViewGridComponent
                ],
                imports: [
                    CommonModule,
                    SkyWaitModule,
                    SkyGridModule
                ],
                exports: [
                    SkyListViewGridComponent
                ]
            },] },
];
/** @nocollapse */
SkyListViewGridModule.ctorParameters = function () { return []; };
//# sourceMappingURL=list-view-grid.module.js.map