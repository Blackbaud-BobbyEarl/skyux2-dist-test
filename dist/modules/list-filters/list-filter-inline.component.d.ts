import { AfterContentInit } from '@angular/core';
import { ListStateDispatcher } from '../list/state';
import { SkyListFilterInlineModel } from './list-filter-inline.model';
export declare class SkyListFilterInlineComponent implements AfterContentInit {
    private dispatcher;
    inlineFilters: Array<SkyListFilterInlineModel>;
    private filters;
    constructor(dispatcher: ListStateDispatcher);
    ngAfterContentInit(): void;
    applyFilters(): void;
    private getFilterModelFromInline(inlineFilters);
}
