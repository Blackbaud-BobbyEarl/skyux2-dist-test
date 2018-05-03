import { ElementRef } from '@angular/core';
export declare class SkyModalComponentAdapterService {
    constructor();
    handleWindowChange(modalEl: ElementRef): void;
    loadFocusElementList(modalEl: ElementRef): Array<HTMLElement>;
    isFocusInFirstItem(event: KeyboardEvent, list: Array<HTMLElement>): boolean;
    isFocusInLastItem(event: KeyboardEvent, list: Array<HTMLElement>): boolean;
    isModalFocused(event: KeyboardEvent, modalEl: ElementRef): boolean;
    focusLastElement(list: Array<HTMLElement>): boolean;
    focusFirstElement(list: Array<HTMLElement>): boolean;
    modalOpened(modalEl: ElementRef): void;
    private isVisible(element);
}
