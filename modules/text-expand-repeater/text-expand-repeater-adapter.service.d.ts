import { ElementRef, Renderer } from '@angular/core';
export declare class SkyTextExpandRepeaterAdapterService {
    private renderer;
    constructor(renderer: Renderer);
    getItems(elRef: ElementRef): any;
    hideItem(item: HTMLElement): void;
    showItem(item: HTMLElement): void;
    getContainerHeight(containerEl: ElementRef): any;
    setContainerHeight(containerEl: ElementRef, height: string): void;
}
