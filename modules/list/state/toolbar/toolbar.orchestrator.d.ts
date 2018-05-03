import { ListStateOrchestrator } from '../list-state.rxstate';
import { ListToolbarModel } from './toolbar.model';
export declare class ListToolbarOrchestrator extends ListStateOrchestrator<ListToolbarModel> {
    constructor();
    private setExists(state, action);
    private setType(state, action);
    private load(state, action);
    private remove(state, action);
}
