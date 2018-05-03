import { SkyConfirmConfig, SkyConfirmType, SkyConfirmButtonConfig } from './types';
export declare class SkyConfirmModalContext implements SkyConfirmConfig {
    message: string;
    buttons: SkyConfirmButtonConfig[];
    type: SkyConfirmType;
}
