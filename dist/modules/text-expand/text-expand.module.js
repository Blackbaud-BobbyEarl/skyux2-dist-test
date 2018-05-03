import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkyResourcesModule } from '../resources';
import { SkyTextExpandComponent } from './text-expand.component';
import { SkyModalModule } from '../modal';
import { SkyTextExpandModalComponent } from './text-expand-modal.component';
var SkyTextExpandModule = (function () {
    function SkyTextExpandModule() {
    }
    return SkyTextExpandModule;
}());
export { SkyTextExpandModule };
SkyTextExpandModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SkyTextExpandComponent,
                    SkyTextExpandModalComponent
                ],
                imports: [
                    SkyResourcesModule,
                    SkyModalModule,
                    CommonModule
                ],
                exports: [
                    SkyTextExpandComponent
                ],
                entryComponents: [
                    SkyTextExpandModalComponent
                ]
            },] },
];
/** @nocollapse */
SkyTextExpandModule.ctorParameters = function () { return []; };
//# sourceMappingURL=text-expand.module.js.map