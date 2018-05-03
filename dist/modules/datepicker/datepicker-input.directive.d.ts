import { OnInit, OnDestroy, Renderer, ElementRef, SimpleChanges, OnChanges } from '@angular/core';
import { SkyDatepickerComponent } from './datepicker.component';
import { ControlValueAccessor, Validator, AbstractControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { SkyDatepickerConfigService } from './datepicker-config.service';
export declare class SkyDatepickerInputDirective implements OnInit, OnDestroy, ControlValueAccessor, Validator, OnChanges {
    private renderer;
    private elRef;
    private config;
    pickerChangedSubscription: Subscription;
    skyDatepickerInput: SkyDatepickerComponent;
    dateFormat: string;
    skyDatepickerNoValidate: boolean;
    minDate: Date;
    maxDate: Date;
    private dateFormatter;
    private modelValue;
    constructor(renderer: Renderer, elRef: ElementRef, config: SkyDatepickerConfigService);
    configureOptions(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    onChange(event: any): void;
    onBlur(): void;
    registerOnChange(fn: (value: any) => any): void;
    registerOnTouched(fn: () => any): void;
    registerOnValidatorChange(fn: () => void): void;
    writeValue(value: any): void;
    validate(control: AbstractControl): {
        [key: string]: any;
    };
    private writeModelValue(model);
    private _onChange;
    private _onTouched;
    private _validatorChange;
}
