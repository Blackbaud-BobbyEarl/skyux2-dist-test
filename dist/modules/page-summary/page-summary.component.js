import { Component, ElementRef } from '@angular/core';
import { SkyPageSummaryAdapterService } from './page-summary-adapter.service';
import { SkyMediaBreakpoints, SkyMediaQueryService } from '../media-queries';
var SkyPageSummaryComponent = (function () {
    function SkyPageSummaryComponent(elRef, adapter, mediaQueryService) {
        this.elRef = elRef;
        this.adapter = adapter;
        this.mediaQueryService = mediaQueryService;
    }
    SkyPageSummaryComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.breakpointSubscription = this.mediaQueryService.subscribe(function (args) {
            _this.adapter.updateKeyInfoLocation(_this.elRef, args === SkyMediaBreakpoints.xs);
        });
    };
    SkyPageSummaryComponent.prototype.ngOnDestroy = function () {
        /* istanbul ignore else */
        /* sanity check */
        if (this.breakpointSubscription) {
            this.breakpointSubscription.unsubscribe();
        }
    };
    return SkyPageSummaryComponent;
}());
export { SkyPageSummaryComponent };
SkyPageSummaryComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-page-summary',
                template: "<div\n    class=\"sky-page-summary\"\n    [ngClass]=\"{\n      'sky-page-summary-with-key-info': keyInfoContainerEl.children.length > 0\n    }\"\n>\n  <ng-content select=\"sky-page-summary-alert\"></ng-content>\n  <div class=\"sky-page-summary-row\">\n    <div class=\"sky-page-summary-left\">\n      <ng-content select=\"sky-page-summary-image\"></ng-content>\n      <div>\n        <ng-content select=\"sky-page-summary-title\"></ng-content>\n        <ng-content select=\"sky-page-summary-subtitle\"></ng-content>\n        <ng-content select=\"sky-page-summary-status\"></ng-content>\n        <div class=\"sky-page-summary-key-info-xs\"></div>\n        <ng-content select=\"sky-page-summary-content\"></ng-content>\n      </div>\n    </div>\n    <div class=\"sky-page-summary-key-info-sm\">\n      <div class=\"sky-page-summary-key-info-container\" #keyInfoContainerEl>\n        <ng-content select=\"sky-page-summary-key-info\"></ng-content>\n      </div>\n    </div>\n  </div>\n</div>\n",
                styles: [".sky-page-summary {\n  background-color: #fff;\n  padding: 20px 15px;\n}\n\n.sky-page-summary-row {\n  align-items: stretch;\n  display: flex;\n}\n\n@media (min-width: 768px) {\n  .sky-page-summary-with-key-info .sky-page-summary-left {\n    flex-basis: 75%;\n    padding-right: 15px;\n  }\n  .sky-page-summary-with-key-info .sky-page-summary-right {\n    flex-basis: 25%;\n  }\n  .sky-page-summary-left {\n    align-items: stretch;\n    display: flex;\n  }\n}\n"],
                providers: [SkyPageSummaryAdapterService]
            },] },
];
/** @nocollapse */
SkyPageSummaryComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: SkyPageSummaryAdapterService, },
    { type: SkyMediaQueryService, },
]; };
//# sourceMappingURL=page-summary.component.js.map