import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkyLogService } from './log.service';
var SkyLogModule = (function () {
    function SkyLogModule() {
    }
    return SkyLogModule;
}());
export { SkyLogModule };
SkyLogModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                providers: [
                    SkyLogService
                ]
            },] },
];
/** @nocollapse */
SkyLogModule.ctorParameters = function () { return []; };
//# sourceMappingURL=log.module.js.map