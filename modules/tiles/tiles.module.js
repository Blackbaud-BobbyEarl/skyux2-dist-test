import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkyTileModule } from './tile';
import { SkyTileContentModule } from './tile-content';
import { SkyTileDashboardModule } from './tile-dashboard';
import { SkyTileDashboardColumnModule } from './tile-dashboard-column';
var SkyTilesModule = (function () {
    function SkyTilesModule() {
    }
    return SkyTilesModule;
}());
export { SkyTilesModule };
SkyTilesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    BrowserAnimationsModule
                ],
                exports: [
                    SkyTileContentModule,
                    SkyTileModule,
                    SkyTileDashboardColumnModule,
                    SkyTileDashboardModule
                ]
            },] },
];
/** @nocollapse */
SkyTilesModule.ctorParameters = function () { return []; };
//# sourceMappingURL=tiles.module.js.map