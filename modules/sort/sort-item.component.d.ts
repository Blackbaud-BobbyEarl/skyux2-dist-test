import { EventEmitter, OnInit, SimpleChanges, OnChanges, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { SkySortService } from './sort.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
export declare class SkySortItemComponent implements OnInit, OnChanges, OnDestroy {
    private sortService;
    private detector;
    active: boolean;
    itemSelect: EventEmitter<any>;
    isSelected: BehaviorSubject<boolean>;
    private subscription;
    private sortItemId;
    constructor(sortService: SkySortService, detector: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    itemClicked(): void;
    ngOnDestroy(): void;
}
