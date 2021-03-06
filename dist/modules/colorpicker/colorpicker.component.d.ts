import { ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { SkyDropdownMessage } from '../dropdown';
import { SkyColorpickerChangeAxis, SkyColorpickerChangeColor, SkyColorpickerHsla, SkyColorpickerMessage, SkyColorpickerOutput, SkyColorpickerRgba } from './types';
import { SkyColorpickerService } from './colorpicker.service';
import { SliderPosition } from './colorpicker-classes';
export declare class SkyColorpickerComponent implements OnInit, OnDestroy {
    private service;
    selectedColorChanged: EventEmitter<SkyColorpickerOutput>;
    messageStream: Subject<SkyColorpickerMessage>;
    showResetButton: boolean;
    idIndex: number;
    skyColorpickerHexId: string;
    skyColorpickerRedId: string;
    skyColorpickerGreenId: string;
    skyColorpickerBlueId: string;
    skyColorpickerAlphaId: string;
    alphaChannel: string;
    alphaSliderColor: string;
    arrowTop: number;
    format: number;
    hexText: string;
    hslaText: SkyColorpickerHsla;
    hueSliderColor: string;
    outputFormat: string;
    presetColors: Array<string>;
    returnFormat: string;
    rgbaText: SkyColorpickerRgba;
    selectedColor: SkyColorpickerOutput;
    slider: SliderPosition;
    initialColor: string;
    isVisible: boolean;
    dropdownController: Subject<SkyDropdownMessage>;
    private closeColorPicker;
    private outputColor;
    private hsva;
    private sliderDimMax;
    private ngUnsubscribe;
    constructor(service: SkyColorpickerService);
    keyboardInput(event: any): void;
    setDialog(instance: any, elementRef: ElementRef, color: any, outputFormat: string, presetColors: Array<string>, alphaChannel: string): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    closePicker(): void;
    resetPickerColor(): void;
    applyColor(): void;
    setColorFromString(value: string): void;
    hue: SkyColorpickerChangeAxis;
    red: SkyColorpickerChangeColor;
    green: SkyColorpickerChangeColor;
    blue: SkyColorpickerChangeColor;
    alphaAxis: SkyColorpickerChangeAxis;
    alphaColor: SkyColorpickerChangeColor;
    hex: SkyColorpickerChangeColor;
    saturationAndLightness: SkyColorpickerChangeAxis;
    update(): void;
    private sendMessage(type);
    private handleIncomingMessages(message);
    private closeDropdown();
}
