import { EventEmitter } from '@angular/core';
export declare class SkyModalHostService {
    private fullPage;
    static readonly openModalCount: number;
    static readonly fullPageModalCount: number;
    private static readonly BASE_Z_INDEX;
    static readonly backdropZIndex: number;
    static readonly topModal: SkyModalHostService;
    private static modalHosts;
    close: EventEmitter<void>;
    openHelp: EventEmitter<any>;
    constructor(fullPage: boolean);
    getModalZIndex(): number;
    onClose(): void;
    onOpenHelp(helpKey?: string): void;
    destroy(): void;
}
