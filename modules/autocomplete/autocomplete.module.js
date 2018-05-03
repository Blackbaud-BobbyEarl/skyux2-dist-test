import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SkyDropdownModule } from '../dropdown';
import { SkyTextHighlightModule } from '../text-highlight';
import { SkyAutocompleteComponent } from './autocomplete.component';
import { SkyAutocompleteInputDirective } from './autocomplete-input.directive';
var SkyAutocompleteModule = (function () {
    function SkyAutocompleteModule() {
    }
    return SkyAutocompleteModule;
}());
export { SkyAutocompleteModule };
SkyAutocompleteModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SkyAutocompleteComponent,
                    SkyAutocompleteInputDirective
                ],
                imports: [
                    CommonModule,
                    FormsModule,
                    SkyTextHighlightModule,
                    SkyDropdownModule
                ],
                exports: [
                    SkyAutocompleteComponent,
                    SkyAutocompleteInputDirective
                ]
            },] },
];
/** @nocollapse */
SkyAutocompleteModule.ctorParameters = function () { return []; };
//# sourceMappingURL=autocomplete.module.js.map