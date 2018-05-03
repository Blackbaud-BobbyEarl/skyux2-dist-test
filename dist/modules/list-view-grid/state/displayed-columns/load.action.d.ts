import { SkyGridColumnModel } from '../../../grid';
export declare class ListViewDisplayedGridColumnsLoadAction {
    columns: Array<SkyGridColumnModel>;
    refresh: boolean;
    constructor(columns: Array<SkyGridColumnModel>, refresh?: boolean);
}
