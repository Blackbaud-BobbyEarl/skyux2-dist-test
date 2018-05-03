import { ListFilterModel } from './state/filters/filter.model';
import { ListSearchModel } from './state/search/search.model';
import { ListSortModel } from './state/sort/sort.model';
export declare class ListDataRequestModel {
    filters: ListFilterModel[];
    pageSize: number;
    pageNumber: number;
    search: ListSearchModel;
    sort: ListSortModel;
    constructor(data?: any);
}
