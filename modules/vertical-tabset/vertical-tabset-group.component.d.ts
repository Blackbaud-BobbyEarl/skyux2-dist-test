import { ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import 'rxjs/add/operator/takeUntil';
import { SkyVerticalTabsetService } from './vertical-tabset.service';
export declare class SkyVerticalTabsetGroupComponent implements OnInit, OnDestroy {
    private tabService;
    private changeRef;
    groupHeading: string;
    disabled: boolean;
    private _open;
    private _openBeforeTabsHidden;
    private _ngUnsubscribe;
    open: boolean;
    private tabs;
    constructor(tabService: SkyVerticalTabsetService, changeRef: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    toggleMenuOpen(): void;
    subMenuOpen(): boolean;
    tabClicked: () => void;
    tabsHidden: () => void;
    tabsShown: () => void;
}
