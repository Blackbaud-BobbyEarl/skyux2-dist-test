import { SkyFileItem, SkyFileDropChange, SkyFileLink } from '../../core';
export declare class SkyFileAttachmentDemoComponent {
    filesToUpload: SkyFileItem[];
    allItems: (SkyFileItem | SkyFileLink)[];
    linksToUpload: SkyFileLink[];
    rejectedFiles: SkyFileItem[];
    maxFileSize: number;
    acceptedTypes: string;
    constructor();
    filesUpdated(result: SkyFileDropChange): void;
    linkAdded(result: SkyFileLink): void;
    validateFile(file: SkyFileItem): string;
    deleteFile(file: SkyFileItem | SkyFileLink): void;
    private removeFromArray(items, obj);
}
