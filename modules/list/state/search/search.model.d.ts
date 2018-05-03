export declare class ListSearchModel {
    searchText: string;
    functions: Array<(data: any, searchText: string) => boolean>;
    fieldSelectors: Array<string>;
    constructor(data?: any);
}
