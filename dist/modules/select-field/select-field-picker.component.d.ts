import { AfterContentInit, ElementRef, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import { ListItemModel } from '../list/state';
import { SkyListFilterInlineModel } from '../list-filters/list-filter-inline.model';
import { SkyModalInstance } from '../modal';
import { SkyWindowRefService } from '../window';
import { SkySelectFieldSelectMode } from './types';
import { SkySelectFieldPickerContext } from './select-field-picker-context';
export declare class SkySelectFieldPickerComponent implements OnInit, AfterContentInit {
    private context;
    private instance;
    private elementRef;
    private windowRef;
    categories: string[];
    data: Observable<any>;
    selectMode: SkySelectFieldSelectMode;
    headingText: string;
    readonly defaultCategory: string;
    selectedCategory: string;
    selectedIds: any[];
    private listViewChecklist;
    constructor(context: SkySelectFieldPickerContext, instance: SkyModalInstance, elementRef: ElementRef, windowRef: SkyWindowRefService);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    save(): void;
    close(): void;
    filterByCategory(model: ListItemModel, category: string): boolean;
    onCategoryChange(change: SkyListFilterInlineModel, filter: any): void;
    onSelectedIdsChange(selectedMap: Map<string, boolean>): void;
    private assignCategories();
    private readonly latestData;
    private getSelectedIds();
}
