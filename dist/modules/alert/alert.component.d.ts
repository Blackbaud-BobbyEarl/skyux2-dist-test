import { EventEmitter } from '@angular/core';
export declare class SkyAlertComponent {
    alertType: string;
    closeable: boolean;
    closed: boolean;
    closedChange: EventEmitter<boolean>;
    private _alertType;
    close(): void;
}
