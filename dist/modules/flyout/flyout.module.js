import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkyResourcesModule } from '../resources';
import { SkyWindowRefService } from '../window';
import { SkyFlyoutAdapterService } from './flyout-adapter.service';
import { SkyFlyoutComponent } from './flyout.component';
import { SkyFlyoutService } from './flyout.service';
var SkyFlyoutModule = (function () {
    function SkyFlyoutModule() {
    }
    return SkyFlyoutModule;
}());
export { SkyFlyoutModule };
SkyFlyoutModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SkyFlyoutComponent
                ],
                providers: [
                    SkyFlyoutAdapterService,
                    SkyFlyoutService,
                    SkyWindowRefService
                ],
                imports: [
                    CommonModule,
                    SkyResourcesModule
                ],
                exports: [
                    SkyFlyoutComponent
                ],
                entryComponents: [
                    SkyFlyoutComponent
                ]
            },] },
];
/** @nocollapse */
SkyFlyoutModule.ctorParameters = function () { return []; };
//# sourceMappingURL=flyout.module.js.map