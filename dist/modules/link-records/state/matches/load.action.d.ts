import { SkyLinkRecordsMatchModel } from './match.model';
export declare class SkyLinkRecordsMatchesLoadAction {
    matches: Array<SkyLinkRecordsMatchModel>;
    refresh: boolean;
    constructor(matches: Array<SkyLinkRecordsMatchModel>, refresh?: boolean);
}
