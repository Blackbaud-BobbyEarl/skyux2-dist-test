import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkyMediaQueryService } from './media-query.service';
var SkyMediaQueryModule = (function () {
    function SkyMediaQueryModule() {
    }
    return SkyMediaQueryModule;
}());
export { SkyMediaQueryModule };
SkyMediaQueryModule.decorators = [
    { type: NgModule, args: [{
                providers: [
                    SkyMediaQueryService
                ],
                imports: [
                    CommonModule
                ]
            },] },
];
/** @nocollapse */
SkyMediaQueryModule.ctorParameters = function () { return []; };
//# sourceMappingURL=media-query.module.js.map