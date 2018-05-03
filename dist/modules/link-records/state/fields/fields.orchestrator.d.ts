import { SkyLinkRecordsStateOrchestrator } from '../link-records-state.rxstate';
import { AsyncItem } from 'microedge-rxstate/dist';
import { SkyLinkRecordsFieldModel } from './field.model';
export declare class SkyLinkRecordsFieldsOrchestrator extends SkyLinkRecordsStateOrchestrator<AsyncItem<{
    [key: string]: Array<SkyLinkRecordsFieldModel>;
}>> {
    constructor();
    private setFields(state, action);
    private clearFields(state, action);
}
