import { ElementRef, Renderer } from '@angular/core';
export declare class SkyWaitAdapterService {
    private renderer;
    constructor(renderer: Renderer);
    setWaitBounds(waitEl: ElementRef): void;
    removeWaitBounds(waitEl: ElementRef): void;
    setBusyState(waitEl: ElementRef, isFullPage: boolean, isWaiting: boolean): void;
}
