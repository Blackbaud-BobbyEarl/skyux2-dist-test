import { ComponentFactoryResolver, Injector, ViewContainerRef } from '@angular/core';
import { SkyTileDashboardService } from '../tile-dashboard/tile-dashboard.service';
export declare class SkyTileDashboardColumnComponent {
    resolver: ComponentFactoryResolver;
    injector: Injector;
    private dashboardService;
    bagId: string;
    columnId: string;
    content: ViewContainerRef;
    constructor(resolver: ComponentFactoryResolver, injector: Injector, dashboardService: SkyTileDashboardService);
}
