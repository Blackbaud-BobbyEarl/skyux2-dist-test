import { StateDispatcher, StateOrchestrator } from 'microedge-rxstate/dist';
import { ListToolbarStateAction } from './toolbar-state-action.type';
export declare class ListToolbarStateDispatcher extends StateDispatcher<ListToolbarStateAction> {
}
export declare class ListToolbarStateOrchestrator<T> extends StateOrchestrator<T, ListToolbarStateAction> {
}
