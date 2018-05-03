import { AfterViewInit, EventEmitter, OnDestroy, QueryList } from '@angular/core';
import { SkyTileDashboardColumnComponent } from '../tile-dashboard-column';
import { SkyTileDashboardConfig } from '../tile-dashboard-config';
import { SkyTileDashboardService } from './tile-dashboard.service';
export declare class SkyTileDashboardComponent implements AfterViewInit, OnDestroy {
    dashboardService: SkyTileDashboardService;
    config: SkyTileDashboardConfig;
    configChange: EventEmitter<SkyTileDashboardConfig>;
    columns: QueryList<SkyTileDashboardColumnComponent>;
    singleColumn: SkyTileDashboardColumnComponent;
    private _config;
    private configSet;
    private viewReady;
    constructor(dashboardService: SkyTileDashboardService);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    private checkReady();
}
