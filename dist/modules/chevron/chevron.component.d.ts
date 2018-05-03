import { EventEmitter } from '@angular/core';
export declare class SkyChevronComponent {
    directionChange: EventEmitter<string>;
    direction: string;
    disabled: boolean;
    chevronClick(): void;
}
