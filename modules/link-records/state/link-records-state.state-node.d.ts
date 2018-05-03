import { StateNode } from 'microedge-rxstate/dist';
import { SkyLinkRecordsStateModel } from './link-records-state.model';
import { SkyLinkRecordsStateDispatcher } from './link-records-state.rxstate';
export declare class SkyLinkRecordsState extends StateNode<SkyLinkRecordsStateModel> {
    constructor(initialState: SkyLinkRecordsStateModel, dispatcher: SkyLinkRecordsStateDispatcher);
}
