import { OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/distinctUntilChanged';
import { ListPagingComponent } from '../list/list-paging.component';
import { ListState, ListStateDispatcher } from '../list/state';
export declare class SkyListPagingComponent extends ListPagingComponent implements OnInit {
    pageSize: Observable<number> | number;
    maxPages: Observable<number> | number;
    pageNumber: Observable<number> | number;
    currentPageNumber: Observable<number>;
    maxDisplayedPages: Observable<number>;
    itemsPerPage: Observable<number>;
    itemCount: Observable<number>;
    constructor(state: ListState, dispatcher: ListStateDispatcher);
    ngOnInit(): void;
    pageChange(currentPage: number): void;
}
