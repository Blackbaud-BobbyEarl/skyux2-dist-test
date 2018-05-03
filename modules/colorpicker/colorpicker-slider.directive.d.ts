import { ElementRef, EventEmitter } from '@angular/core';
import { SkyColorpickerChangeAxis } from './types/colorpicker-axis';
export declare class SkyColorpickerSliderDirective {
    private el;
    newColorContrast: EventEmitter<SkyColorpickerChangeAxis>;
    skyColorpickerSlider: string;
    color: string;
    xAxis: number;
    yAxis: number;
    private listenerMove;
    private listenerStop;
    constructor(el: ElementRef);
    setCursor(event: any): void;
    move(event: any): void;
    start(event: MouseEvent): void;
    stop(): void;
    getX(event: any): number;
    getY(event: any): number;
}
