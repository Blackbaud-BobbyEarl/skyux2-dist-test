import { ChangeDetectorRef, ComponentFactoryResolver, Injector, OnDestroy, OnInit, Type } from '@angular/core';
import { AnimationEvent } from '@angular/animations';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
import { SkyFlyoutAdapterService } from './flyout-adapter.service';
import { SkyFlyoutInstance } from './flyout-instance';
import { SkyFlyoutConfig, SkyFlyoutMessage } from './types';
export declare class SkyFlyoutComponent implements OnDestroy, OnInit {
    private adapter;
    private changeDetector;
    private injector;
    private resolver;
    config: SkyFlyoutConfig;
    flyoutState: string;
    isOpen: boolean;
    isOpening: boolean;
    flyoutWidth: number;
    isDragging: boolean;
    private xCoord;
    readonly messageStream: Subject<SkyFlyoutMessage>;
    private target;
    private flyoutHeader;
    private flyoutInstance;
    private ngUnsubscribe;
    private _messageStream;
    constructor(adapter: SkyFlyoutAdapterService, changeDetector: ChangeDetectorRef, injector: Injector, resolver: ComponentFactoryResolver);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onCloseButtonClick(): void;
    attach<T>(component: Type<T>, config: SkyFlyoutConfig): SkyFlyoutInstance<T>;
    getAnimationState(): string;
    animationDone(event: AnimationEvent): void;
    onMouseDown(event: MouseEvent): void;
    onMouseMove(event: MouseEvent): void;
    onHandleRelease(event: MouseEvent): void;
    private open();
    private close();
    private createFlyoutInstance<T>(component);
    private handleIncomingMessages(message);
    private notifyClosed();
    private cleanTemplate();
}
