import { ElementRef } from '@angular/core';
import { SkyPopoverComponent } from '../../core';
export declare class SkyPopoverDemoComponent {
    asyncPopoverRef: SkyPopoverComponent;
    remote: ElementRef;
    asyncPopover: SkyPopoverComponent;
    constructor();
    onPopoverOpened(popoverComponent: any): void;
    onPopoverClosed(popoverComponent: any): void;
}
