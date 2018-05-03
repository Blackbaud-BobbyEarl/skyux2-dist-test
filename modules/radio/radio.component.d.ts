import { ControlValueAccessor } from '@angular/forms';
/**
 * Provider Expression that allows sky-checkbox to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)].
 */
export declare const SKY_RADIO_CONTROL_VALUE_ACCESSOR: any;
export declare class SkyRadioComponent implements ControlValueAccessor {
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
    value: any;
    readonly inputId: string;
    selectedValue: any;
    private onChangeCallback;
    onInputBlur(): void;
    onRadioChanged(newValue: any): void;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    private onTouchedCallback();
}
