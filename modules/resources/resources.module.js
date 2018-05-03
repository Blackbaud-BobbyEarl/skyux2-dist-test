import { NgModule } from '@angular/core';
import { SkyResourcesPipe } from './resources.pipe';
import { SkyResourcesService } from './resources.service';
var SkyResourcesModule = (function () {
    function SkyResourcesModule() {
    }
    return SkyResourcesModule;
}());
export { SkyResourcesModule };
SkyResourcesModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SkyResourcesPipe],
                providers: [SkyResourcesService],
                exports: [SkyResourcesPipe]
            },] },
];
/** @nocollapse */
SkyResourcesModule.ctorParameters = function () { return []; };
//# sourceMappingURL=resources.module.js.map