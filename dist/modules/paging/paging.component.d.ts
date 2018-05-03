import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
export declare class SkyPagingComponent implements OnChanges {
    pageSize: number;
    maxPages: number;
    currentPage: number;
    itemCount: number;
    pagingLabel: string;
    currentPageChange: EventEmitter<number>;
    displayedPages: Array<number>;
    pageCount: number;
    ngOnChanges(changes: SimpleChanges): void;
    setPage(pageNumber: number): void;
    nextPage(): void;
    previousPage(): void;
    private getDisplayedPageNumbers(pageCount, maxDisplayedPages, pageNumber);
    private setPageCount();
    private setDisplayedPages();
}
