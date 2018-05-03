import { AfterContentInit, ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import 'rxjs/add/observable/fromEvent';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
import { SkyDropdownMenuChange, SkyDropdownMessage } from '../dropdown';
import { SkyAutocompleteSearchFunction, SkyAutocompleteSearchFunctionFilter, SkyAutocompleteSelectionChange } from './types';
import { SkyAutocompleteAdapterService } from './autocomplete-adapter.service';
export declare class SkyAutocompleteComponent implements OnInit, OnDestroy, AfterContentInit {
    private adapter;
    private changeDetector;
    private elementRef;
    data: any[];
    descriptorProperty: string;
    propertiesToSearch: string[];
    search: SkyAutocompleteSearchFunction;
    searchResultTemplate: TemplateRef<any>;
    searchTextMinimumCharacters: number;
    searchFilters: SkyAutocompleteSearchFunctionFilter[];
    searchResultsLimit: number;
    readonly selectionChange: EventEmitter<SkyAutocompleteSelectionChange>;
    readonly dropdownController: Subject<SkyDropdownMessage>;
    readonly searchResults: any[];
    readonly highlightText: string;
    private defaultSearchResultTemplate;
    private inputDirective;
    private ngUnsubscribe;
    private isMouseEnter;
    private searchResultsIndex;
    private searchText;
    private _data;
    private _descriptorProperty;
    private _dropdownController;
    private _highlightText;
    private _propertiesToSearch;
    private _search;
    private _searchResults;
    private _searchResultTemplate;
    private _searchTextMinimumCharacters;
    private _selectionChange;
    constructor(adapter: SkyAutocompleteAdapterService, changeDetector: ChangeDetectorRef, elementRef: ElementRef);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    onMenuChanges(change: SkyDropdownMenuChange): void;
    private handleKeyDown(event);
    private searchTextChanged(searchText);
    private performSearch();
    private selectActiveSearchResult();
    private closeDropdown();
    private sendDropdownMessage(type);
    private hasSearchResults();
}