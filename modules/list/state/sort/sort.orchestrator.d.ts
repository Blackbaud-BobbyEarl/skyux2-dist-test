import { ListStateOrchestrator } from '../list-state.rxstate';
import { ListSortModel } from './sort.model';
export declare class ListSortOrchestrator extends ListStateOrchestrator<ListSortModel> {
    constructor();
    private setFieldSelectors(state, action);
    private setAvailable(state, action);
    private setGlobal(state, action);
}
