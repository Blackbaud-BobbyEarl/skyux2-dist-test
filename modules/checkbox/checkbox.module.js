import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SkyCheckboxLabelComponent } from './checkbox-label.component';
import { SkyCheckboxComponent } from './checkbox.component';
import { SkyResourcesModule } from '../resources';
var SkyCheckboxModule = (function () {
    function SkyCheckboxModule() {
    }
    return SkyCheckboxModule;
}());
export { SkyCheckboxModule };
SkyCheckboxModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SkyCheckboxComponent,
                    SkyCheckboxLabelComponent
                ],
                imports: [
                    CommonModule,
                    FormsModule,
                    SkyResourcesModule
                ],
                exports: [
                    SkyCheckboxComponent,
                    SkyCheckboxLabelComponent
                ]
            },] },
];
/** @nocollapse */
SkyCheckboxModule.ctorParameters = function () { return []; };
//# sourceMappingURL=checkbox.module.js.map