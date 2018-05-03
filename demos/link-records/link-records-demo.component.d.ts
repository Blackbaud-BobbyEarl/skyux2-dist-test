import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import { SkyLinkRecordsComponent, SkyLinkRecordsMatchModel } from '../../core';
export declare class SkyLinkRecordsDemoComponent {
    item: SkyLinkRecordsComponent;
    window: any;
    matchFields: any[];
    newItem: any;
    items: Observable<any>;
    matches: Observable<SkyLinkRecordsMatchModel[]>;
    constructor();
    showResults(): void;
}
