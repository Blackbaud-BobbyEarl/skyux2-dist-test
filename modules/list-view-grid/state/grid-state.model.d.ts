import { AsyncList } from 'microedge-rxstate/dist';
import { SkyGridColumnModel } from '../../grid';
export declare class GridStateModel {
    columns: AsyncList<SkyGridColumnModel>;
    displayedColumns: AsyncList<SkyGridColumnModel>;
}
