import { StateNode } from 'microedge-rxstate/dist';
import { ListStateModel } from './list-state.model';
import { ListStateDispatcher } from './list-state.rxstate';
export declare class ListState extends StateNode<ListStateModel> {
    constructor(dispatcher: ListStateDispatcher);
}
