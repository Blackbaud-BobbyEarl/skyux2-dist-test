import { ElementRef, RendererFactory2 } from '@angular/core';
import { SkyWindowRefService } from '../window';
export declare class SkyFlyoutAdapterService {
    private rendererFactory;
    private windowRef;
    private renderer;
    constructor(rendererFactory: RendererFactory2, windowRef: SkyWindowRefService);
    appendToBody(element: any): void;
    removeHostElement(): void;
    adjustHeaderForHelp(header: ElementRef): void;
}
