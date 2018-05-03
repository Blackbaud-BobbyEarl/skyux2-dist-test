import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkyToolbarComponent } from './toolbar.component';
import { SkyToolbarItemComponent } from './toolbar-item.component';
import { SkyToolbarSectionComponent } from './toolbar-section.component';
var SkyToolbarModule = (function () {
    function SkyToolbarModule() {
    }
    return SkyToolbarModule;
}());
export { SkyToolbarModule };
SkyToolbarModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SkyToolbarComponent,
                    SkyToolbarItemComponent,
                    SkyToolbarSectionComponent
                ],
                imports: [
                    CommonModule
                ],
                exports: [
                    SkyToolbarComponent,
                    SkyToolbarItemComponent,
                    SkyToolbarSectionComponent
                ]
            },] },
];
/** @nocollapse */
SkyToolbarModule.ctorParameters = function () { return []; };
//# sourceMappingURL=toolbar.module.js.map