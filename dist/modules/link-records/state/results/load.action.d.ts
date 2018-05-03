import { SkyLinkRecordsResultModel } from './result.model';
export declare class SkyLinkRecordsResultsLoadAction {
    results: Array<SkyLinkRecordsResultModel>;
    refresh: boolean;
    constructor(results: Array<SkyLinkRecordsResultModel>, refresh?: boolean);
}
