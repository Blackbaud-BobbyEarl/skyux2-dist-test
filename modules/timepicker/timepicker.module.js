import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkyTimepickerInputDirective } from './timepicker.directive';
import { SkyTimepickerComponent } from './timepicker.component';
import { SkyDropdownModule } from '../dropdown/dropdown.module';
import { SkyResourcesModule } from '../resources';
var SkyTimepickerModule = (function () {
    function SkyTimepickerModule() {
    }
    return SkyTimepickerModule;
}());
export { SkyTimepickerModule };
SkyTimepickerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SkyTimepickerInputDirective,
                    SkyTimepickerComponent
                ],
                imports: [
                    CommonModule,
                    SkyResourcesModule,
                    SkyDropdownModule
                ],
                exports: [
                    SkyTimepickerInputDirective,
                    SkyTimepickerComponent
                ]
            },] },
];
/** @nocollapse */
SkyTimepickerModule.ctorParameters = function () { return []; };
//# sourceMappingURL=timepicker.module.js.map