import { Component } from '@angular/core';
import { SkyMediaQueryService, SkyMediaBreakpoints } from '../../core';
var SkyMediaQueryDemoComponent = (function () {
    function SkyMediaQueryDemoComponent(mediaQueries) {
        var _this = this;
        this.mediaQueries = mediaQueries;
        this.querySubscription = this.mediaQueries.subscribe(function (newBreakpoint) {
            switch (newBreakpoint) {
                case SkyMediaBreakpoints.xs:
                    _this.currentBreakpoint = 'xs';
                    break;
                case SkyMediaBreakpoints.sm:
                    _this.currentBreakpoint = 'sm';
                    break;
                case SkyMediaBreakpoints.md:
                    _this.currentBreakpoint = 'md';
                    break;
                case SkyMediaBreakpoints.lg:
                    _this.currentBreakpoint = 'lg';
                    break;
                default:
                    _this.currentBreakpoint = 'unknown';
            }
        });
    }
    SkyMediaQueryDemoComponent.prototype.ngOnDestroy = function () {
        /* istanbul ignore else */
        /* sanity check */
        if (this.querySubscription) {
            this.querySubscription.unsubscribe();
        }
    };
    return SkyMediaQueryDemoComponent;
}());
export { SkyMediaQueryDemoComponent };
SkyMediaQueryDemoComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-media-query-demo',
                template: "<sky-alert alertType=\"info\">\n  Current media breakpoint: <strong>{{currentBreakpoint}}</strong>\n</sky-alert>\n"
            },] },
];
/** @nocollapse */
SkyMediaQueryDemoComponent.ctorParameters = function () { return [
    { type: SkyMediaQueryService, },
]; };
//# sourceMappingURL=media-query-demo.component.js.map