import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkyModalModule } from '../modal';
import { SkyResourcesModule } from '../resources';
import { SkyConfirmService } from './confirm.service';
import { SkyConfirmComponent } from './confirm.component';
var SkyConfirmModule = (function () {
    function SkyConfirmModule() {
    }
    return SkyConfirmModule;
}());
export { SkyConfirmModule };
SkyConfirmModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SkyConfirmComponent
                ],
                imports: [
                    CommonModule,
                    SkyModalModule,
                    SkyResourcesModule
                ],
                exports: [
                    SkyConfirmComponent
                ],
                providers: [
                    SkyConfirmService
                ],
                entryComponents: [
                    SkyConfirmComponent
                ]
            },] },
];
/** @nocollapse */
SkyConfirmModule.ctorParameters = function () { return []; };
//# sourceMappingURL=confirm.module.js.map