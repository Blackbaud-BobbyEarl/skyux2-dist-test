import { ListItemModel } from '../../../list/state/items/item.model';
export declare class ListFilterModel {
    name: string;
    label: string;
    dismissible: boolean;
    value: any;
    defaultValue: any;
    filterFunction: (item: ListItemModel, filter: any) => boolean;
    constructor(data?: any);
}
