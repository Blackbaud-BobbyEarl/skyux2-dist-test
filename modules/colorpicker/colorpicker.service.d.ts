import { SkyColorpickerCmyk } from './types/colorpicker-cmyk';
import { SkyColorpickerHsla } from './types/colorpicker-hsla';
import { SkyColorpickerHsva } from './types/colorpicker-hsva';
import { SkyColorpickerRgba } from './types/colorpicker-rgba';
import { SkyColorpickerOutput } from './types/colorpicker-output';
export declare class SkyColorpickerService {
    constructor();
    hsla2hsva(hsla: SkyColorpickerHsla): SkyColorpickerHsva;
    hsva2hsla(hsva: SkyColorpickerHsva): SkyColorpickerHsla;
    rgbaToHsva(rgba: SkyColorpickerRgba): SkyColorpickerHsva;
    rgbaToCmyk(rgba: SkyColorpickerRgba): SkyColorpickerCmyk;
    hsvaToRgba(hsva: SkyColorpickerHsva): SkyColorpickerRgba;
    stringToHsva(colorString: string, hex8: boolean): SkyColorpickerHsva;
    outputFormat(hsva: SkyColorpickerHsva, outputFormat: string, allowHex8: boolean): string;
    skyColorpickerOut(color: SkyColorpickerHsva): SkyColorpickerOutput;
    hexText(rgba: SkyColorpickerRgba, allowHex8: boolean): string;
    denormalizeRGBA(rgba: SkyColorpickerRgba): SkyColorpickerRgba;
    denormalizeHSLA(hsla: SkyColorpickerHsla): SkyColorpickerHsla;
    denormalizeHSVA(hsla: SkyColorpickerHsva): SkyColorpickerHsva;
    denormalizeCMYK(cmyk: SkyColorpickerCmyk): SkyColorpickerCmyk;
}
