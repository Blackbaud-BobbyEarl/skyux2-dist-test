import { SkyGridColumnModel } from '../../../grid';
export declare class ListViewGridColumnsLoadAction {
    columns: Array<SkyGridColumnModel>;
    refresh: boolean;
    constructor(columns: Array<SkyGridColumnModel>, refresh?: boolean);
}
