import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkyMediaQueryModule } from '../media-queries';
import { SkyActionButtonComponent } from './action-button.component';
import { SkyActionButtonIconComponent } from './action-button-icon.component';
import { SkyActionButtonHeaderComponent } from './action-button-header.component';
import { SkyActionButtonDetailsComponent } from './action-button-details.component';
import { SkyActionButtonContainerComponent } from './action-button-container.component';
var SkyActionButtonModule = (function () {
    function SkyActionButtonModule() {
    }
    return SkyActionButtonModule;
}());
export { SkyActionButtonModule };
SkyActionButtonModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SkyActionButtonComponent,
                    SkyActionButtonIconComponent,
                    SkyActionButtonHeaderComponent,
                    SkyActionButtonDetailsComponent,
                    SkyActionButtonContainerComponent
                ],
                imports: [
                    CommonModule,
                    SkyMediaQueryModule
                ],
                exports: [
                    SkyActionButtonComponent,
                    SkyActionButtonIconComponent,
                    SkyActionButtonHeaderComponent,
                    SkyActionButtonDetailsComponent,
                    SkyActionButtonContainerComponent
                ]
            },] },
];
/** @nocollapse */
SkyActionButtonModule.ctorParameters = function () { return []; };
//# sourceMappingURL=action-button.module.js.map