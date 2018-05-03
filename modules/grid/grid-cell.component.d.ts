import { OnInit } from '@angular/core';
import { ListItemModel } from '../list/state/items/item.model';
export declare class SkyGridCellComponent implements OnInit {
    item: ListItemModel;
    columnId: string;
    private template;
    private fieldSelector;
    private container;
    ngOnInit(): void;
    readonly row: any;
    readonly value: any;
}
