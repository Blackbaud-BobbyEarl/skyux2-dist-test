import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkySearchComponent } from './search.component';
import { SkyMediaQueryModule } from '../media-queries';
import { SkyResourcesModule } from '../resources';
var SkySearchModule = (function () {
    function SkySearchModule() {
    }
    return SkySearchModule;
}());
export { SkySearchModule };
SkySearchModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SkySearchComponent
                ],
                imports: [
                    BrowserAnimationsModule,
                    CommonModule,
                    SkyResourcesModule,
                    SkyMediaQueryModule,
                    FormsModule
                ],
                exports: [
                    SkySearchComponent
                ]
            },] },
];
/** @nocollapse */
SkySearchModule.ctorParameters = function () { return []; };
//# sourceMappingURL=search.module.js.map