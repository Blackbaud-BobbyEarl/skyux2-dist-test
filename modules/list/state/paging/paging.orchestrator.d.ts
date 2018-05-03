import { ListStateOrchestrator } from '../list-state.rxstate';
import { ListPagingModel } from './paging.model';
export declare class ListPagingOrchestrator extends ListStateOrchestrator<ListPagingModel> {
    constructor();
    private setMaxPages(state, action);
    private setItemsPerPage(state, action);
    private setPageNumber(state, action);
}
