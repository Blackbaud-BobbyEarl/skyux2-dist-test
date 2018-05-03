import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SkyUrlValidationDirective } from './url-validation.directive';
var SkyUrlValidationModule = (function () {
    function SkyUrlValidationModule() {
    }
    return SkyUrlValidationModule;
}());
export { SkyUrlValidationModule };
SkyUrlValidationModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SkyUrlValidationDirective
                ],
                imports: [
                    FormsModule
                ],
                exports: [
                    SkyUrlValidationDirective
                ]
            },] },
];
/** @nocollapse */
SkyUrlValidationModule.ctorParameters = function () { return []; };
//# sourceMappingURL=url-validation.module.js.map