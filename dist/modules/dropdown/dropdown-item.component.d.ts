import { AfterViewInit, ChangeDetectorRef, ElementRef } from '@angular/core';
export declare class SkyDropdownItemComponent implements AfterViewInit {
    elementRef: ElementRef;
    private changeDetector;
    isActive: boolean;
    isDisabled: boolean;
    buttonElement: HTMLButtonElement;
    constructor(elementRef: ElementRef, changeDetector: ChangeDetectorRef);
    ngAfterViewInit(): void;
    focusElement(enableNativeFocus: boolean): void;
    isFocusable(): boolean;
    resetState(): void;
}
