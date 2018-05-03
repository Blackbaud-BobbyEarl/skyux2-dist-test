import { SkyRepeaterService } from './repeater.service';
import { SkyLogService } from '../log/log.service';
import { SkyCheckboxChange } from '../checkbox/checkbox.component';
export declare class SkyRepeaterItemComponent {
    private repeaterService;
    private logService;
    isExpanded: boolean;
    readonly isSelected: boolean;
    selectable: boolean;
    slideDirection: string;
    isCollapsible: boolean;
    private _isCollapsible;
    private _isExpanded;
    private _isSelected;
    constructor(repeaterService: SkyRepeaterService, logService: SkyLogService);
    headerClick(): void;
    chevronDirectionChange(direction: string): void;
    updateForExpanded(value: boolean, animate: boolean): void;
    updateIsSelected(value: SkyCheckboxChange): void;
    private slideForExpanded(animate);
}
