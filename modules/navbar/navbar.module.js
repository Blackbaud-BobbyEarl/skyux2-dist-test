import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SkyNavbarItemComponent } from './navbar-item.component';
import { SkyNavbarComponent } from './navbar.component';
var SkyNavbarModule = (function () {
    function SkyNavbarModule() {
    }
    return SkyNavbarModule;
}());
export { SkyNavbarModule };
SkyNavbarModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SkyNavbarComponent,
                    SkyNavbarItemComponent
                ],
                imports: [
                    CommonModule,
                    RouterModule
                ],
                exports: [
                    SkyNavbarComponent,
                    SkyNavbarItemComponent
                ]
            },] },
];
/** @nocollapse */
SkyNavbarModule.ctorParameters = function () { return []; };
//# sourceMappingURL=navbar.module.js.map