import { EventEmitter, OnChanges, SimpleChanges, TemplateRef } from '@angular/core';
import { SkyGridColumnHeadingModelChange } from './types';
export declare class SkyGridColumnComponent implements OnChanges {
    id: string;
    heading: string;
    width: number;
    hidden: boolean;
    locked: boolean;
    field: string;
    type: string;
    description: string;
    isSortable: boolean;
    searchFunction: (value: any, searchText: string) => boolean;
    templateInput: TemplateRef<any>;
    headingChanges: EventEmitter<string>;
    headingModelChanges: EventEmitter<SkyGridColumnHeadingModelChange>;
    private templates;
    ngOnChanges(changes: SimpleChanges): void;
    readonly template: TemplateRef<any>;
    private search(value, searchText);
}
