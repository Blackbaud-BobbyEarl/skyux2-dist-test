import { OnDestroy } from '@angular/core';
import { SkyMediaQueryService } from '../../core';
export declare class SkyMediaQueryDemoComponent implements OnDestroy {
    private mediaQueries;
    currentBreakpoint: string;
    private querySubscription;
    constructor(mediaQueries: SkyMediaQueryService);
    ngOnDestroy(): void;
}
