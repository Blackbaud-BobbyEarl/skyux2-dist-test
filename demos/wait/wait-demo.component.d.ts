import { SkyWaitService } from '../../core';
export declare class SkyWaitDemoComponent {
    private waitSvc;
    isWaiting: boolean;
    constructor(waitSvc: SkyWaitService);
    showPageWait(isBlocking: boolean): void;
}
