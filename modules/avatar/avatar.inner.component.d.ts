import { AfterViewInit, ElementRef, OnDestroy } from '@angular/core';
import { SkyAvatarAdapterService } from './avatar-adapter.service';
import { SkyAvatarSrc } from './avatar-src';
export declare class SkyAvatarInnerComponent implements AfterViewInit, OnDestroy {
    private elementRef;
    private adapter;
    src: SkyAvatarSrc;
    name: string;
    private viewInitialized;
    private _src;
    private _name;
    constructor(elementRef: ElementRef, adapter: SkyAvatarAdapterService);
    readonly initials: string;
    readonly colorIndex: number;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    private updateImage();
}
