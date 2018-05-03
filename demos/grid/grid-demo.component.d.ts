import { OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ListSortFieldSelectorModel } from '../../core';
export declare class SkyGridDemoComponent implements OnInit {
    items: any[];
    asyncHeading: BehaviorSubject<string>;
    ngOnInit(): void;
    sortChanged(activeSort: ListSortFieldSelectorModel): void;
}
