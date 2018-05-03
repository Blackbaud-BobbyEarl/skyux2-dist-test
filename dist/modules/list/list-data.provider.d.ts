import { ListDataRequestModel } from './list-data-request.model';
import { ListDataResponseModel } from './list-data-response.model';
import { Observable } from 'rxjs/Observable';
export declare abstract class ListDataProvider {
    constructor(data?: Observable<Array<any>>);
    abstract get(request: ListDataRequestModel): Observable<ListDataResponseModel>;
    abstract count(): Observable<number>;
}
