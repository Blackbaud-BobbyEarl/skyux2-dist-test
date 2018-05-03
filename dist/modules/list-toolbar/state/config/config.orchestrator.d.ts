import { ListToolbarStateOrchestrator } from '../toolbar-state.rxstate';
import { ListToolbarConfigModel } from './config.model';
export declare class ListToolbarConfigOrchestrator extends ListToolbarStateOrchestrator<ListToolbarConfigModel> {
    constructor();
    private setSearchEnabled(state, action);
    private setSortSelectorEnabled(state, action);
}
