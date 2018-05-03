import { DoCheck, KeyValueDiffers, EventEmitter } from '@angular/core';
import { SkyFileItem } from './file-item';
import { SkyFileLink } from './file-link';
export declare class SkyFileItemComponent implements DoCheck {
    private differs;
    fileItem: SkyFileItem | SkyFileLink;
    deleteFile: EventEmitter<SkyFileItem | SkyFileLink>;
    private otherCls;
    private differ;
    constructor(differs: KeyValueDiffers);
    ngDoCheck(): void;
    itemDelete(): void;
    isFile(): boolean;
    isImg(): boolean;
    private getFileExtensionUpper();
    private getFileTypeUpper();
}
