import { ElementRef } from '@angular/core';
import { SkyWaitAdapterService } from './wait-adapter.service';
export declare class SkyWaitComponent {
    private elRef;
    private adapterService;
    isWaiting: boolean;
    isFullPage: boolean;
    isNonBlocking: boolean;
    private _isWaiting;
    private _isFullPage;
    constructor(elRef: ElementRef, adapterService: SkyWaitAdapterService);
}
