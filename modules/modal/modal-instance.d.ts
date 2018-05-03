import { EventEmitter } from '@angular/core';
import { SkyModalCloseArgs } from './modal-close-args';
export declare class SkyModalInstance {
    componentInstance: any;
    closed: EventEmitter<SkyModalCloseArgs>;
    helpOpened: EventEmitter<any>;
    close(result?: any, reason?: string): void;
    cancel(result?: any): void;
    save(result?: any): void;
    openHelp(helpKey?: string): void;
    private closeModal(type, result?);
}
