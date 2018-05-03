import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkyResourcesModule } from '../resources';
import { SkyTextExpandRepeaterComponent } from './text-expand-repeater.component';
var SkyTextExpandRepeaterModule = (function () {
    function SkyTextExpandRepeaterModule() {
    }
    return SkyTextExpandRepeaterModule;
}());
export { SkyTextExpandRepeaterModule };
SkyTextExpandRepeaterModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SkyTextExpandRepeaterComponent
                ],
                imports: [
                    SkyResourcesModule,
                    CommonModule
                ],
                exports: [
                    SkyTextExpandRepeaterComponent
                ]
            },] },
];
/** @nocollapse */
SkyTextExpandRepeaterModule.ctorParameters = function () { return []; };
//# sourceMappingURL=text-expand-repeater.module.js.map