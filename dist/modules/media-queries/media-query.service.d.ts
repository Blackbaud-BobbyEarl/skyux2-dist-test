import { NgZone } from '@angular/core';
import { SkyMediaQueryListener } from './media-query-listener';
import { SkyMediaBreakpoints } from './media-breakpoints';
import { Subscription } from 'rxjs/Subscription';
export declare class SkyMediaQueryService {
    private zone;
    static xs: string;
    static sm: string;
    static md: string;
    static lg: string;
    readonly current: SkyMediaBreakpoints;
    private _current;
    private xsMql;
    private smMql;
    private mdMql;
    private lgMql;
    private xsListener;
    private smListener;
    private mdListener;
    private lgListener;
    private currentSubject;
    constructor(zone: NgZone);
    subscribe(listener: SkyMediaQueryListener): Subscription;
    destroy(): void;
    private setupListener(mql, breakpoints);
}
