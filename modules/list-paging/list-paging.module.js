import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkyListPagingComponent } from './list-paging.component';
import { SkyPagingModule } from '../paging';
var SkyListPagingModule = (function () {
    function SkyListPagingModule() {
    }
    return SkyListPagingModule;
}());
export { SkyListPagingModule };
SkyListPagingModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SkyListPagingComponent
                ],
                imports: [
                    CommonModule,
                    SkyPagingModule
                ],
                exports: [
                    SkyListPagingComponent
                ]
            },] },
];
/** @nocollapse */
SkyListPagingModule.ctorParameters = function () { return []; };
//# sourceMappingURL=list-paging.module.js.map