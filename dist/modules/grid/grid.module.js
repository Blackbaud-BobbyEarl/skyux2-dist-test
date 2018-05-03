import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkyGridComponent } from './grid.component';
import { SkyGridColumnComponent } from './grid-column.component';
import { SkyGridCellComponent } from './grid-cell.component';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';
var SkyGridModule = (function () {
    function SkyGridModule() {
    }
    return SkyGridModule;
}());
export { SkyGridModule };
SkyGridModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SkyGridComponent,
                    SkyGridColumnComponent,
                    SkyGridCellComponent
                ],
                imports: [
                    CommonModule,
                    DragulaModule
                ],
                exports: [
                    SkyGridComponent,
                    SkyGridColumnComponent,
                    SkyGridCellComponent
                ]
            },] },
];
/** @nocollapse */
SkyGridModule.ctorParameters = function () { return []; };
//# sourceMappingURL=grid.module.js.map