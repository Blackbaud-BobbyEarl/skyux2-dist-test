import { StateNode } from 'microedge-rxstate/dist';
import { GridStateModel } from './grid-state.model';
import { GridStateDispatcher } from './grid-state.rxstate';
export declare class GridState extends StateNode<GridStateModel> {
    constructor(initialState: GridStateModel, dispatcher: GridStateDispatcher);
}
