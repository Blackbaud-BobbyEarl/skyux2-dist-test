import { NgModule } from '@angular/core';
import { SkyTextHighlightDirective } from './text-highlight.directive';
import { MutationObserverService } from '../mutation/mutation-observer-service';
var SkyTextHighlightModule = (function () {
    function SkyTextHighlightModule() {
    }
    return SkyTextHighlightModule;
}());
export { SkyTextHighlightModule };
SkyTextHighlightModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SkyTextHighlightDirective
                ],
                exports: [
                    SkyTextHighlightDirective
                ],
                providers: [
                    MutationObserverService
                ]
            },] },
];
/** @nocollapse */
SkyTextHighlightModule.ctorParameters = function () { return []; };
//# sourceMappingURL=text-highlight.module.js.map