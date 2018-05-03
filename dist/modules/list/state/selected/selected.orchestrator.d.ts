import { ListStateOrchestrator } from '../list-state.rxstate';
import { AsyncItem } from 'microedge-rxstate/dist';
import { ListSelectedModel } from './selected.model';
export declare class ListSelectedOrchestrator extends ListStateOrchestrator<AsyncItem<ListSelectedModel>> {
    constructor();
    private setLoading(state, action);
    private load(state, action);
    private setItemSelected(state, action);
    private setItemsSelected(state, action);
}
