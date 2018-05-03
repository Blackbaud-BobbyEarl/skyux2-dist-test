import { ChecklistStateOrchestrator } from '../checklist-state.rxstate';
import { AsyncList } from 'microedge-rxstate/dist';
import { ListViewChecklistItemModel } from './item.model';
export declare class ListViewChecklistItemsOrchestrator extends ChecklistStateOrchestrator<AsyncList<ListViewChecklistItemModel>> {
    constructor();
    private load(state, action);
}
