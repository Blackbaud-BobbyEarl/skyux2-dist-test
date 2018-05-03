import { ListViewChecklistItemModel } from './item.model';
export declare class ListViewChecklistItemsLoadAction {
    items: Array<ListViewChecklistItemModel>;
    refresh: boolean;
    dataChanged: boolean;
    itemCount: number;
    constructor(items?: Array<ListViewChecklistItemModel>, refresh?: boolean, dataChanged?: boolean, itemCount?: number);
}
