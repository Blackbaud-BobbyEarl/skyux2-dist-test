import { EventEmitter } from '@angular/core';
import { SkyRepeaterItemComponent } from './repeater-item.component';
export declare class SkyRepeaterService {
    itemCollapseStateChange: EventEmitter<SkyRepeaterItemComponent>;
    onItemCollapseStateChange(item: SkyRepeaterItemComponent): void;
}
