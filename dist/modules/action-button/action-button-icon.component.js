import { Component, Input } from '@angular/core';
import { SkyMediaQueryService, SkyMediaBreakpoints } from '../media-queries';
var FONTSIZECLASS_SMALL = 'fa-2x';
var FONTSIZECLASS_LARGE = 'fa-3x';
var SkyActionButtonIconComponent = (function () {
    function SkyActionButtonIconComponent(mediaQueryService) {
        var _this = this;
        this.mediaQueryService = mediaQueryService;
        this.iconType = '';
        this.fontSizeClass = FONTSIZECLASS_LARGE;
        this.subscription = this.mediaQueryService.subscribe(function (args) {
            if (args === SkyMediaBreakpoints.xs) {
                _this.fontSizeClass = FONTSIZECLASS_SMALL;
            }
            else {
                _this.fontSizeClass = FONTSIZECLASS_LARGE;
            }
        });
    }
    SkyActionButtonIconComponent.prototype.ngOnDestroy = function () {
        /* istanbul ignore else */
        /* sanity check */
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    return SkyActionButtonIconComponent;
}());
export { SkyActionButtonIconComponent };
SkyActionButtonIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-action-button-icon',
                styles: [".sky-action-button-icon-container {\n  display: inline-block;\n}\n\n@media (max-width: 767px) {\n  .sky-action-button-icon-container {\n    margin-left: 5px;\n    margin-right: 5px;\n  }\n}\n\n@media (min-width: 768px) {\n  .sky-action-button-icon-container {\n    display: block;\n    margin-bottom: 20px;\n  }\n}\n\n.sky-action-button-icon {\n  color: #007ca6;\n}\n"],
                template: "<span class=\"sky-action-button-icon-container\">\n  <i\n    class=\"fa sky-action-button-icon\"\n    [ngClass]=\"['fa-' + iconType, fontSizeClass]\">\n  </i>\n</span>\n"
            },] },
];
/** @nocollapse */
SkyActionButtonIconComponent.ctorParameters = function () { return [
    { type: SkyMediaQueryService, },
]; };
SkyActionButtonIconComponent.propDecorators = {
    'iconType': [{ type: Input },],
};
//# sourceMappingURL=action-button-icon.component.js.map