import { Validator, AbstractControl } from '@angular/forms';
export declare class SkyEmailValidationDirective implements Validator {
    validate(control: AbstractControl): {
        [key: string]: any;
    };
    emailIsValid(email: string): boolean;
}
