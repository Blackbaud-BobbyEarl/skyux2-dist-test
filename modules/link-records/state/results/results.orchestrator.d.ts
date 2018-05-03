import { SkyLinkRecordsStateOrchestrator } from '../link-records-state.rxstate';
import { AsyncList } from 'microedge-rxstate/dist';
import { SkyLinkRecordsResultModel } from './result.model';
export declare class SkyLinkRecordsResultsOrchestrator extends SkyLinkRecordsStateOrchestrator<AsyncList<SkyLinkRecordsResultModel>> {
    constructor();
    private load(state, action);
}
