import { ElementRef, OnChanges, OnInit, Renderer, SimpleChanges, OnDestroy } from '@angular/core';
import { AbstractControl, ControlValueAccessor, Validator } from '@angular/forms';
import { SkyColorpickerService } from './colorpicker.service';
import { SkyColorpickerComponent } from './colorpicker.component';
import { Subscription } from 'rxjs/Subscription';
export declare class SkyColorpickerInputDirective implements OnInit, OnChanges, ControlValueAccessor, Validator, OnDestroy {
    private elementRef;
    private renderer;
    private service;
    pickerChangedSubscription: Subscription;
    skyColorpickerInput: SkyColorpickerComponent;
    initialColor: string;
    returnFormat: string;
    outputFormat: string;
    presetColors: string[];
    alphaChannel: string;
    private _initialColor;
    private modelValue;
    constructor(elementRef: ElementRef, renderer: Renderer, service: SkyColorpickerService);
    changeInput(event: any): void;
    onChange(event: any): void;
    onBlur(event: any): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    setColorPickerDefaults(): void;
    ngOnChanges(changes: SimpleChanges): void;
    registerOnChange(fn: (value: any) => any): void;
    registerOnTouched(fn: () => any): void;
    registerOnValidatorChange(fn: () => void): void;
    writeValue(value: any): void;
    validate(control: AbstractControl): {
        [key: string]: any;
    };
    private writeModelValue(model);
    private formatter(color);
    private _onChange;
    private _onTouched;
    private _validatorChange;
}
