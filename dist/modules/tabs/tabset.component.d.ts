import { AfterContentInit, AfterViewInit, DoCheck, ElementRef, EventEmitter, OnDestroy, QueryList, ChangeDetectorRef, SimpleChanges, OnChanges } from '@angular/core';
import 'rxjs/add/operator/distinctUntilChanged';
import { SkyTabComponent } from './tab.component';
import { SkyTabsetAdapterService } from './tabset-adapter.service';
import { SkyTabsetService } from './tabset.service';
export declare class SkyTabsetComponent implements AfterContentInit, AfterViewInit, DoCheck, OnDestroy, OnChanges {
    private tabsetService;
    private adapterService;
    private elRef;
    private changeRef;
    tabStyle: string;
    active: number | string;
    newTab: EventEmitter<any>;
    openTab: EventEmitter<any>;
    activeChange: EventEmitter<any>;
    tabDisplayMode: string;
    tabs: QueryList<SkyTabComponent>;
    constructor(tabsetService: SkyTabsetService, adapterService: SkyTabsetAdapterService, elRef: ElementRef, changeRef: ChangeDetectorRef);
    tabCloseClick(tab: SkyTabComponent): void;
    newTabClick(): void;
    openTabClick(): void;
    windowResize(): void;
    selectTab(newTab: SkyTabComponent): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    ngDoCheck(): void;
    ngOnDestroy(): void;
    private updateDisplayMode(currentOverflow);
}