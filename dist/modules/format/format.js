var SkyFormat = (function () {
    /*istanbul ignore next */
    function SkyFormat() {
    }
    SkyFormat.formatText = function (format) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (this.isEmpty(format)) {
            return '';
        }
        return String(format).replace(/\{(\d+)\}/g, function (match, capture) {
            return args[parseInt(capture, 10)];
        });
    };
    SkyFormat.isEmpty = function (str) {
        /* tslint:disable */
        return str === null || str === undefined;
        /* tslint:enable */
    };
    return SkyFormat;
}());
export { SkyFormat };
//# sourceMappingURL=format.js.map