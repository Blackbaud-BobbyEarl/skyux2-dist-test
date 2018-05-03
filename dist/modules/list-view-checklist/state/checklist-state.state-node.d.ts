import { StateNode } from 'microedge-rxstate/dist';
import { ChecklistStateModel } from './checklist-state.model';
import { ChecklistStateDispatcher } from './checklist-state.rxstate';
export declare class ChecklistState extends StateNode<ChecklistStateModel> {
    constructor(initialState: ChecklistStateModel, dispatcher: ChecklistStateDispatcher);
}
