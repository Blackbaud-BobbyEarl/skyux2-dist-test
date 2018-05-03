import { ListItemModel } from './item.model';
export declare class ListItemsLoadAction {
    items: Array<ListItemModel>;
    refresh: boolean;
    dataChanged: boolean;
    count: number;
    constructor(items: Array<ListItemModel>, refresh?: boolean, dataChanged?: boolean, count?: number);
}
