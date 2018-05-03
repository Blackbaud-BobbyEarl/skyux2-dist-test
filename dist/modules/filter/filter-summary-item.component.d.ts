import { EventEmitter } from '@angular/core';
export declare class SkyFilterSummaryItemComponent {
    dismissible: boolean;
    dismiss: EventEmitter<void>;
    itemClick: EventEmitter<void>;
    onItemDismiss(): void;
    onItemClick(): void;
    onItemKeypress(): void;
}
