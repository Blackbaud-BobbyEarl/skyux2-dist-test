import { AfterContentInit, EventEmitter } from '@angular/core';
import { ListState, ListStateDispatcher } from '../list/state';
import { ListFilterModel } from '../list/state';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
export declare class SkyListFilterSummaryComponent implements AfterContentInit {
    private state;
    private dispatcher;
    summaryItemClick: EventEmitter<ListFilterModel>;
    appliedFilters: Observable<Array<ListFilterModel>>;
    constructor(state: ListState, dispatcher: ListStateDispatcher);
    ngAfterContentInit(): void;
    filterSummaryItemDismiss(index: number): void;
    filterSummaryItemClick(item: ListFilterModel): void;
}
