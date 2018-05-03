import { SkyLinkRecordsStateOrchestrator } from '../link-records-state.rxstate';
import { AsyncItem } from 'microedge-rxstate/dist';
export declare class SkyLinkRecordsSelectedOrchestrator extends SkyLinkRecordsStateOrchestrator<AsyncItem<{
    [key: string]: {
        [keyField: string]: boolean;
    };
}>> {
    constructor();
    private setSelected(state, action);
    private clearSelected(state, action);
}
