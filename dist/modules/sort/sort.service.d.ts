import { BehaviorSubject } from 'rxjs/BehaviorSubject';
export declare class SkySortService {
    selectedItem: BehaviorSubject<string>;
    selectItem(sortItem: string): void;
}
