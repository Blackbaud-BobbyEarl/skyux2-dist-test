import { Observable } from 'rxjs/Observable';
import { SkySelectField, SkySelectFieldSelectMode } from './types';
export declare class SkySelectFieldPickerContext {
    data: Observable<SkySelectField[]>;
    headingText?: string;
    selectedValue?: any;
    selectMode?: SkySelectFieldSelectMode;
}
