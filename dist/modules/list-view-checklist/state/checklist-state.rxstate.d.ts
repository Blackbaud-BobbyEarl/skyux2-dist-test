import { StateDispatcher, StateOrchestrator } from 'microedge-rxstate/dist';
import { ChecklistStateAction } from './checklist-state-action.type';
export declare class ChecklistStateDispatcher extends StateDispatcher<ChecklistStateAction> {
}
export declare class ChecklistStateOrchestrator<T> extends StateOrchestrator<T, ChecklistStateAction> {
}
