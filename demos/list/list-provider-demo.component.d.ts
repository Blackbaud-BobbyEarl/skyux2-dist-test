import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import { ListDataProvider, ListDataRequestModel, ListDataResponseModel, ListItemModel } from '../../core';
export declare class DemoListProvider extends ListDataProvider {
    items: Observable<ListItemModel[]>;
    remoteCount: BehaviorSubject<number>;
    constructor();
    get(request: ListDataRequestModel): Observable<ListDataResponseModel>;
    count(): Observable<number>;
    private fakeHttpRequest(request);
}
export declare class SkyListProviderDemoComponent {
    listDataProvider: DemoListProvider;
    constructor(listDataProvider: DemoListProvider);
}
