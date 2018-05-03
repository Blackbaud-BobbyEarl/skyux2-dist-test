import { TemplateRef } from '@angular/core';
import { SkyAutocompleteSearchFunction, SkyAutocompleteSearchFunctionFilter } from '../autocomplete';
export declare class SkyLookupAutocompleteAdapter {
    data: any[];
    descriptorProperty: string;
    propertiesToSearch: string[];
    search: SkyAutocompleteSearchFunction;
    searchResultTemplate: TemplateRef<any>;
    searchTextMinimumCharacters: number;
    searchFilters: SkyAutocompleteSearchFunctionFilter[];
    searchResultsLimit: number;
}
