import { SkyLinkRecordsStateDispatcher } from './state';
export declare class SkyLinkRecordsApi {
    private dispatcher;
    constructor(dispatcher: SkyLinkRecordsStateDispatcher);
    addSelectedItem(key: string, item: any): void;
    removeSelectedItem(key: string): void;
}
