import { ElementRef, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/takeUntil';
import { SkyWindowRefService } from '../window';
import { SkyPopoverAlignment, SkyPopoverPlacement, SkyPopoverTrigger } from './types';
import { SkyPopoverComponent } from './popover.component';
export declare class SkyPopoverDirective implements OnChanges, OnDestroy {
    private elementRef;
    private windowRef;
    skyPopover: SkyPopoverComponent;
    skyPopoverAlignment: SkyPopoverAlignment;
    skyPopoverPlacement: SkyPopoverPlacement;
    skyPopoverTrigger: SkyPopoverTrigger;
    private idled;
    constructor(elementRef: ElementRef, windowRef: SkyWindowRefService);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    togglePopover(): void;
    private positionPopover();
    private closePopover();
    private isPopoverOpen();
    private addEventListeners();
    private removeEventListeners();
}
