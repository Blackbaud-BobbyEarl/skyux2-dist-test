import { TemplateRef, ViewContainerRef, OnInit } from '@angular/core';
import { SkyLinkRecordsMatchModel } from './state/matches/match.model';
import { SkyLinkRecordsApi } from './link-records-api';
export declare class SkyLinkRecordsRendererComponent implements OnInit {
    api: SkyLinkRecordsApi;
    item: any;
    match: SkyLinkRecordsMatchModel;
    fields: Array<any>;
    template: TemplateRef<any>;
    container: ViewContainerRef;
    constructor(api: SkyLinkRecordsApi);
    ngOnInit(): void;
}
