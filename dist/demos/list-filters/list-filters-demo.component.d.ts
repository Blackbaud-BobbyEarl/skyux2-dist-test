import { Observable } from 'rxjs/Observable';
import { SkyModalService, ListFilterModel } from '../../core';
export declare class SkyListFiltersDemoComponent {
    private modalService;
    listFilters: ListFilterModel[];
    modalFilters: ListFilterModel[];
    items: Observable<any>;
    constructor(modalService: SkyModalService);
    openFilterModal(): void;
}
