import { Subject } from 'rxjs/Subject';
import { SkyColorpickerOutput, SkyColorpickerMessage } from '../../core';
export declare class SkyColorpickerDemoComponent {
    color1: any;
    color2: any;
    color3: any;
    selectedColor1: string;
    selectedOutputFormat1: string;
    selectedOutputFormat3: string;
    presetColors1: string[];
    colorpickerController: Subject<SkyColorpickerMessage>;
    showResetButton: boolean;
    onSelectedColorChanged(args: SkyColorpickerOutput): void;
    openColorpicker(): void;
    resetColorpicker(): void;
    toggleResetButton(): void;
    private sendMessage(type);
}
