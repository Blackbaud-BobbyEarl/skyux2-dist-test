import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SkyListModule } from '../list';
import { SkyListPagingModule } from '../list-paging';
import { SkyModalModule } from '../modal';
import { SkyResourcesModule } from '../resources';
import { SkyTokensModule } from '../tokens';
import { SkySelectFieldComponent } from './select-field.component';
import { SkySelectFieldPickerComponent } from './select-field-picker.component';
var SkySelectFieldModule = (function () {
    function SkySelectFieldModule() {
    }
    return SkySelectFieldModule;
}());
export { SkySelectFieldModule };
SkySelectFieldModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    SkyListModule,
                    SkyListPagingModule,
                    SkyModalModule,
                    SkyResourcesModule,
                    SkyTokensModule
                ],
                exports: [
                    SkySelectFieldComponent,
                    SkySelectFieldPickerComponent
                ],
                declarations: [
                    SkySelectFieldComponent,
                    SkySelectFieldPickerComponent
                ],
                entryComponents: [
                    SkySelectFieldPickerComponent
                ]
            },] },
];
/** @nocollapse */
SkySelectFieldModule.ctorParameters = function () { return []; };
//# sourceMappingURL=select-field.module.js.map