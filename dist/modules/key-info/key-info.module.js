import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkyKeyInfoLabelComponent } from './key-info-label.component';
import { SkyKeyInfoValueComponent } from './key-info-value.component';
import { SkyKeyInfoComponent } from './key-info.component';
var SkyKeyInfoModule = (function () {
    function SkyKeyInfoModule() {
    }
    return SkyKeyInfoModule;
}());
export { SkyKeyInfoModule };
SkyKeyInfoModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SkyKeyInfoComponent,
                    SkyKeyInfoLabelComponent,
                    SkyKeyInfoValueComponent
                ],
                imports: [CommonModule],
                exports: [
                    SkyKeyInfoComponent,
                    SkyKeyInfoLabelComponent,
                    SkyKeyInfoValueComponent
                ]
            },] },
];
/** @nocollapse */
SkyKeyInfoModule.ctorParameters = function () { return []; };
//# sourceMappingURL=key-info.module.js.map