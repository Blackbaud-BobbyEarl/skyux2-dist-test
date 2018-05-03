import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkyWaitComponent } from './wait.component';
import { SkyWaitService } from './wait.service';
import { SkyWaitPageAdapterService } from './wait-page-adapter.service';
import { SkyWaitPageComponent } from './wait-page.component';
var SkyWaitModule = (function () {
    function SkyWaitModule() {
    }
    return SkyWaitModule;
}());
export { SkyWaitModule };
SkyWaitModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SkyWaitComponent,
                    SkyWaitPageComponent
                ],
                imports: [
                    CommonModule
                ],
                exports: [
                    SkyWaitComponent,
                    SkyWaitPageComponent
                ],
                providers: [
                    SkyWaitService,
                    SkyWaitPageAdapterService
                ],
                entryComponents: [
                    SkyWaitPageComponent
                ]
            },] },
];
/** @nocollapse */
SkyWaitModule.ctorParameters = function () { return []; };
//# sourceMappingURL=wait.module.js.map