import { OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { SkyListSecondaryAction } from './list-secondary-action';
export declare class SkyListSecondaryActionsService implements OnDestroy {
    secondaryActionsCount: number;
    secondaryActionsSubject: BehaviorSubject<number>;
    actionsStream: BehaviorSubject<SkyListSecondaryAction[]>;
    private actions;
    addSecondaryAction(action: SkyListSecondaryAction): void;
    removeSecondaryAction(action: any): void;
    ngOnDestroy(): void;
}
