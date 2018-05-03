import { ElementRef, EventEmitter, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/takeUntil';
import { SkyAutocompleteInputTextChange } from './types';
export declare class SkyAutocompleteInputDirective implements OnInit, OnDestroy, ControlValueAccessor {
    private elementRef;
    private renderer;
    displayWith: string;
    value: any;
    textValue: string;
    textChanges: EventEmitter<SkyAutocompleteInputTextChange>;
    blur: EventEmitter<void>;
    private ngUnsubscribe;
    private _displayWith;
    private _value;
    constructor(elementRef: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    ngOnDestroy(): void;
    writeValue(value: any): void;
    registerOnChange(fn: (value: any) => void): void;
    registerOnTouched(fn: () => void): void;
    onChange(value: any): void;
    onTouched(): void;
    private setAttributes(element);
    private checkValues();
}
