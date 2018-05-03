import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkyMediaQueryModule } from '../media-queries';
import { SkyPageSummaryAlertComponent } from './page-summary-alert';
import { SkyPageSummaryContentComponent } from './page-summary-content';
import { SkyPageSummaryImageComponent } from './page-summary-image';
import { SkyPageSummaryKeyInfoComponent } from './page-summary-key-info';
import { SkyPageSummaryStatusComponent } from './page-summary-status';
import { SkyPageSummarySubtitleComponent } from './page-summary-subtitle';
import { SkyPageSummaryTitleComponent } from './page-summary-title';
import { SkyPageSummaryComponent } from './page-summary.component';
var SkyPageSummaryModule = (function () {
    function SkyPageSummaryModule() {
    }
    return SkyPageSummaryModule;
}());
export { SkyPageSummaryModule };
SkyPageSummaryModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SkyPageSummaryAlertComponent,
                    SkyPageSummaryComponent,
                    SkyPageSummaryContentComponent,
                    SkyPageSummaryImageComponent,
                    SkyPageSummaryKeyInfoComponent,
                    SkyPageSummaryStatusComponent,
                    SkyPageSummarySubtitleComponent,
                    SkyPageSummaryTitleComponent
                ],
                imports: [
                    CommonModule,
                    SkyMediaQueryModule
                ],
                exports: [
                    SkyPageSummaryAlertComponent,
                    SkyPageSummaryComponent,
                    SkyPageSummaryContentComponent,
                    SkyPageSummaryImageComponent,
                    SkyPageSummaryKeyInfoComponent,
                    SkyPageSummaryStatusComponent,
                    SkyPageSummarySubtitleComponent,
                    SkyPageSummaryTitleComponent
                ]
            },] },
];
/** @nocollapse */
SkyPageSummaryModule.ctorParameters = function () { return []; };
//# sourceMappingURL=page-summary.module.js.map