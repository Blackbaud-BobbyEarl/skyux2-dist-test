import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ListDataProvider } from '../list/list-data.provider';
import { ListDataRequestModel } from '../list/list-data-request.model';
import { ListDataResponseModel } from '../list/list-data-response.model';
import { ListItemModel } from '../list/state/items/item.model';
export declare class SkyListInMemoryDataProvider extends ListDataProvider {
    items: BehaviorSubject<Array<ListItemModel>>;
    private lastItems;
    private lastSearch;
    private lastSearchResults;
    private searchFunction;
    private lastFilters;
    private lastFilterResults;
    constructor(data?: Observable<Array<any>>, searchFunction?: (data: any, searchText: string) => boolean);
    count(): Observable<number>;
    get(request: ListDataRequestModel): Observable<ListDataResponseModel>;
    private filteredItems(request);
}
