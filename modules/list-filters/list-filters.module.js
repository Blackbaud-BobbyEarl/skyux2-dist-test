import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkyFilterModule } from '../filter';
import { SkyListFilterButtonComponent } from './list-filter-button.component';
import { SkyListFilterSummaryComponent } from './list-filter-summary.component';
import { SkyListFilterInlineItemComponent } from './list-filter-inline-item.component';
import { SkyListFilterInlineComponent } from './list-filter-inline.component';
import { SkyListFilterInlineItemRendererComponent } from './list-filter-inline-item-renderer.component';
var SkyListFiltersModule = (function () {
    function SkyListFiltersModule() {
    }
    return SkyListFiltersModule;
}());
export { SkyListFiltersModule };
SkyListFiltersModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SkyListFilterButtonComponent,
                    SkyListFilterSummaryComponent,
                    SkyListFilterInlineItemComponent,
                    SkyListFilterInlineComponent,
                    SkyListFilterInlineItemRendererComponent
                ],
                imports: [
                    CommonModule,
                    SkyFilterModule
                ],
                exports: [
                    SkyListFilterButtonComponent,
                    SkyListFilterSummaryComponent,
                    SkyListFilterInlineItemComponent,
                    SkyListFilterInlineComponent,
                    SkyListFilterInlineItemRendererComponent
                ]
            },] },
];
/** @nocollapse */
SkyListFiltersModule.ctorParameters = function () { return []; };
//# sourceMappingURL=list-filters.module.js.map