import { ElementRef, Renderer } from '@angular/core';
export declare class SkyTextExpandAdapterService {
    private renderer;
    constructor(renderer: Renderer);
    getContainerHeight(containerEl: ElementRef): any;
    setContainerHeight(containerEl: ElementRef, height: string): void;
    setText(textEl: ElementRef, text: string): void;
}
