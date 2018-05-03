import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkyModalAdapterService } from './modal-adapter.service';
import { SkyModalContentComponent } from './modal-content.component';
import { SkyModalFooterComponent } from './modal-footer.component';
import { SkyModalHeaderComponent } from './modal-header.component';
import { SkyModalHostComponent } from './modal-host.component';
import { SkyModalComponent } from './modal.component';
import { SkyModalService } from './modal.service';
import { SkyWindowRefService } from '../window';
import { SkyResourcesModule } from '../resources';
import { SkyErrorModalFormComponent } from '../error/error-modal-form.component';
var SkyModalModule = (function () {
    function SkyModalModule() {
    }
    return SkyModalModule;
}());
export { SkyModalModule };
SkyModalModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SkyModalComponent,
                    SkyModalContentComponent,
                    SkyModalFooterComponent,
                    SkyModalHeaderComponent,
                    SkyModalHostComponent,
                    SkyErrorModalFormComponent
                ],
                providers: [
                    SkyModalAdapterService,
                    SkyModalService,
                    SkyWindowRefService
                ],
                imports: [
                    CommonModule,
                    SkyResourcesModule
                ],
                exports: [
                    SkyModalComponent,
                    SkyModalContentComponent,
                    SkyModalFooterComponent,
                    SkyModalHeaderComponent
                ],
                entryComponents: [
                    SkyModalHostComponent,
                    SkyErrorModalFormComponent
                ]
            },] },
];
/** @nocollapse */
SkyModalModule.ctorParameters = function () { return []; };
//# sourceMappingURL=modal.module.js.map