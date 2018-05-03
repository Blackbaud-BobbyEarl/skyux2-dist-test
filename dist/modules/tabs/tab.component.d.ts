import { EventEmitter, OnDestroy, AfterViewInit, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { SkyTabsetService } from './tabset.service';
export declare class SkyTabComponent implements OnDestroy, AfterViewInit, OnChanges {
    private tabsetService;
    private ref;
    tabHeading: string;
    tabHeaderCount: string;
    disabled: boolean;
    tabIndex: string | number;
    active: boolean;
    readonly allowClose: boolean;
    close: EventEmitter<any>;
    constructor(tabsetService: SkyTabsetService, ref: ChangeDetectorRef);
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
