import { StateDispatcher, StateOrchestrator } from 'microedge-rxstate/dist';
import { ListStateAction } from './list-state-action.type';
import { ListToolbarItemModel } from './toolbar/toolbar-item.model';
import { ListSortLabelModel } from './sort/label.model';
import { ListSortFieldSelectorModel } from './sort/field-selector.model';
import { ListFilterModel } from './filters/filter.model';
import { ListSearchModel } from './search/search.model';
export declare class ListStateOrchestrator<T> extends StateOrchestrator<T, ListStateAction> {
}
export declare class ListStateDispatcher extends StateDispatcher<ListStateAction> {
    viewsSetActive(id: string): void;
    toolbarExists(exists: boolean): void;
    toolbarAddItems(items: ListToolbarItemModel[], index?: number): void;
    toolbarRemoveItems(ids: string[]): void;
    searchSetFunctions(sortFunctions: ((data: any, searchText: string) => boolean)[]): void;
    searchSetFieldSelectors(fieldSelectors: Array<string>): void;
    searchSetText(searchText: string): void;
    searchSetOptions(searchOptions: ListSearchModel): void;
    sortSetAvailable(sortLabels: ListSortLabelModel[]): void;
    sortSetFieldSelectors(fieldSelectors: ListSortFieldSelectorModel[]): void;
    sortSetGlobal(sortLabels: ListSortLabelModel[]): void;
    filtersUpdate(filters: ListFilterModel[]): void;
}
