import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkySortComponent } from './sort.component';
import { SkySortItemComponent } from './sort-item.component';
import { SkyDropdownModule } from '../dropdown';
import { SkyResourcesModule } from '../resources';
var SkySortModule = (function () {
    function SkySortModule() {
    }
    return SkySortModule;
}());
export { SkySortModule };
SkySortModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SkySortComponent,
                    SkySortItemComponent
                ],
                imports: [
                    CommonModule,
                    SkyDropdownModule,
                    SkyResourcesModule
                ],
                exports: [
                    SkySortComponent,
                    SkySortItemComponent
                ]
            },] },
];
/** @nocollapse */
SkySortModule.ctorParameters = function () { return []; };
//# sourceMappingURL=sort.module.js.map