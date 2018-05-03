import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkyToolbarModule } from '../toolbar';
import { SkySearchModule } from '../search';
import { SkySortModule } from '../sort';
import { SkyFilterModule } from '../filter';
import { SkyListFiltersModule } from '../list-filters';
import { SkyListToolbarComponent } from './list-toolbar.component';
import { SkyListToolbarItemComponent } from './list-toolbar-item.component';
import { SkyListToolbarItemRendererComponent } from './list-toolbar-item-renderer.component';
import { SkyListToolbarSortComponent } from './list-toolbar-sort.component';
var SkyListToolbarModule = (function () {
    function SkyListToolbarModule() {
    }
    return SkyListToolbarModule;
}());
export { SkyListToolbarModule };
SkyListToolbarModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SkyListToolbarComponent,
                    SkyListToolbarItemComponent,
                    SkyListToolbarItemRendererComponent,
                    SkyListToolbarSortComponent
                ],
                imports: [
                    CommonModule,
                    SkyToolbarModule,
                    SkySearchModule,
                    SkySortModule,
                    SkyFilterModule,
                    SkyListFiltersModule
                ],
                exports: [
                    SkyListToolbarComponent,
                    SkyListToolbarItemComponent,
                    SkyListToolbarItemRendererComponent,
                    SkyListToolbarSortComponent
                ],
                providers: []
            },] },
];
/** @nocollapse */
SkyListToolbarModule.ctorParameters = function () { return []; };
//# sourceMappingURL=list-toolbar.module.js.map