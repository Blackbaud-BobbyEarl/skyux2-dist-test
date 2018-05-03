import { Validator, AbstractControl } from '@angular/forms';
export declare class SkyUrlValidationDirective implements Validator {
    validate(control: AbstractControl): {
        [key: string]: any;
    };
    urlIsValid(url: string): boolean;
}
