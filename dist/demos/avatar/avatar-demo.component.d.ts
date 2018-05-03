import { SkyFileItem } from '../../core';
export declare class SkyAvatarDemoComponent {
    name: string;
    showImage: boolean;
    avatarUrl: string | File;
    readonly src: string | File;
    updateSrc(fileItem: SkyFileItem): void;
}
