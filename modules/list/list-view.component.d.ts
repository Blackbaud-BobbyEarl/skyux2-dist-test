import { ListState } from './state';
import { SkyListComponent } from '../list/list.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/distinctUntilChanged';
export declare abstract class ListViewComponent {
    active: Observable<boolean>;
    protected viewName: string;
    protected state: ListState;
    protected list: SkyListComponent;
    protected hasToolbar: Observable<boolean>;
    private viewId;
    constructor(state: ListState, defaultName: string);
    readonly id: string;
    readonly label: string;
    onViewActive(): void;
    onViewInactive(): void;
}
