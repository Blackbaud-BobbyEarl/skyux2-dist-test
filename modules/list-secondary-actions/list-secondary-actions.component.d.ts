import { AfterViewInit, ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/distinctUntilChanged';
import { ListStateDispatcher } from '../list/state';
import { SkyListSecondaryActionsService } from './list-secondary-actions.service';
export declare class SkyListSecondaryActionsComponent implements OnInit, AfterViewInit, OnDestroy {
    private changeDetector;
    private dispatcher;
    private actionService;
    dropdownHidden: boolean;
    actions: any[];
    private secondaryActionsTemplate;
    private ngUnsubscribe;
    constructor(changeDetector: ChangeDetectorRef, dispatcher: ListStateDispatcher, actionService: SkyListSecondaryActionsService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
