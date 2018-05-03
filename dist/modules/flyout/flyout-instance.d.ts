import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { SkyFlyoutMessage } from './types';
export declare class SkyFlyoutInstance<T> {
    closed: EventEmitter<void>;
    componentInstance: T;
    isOpen: boolean;
    readonly hostController: Subject<SkyFlyoutMessage>;
    private _hostController;
    constructor();
    close(): void;
}
