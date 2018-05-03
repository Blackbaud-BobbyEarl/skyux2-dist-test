import { NgModule } from '@angular/core';
import { SkyNumericPipe } from './numeric.pipe';
import { SkyNumericService } from './numeric.service';
import { CurrencyPipe, DecimalPipe } from '@angular/common';
var SkyNumericModule = (function () {
    function SkyNumericModule() {
    }
    return SkyNumericModule;
}());
export { SkyNumericModule };
SkyNumericModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SkyNumericPipe],
                providers: [
                    SkyNumericService,
                    CurrencyPipe,
                    DecimalPipe
                ],
                exports: [SkyNumericPipe]
            },] },
];
/** @nocollapse */
SkyNumericModule.ctorParameters = function () { return []; };
//# sourceMappingURL=numeric.module.js.map