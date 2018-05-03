import { StateDispatcher, StateOrchestrator } from 'microedge-rxstate/dist';
import { SkyLinkRecordsStateAction } from './link-records-state-action.type';
export declare class SkyLinkRecordsStateDispatcher extends StateDispatcher<SkyLinkRecordsStateAction> {
}
export declare class SkyLinkRecordsStateOrchestrator<T> extends StateOrchestrator<T, SkyLinkRecordsStateAction> {
}
