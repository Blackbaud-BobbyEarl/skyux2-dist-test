import { Subject } from 'rxjs/Subject';
import { SkyDropdownMessage } from '../dropdown';
export declare class SkySortComponent {
    dropdownController: Subject<SkyDropdownMessage>;
    dropdownClicked(): void;
}
