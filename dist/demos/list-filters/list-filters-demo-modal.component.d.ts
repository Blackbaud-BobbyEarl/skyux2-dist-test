import { SkyModalInstance } from '../../core';
import { SkyListFiltersModalDemoContext } from './list-filters-demo-modal-context';
export declare class SkyListFiltersModalDemoComponent {
    context: SkyListFiltersModalDemoContext;
    instance: SkyModalInstance;
    fruitType: string;
    hideOrange: boolean;
    headerText: string;
    constructor(context: SkyListFiltersModalDemoContext, instance: SkyModalInstance);
    applyFilters(): void;
    clearAllFilters(): void;
    cancel(): void;
    private fruitTypeFilterFunction(item, filterValue);
    private hideOrangeFilterFunction(item, filterValue);
    private getAppliedFiltersArray();
    private setFormFilters(appliedFilters);
}
