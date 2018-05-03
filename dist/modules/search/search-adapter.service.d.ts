import { ElementRef, Renderer } from '@angular/core';
export declare class SkySearchAdapterService {
    private renderer;
    constructor(renderer: Renderer);
    selectInput(searchEl: ElementRef): void;
    focusInput(searchEl: ElementRef): void;
    startInputAnimation(searchEl: ElementRef): void;
    endInputAnimation(searchEl: ElementRef): void;
    private getInputContainerEl(searchEl);
    private getSearchOpenButtonEl(searchEl);
    private getSearchContainerEl(searchEl);
    private getInputEl(searchEl);
}
