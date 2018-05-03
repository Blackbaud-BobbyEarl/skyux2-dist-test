import { ListStateOrchestrator } from '../list-state.rxstate';
import { ListFilterModel } from './filter.model';
export declare class ListFiltersOrchestrator extends ListStateOrchestrator<ListFilterModel[]> {
    constructor();
    private update(state, action);
}
