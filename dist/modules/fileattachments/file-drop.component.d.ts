import { EventEmitter, ElementRef } from '@angular/core';
import { SkyFileLink } from './file-link';
import { SkyFileDropChange } from './file-drop-change';
export declare class SkyFileDropComponent {
    filesChanged: EventEmitter<SkyFileDropChange>;
    linkChanged: EventEmitter<SkyFileLink>;
    minFileSize: number;
    maxFileSize: number;
    multiple: boolean;
    validateFn: Function;
    acceptedTypes: string;
    noClick: boolean;
    allowLinks: boolean;
    inputEl: ElementRef;
    rejectedOver: boolean;
    acceptedOver: boolean;
    linkUrl: string;
    private enterEventTarget;
    dropClicked(): void;
    fileChangeEvent(fileChangeEvent: any): void;
    fileDragEnter(dragEnterEvent: any): void;
    fileDragOver(dragOverEvent: any): void;
    fileDrop(dropEvent: any): void;
    fileDragLeave(dragLeaveEvent: any): void;
    addLinkEnter(event: KeyboardEvent): void;
    addLink(event: Event): void;
    private emitFileChangeEvent(totalFiles, rejectedFileArray, validFileArray);
    private filesRejected(file, validFileArray, rejectedFileArray, totalFiles);
    private loadFile(fileDrop, file, validFileArray, rejectedFileArray, totalFiles);
    private getMimeSubtype(type);
    private getMimeMainType(type);
    private fileTypeInArray(typeArray, fileType);
    private fileTypeRejected(fileType);
    private handleFiles(files);
    private verifyDropFiles(files);
}
