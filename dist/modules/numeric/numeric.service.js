import { Injectable } from '@angular/core';
import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { SkyResources } from '../resources/resources';
var SkyNumericService = (function () {
    function SkyNumericService(currencyPipe, decimalPipe) {
        this.currencyPipe = currencyPipe;
        this.decimalPipe = decimalPipe;
    }
    SkyNumericService.prototype.formatNumber = function (value, options) {
        var si = [
            { value: 1E12, symbol: SkyResources.getString('number_trillion_abrev') },
            { value: 1E9, symbol: SkyResources.getString('number_billion_abrev') },
            { value: 1E6, symbol: SkyResources.getString('number_million_abrev') },
            { value: 1E3, symbol: SkyResources.getString('number_thousands_abrev') }
        ];
        this.rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
        var i;
        var sValue;
        this.shortSymbol = '';
        // Shortens with or without symbol (K/M/B/T) depending on value of number
        for (i = 0; i < si.length; i++) {
            // Checks both positive and negative of value to ensure negative numbers are shortened
            if (value >= si[i].value || -value >= si[i].value) {
                // Using Math.round to ensure accurate rounding compared to toFixed
                sValue = Number(Math.round(parseFloat((value / si[i].value) + 'e' + options.digits))
                    + 'e-' + options.digits).toString().replace(this.rx, '$1') + si[i].symbol;
                break;
            }
            else {
                sValue = Number(Math.round(parseFloat(value + 'e' + options.digits))
                    + 'e-' + options.digits).toString().replace(this.rx, '$1');
            }
        }
        // Checks the string entered for format. toLowerCase to ignore case.
        // else statement is a catch all to ensure that if anything but currency (or a future option)
        // are entered, it will be treated like a number.
        if (options.format.toLowerCase() === 'currency') {
            // Stores the symbol added from shortening (K/M/B/T) to reapply later
            this.storeShortenSymbol(sValue);
            // Currency formatting via Currency Pipe. In a case where, value was not shortened
            // AND there are "cents" in the value AND the digit input is 2 or higher, it forces 2 digits.
            // This prevents a value like $15.50 from displaying as $15.5
            // Note: This will need to be reviewed if we support currencies with three decimal digits
            if (value < si[si.length - 1].value && value % 1 !== 0 && options.digits >= 2) {
                sValue = this.currencyPipe.transform(parseFloat(sValue), options.iso, true, '1.2-' + options.digits);
            }
            else {
                sValue = this.currencyPipe.transform(parseFloat(sValue), options.iso, true, '1.0-' + options.digits);
            }
            // Replaces shorten symbol after currency formatting
            sValue = this.replaceShortenSymbol(sValue);
        }
        else {
            // Stores the symbol added from shortening (K/M/B/T) to reapply later
            this.storeShortenSymbol(sValue);
            // Ensures localization of the number to ensure comma and decimal separators are correct
            sValue = this.decimalPipe.transform(parseFloat(sValue), '1.0-' + options.digits);
            // Replaces the previously stored shortening symbol
            sValue = this.replaceShortenSymbol(sValue);
        }
        // Returns the formatted value
        return sValue;
    };
    // Stores the symbol added from shortening (K/M/B/T) to reapply later
    SkyNumericService.prototype.storeShortenSymbol = function (sValue) {
        var rx = /K|M|B|T/ig;
        if (sValue.match(rx)) {
            this.shortSymbol = sValue.match(rx).toString();
        }
    };
    // Must have previously called storeShortenSymbol to have something to replace.
    // Finds the last number in the formatted number,
    // gets the index of the position after that character and re-inserts the symbol.
    // works regardless of currency symbol position
    SkyNumericService.prototype.replaceShortenSymbol = function (sValue) {
        var r = /(\d)(?!.*\d)/g.exec(sValue);
        var pos = r.index + r.length;
        sValue = sValue.substring(0, pos)
            + this.shortSymbol + sValue.substring(pos);
        return sValue;
    };
    return SkyNumericService;
}());
export { SkyNumericService };
SkyNumericService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SkyNumericService.ctorParameters = function () { return [
    { type: CurrencyPipe, },
    { type: DecimalPipe, },
]; };
//# sourceMappingURL=numeric.service.js.map