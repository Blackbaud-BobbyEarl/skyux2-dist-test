import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkyDefinitionListComponent } from './definition-list.component';
import { SkyDefinitionListContentComponent } from './definition-list-content.component';
import { SkyDefinitionListHeadingComponent } from './definition-list-heading.component';
import { SkyDefinitionListLabelComponent } from './definition-list-label.component';
import { SkyDefinitionListValueComponent } from './definition-list-value.component';
import { SkyResourcesModule } from '../resources';
var SkyDefinitionListModule = (function () {
    function SkyDefinitionListModule() {
    }
    return SkyDefinitionListModule;
}());
export { SkyDefinitionListModule };
SkyDefinitionListModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SkyDefinitionListComponent,
                    SkyDefinitionListContentComponent,
                    SkyDefinitionListHeadingComponent,
                    SkyDefinitionListLabelComponent,
                    SkyDefinitionListValueComponent
                ],
                imports: [
                    CommonModule,
                    SkyResourcesModule
                ],
                exports: [
                    SkyDefinitionListComponent,
                    SkyDefinitionListContentComponent,
                    SkyDefinitionListHeadingComponent,
                    SkyDefinitionListLabelComponent,
                    SkyDefinitionListValueComponent
                ]
            },] },
];
/** @nocollapse */
SkyDefinitionListModule.ctorParameters = function () { return []; };
//# sourceMappingURL=definition-list.module.js.map