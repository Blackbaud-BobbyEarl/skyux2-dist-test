import { AfterViewInit, ElementRef, OnDestroy } from '@angular/core';
import { SkyPageSummaryAdapterService } from './page-summary-adapter.service';
import { SkyMediaQueryService } from '../media-queries';
export declare class SkyPageSummaryComponent implements OnDestroy, AfterViewInit {
    private elRef;
    private adapter;
    private mediaQueryService;
    private breakpointSubscription;
    constructor(elRef: ElementRef, adapter: SkyPageSummaryAdapterService, mediaQueryService: SkyMediaQueryService);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
