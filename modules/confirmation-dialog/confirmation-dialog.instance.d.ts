import { EventEmitter } from '@angular/core';
import { SkyConfirmationDialogConfig } from './confirmation-dialog-config';
import { SkyModalService } from '../modal/modal.service';
import { SkyModalInstance } from '../modal/modal-instance';
export declare class SkyConfirmationDialogInstance {
    closed: EventEmitter<string>;
    modalInstance: SkyModalInstance;
    open(modal: SkyModalService, config: SkyConfirmationDialogConfig): SkyConfirmationDialogInstance;
}
