import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkyPagingComponent } from './paging.component';
import { SkyResourcesModule } from '../resources';
var SkyPagingModule = (function () {
    function SkyPagingModule() {
    }
    return SkyPagingModule;
}());
export { SkyPagingModule };
SkyPagingModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SkyPagingComponent
                ],
                imports: [
                    CommonModule,
                    SkyResourcesModule
                ],
                exports: [
                    SkyPagingComponent
                ]
            },] },
];
/** @nocollapse */
SkyPagingModule.ctorParameters = function () { return []; };
//# sourceMappingURL=paging.module.js.map