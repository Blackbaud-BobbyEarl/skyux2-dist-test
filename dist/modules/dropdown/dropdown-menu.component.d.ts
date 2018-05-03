import { AfterContentInit, ChangeDetectorRef, EventEmitter, OnDestroy, QueryList } from '@angular/core';
import 'rxjs/add/operator/takeUntil';
import { SkyDropdownComponent } from './dropdown.component';
import { SkyDropdownItemComponent } from './dropdown-item.component';
import { SkyDropdownMenuChange } from './types';
export declare class SkyDropdownMenuComponent implements AfterContentInit, OnDestroy {
    private changeDetector;
    private dropdownComponent;
    useNativeFocus: boolean;
    menuChanges: EventEmitter<SkyDropdownMenuChange>;
    menuIndex: number;
    menuItems: QueryList<SkyDropdownItemComponent>;
    private ngUnsubscribe;
    private readonly hasFocusableItems;
    private _menuIndex;
    constructor(changeDetector: ChangeDetectorRef, dropdownComponent: SkyDropdownComponent);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    onClick(event: MouseEvent): void;
    onKeyDown(event: KeyboardEvent): void;
    focusFirstItem(): void;
    focusPreviousItem(): void;
    focusNextItem(): void;
    reset(): void;
    private resetItemsActiveState();
    private focusItem(item);
    private getItemByIndex(index);
}
