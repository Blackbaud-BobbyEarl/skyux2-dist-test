import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkyWindowRefService } from '../window';
import { SkyPopoverModule } from '../popover';
import { SkyDropdownButtonComponent } from './dropdown-button.component';
import { SkyDropdownItemComponent } from './dropdown-item.component';
import { SkyDropdownMenuComponent } from './dropdown-menu.component';
import { SkyDropdownComponent } from './dropdown.component';
var SkyDropdownModule = (function () {
    function SkyDropdownModule() {
    }
    return SkyDropdownModule;
}());
export { SkyDropdownModule };
SkyDropdownModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SkyDropdownButtonComponent,
                    SkyDropdownComponent,
                    SkyDropdownItemComponent,
                    SkyDropdownMenuComponent
                ],
                imports: [
                    CommonModule,
                    SkyPopoverModule
                ],
                exports: [
                    SkyDropdownButtonComponent,
                    SkyDropdownComponent,
                    SkyDropdownItemComponent,
                    SkyDropdownMenuComponent
                ],
                providers: [
                    SkyWindowRefService
                ]
            },] },
];
/** @nocollapse */
SkyDropdownModule.ctorParameters = function () { return []; };
//# sourceMappingURL=dropdown.module.js.map