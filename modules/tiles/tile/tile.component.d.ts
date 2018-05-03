import { ElementRef, EventEmitter } from '@angular/core';
import { SkyTileDashboardService } from '../tile-dashboard/tile-dashboard.service';
export declare class SkyTileComponent {
    elementRef: ElementRef;
    private dashboardService;
    isInDashboardColumn: boolean;
    showSettings: boolean;
    settingsClick: EventEmitter<{}>;
    isCollapsedChange: EventEmitter<boolean>;
    isCollapsed: boolean;
    private _isCollapsed;
    constructor(elementRef: ElementRef, dashboardService: SkyTileDashboardService);
    settingsButtonClicked(): void;
    readonly hasSettings: boolean;
    titleClick(): void;
    chevronDirectionChange(direction: string): void;
}
