import { EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
/**
 * Provider Expression that allows sky-checkbox to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)].
 */
export declare const SKY_CHECKBOX_CONTROL_VALUE_ACCESSOR: any;
export declare class SkyCheckboxChange {
    source: SkyCheckboxComponent;
    checked: boolean;
}
export declare class SkyCheckboxComponent implements ControlValueAccessor {
    /**
     * Hidden label for screen readers.
     */
    label: string;
    /**
     * Id of label for the checkbox.
     */
    labelledBy: string;
    id: string;
    disabled: boolean;
    tabindex: number;
    name: string;
    change: EventEmitter<SkyCheckboxChange>;
    private _checked;
    readonly inputId: string;
    /** Called when the checkbox is blurred. Needed to properly implement ControlValueAccessor. */
    onTouched: () => any;
    checked: boolean;
    /**
     * Implemented as part of ControlValueAccessor.
     */
    writeValue(value: any): void;
    /**
     * Implemented as part of ControlValueAccessor.
     */
    registerOnChange(fn: (value: any) => void): void;
    /**
     * Implemented as part of ControlValueAccessor.
     */
    registerOnTouched(fn: any): void;
    /**
     * Event handler for checkbox input element.
     * Toggles checked state if element is not disabled.
     */
    onInteractionEvent(event: Event): void;
    onInputBlur(): void;
    private _controlValueAccessorChangeFn;
    private _emitChangeEvent();
    /**
     * Toggles the `checked` value between true and false
     */
    private _toggle();
}
