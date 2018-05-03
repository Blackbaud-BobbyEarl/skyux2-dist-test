import { ListStateOrchestrator } from '../list-state.rxstate';
import { ListViewsModel } from './views.model';
export declare class ListViewsOrchestrator extends ListStateOrchestrator<ListViewsModel> {
    constructor();
    private setActive(state, action);
    private load(state, action);
}
