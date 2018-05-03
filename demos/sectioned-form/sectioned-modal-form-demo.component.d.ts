import { AfterContentChecked } from '@angular/core';
import { SkyModalInstance, SkySectionedFormComponent } from '../../core';
export declare class SkySectionedModalFormDemoComponent implements AfterContentChecked {
    instance: SkyModalInstance;
    sectionedFormComponent: SkySectionedFormComponent;
    activeIndexDisplay: number;
    activeTab: boolean;
    private _activeIndex;
    constructor(instance: SkyModalInstance);
    ngAfterContentChecked(): void;
    updateIndex(newIndex: number): void;
    tabsHidden(): boolean;
    showTabs(): void;
}
