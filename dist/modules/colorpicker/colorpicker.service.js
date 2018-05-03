// spell-checker:ignore hsva, hsla, cmyk, denormalize, colorpicker,Injectable
import { Injectable } from '@angular/core';
var SkyColorpickerService = (function () {
    function SkyColorpickerService() {
    }
    SkyColorpickerService.prototype.hsla2hsva = function (hsla) {
        var alpha = Math.min(hsla.alpha, 1);
        var hue = Math.min(hsla.hue, 1);
        var lightness = Math.min(hsla.lightness, 1);
        var saturation = Math.min(hsla.saturation, 1);
        var hsva = {
            'hue': hue,
            'saturation': saturation,
            'value': lightness,
            'alpha': alpha
        };
        if (lightness === 0) {
            hsva.saturation = 0;
            hsva.value = 0;
        }
        else {
            hsva.value = lightness + saturation * (1 - Math.abs(2 * lightness - 1)) / 2;
            hsva.saturation = 2 * (hsva.value - lightness) / hsva.value;
        }
        return hsva;
    };
    SkyColorpickerService.prototype.hsva2hsla = function (hsva) {
        var alpha = hsva.alpha;
        var hue = hsva.hue;
        var saturation = hsva.saturation;
        var value = hsva.value;
        var hsla = {
            'hue': hue,
            'saturation': saturation,
            'lightness': value,
            'alpha': alpha
        };
        if (value === 0) {
            hsla.lightness = 0;
            hsla.saturation = 0;
        }
        else {
            hsla.lightness = value * (2 - saturation) / 2;
            hsla.saturation = value * saturation / (1 - Math.abs(2 * hsla.lightness - 1));
        }
        return hsla;
    };
    SkyColorpickerService.prototype.rgbaToHsva = function (rgba) {
        var red = Math.min(rgba.red, 1);
        var green = Math.min(rgba.green, 1);
        var blue = Math.min(rgba.blue, 1);
        var alpha = Math.min(rgba.alpha, 1);
        var max = Math.max(red, green, blue);
        var min = Math.min(red, green, blue);
        var value = max;
        var d = max - min;
        var saturation = max === 0 ? 0 : d / max;
        var hue = 0;
        var maxValue;
        if (max !== min) {
            maxValue = (_a = {},
                _a[red] = (green - blue) / d + (green < blue ? 6 : 0),
                _a[green] = (blue - red) / d + 2,
                _a[blue] = (red - green) / d + 4,
                _a);
            hue = maxValue[max];
            hue /= 6;
        }
        var hsva = {
            'hue': hue,
            'saturation': saturation,
            'value': value,
            'alpha': alpha
        };
        return hsva;
        var _a;
    };
    SkyColorpickerService.prototype.rgbaToCmyk = function (rgba) {
        var cmyk = { 'cyan': 0, 'magenta': 0, 'yellow': 0, 'key': 0 };
        var key = 1 - Math.max(rgba.red, rgba.green, rgba.blue);
        if (key === 1) {
            cmyk.key = 1;
            return cmyk;
        }
        cmyk.cyan = (1 - rgba.red - key) / (1 - key);
        cmyk.magenta = (1 - rgba.green - key) / (1 - key);
        cmyk.yellow = (1 - rgba.blue - key) / (1 - key);
        cmyk.key = key;
        return cmyk;
    };
    SkyColorpickerService.prototype.hsvaToRgba = function (hsva) {
        var red = 0;
        var green = 0;
        var blue = 0;
        var hue = hsva.hue;
        var saturation = hsva.saturation;
        var value = hsva.value;
        var alpha = hsva.alpha;
        var i = Math.floor(hue * 6);
        var f = hue * 6 - i;
        var p = value * (1 - saturation);
        var q = value * (1 - f * saturation);
        var t = value * (1 - (1 - f) * saturation);
        var color = {
            0: function () { red = value; green = t; blue = p; },
            1: function () { red = q; green = value; blue = p; },
            2: function () { red = p; green = value; blue = t; },
            3: function () { red = p; green = q; blue = value; },
            4: function () { red = t; green = p; blue = value; },
            5: function () { red = value; green = p; blue = q; }
        };
        color[i % 6]();
        var rgba = {
            'red': red,
            'green': green,
            'blue': blue,
            'alpha': alpha
        };
        return rgba;
    };
    SkyColorpickerService.prototype.stringToHsva = function (colorString, hex8) {
        var stringParsers = [
            {
                re: /(rgb)a?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*%?,\s*(\d{1,3})\s*%?(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                parse: function (execResult) {
                    var rgba = {
                        'red': parseInt(execResult[2], 0) / 255,
                        'green': parseInt(execResult[3], 0) / 255,
                        'blue': parseInt(execResult[4], 0) / 255,
                        'alpha': parseFloat(execResult[5])
                    };
                    return rgba;
                }
            },
            {
                re: /(hsl)a?\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                parse: function (execResult) {
                    var hsla = {
                        'hue': parseInt(execResult[2], 0) / 360,
                        'saturation': parseInt(execResult[3], 0) / 100,
                        'lightness': parseInt(execResult[4], 0) / 100,
                        'alpha': parseFloat(execResult[5])
                    };
                    return hsla;
                    // tslint:enable max-line-length
                }
            }
        ];
        if (hex8) {
            stringParsers.push({
                re: /#?([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})$/,
                parse: function (execResult) {
                    var rgba = {
                        'red': parseInt(execResult[1], 16) / 255,
                        'green': parseInt(execResult[2], 16) / 255,
                        'blue': parseInt(execResult[3], 16) / 255,
                        'alpha': parseInt(execResult[4], 16) / 255
                    };
                    return rgba;
                }
            });
        }
        else {
            stringParsers.push({
                re: /#?([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})$/,
                parse: function (execResult) {
                    var rgba = {
                        'red': parseInt(execResult[1], 16) / 255,
                        'green': parseInt(execResult[2], 16) / 255,
                        'blue': parseInt(execResult[3], 16) / 255,
                        'alpha': 1
                    };
                    return rgba;
                }
            }, {
                re: /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])$/,
                parse: function (execResult) {
                    var rgba = {
                        'red': parseInt(execResult[1] + execResult[1], 16) / 255,
                        'green': parseInt(execResult[2] + execResult[2], 16) / 255,
                        'blue': parseInt(execResult[3] + execResult[3], 16) / 255,
                        'alpha': 1
                    };
                    return rgba;
                }
            });
        }
        var hsva = undefined;
        for (var key in stringParsers) {
            /* istanbul ignore else */ /* for in must be filtered by an if */
            if (stringParsers.hasOwnProperty(key)) {
                var parser = stringParsers[key];
                var match = parser.re.exec(colorString);
                var color = match && parser.parse(match);
                if (color) {
                    if ('red' in color) {
                        hsva = this.rgbaToHsva(color);
                    }
                    if ('hue' in color) {
                        hsva = this.hsla2hsva(color);
                    }
                    return hsva;
                }
            }
        }
        return hsva;
    };
    SkyColorpickerService.prototype.outputFormat = function (hsva, outputFormat, allowHex8) {
        var _this = this;
        if (['hsla', 'hex', 'cmyk'].indexOf(outputFormat) === -1) {
            outputFormat = 'rgba';
        }
        var color = {
            'hsla': function () {
                var hsla = _this.denormalizeHSLA(_this.hsva2hsla(hsva));
                return "hsla(" + hsla.hue + "," + hsla.saturation + "%," + hsla.lightness + "%," + hsla.alpha + ")";
            },
            'hex': function () {
                return _this.hexText(_this.denormalizeRGBA(_this.hsvaToRgba(hsva)), allowHex8);
            },
            'cmyk': function () {
                var cmyk = _this.denormalizeCMYK(_this.rgbaToCmyk(_this.hsvaToRgba(hsva)));
                return "cmyk(" + cmyk.cyan + "%," + cmyk.magenta + "%," + cmyk.yellow + "%," + cmyk.key + "%)";
            },
            'rgba': function () {
                var rgba = _this.denormalizeRGBA(_this.hsvaToRgba(hsva));
                return "rgba(" + rgba.red + "," + rgba.green + "," + rgba.blue + "," + rgba.alpha + ")";
            }
        };
        return color[outputFormat]();
    };
    SkyColorpickerService.prototype.skyColorpickerOut = function (color) {
        var formatColor;
        var cmykText = this.outputFormat(color, 'cmyk', true);
        var hslaText = this.outputFormat(color, 'hsla', true);
        var rgbaText = this.outputFormat(color, 'rgba', true);
        var rgba = this.hsvaToRgba(color);
        var hsla = this.hsva2hsla(color);
        var cmyk = this.rgbaToCmyk(rgba);
        var hex = this.outputFormat(color, 'hex', false);
        formatColor = {
            'cmykText': cmykText,
            'hslaText': hslaText,
            'rgbaText': rgbaText,
            'hsva': this.denormalizeHSVA(color),
            'rgba': this.denormalizeRGBA(rgba),
            'hsla': this.denormalizeHSLA(hsla),
            'cmyk': this.denormalizeCMYK(cmyk),
            'hex': hex
        };
        return formatColor;
    };
    SkyColorpickerService.prototype.hexText = function (rgba, allowHex8) {
        // tslint:disable no-bitwise
        var hexText = '#' + ((1 << 24) |
            (rgba.red << 16) |
            (rgba.green << 8) |
            rgba.blue).toString(16).substr(1);
        if (hexText[1] === hexText[2]
            && hexText[3] === hexText[4]
            && hexText[5] === hexText[6]
            && rgba.alpha === 1
            && !allowHex8) {
            hexText = '#' + hexText[1] + hexText[3] + hexText[5];
        }
        if (allowHex8) {
            hexText += ((1 << 8) | Math.round(rgba.alpha * 255)).toString(16).substr(1);
        }
        return hexText;
        // tslint:enable no-bitwise
    };
    SkyColorpickerService.prototype.denormalizeRGBA = function (rgba) {
        var denormalizeRgba = {
            'red': Math.round(rgba.red * 255),
            'green': Math.round(rgba.green * 255),
            'blue': Math.round(rgba.blue * 255),
            'alpha': Math.round(rgba.alpha * 100) / 100
        };
        return denormalizeRgba;
    };
    SkyColorpickerService.prototype.denormalizeHSLA = function (hsla) {
        var denormalizeHsla = {
            hue: Math.round((hsla.hue) * 360),
            saturation: Math.round(hsla.saturation * 100),
            lightness: Math.round(hsla.lightness * 100),
            alpha: Math.round(hsla.alpha * 100) / 100
        };
        return denormalizeHsla;
    };
    SkyColorpickerService.prototype.denormalizeHSVA = function (hsla) {
        var denormalizeHsva = {
            hue: Math.round((hsla.hue) * 360),
            saturation: Math.round(hsla.saturation * 100),
            value: Math.round(hsla.value * 100),
            alpha: Math.round(hsla.alpha * 100) / 100
        };
        return denormalizeHsva;
    };
    SkyColorpickerService.prototype.denormalizeCMYK = function (cmyk) {
        var denormalizeCmyk = {
            cyan: Math.round((cmyk.cyan) * 100),
            magenta: Math.round(cmyk.magenta * 100),
            yellow: Math.round(cmyk.yellow * 100),
            key: Math.round(cmyk.key * 100)
        };
        return denormalizeCmyk;
    };
    return SkyColorpickerService;
}());
export { SkyColorpickerService };
SkyColorpickerService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SkyColorpickerService.ctorParameters = function () { return []; };
//# sourceMappingURL=colorpicker.service.js.map