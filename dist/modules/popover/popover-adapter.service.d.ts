import { ElementRef, Renderer2 } from '@angular/core';
import { SkyWindowRefService } from '../window';
import { SkyPopoverAdapterElements, SkyPopoverAlignment, SkyPopoverPlacement, SkyPopoverPosition } from './types';
export declare class SkyPopoverAdapterService {
    private renderer;
    private windowRef;
    constructor(renderer: Renderer2, windowRef: SkyWindowRefService);
    getPopoverPosition(elements: SkyPopoverAdapterElements, placement: SkyPopoverPlacement, alignment: SkyPopoverAlignment): SkyPopoverPosition;
    hidePopover(elem: ElementRef): void;
    showPopover(elem: ElementRef): void;
    isPopoverLargerThanParent(popover: ElementRef): boolean;
    getParentScrollListeners(popover: ElementRef, callback: (isVisibleWithinScrollable: boolean) => void): Function[];
    private getPopoverCoordinates(elements, placement, alignment);
    private getArrowCoordinates(elements, popoverCoords, placement);
    private verifyCoordinatesNearCaller(elements, position);
    private getNextPlacement(placement);
    private getInversePlacement(placement);
    private getScrollableParentElements(element);
    private isVisibleWithinScrollable(container, popover);
}
