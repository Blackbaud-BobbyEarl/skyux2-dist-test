import { ListState, ListStateDispatcher } from './state';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
export declare abstract class ListPagingComponent {
    protected initialized: BehaviorSubject<boolean>;
    protected state: ListState;
    protected dispatcher: ListStateDispatcher;
    constructor(state: ListState, dispatcher: ListStateDispatcher);
}
