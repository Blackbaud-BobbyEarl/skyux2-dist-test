import { Component, ComponentFactoryResolver, Injector, ViewChild, ViewContainerRef } from '@angular/core';
import { SkyTileDashboardService } from '../tile-dashboard/tile-dashboard.service';
var columnIdIndex = 0;
var SkyTileDashboardColumnComponent = (function () {
    function SkyTileDashboardColumnComponent(resolver, injector, dashboardService) {
        this.resolver = resolver;
        this.injector = injector;
        this.dashboardService = dashboardService;
        columnIdIndex++;
        this.columnId = 'tile-dashboard-column-' + columnIdIndex;
        this.bagId = this.dashboardService.bagId;
    }
    return SkyTileDashboardColumnComponent;
}());
export { SkyTileDashboardColumnComponent };
SkyTileDashboardColumnComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-tile-dashboard-column',
                styles: [":host {\n  display: flex;\n  flex-grow: 1;\n  overflow: hidden;\n  padding: 0 10px;\n}\n\n@media (max-width: 767px) {\n  :host {\n    padding: 0;\n  }\n  :host /deep/ .sky-tile {\n    margin-bottom: 0 !important;\n  }\n}\n\n.sky-tile-dashboard-column {\n  min-height: 100px;\n  width: 100%;\n}\n"],
                template: "<div class=\"sky-tile-dashboard-column\" [dragula]=\"bagId\">\n  <div #content></div>\n</div>\n"
            },] },
];
/** @nocollapse */
SkyTileDashboardColumnComponent.ctorParameters = function () { return [
    { type: ComponentFactoryResolver, },
    { type: Injector, },
    { type: SkyTileDashboardService, },
]; };
SkyTileDashboardColumnComponent.propDecorators = {
    'content': [{ type: ViewChild, args: ['content', { read: ViewContainerRef },] },],
};
//# sourceMappingURL=tile-dashboard-column.component.js.map