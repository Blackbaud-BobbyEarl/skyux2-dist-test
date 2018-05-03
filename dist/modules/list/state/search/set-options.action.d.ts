import { ListSearchSetSearchTextAction } from './set-search-text.action';
import { ListSearchSetFieldSelectorsAction } from './set-field-selectors.action';
import { ListSearchSetFunctionsAction } from './set-functions.action';
export declare class ListSearchSetOptionsAction {
    searchTextAction: ListSearchSetSearchTextAction;
    setFieldSelectorsAction: ListSearchSetFieldSelectorsAction;
    setFunctionsAction: ListSearchSetFunctionsAction;
    constructor(searchTextAction: ListSearchSetSearchTextAction, setFieldSelectorsAction: ListSearchSetFieldSelectorsAction, setFunctionsAction: ListSearchSetFunctionsAction);
}
