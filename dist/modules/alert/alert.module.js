import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkyAlertComponent } from './alert.component';
import { SkyResourcesModule } from '../resources';
var SkyAlertModule = (function () {
    function SkyAlertModule() {
    }
    return SkyAlertModule;
}());
export { SkyAlertModule };
SkyAlertModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SkyAlertComponent],
                imports: [CommonModule, SkyResourcesModule],
                exports: [SkyAlertComponent]
            },] },
];
/** @nocollapse */
SkyAlertModule.ctorParameters = function () { return []; };
//# sourceMappingURL=alert.module.js.map