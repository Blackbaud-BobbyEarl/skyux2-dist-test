import { TemplateRef, QueryList, AfterContentInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/distinctUntilChanged';
import { SkyLinkRecordsState, SkyLinkRecordsStateDispatcher } from './state';
import { SkyLinkRecordsItemModel } from './link-records-item.model';
import { SkyLinkRecordsItemDiffComponent } from './link-records-item-diff.component';
export declare class SkyLinkRecordsItemComponent implements AfterContentInit {
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
    record: SkyLinkRecordsItemModel;
    itemTemplate: TemplateRef<any>;
    matchTemplate: TemplateRef<any>;
    noMatchTemplate: TemplateRef<any>;
    itemTitleTemplate: TemplateRef<any>;
    selectedByDefault: boolean;
    showNewFieldValues: boolean;
    viewItems: QueryList<SkyLinkRecordsItemDiffComponent>;
    constructor(state: SkyLinkRecordsState, dispatcher: SkyLinkRecordsStateDispatcher);
    ngAfterContentInit(): void;
    readonly updatedFieldsTotal: Observable<number>;
    link(): void;
    unlink(): void;
    create(): void;
    edit(): void;
    cancelEdit(): void;
}
