import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SkyEmailValidationDirective } from './email-validation.directive';
var SkyEmailValidationModule = (function () {
    function SkyEmailValidationModule() {
    }
    return SkyEmailValidationModule;
}());
export { SkyEmailValidationModule };
SkyEmailValidationModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SkyEmailValidationDirective
                ],
                imports: [
                    FormsModule
                ],
                exports: [
                    SkyEmailValidationDirective
                ]
            },] },
];
/** @nocollapse */
SkyEmailValidationModule.ctorParameters = function () { return []; };
//# sourceMappingURL=email-validation.module.js.map