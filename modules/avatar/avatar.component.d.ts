import { EventEmitter } from '@angular/core';
import { SkyFileDropChange, SkyFileItem } from '../fileattachments';
import { SkyAvatarSrc } from './avatar-src';
import { SkyErrorModalService } from '../error/error-modal.service';
export declare class SkyAvatarComponent {
    private errorService;
    src: SkyAvatarSrc;
    name: string;
    canChange: boolean;
    avatarChanged: EventEmitter<SkyFileItem>;
    maxFileSize: number;
    private _canChange;
    private _src;
    private _name;
    constructor(errorService: SkyErrorModalService);
    photoDrop(result: SkyFileDropChange): void;
    private handleError(rejectedFiles);
    private maxFileSizeText();
    private openErrorModal(title, description);
}
