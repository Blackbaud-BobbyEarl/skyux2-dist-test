import { ElementRef } from '@angular/core';
import { SkyAvatarSrc } from './avatar-src';
export declare class SkyAvatarAdapterService {
    private blobUrl;
    updateImage(elementRef: ElementRef, src: SkyAvatarSrc): void;
    destroy(): void;
    private createBlobUrl(src);
    private revokeBlobUrl();
}
