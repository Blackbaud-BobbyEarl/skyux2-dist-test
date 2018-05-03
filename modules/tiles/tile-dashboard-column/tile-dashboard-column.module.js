import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';
import { SkyResourcesModule } from '../../resources';
import { SkyTileDashboardColumnComponent } from './tile-dashboard-column.component';
var SkyTileDashboardColumnModule = (function () {
    function SkyTileDashboardColumnModule() {
    }
    return SkyTileDashboardColumnModule;
}());
export { SkyTileDashboardColumnModule };
SkyTileDashboardColumnModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SkyTileDashboardColumnComponent
                ],
                imports: [
                    CommonModule,
                    DragulaModule,
                    SkyResourcesModule
                ],
                exports: [
                    SkyTileDashboardColumnComponent
                ]
            },] },
];
/** @nocollapse */
SkyTileDashboardColumnModule.ctorParameters = function () { return []; };
//# sourceMappingURL=tile-dashboard-column.module.js.map