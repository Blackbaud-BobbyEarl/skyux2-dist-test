import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SkyRadioComponent } from './radio.component';
import { SkyRadioLabelComponent } from './radio-label.component';
var SkyRadioModule = (function () {
    function SkyRadioModule() {
    }
    return SkyRadioModule;
}());
export { SkyRadioModule };
SkyRadioModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SkyRadioComponent,
                    SkyRadioLabelComponent
                ],
                imports: [
                    CommonModule,
                    FormsModule
                ],
                exports: [
                    SkyRadioComponent,
                    SkyRadioLabelComponent
                ]
            },] },
];
/** @nocollapse */
SkyRadioModule.ctorParameters = function () { return []; };
//# sourceMappingURL=radio.module.js.map