import { AfterContentInit, QueryList } from '@angular/core';
import { SkyRepeaterItemComponent } from './repeater-item.component';
import { SkyRepeaterService } from './repeater.service';
export declare class SkyRepeaterComponent implements AfterContentInit {
    private repeaterService;
    expandMode: string;
    items: QueryList<SkyRepeaterItemComponent>;
    private _expandMode;
    constructor(repeaterService: SkyRepeaterService);
    ngAfterContentInit(): void;
    private updateForExpandMode(itemAdded?);
}
