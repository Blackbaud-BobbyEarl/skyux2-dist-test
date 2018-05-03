import { SkyModalService } from '../../core';
export declare class SkyFilterDemoComponent {
    private modal;
    appliedFilters: any[];
    items: any[];
    filteredItems: any[];
    constructor(modal: SkyModalService);
    filterButtonClicked(): void;
    onDismiss(index: number): void;
    private orangeFilterFailed(filter, item);
    private fruitTypeFilterFailed(filter, item);
    private itemIsShown(filters, item);
    private filterItems(items, filters);
}
