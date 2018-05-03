import { OnInit, OnDestroy, AnimationTransitionEvent, ElementRef, EventEmitter, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { SkySearchAdapterService } from './search-adapter.service';
import { SkyMediaQueryService } from '../media-queries';
import { SkyResourcesService } from '../resources';
import { Subscription } from 'rxjs/Subscription';
export declare class SkySearchComponent implements OnDestroy, OnInit, OnChanges {
    private mediaQueryService;
    private elRef;
    private searchAdapter;
    private resources;
    private changeRef;
    searchApply: EventEmitter<string>;
    searchChange: EventEmitter<string>;
    searchClear: EventEmitter<void>;
    searchText: string;
    expandMode: string;
    isFullWidth: boolean;
    isCollapsible: boolean;
    placeholderText: string;
    inputAnimate: string;
    breakpointSubscription: Subscription;
    searchButtonShown: boolean;
    mobileSearchShown: boolean;
    dismissButtonShown: boolean;
    clearButtonShown: boolean;
    searchInputFocused: boolean;
    private _placeholderText;
    constructor(mediaQueryService: SkyMediaQueryService, elRef: ElementRef, searchAdapter: SkySearchAdapterService, resources: SkyResourcesService, changeRef: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    inputFocused(isFocused: boolean): void;
    clearSearchText(): void;
    enterPress(event: KeyboardEvent, searchText: string): void;
    applySearchText(searchText: string): void;
    searchTextChanged(searchText: string): void;
    toggleSearchInput(showInput: boolean): void;
    inputAnimationStart(event: AnimationTransitionEvent): void;
    inputAnimationEnd(event: AnimationTransitionEvent): void;
    ngOnDestroy(): void;
    private searchBindingChanged(changes);
    private expandModeBindingChanged(changes);
    private shouldOpenInput();
    private mediaQueryCallback(args);
    private searchShouldCollapse();
}
