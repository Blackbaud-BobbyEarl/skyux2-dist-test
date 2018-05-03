import { Pipe } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { SkyFormat } from '../format';
import { SkyResources } from '../resources';
var SkyFileSizePipe = (function () {
    function SkyFileSizePipe(decimalPipe) {
        this.decimalPipe = decimalPipe;
    }
    SkyFileSizePipe.prototype.transform = function (input) {
        var decimalPlaces = 0, dividend = 1, formattedSize, roundedSize, template;
        /* tslint:disable */
        if (input === null || input === undefined) {
            return '';
        }
        /* tslint:enable */
        if (Math.abs(input) === 1) {
            template = SkyResources.getString('file_size_b_singular');
        }
        else if (input < 1000) {
            template = SkyResources.getString('file_size_b_plural');
        }
        else if (input < 1e6) {
            template = SkyResources.getString('file_size_kb');
            dividend = 1000;
        }
        else if (input < 1e9) {
            template = SkyResources.getString('file_size_mb');
            dividend = 1e6;
            decimalPlaces = 1;
        }
        else {
            template = SkyResources.getString('file_size_gb');
            dividend = 1e9;
            decimalPlaces = 1;
        }
        roundedSize =
            Math.floor(input / (dividend / Math.pow(10, decimalPlaces))) / Math.pow(10, decimalPlaces);
        formattedSize = this.decimalPipe.transform(roundedSize, '.0-3');
        return SkyFormat.formatText(template, formattedSize);
    };
    return SkyFileSizePipe;
}());
export { SkyFileSizePipe };
SkyFileSizePipe.decorators = [
    { type: Pipe, args: [{
                name: 'skyFileSize'
            },] },
];
/** @nocollapse */
SkyFileSizePipe.ctorParameters = function () { return [
    { type: DecimalPipe, },
]; };
//# sourceMappingURL=file-size.pipe.js.map