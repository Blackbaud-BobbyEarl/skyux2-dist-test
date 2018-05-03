import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkyVerticalTabsetComponent } from './vertical-tabset.component';
import { SkyVerticalTabComponent } from './vertical-tab.component';
import { SkyVerticalTabsetGroupComponent } from './vertical-tabset-group.component';
import { SkyChevronModule } from './../chevron/chevron.module';
var SkyVerticalTabsetModule = (function () {
    function SkyVerticalTabsetModule() {
    }
    return SkyVerticalTabsetModule;
}());
export { SkyVerticalTabsetModule };
SkyVerticalTabsetModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SkyVerticalTabsetComponent,
                    SkyVerticalTabsetGroupComponent,
                    SkyVerticalTabComponent
                ],
                imports: [
                    CommonModule,
                    BrowserAnimationsModule,
                    SkyChevronModule
                ],
                exports: [
                    SkyVerticalTabsetComponent,
                    SkyVerticalTabsetGroupComponent,
                    SkyVerticalTabComponent
                ]
            },] },
];
/** @nocollapse */
SkyVerticalTabsetModule.ctorParameters = function () { return []; };
//# sourceMappingURL=vertical-tabset.module.js.map