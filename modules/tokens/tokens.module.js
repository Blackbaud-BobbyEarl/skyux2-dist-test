import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkyResourcesModule } from '../resources';
import { SkyTokenComponent } from './token.component';
import { SkyTokensComponent } from './tokens.component';
var SkyTokensModule = (function () {
    function SkyTokensModule() {
    }
    return SkyTokensModule;
}());
export { SkyTokensModule };
SkyTokensModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SkyTokenComponent,
                    SkyTokensComponent
                ],
                imports: [
                    CommonModule,
                    SkyResourcesModule
                ],
                exports: [
                    SkyTokenComponent,
                    SkyTokensComponent
                ]
            },] },
];
/** @nocollapse */
SkyTokensModule.ctorParameters = function () { return []; };
//# sourceMappingURL=tokens.module.js.map