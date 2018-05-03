import { AfterContentChecked } from '@angular/core';
import { SkyModalService } from '../../core';
export declare class SkySectionedFormDemoComponent implements AfterContentChecked {
    private modal;
    activeIndexDisplay: number;
    private _activeIndex;
    constructor(modal: SkyModalService);
    openModal(): void;
    ngAfterContentChecked(): void;
    updateIndex(newIndex: number): void;
}
