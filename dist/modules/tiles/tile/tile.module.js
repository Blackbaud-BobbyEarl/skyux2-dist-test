import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkyChevronModule } from '../../chevron';
import { SkyResourcesModule } from '../../resources';
import { SkyTileComponent } from './tile.component';
import { SkyTileSummaryComponent } from './tile-summary.component';
import { SkyTileTitleComponent } from './tile-title.component';
var SkyTileModule = (function () {
    function SkyTileModule() {
    }
    return SkyTileModule;
}());
export { SkyTileModule };
SkyTileModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SkyTileComponent,
                    SkyTileSummaryComponent,
                    SkyTileTitleComponent
                ],
                imports: [
                    CommonModule,
                    SkyChevronModule,
                    SkyResourcesModule
                ],
                exports: [
                    SkyTileComponent,
                    SkyTileSummaryComponent,
                    SkyTileTitleComponent
                ]
            },] },
];
/** @nocollapse */
SkyTileModule.ctorParameters = function () { return []; };
//# sourceMappingURL=tile.module.js.map