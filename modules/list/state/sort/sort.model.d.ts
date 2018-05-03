import { ListSortLabelModel } from './label.model';
import { ListSortFieldSelectorModel } from './field-selector.model';
export declare class ListSortModel {
    available: Array<ListSortLabelModel>;
    global: Array<ListSortLabelModel>;
    fieldSelectors: Array<ListSortFieldSelectorModel>;
    constructor(data?: any);
}
