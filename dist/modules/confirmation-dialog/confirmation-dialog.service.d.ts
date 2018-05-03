import { SkyConfirmationDialogConfig } from './confirmation-dialog-config';
import { SkyConfirmationDialogInstance } from './confirmation-dialog.instance';
import { SkyModalService } from '../modal/modal.service';
export declare class SkyConfirmationDialogService {
    private modal;
    constructor(modal: SkyModalService);
    open(config: SkyConfirmationDialogConfig): SkyConfirmationDialogInstance;
}
