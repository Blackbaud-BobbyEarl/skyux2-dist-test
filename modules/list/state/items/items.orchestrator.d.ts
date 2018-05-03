import { ListStateOrchestrator } from '../list-state.rxstate';
import { AsyncList } from 'microedge-rxstate/dist';
import { ListItemModel } from './item.model';
export declare class ListItemsOrchestrator extends ListStateOrchestrator<AsyncList<ListItemModel>> {
    constructor();
    private setLoading(state, action);
    private load(state, action);
}
