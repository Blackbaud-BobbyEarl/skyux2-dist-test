import { PipeTransform } from '@angular/core';
import { SkyNumericService } from './numeric.service';
export declare class SkyNumericPipe implements PipeTransform {
    private readonly skyNumeric;
    constructor(skyNumeric: SkyNumericService);
    transform(value: number, optionsObject: any): string;
}
