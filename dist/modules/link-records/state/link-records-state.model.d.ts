import { AsyncList, AsyncItem } from 'microedge-rxstate/dist';
import { SkyLinkRecordsMatchModel } from './matches/match.model';
import { SkyLinkRecordsFieldModel } from './fields/field.model';
import { SkyLinkRecordsResultModel } from './results/result.model';
export declare class SkyLinkRecordsStateModel {
    matches: AsyncList<SkyLinkRecordsMatchModel>;
    fields: AsyncItem<{
        [key: string]: Array<SkyLinkRecordsFieldModel>;
    }>;
    results: AsyncList<SkyLinkRecordsResultModel>;
    selected: AsyncItem<{
        [key: string]: {
            [keyField: string]: boolean;
        };
    }>;
}
