import { ElementRef, OnInit, EventEmitter, AfterViewChecked, ChangeDetectorRef, OnDestroy } from '@angular/core';
import 'rxjs/add/operator/takeUntil';
import { SkyResourcesService } from './../resources/resources.service';
import { SkyVerticalTabsetService } from './vertical-tabset.service';
export declare class SkyVerticalTabsetComponent implements OnInit, AfterViewChecked, OnDestroy {
    tabService: SkyVerticalTabsetService;
    private resources;
    private changeRef;
    showTabsText: string;
    activeChange: EventEmitter<number>;
    tabGroups: ElementRef;
    content: ElementRef;
    private _ngUnsubscribe;
    constructor(tabService: SkyVerticalTabsetService, resources: SkyResourcesService, changeRef: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewChecked(): void;
    ngOnDestroy(): void;
}
