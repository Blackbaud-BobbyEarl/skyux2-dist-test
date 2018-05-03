import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkySectionedFormComponent } from './sectioned-form.component';
import { SkySectionedFormSectionComponent } from './sectioned-form-section.component';
import { SkyVerticalTabsetModule } from '../vertical-tabset/vertical-tabset.module';
var SkySectionedFormModule = (function () {
    function SkySectionedFormModule() {
    }
    return SkySectionedFormModule;
}());
export { SkySectionedFormModule };
SkySectionedFormModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SkySectionedFormComponent,
                    SkySectionedFormSectionComponent
                ],
                imports: [
                    CommonModule,
                    SkyVerticalTabsetModule
                ],
                exports: [
                    SkySectionedFormComponent,
                    SkySectionedFormSectionComponent
                ]
            },] },
];
/** @nocollapse */
SkySectionedFormModule.ctorParameters = function () { return []; };
//# sourceMappingURL=sectioned-form.module.js.map