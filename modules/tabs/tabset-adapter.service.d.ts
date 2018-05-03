import { ElementRef, EventEmitter } from '@angular/core';
export declare class SkyTabsetAdapterService {
    overflowChange: EventEmitter<boolean>;
    currentOverflow: boolean;
    private el;
    private tabsEl;
    private bntsEl;
    init(elRef: ElementRef): void;
    detectOverflow(): void;
}
