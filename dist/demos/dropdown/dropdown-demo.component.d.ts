import { ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { SkyDropdownMessage, SkyDropdownMenuChange } from '../../core';
export declare class SkyDropdownDemoComponent {
    private changeDetector;
    dropdownController: Subject<SkyDropdownMessage>;
    items: any[];
    constructor(changeDetector: ChangeDetectorRef);
    optionClicked(option: number): void;
    openDropdown(): void;
    closeDropdown(): void;
    focusTriggerButton(): void;
    focusNextItem(): void;
    focusPreviousItem(): void;
    changeItems(): void;
    onMenuChanges(change: SkyDropdownMenuChange): void;
    private sendMessage(type);
}
