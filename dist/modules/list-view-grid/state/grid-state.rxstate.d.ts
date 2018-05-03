import { StateDispatcher, StateOrchestrator } from 'microedge-rxstate/dist';
import { GridStateAction } from './grid-state-action.type';
export declare class GridStateDispatcher extends StateDispatcher<GridStateAction> {
}
export declare class GridStateOrchestrator<T> extends StateOrchestrator<T, GridStateAction> {
}
