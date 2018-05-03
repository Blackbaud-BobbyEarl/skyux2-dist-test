import { EventEmitter, AfterContentInit, QueryList, OnDestroy } from '@angular/core';
import { SkyCardTitleComponent } from './card-title.component';
export declare class SkyCardComponent implements AfterContentInit, OnDestroy {
    size: string;
    selectable: boolean;
    selected: boolean;
    selectedChange: EventEmitter<boolean>;
    titleComponent: QueryList<SkyCardTitleComponent>;
    showTitle: boolean;
    private subscription;
    ngAfterContentInit(): void;
    contentClick(): void;
    ngOnDestroy(): void;
}
