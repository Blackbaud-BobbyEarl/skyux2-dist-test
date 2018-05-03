import { SkyLinkRecordsStateOrchestrator } from '../link-records-state.rxstate';
import { AsyncList } from 'microedge-rxstate/dist';
import { SkyLinkRecordsMatchModel } from './match.model';
export declare class SkyLinkRecordsMatchesOrchestrator extends SkyLinkRecordsStateOrchestrator<AsyncList<SkyLinkRecordsMatchModel>> {
    constructor();
    private load(state, action);
    private setStatus(state, action);
    private setItem(state, action);
}
