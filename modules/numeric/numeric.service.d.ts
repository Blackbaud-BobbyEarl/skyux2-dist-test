import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { NumericOptions } from './numeric.options';
export declare class SkyNumericService {
    private readonly currencyPipe;
    private readonly decimalPipe;
    rx: RegExp;
    shortSymbol: string;
    constructor(currencyPipe: CurrencyPipe, decimalPipe: DecimalPipe);
    formatNumber(value: number, options: NumericOptions): string;
    private storeShortenSymbol(sValue);
    private replaceShortenSymbol(sValue);
}
