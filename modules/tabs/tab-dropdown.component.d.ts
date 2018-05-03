import { EventEmitter, QueryList } from '@angular/core';
import { SkyTabComponent } from './tab.component';
export declare class SkyTabDropdownComponent {
    tabs: QueryList<SkyTabComponent>;
    tabClick: EventEmitter<SkyTabComponent>;
    closeClick: EventEmitter<SkyTabComponent>;
    readonly activeTabHeading: string;
    selectTab(tab: SkyTabComponent): void;
    closeTab(tab: SkyTabComponent): void;
}
