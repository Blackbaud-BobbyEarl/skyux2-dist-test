import { GridStateOrchestrator } from '../grid-state.rxstate';
import { AsyncList } from 'microedge-rxstate/dist';
import { SkyGridColumnModel } from '../../../grid';
export declare class ListViewDisplayedGridColumnsOrchestrator extends GridStateOrchestrator<AsyncList<SkyGridColumnModel>> {
    constructor();
    private load(state, action);
}
