import { AfterContentInit } from '@angular/core';
import { SkyListSecondaryActionsService } from './list-secondary-actions.service';
export declare class SkyListSecondaryActionComponent implements AfterContentInit {
    private actionService;
    private templateRef;
    constructor(actionService: SkyListSecondaryActionsService);
    ngAfterContentInit(): void;
}
