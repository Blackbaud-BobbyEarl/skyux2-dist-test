import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkyTileContentSectionComponent } from './tile-content-section.component';
import { SkyTileContentComponent } from './tile-content.component';
var SkyTileContentModule = (function () {
    function SkyTileContentModule() {
    }
    return SkyTileContentModule;
}());
export { SkyTileContentModule };
SkyTileContentModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SkyTileContentComponent,
                    SkyTileContentSectionComponent
                ],
                imports: [
                    CommonModule
                ],
                exports: [
                    SkyTileContentComponent,
                    SkyTileContentSectionComponent
                ]
            },] },
];
/** @nocollapse */
SkyTileContentModule.ctorParameters = function () { return []; };
//# sourceMappingURL=tile-content.module.js.map