import { BehaviorSubject } from 'rxjs/BehaviorSubject';
export declare class SkySectionedFormService {
    requiredChange: BehaviorSubject<boolean>;
    invalidChange: BehaviorSubject<boolean>;
    requiredFieldChanged(required: boolean): void;
    invalidFieldChanged(invalid: boolean): void;
}
