import { PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
export declare class SkyFileSizePipe implements PipeTransform {
    private decimalPipe;
    constructor(decimalPipe: DecimalPipe);
    transform(input: number): string;
}
