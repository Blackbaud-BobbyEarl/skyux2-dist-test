import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkyChevronComponent } from './chevron.component';
import { SkyResourcesModule } from '../resources';
var SkyChevronModule = (function () {
    function SkyChevronModule() {
    }
    return SkyChevronModule;
}());
export { SkyChevronModule };
SkyChevronModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SkyChevronComponent],
                imports: [CommonModule, SkyResourcesModule],
                exports: [SkyChevronComponent]
            },] },
];
/** @nocollapse */
SkyChevronModule.ctorParameters = function () { return []; };
//# sourceMappingURL=chevron.module.js.map