import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SkyAutocompleteModule } from '../autocomplete';
import { SkyTokensModule } from '../tokens';
import { SkyLookupComponent } from './lookup.component';
var SkyLookupModule = (function () {
    function SkyLookupModule() {
    }
    return SkyLookupModule;
}());
export { SkyLookupModule };
SkyLookupModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SkyLookupComponent
                ],
                imports: [
                    CommonModule,
                    FormsModule,
                    SkyAutocompleteModule,
                    SkyTokensModule
                ],
                exports: [
                    SkyLookupComponent
                ]
            },] },
];
/** @nocollapse */
SkyLookupModule.ctorParameters = function () { return []; };
//# sourceMappingURL=lookup.module.js.map