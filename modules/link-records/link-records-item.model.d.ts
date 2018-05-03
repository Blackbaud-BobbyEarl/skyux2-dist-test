import { SkyLinkRecordsMatchModel } from './state/matches/match.model';
export declare class SkyLinkRecordsItemModel {
    key: string;
    status: string;
    item: any;
    match: SkyLinkRecordsMatchModel;
    matchFields: Array<any>;
    constructor(data?: any);
}
