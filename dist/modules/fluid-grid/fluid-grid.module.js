import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkyRowComponent } from './row.component';
import { SkyColumnComponent } from './column.component';
var SkyFluidGridModule = (function () {
    function SkyFluidGridModule() {
    }
    return SkyFluidGridModule;
}());
export { SkyFluidGridModule };
SkyFluidGridModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    SkyRowComponent,
                    SkyColumnComponent
                ],
                exports: [
                    SkyRowComponent,
                    SkyColumnComponent
                ]
            },] },
];
/** @nocollapse */
SkyFluidGridModule.ctorParameters = function () { return []; };
//# sourceMappingURL=fluid-grid.module.js.map