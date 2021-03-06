import { ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { SkyVerticalTabComponent } from './vertical-tab.component';
import { SkyMediaQueryService } from './../media-queries/media-query.service';
export declare const VISIBLE_STATE = "shown";
export declare class SkyVerticalTabsetService {
    private mediaQueryService;
    tabs: Array<SkyVerticalTabComponent>;
    tabClicked: BehaviorSubject<boolean>;
    activeIndex: number;
    hidingTabs: BehaviorSubject<boolean>;
    showingTabs: BehaviorSubject<boolean>;
    tabAdded: Subject<SkyVerticalTabComponent>;
    indexChanged: BehaviorSubject<number>;
    switchingMobile: Subject<boolean>;
    animationVisibleState: string;
    private _content;
    content: ElementRef;
    private _tabsVisible;
    private _contentAdded;
    private _isWidescreen;
    constructor(mediaQueryService: SkyMediaQueryService);
    addTab(tab: SkyVerticalTabComponent): void;
    activateTab(tab: SkyVerticalTabComponent): void;
    activeTabContent(): ElementRef;
    isMobile(): boolean;
    updateContent(): void;
    tabsVisible(): boolean;
    contentVisible(): boolean;
    showTabs(): void;
    private moveContent();
    private updateTabClicked();
}
