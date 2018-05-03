import { EventEmitter } from '@angular/core';
export declare class SkyTabButtonComponent {
    tabHeading: string;
    tabHeaderCount: number;
    tabStyle: string;
    active: boolean;
    allowClose: boolean;
    disabled: boolean;
    tabClick: EventEmitter<any>;
    closeClick: EventEmitter<any>;
    doTabClick(): void;
    doCloseClick(): void;
    keyDownFunction(event: any): void;
}
