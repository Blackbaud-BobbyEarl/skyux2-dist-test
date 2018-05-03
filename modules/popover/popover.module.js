import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkyWindowRefService } from '../window';
import { SkyPopoverComponent } from './popover.component';
import { SkyPopoverDirective } from './popover.directive';
var SkyPopoverModule = (function () {
    function SkyPopoverModule() {
    }
    return SkyPopoverModule;
}());
export { SkyPopoverModule };
SkyPopoverModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SkyPopoverComponent,
                    SkyPopoverDirective
                ],
                imports: [
                    BrowserAnimationsModule,
                    CommonModule
                ],
                exports: [
                    SkyPopoverComponent,
                    SkyPopoverDirective
                ],
                providers: [
                    SkyWindowRefService
                ]
            },] },
];
/** @nocollapse */
SkyPopoverModule.ctorParameters = function () { return []; };
//# sourceMappingURL=popover.module.js.map