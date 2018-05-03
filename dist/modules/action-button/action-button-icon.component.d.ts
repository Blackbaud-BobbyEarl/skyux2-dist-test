import { OnDestroy } from '@angular/core';
import { SkyMediaQueryService } from '../media-queries';
export declare class SkyActionButtonIconComponent implements OnDestroy {
    private mediaQueryService;
    iconType: string;
    fontSizeClass: string;
    private subscription;
    constructor(mediaQueryService: SkyMediaQueryService);
    ngOnDestroy(): void;
}
