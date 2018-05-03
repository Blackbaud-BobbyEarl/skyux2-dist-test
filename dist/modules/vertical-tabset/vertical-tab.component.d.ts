import { OnInit, ElementRef, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { SkyVerticalTabsetService } from './vertical-tabset.service';
export declare class SkyVerticalTabComponent implements OnInit, OnDestroy {
    private tabsetService;
    private changeRef;
    active: boolean;
    tabHeading: string;
    tabHeaderCount: number;
    disabled: boolean;
    showTabRightArrow: boolean;
    index: number;
    tabContent: ElementRef;
    private _showTabRightArrow;
    private _mobileSubscription;
    constructor(tabsetService: SkyVerticalTabsetService, changeRef: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    tabIndex(): 0 | -1;
    activateTab(): void;
    tabDeactivated(): void;
}
