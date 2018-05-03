import { ErrorModalConfig } from './error-modal-config';
import { SkyModalService } from '../modal/modal.service';
export declare class SkyErrorModalService {
    private modal;
    constructor(modal: SkyModalService);
    open(config: ErrorModalConfig): void;
}
