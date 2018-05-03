import { ElementRef, AfterViewInit } from '@angular/core';
import { SkyTextExpandRepeaterAdapterService } from './text-expand-repeater-adapter.service';
import { SkyResourcesService } from '../resources';
export declare class SkyTextExpandRepeaterComponent implements AfterViewInit {
    private resources;
    private elRef;
    private textExpandRepeaterAdapter;
    maxItems: number;
    data: Array<any>;
    buttonText: string;
    contentItems: Array<any>;
    expandable: boolean;
    private seeMoreText;
    private seeLessText;
    private isExpanded;
    private containerEl;
    private items;
    constructor(resources: SkyResourcesService, elRef: ElementRef, textExpandRepeaterAdapter: SkyTextExpandRepeaterAdapterService);
    ngAfterViewInit(): void;
    animationEnd(): void;
    repeaterExpand(): void;
    private setContainerMaxHeight();
    private animateRepeater(expanding);
    private setup(value);
}
