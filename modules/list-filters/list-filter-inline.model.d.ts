import { ListItemModel } from '../list/state/items/item.model';
import { EventEmitter, TemplateRef } from '@angular/core';
export declare class SkyListFilterInlineModel {
    name: string;
    value: any;
    defaultValue: any;
    filterFunction: (item: ListItemModel, filter: any) => boolean;
    onChange: EventEmitter<any>;
    template: TemplateRef<any>;
    constructor(data?: any);
    changed(value: any): void;
}
