import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SkyModule } from './core';
import { SkyActionButtonDemoComponent, SkyAlertDemoComponent, SkyAutocompleteDemoComponent, SkyAvatarDemoComponent, SkyCardDemoComponent, SkyCheckboxDemoComponent, SkyColorpickerDemoComponent, SkyConfirmDemoComponent, SkyDatepickerDemoComponent, SkyDefinitionListDemoComponent, SkyDropdownDemoComponent, SkyEmailValidationDemoComponent, SkyErrorDemoComponent, SkyFileAttachmentDemoComponent, SkyFilterDemoComponent, SkyFilterInlineDemoComponent, SkyFluidGridDemoComponent, SkyFlyoutDemoComponent, SkyGridDemoComponent, SkyHelpInlineDemoComponent, SkyKeyInfoDemoComponent, SkyLabelDemoComponent, SkyLinkRecordsDemoComponent, SkyListDemoComponent, SkyListProviderDemoComponent, SkyListFiltersDemoComponent, SkyListFiltersInlineDemoComponent, SkyListPagingDemoComponent, SkyListToolbarDemoComponent, SkyListToolbarCustomDemoComponent, SkyListViewChecklistDemoComponent, SkyListViewGridDemoComponent, SkyLookupDemoComponent, SkyMediaQueryDemoComponent, SkyModalDemoComponent, SkyNavbarDemoComponent, SkyNumericDemoComponent, SkyPageSummaryDemoComponent, SkyPagingDemoComponent, SkyPopoverDemoComponent, SkyRadioDemoComponent, SkyRepeaterDemoComponent, SkySearchDemoComponent, SkySectionedFormDemoComponent, SkyDemoAddressFormComponent, SkyDemoInformationFormComponent, SkyDemoPhoneFormComponent, SkySelectFieldDemoComponent, SkySortDemoComponent, SkyTabsDemoComponent, SkyTextExpandDemoComponent, SkyTextHighlightDemoComponent, SkyTileDemoComponent, SkyTimepickerDemoComponent, SkyTokensDemoComponent, SkyToolbarDemoComponent, SkyUrlValidationDemoComponent, SkyVerticalTabsDemoComponent, SkyWaitDemoComponent, SkyWizardDemoComponent, 
// Entry components
SkyFilterDemoModalComponent, SkyListFiltersModalDemoComponent, SkyModalDemoFormComponent, SkyModalDemoTiledFormComponent, SkySectionedModalFormDemoComponent, SkyTileDemoTile1Component, SkyTileDemoTile2Component, SkyWizardDemoFormComponent, SkyFlyoutDemoInternalComponent } from './demos';
import { SkyDemoService } from './demos/demo.service';
var components = [
    SkyActionButtonDemoComponent,
    SkyAlertDemoComponent,
    SkyAutocompleteDemoComponent,
    SkyAvatarDemoComponent,
    SkyCardDemoComponent,
    SkyCheckboxDemoComponent,
    SkyColorpickerDemoComponent,
    SkyConfirmDemoComponent,
    SkyDatepickerDemoComponent,
    SkyDefinitionListDemoComponent,
    SkyDropdownDemoComponent,
    SkyEmailValidationDemoComponent,
    SkyErrorDemoComponent,
    SkyFileAttachmentDemoComponent,
    SkyFilterDemoComponent,
    SkyFilterInlineDemoComponent,
    SkyFluidGridDemoComponent,
    SkyFlyoutDemoComponent,
    SkyFlyoutDemoInternalComponent,
    SkyGridDemoComponent,
    SkyHelpInlineDemoComponent,
    SkyKeyInfoDemoComponent,
    SkyLabelDemoComponent,
    SkyLinkRecordsDemoComponent,
    SkyListDemoComponent,
    SkyListProviderDemoComponent,
    SkyListFiltersDemoComponent,
    SkyListFiltersInlineDemoComponent,
    SkyListPagingDemoComponent,
    SkyListToolbarDemoComponent,
    SkyListToolbarCustomDemoComponent,
    SkyListViewChecklistDemoComponent,
    SkyListViewGridDemoComponent,
    SkyLookupDemoComponent,
    SkyMediaQueryDemoComponent,
    SkyModalDemoComponent,
    SkyNavbarDemoComponent,
    SkyNumericDemoComponent,
    SkyPageSummaryDemoComponent,
    SkyPagingDemoComponent,
    SkyPopoverDemoComponent,
    SkyRadioDemoComponent,
    SkyRepeaterDemoComponent,
    SkySearchDemoComponent,
    SkySectionedFormDemoComponent,
    SkyDemoAddressFormComponent,
    SkyDemoInformationFormComponent,
    SkyDemoPhoneFormComponent,
    SkySelectFieldDemoComponent,
    SkySortDemoComponent,
    SkyTabsDemoComponent,
    SkyTextExpandDemoComponent,
    SkyTextHighlightDemoComponent,
    SkyTileDemoComponent,
    SkyTimepickerDemoComponent,
    SkyTokensDemoComponent,
    SkyToolbarDemoComponent,
    SkyUrlValidationDemoComponent,
    SkyVerticalTabsDemoComponent,
    SkyWaitDemoComponent,
    SkyWizardDemoComponent,
    SkyFilterDemoModalComponent,
    SkyListFiltersModalDemoComponent,
    SkyModalDemoFormComponent,
    SkyModalDemoTiledFormComponent,
    SkySectionedModalFormDemoComponent,
    SkyTileDemoTile1Component,
    SkyTileDemoTile2Component,
    SkyWizardDemoFormComponent
];
var SkyDemoModule = (function () {
    function SkyDemoModule() {
    }
    return SkyDemoModule;
}());
export { SkyDemoModule };
SkyDemoModule.decorators = [
    { type: NgModule, args: [{
                declarations: components,
                providers: [SkyDemoService],
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    SkyModule
                ],
                exports: components,
                entryComponents: components
            },] },
];
/** @nocollapse */
SkyDemoModule.ctorParameters = function () { return []; };
export * from './demos';
export * from './demos/demo.service';
//# sourceMappingURL=demo.js.map