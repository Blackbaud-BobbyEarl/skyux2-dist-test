import { OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/take';
import { SkyLinkRecordsState, SkyLinkRecordsStateDispatcher } from './state';
import { SkyLinkRecordsFieldModel } from './state/fields/field.model';
import { SkyLinkRecordsMatchModel } from './state/matches/match.model';
export declare class SkyLinkRecordsItemDiffComponent implements OnInit {
    private state;
    private dispatcher;
    STATUSES: {
        Created: string;
        Edit: string;
        Linked: string;
        NoMatch: string;
        Suggested: string;
        Selected: string;
        isValid: (value: string) => boolean;
    };
    readOnly: boolean;
    key: string;
    item: any;
    match: SkyLinkRecordsMatchModel;
    fields: Array<any>;
    selectedByDefault: boolean;
    showNewFieldValues: boolean;
    constructor(state: SkyLinkRecordsState, dispatcher: SkyLinkRecordsStateDispatcher);
    ngOnInit(): void;
    setFieldSelected(fieldKey: string, ev: any): void;
    trackByFieldKey(index: number, field: SkyLinkRecordsFieldModel): string;
    readonly fieldValues: Observable<{
        field: SkyLinkRecordsFieldModel;
        selected: boolean;
    }[]>;
}
