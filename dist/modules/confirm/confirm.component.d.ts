import { OnInit } from '@angular/core';
import { SkyModalInstance } from '../modal';
import { SkyConfirmButton } from './types';
import { SkyConfirmModalContext } from './confirm-modal-context';
export declare class SkyConfirmComponent implements OnInit {
    private config;
    private modal;
    buttons: SkyConfirmButton[];
    message: string;
    constructor(config: SkyConfirmModalContext, modal: SkyModalInstance);
    ngOnInit(): void;
    close(button: SkyConfirmButton): void;
    private getPresetButtons();
    private getCustomButtons(buttonConfig);
}
