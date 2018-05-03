export declare class ListSearchSetFunctionsAction {
    functions: Array<(data: any, searchText: string) => boolean>;
    constructor(functions?: Array<(data: any, searchText: string) => boolean>);
}
