import { SkyModalInstance } from '../../core';
import { SkyFilterDemoModalContext } from './filter-demo-modal-context';
export declare class SkyFilterDemoModalComponent {
    context: SkyFilterDemoModalContext;
    instance: SkyModalInstance;
    fruitType: string;
    hideOrange: boolean;
    constructor(context: SkyFilterDemoModalContext, instance: SkyModalInstance);
    applyFilters(): void;
    clearAllFilters(): void;
    cancel(): void;
    private getAppliedFiltersArray();
    private setFormFilters(appliedFilters);
}
