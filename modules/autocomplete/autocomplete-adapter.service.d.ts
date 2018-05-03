import { ElementRef, RendererFactory2 } from '@angular/core';
import 'rxjs/add/observable/fromEvent';
import { SkyWindowRefService } from '../window';
export declare class SkyAutocompleteAdapterService {
    private rendererFactory;
    private windowRef;
    private renderer;
    constructor(rendererFactory: RendererFactory2, windowRef: SkyWindowRefService);
    watchDropdownWidth(elementRef: ElementRef): void;
    private setDropdownWidth(elementRef);
}
