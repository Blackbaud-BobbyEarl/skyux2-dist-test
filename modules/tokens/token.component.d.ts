import { ElementRef, EventEmitter } from '@angular/core';
export declare class SkyTokenComponent {
    private elementRef;
    disabled: boolean;
    dismissible: boolean;
    focusable: boolean;
    dismiss: EventEmitter<void>;
    tokenFocus: EventEmitter<void>;
    readonly tabIndex: number | boolean;
    private _disabled;
    private _dismissible;
    private _focusable;
    constructor(elementRef: ElementRef);
    dismissToken(): void;
    focusElement(): void;
}
