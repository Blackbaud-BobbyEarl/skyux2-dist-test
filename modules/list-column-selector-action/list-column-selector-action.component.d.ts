import { ListState } from '../list/state';
import { SkyListViewGridComponent } from '../list-view-grid';
import { SkyModalService } from '../modal';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/take';
export declare class SkyListColumnSelectorActionComponent {
    listState: ListState;
    private modalService;
    gridView: SkyListViewGridComponent;
    constructor(listState: ListState, modalService: SkyModalService);
    readonly isInGridView: Observable<boolean>;
    openColumnSelector(): void;
}
