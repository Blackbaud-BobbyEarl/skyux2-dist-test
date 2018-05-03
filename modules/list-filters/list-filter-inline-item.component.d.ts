import { TemplateRef, OnInit, EventEmitter } from '@angular/core';
import { ListItemModel } from '../list/state';
export declare class SkyListFilterInlineItemComponent implements OnInit {
    name: string;
    value: any;
    defaultValue: any;
    filterFunction: (item: ListItemModel, filter: any) => boolean;
    templateInput: TemplateRef<any>;
    onChange: EventEmitter<any>;
    private templates;
    ngOnInit(): void;
    readonly template: TemplateRef<any>;
}
