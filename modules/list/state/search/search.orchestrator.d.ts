import { ListStateOrchestrator } from '../list-state.rxstate';
import { ListSearchModel } from './search.model';
export declare class ListSearchOrchestrator extends ListStateOrchestrator<ListSearchModel> {
    constructor();
    private setSearchText(state, action);
    private setFunctions(state, action);
    private setFieldSelectors(state, action);
    private setOptions(state, action);
}
