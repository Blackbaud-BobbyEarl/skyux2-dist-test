import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { SkyTileDashboardComponent } from './tile-dashboard.component';
import { SkyTileDashboardColumnModule } from '../tile-dashboard-column';
import { SkyMediaQueryModule } from '../../media-queries';
var SkyTileDashboardModule = (function () {
    function SkyTileDashboardModule() {
    }
    return SkyTileDashboardModule;
}());
export { SkyTileDashboardModule };
SkyTileDashboardModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SkyTileDashboardComponent
                ],
                providers: [
                    DragulaService
                ],
                imports: [
                    CommonModule,
                    SkyTileDashboardColumnModule,
                    SkyMediaQueryModule
                ],
                exports: [
                    SkyTileDashboardComponent
                ]
            },] },
];
/** @nocollapse */
SkyTileDashboardModule.ctorParameters = function () { return []; };
//# sourceMappingURL=tile-dashboard.module.js.map