import { AsyncList, AsyncItem } from 'microedge-rxstate/dist';
import { ListFilterModel } from './filters/filter.model';
import { ListItemModel } from './items/item.model';
import { ListPagingModel } from './paging/paging.model';
import { ListSearchModel } from './search/search.model';
import { ListSelectedModel } from './selected/selected.model';
import { ListSortModel } from './sort/sort.model';
import { ListToolbarModel } from './toolbar/toolbar.model';
import { ListViewsModel } from './views/views.model';
export declare class ListStateModel {
    filters: ListFilterModel[];
    items: AsyncList<ListItemModel>;
    paging: ListPagingModel;
    search: ListSearchModel;
    selected: AsyncItem<ListSelectedModel>;
    sort: ListSortModel;
    toolbar: ListToolbarModel;
    views: ListViewsModel;
    constructor();
}
