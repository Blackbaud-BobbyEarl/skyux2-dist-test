import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkyHelpInlineComponent } from './help-inline.component';
import { SkyResourcesModule } from '../resources';
var SkyHelpInlineModule = (function () {
    function SkyHelpInlineModule() {
    }
    return SkyHelpInlineModule;
}());
export { SkyHelpInlineModule };
SkyHelpInlineModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SkyHelpInlineComponent
                ],
                imports: [
                    CommonModule,
                    SkyResourcesModule
                ],
                exports: [
                    SkyHelpInlineComponent
                ]
            },] },
];
/** @nocollapse */
SkyHelpInlineModule.ctorParameters = function () { return []; };
//# sourceMappingURL=help-inline.module.js.map