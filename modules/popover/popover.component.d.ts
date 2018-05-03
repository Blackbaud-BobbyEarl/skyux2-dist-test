import { ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { AnimationEvent } from '@angular/animations';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/takeUntil';
import { SkyWindowRefService } from '../window';
import { SkyPopoverAlignment, SkyPopoverPlacement } from './types';
import { SkyPopoverAdapterService } from './popover-adapter.service';
export declare class SkyPopoverComponent implements OnInit, OnDestroy {
    private adapterService;
    private changeDetector;
    private elementRef;
    private windowRef;
    dismissOnBlur: boolean;
    popoverTitle: string;
    alignment: SkyPopoverAlignment;
    placement: SkyPopoverPlacement;
    popoverOpened: EventEmitter<SkyPopoverComponent>;
    popoverClosed: EventEmitter<SkyPopoverComponent>;
    popoverContainer: ElementRef;
    popoverArrow: ElementRef;
    isOpen: boolean;
    isVisible: boolean;
    isMouseEnter: boolean;
    classNames: string[];
    animationState: 'hidden' | 'visible';
    popoverTop: number;
    popoverLeft: number;
    arrowTop: number;
    arrowLeft: number;
    private caller;
    private idled;
    private isMarkedForCloseOnMouseLeave;
    private preferredPlacement;
    private scrollListeners;
    private _alignment;
    private _placement;
    constructor(adapterService: SkyPopoverAdapterService, changeDetector: ChangeDetectorRef, elementRef: ElementRef, windowRef: SkyWindowRefService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    positionNextTo(caller: ElementRef, placement?: SkyPopoverPlacement, alignment?: SkyPopoverAlignment): void;
    reposition(): void;
    close(): void;
    onAnimationStart(event: AnimationEvent): void;
    onAnimationDone(event: AnimationEvent): void;
    markForCloseOnMouseLeave(): void;
    private positionPopover();
    private addListeners();
    private removeListeners();
}