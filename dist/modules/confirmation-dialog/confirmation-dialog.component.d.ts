import { OnInit } from '@angular/core';
import { SkyConfirmationDialogConfig } from './confirmation-dialog-config';
import { SkyConfirmationDialogButton } from './confirmation-dialog-button';
import { SkyModalInstance } from '../modal/modal-instance';
export declare class SkyConfirmationDialogComponent implements OnInit {
    context: SkyConfirmationDialogConfig;
    instance: SkyModalInstance;
    buttons: Array<SkyConfirmationDialogButton>;
    constructor(context: SkyConfirmationDialogConfig, instance: SkyModalInstance);
    ngOnInit(): void;
    private createButtons();
    private getDefaultButtons();
    private overrideButtonConfig();
}
