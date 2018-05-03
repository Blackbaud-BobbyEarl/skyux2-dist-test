import { ComponentFactoryResolver, ApplicationRef } from '@angular/core';
import { SkyWaitPageAdapterService } from './wait-page-adapter.service';
export declare class SkyWaitService {
    private resolver;
    private appRef;
    private waitAdapter;
    private static waitComponent;
    private static pageWaitBlockingCount;
    private static pageWaitNonBlockingCount;
    constructor(resolver: ComponentFactoryResolver, appRef: ApplicationRef, waitAdapter: SkyWaitPageAdapterService);
    beginBlockingPageWait(): void;
    beginNonBlockingPageWait(): void;
    endBlockingPageWait(): void;
    endNonBlockingPageWait(): void;
    clearAllPageWaits(): void;
    dispose(): void;
    private setWaitComponentProperties(isBlocking);
    private beginPageWait(isBlocking);
    private endPageWait(isBlocking);
    private clearPageWait(isBlocking);
}
