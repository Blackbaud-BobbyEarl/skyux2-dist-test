import { EventEmitter } from '@angular/core';
import { SkyColorpickerChangeColor } from './types/colorpicker-color';
export declare class SkyColorpickerTextDirective {
    newColorContrast: EventEmitter<SkyColorpickerChangeColor>;
    skyColorpickerText: any;
    color: string;
    maxRange: number;
    changeInput(event: Event): void;
}
