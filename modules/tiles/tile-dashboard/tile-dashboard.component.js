import { Component, EventEmitter, Input, Output, ViewChild, ViewChildren } from '@angular/core';
import { SkyTileDashboardColumnComponent } from '../tile-dashboard-column';
import { SkyTileDashboardService } from './tile-dashboard.service';
var SkyTileDashboardComponent = (function () {
    function SkyTileDashboardComponent(
        // HACK: This is public so it can be accessed via a unit test due to breaking changes
        // in RC5. https://github.com/angular/angular/issues/10854
        dashboardService) {
        var _this = this;
        this.dashboardService = dashboardService;
        this.configChange = new EventEmitter();
        this.configSet = false;
        this.viewReady = false;
        dashboardService.configChange.subscribe(function (config) {
            _this.configChange.emit(config);
        });
    }
    Object.defineProperty(SkyTileDashboardComponent.prototype, "config", {
        get: function () {
            return this._config;
        },
        set: function (value) {
            if (value && !this.configSet) {
                this._config = value;
                this.configSet = true;
                this.checkReady();
            }
        },
        enumerable: true,
        configurable: true
    });
    SkyTileDashboardComponent.prototype.ngAfterViewInit = function () {
        this.viewReady = true;
        this.checkReady();
    };
    SkyTileDashboardComponent.prototype.ngOnDestroy = function () {
        this.dashboardService.destroy();
    };
    SkyTileDashboardComponent.prototype.checkReady = function () {
        var _this = this;
        if (this.viewReady && this.config) {
            setTimeout(function () {
                _this.dashboardService.init(_this.config, _this.columns, _this.singleColumn);
            }, 0);
        }
    };
    return SkyTileDashboardComponent;
}());
export { SkyTileDashboardComponent };
SkyTileDashboardComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-tile-dashboard',
                styles: [":host {\n  display: flex;\n  padding: 0 10px;\n}\n\n.sky-tile-dashboard-layout-multi {\n  display: block;\n}\n\n.sky-tile-dashboard-layout-single {\n  display: none;\n}\n\n@media (max-width: 991px) {\n  :host {\n    display: block;\n    padding: 0;\n  }\n  .sky-tile-dashboard-layout-multi {\n    display: none;\n  }\n  .sky-tile-dashboard-layout-single {\n    display: block;\n  }\n  :host /deep/ .sky-tile-dashboard-column {\n    padding: 0;\n  }\n}\n\n@media (max-width: 767px) {\n  :host /deep/ .sky-tile {\n    margin-bottom: 0 !important;\n  }\n}\n"],
                template: "<sky-tile-dashboard-column\n  *ngFor=\"let column of config?.layout?.multiColumn\"\n  class=\"sky-tile-dashboard-layout-multi\"\n  [ngStyle]=\"{\n    'flex-basis': (100 / config?.layout?.multiColumn.length) + '%'\n  }\"\n>\n</sky-tile-dashboard-column>\n<sky-tile-dashboard-column class=\"sky-tile-dashboard-layout-single\" #singleColumn>\n</sky-tile-dashboard-column>\n<ng-content></ng-content>\n",
                providers: [SkyTileDashboardService]
            },] },
];
/** @nocollapse */
SkyTileDashboardComponent.ctorParameters = function () { return [
    { type: SkyTileDashboardService, },
]; };
SkyTileDashboardComponent.propDecorators = {
    'config': [{ type: Input },],
    'configChange': [{ type: Output },],
    'columns': [{ type: ViewChildren, args: [SkyTileDashboardColumnComponent,] },],
    'singleColumn': [{ type: ViewChild, args: ['singleColumn', { read: SkyTileDashboardColumnComponent },] },],
};
//# sourceMappingURL=tile-dashboard.component.js.map