import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkyModalModule } from '../modal';
import { SkyConfirmationDialogService } from './confirmation-dialog.service';
import { SkyConfirmationDialogComponent } from './confirmation-dialog.component';
import { SkyResourcesModule } from '../resources';
var SkyConfirmationDialogModule = (function () {
    function SkyConfirmationDialogModule() {
    }
    return SkyConfirmationDialogModule;
}());
export { SkyConfirmationDialogModule };
SkyConfirmationDialogModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SkyConfirmationDialogComponent
                ],
                imports: [
                    CommonModule,
                    SkyModalModule,
                    SkyResourcesModule
                ],
                exports: [
                    SkyConfirmationDialogComponent
                ],
                providers: [
                    SkyConfirmationDialogService
                ],
                entryComponents: [
                    SkyConfirmationDialogComponent
                ]
            },] },
];
/** @nocollapse */
SkyConfirmationDialogModule.ctorParameters = function () { return []; };
//# sourceMappingURL=confirmation-dialog.module.js.map