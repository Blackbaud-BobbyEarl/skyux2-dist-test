import { OnInit, OnDestroy, ElementRef, EventEmitter, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import 'rxjs/add/operator/takeUntil';
import { SkyVerticalTabsetService } from './../vertical-tabset/vertical-tabset.service';
export declare class SkySectionedFormComponent implements OnInit, OnDestroy, AfterViewChecked {
    tabService: SkyVerticalTabsetService;
    private changeRef;
    indexChanged: EventEmitter<number>;
    content: ElementRef;
    private _ngUnsubscribe;
    constructor(tabService: SkyVerticalTabsetService, changeRef: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewChecked(): void;
    ngOnDestroy(): void;
    tabsVisible(): boolean;
    showTabs(): void;
}
