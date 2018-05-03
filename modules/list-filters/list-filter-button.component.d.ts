import { AfterViewInit } from '@angular/core';
import { ListStateDispatcher } from '../list/state';
export declare class SkyListFilterButtonComponent implements AfterViewInit {
    private dispatcher;
    private filterButtonTemplate;
    constructor(dispatcher: ListStateDispatcher);
    ngAfterViewInit(): void;
}
