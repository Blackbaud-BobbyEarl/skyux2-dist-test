import { SkyModalService } from '../modal';
import { SkyConfirmConfig } from './types';
import { SkyConfirmInstance } from './confirm-instance';
export declare class SkyConfirmService {
    private modalService;
    constructor(modalService: SkyModalService);
    open(config: SkyConfirmConfig): SkyConfirmInstance;
}
