export declare class SkyFilterInlineDemoComponent {
    filtersActive: boolean;
    showInlineFilters: boolean;
    fruitType: string;
    hideOrange: boolean;
    items: any[];
    filteredItems: any[];
    appliedFilters: any[];
    constructor();
    filterButtonClicked(): void;
    fruitTypeChange(newValue: string): void;
    hideOrangeChange(newValue: boolean): void;
    private setFilterActiveState();
    private orangeFilterFailed(filter, item);
    private fruitTypeFilterFailed(filter, item);
    private itemIsShown(filters, item);
    private filterItems(items, filters);
}
