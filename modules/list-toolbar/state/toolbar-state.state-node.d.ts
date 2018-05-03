import { StateNode } from 'microedge-rxstate/dist';
import { ListToolbarStateModel } from './toolbar-state.model';
import { ListToolbarStateDispatcher } from './toolbar-state.rxstate';
export declare class ListToolbarState extends StateNode<ListToolbarStateModel> {
    constructor(initialState: ListToolbarStateModel, dispatcher: ListToolbarStateDispatcher);
}
