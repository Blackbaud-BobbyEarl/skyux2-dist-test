import { ApplicationRef, ComponentFactoryResolver, Injector, Type } from '@angular/core';
import 'rxjs/add/operator/take';
import { SkyFlyoutAdapterService } from './flyout-adapter.service';
import { SkyFlyoutInstance } from './flyout-instance';
import { SkyFlyoutConfig } from './types';
export declare class SkyFlyoutService {
    private adapter;
    private appRef;
    private injector;
    private resolver;
    private host;
    private removeAfterClosed;
    constructor(adapter: SkyFlyoutAdapterService, appRef: ApplicationRef, injector: Injector, resolver: ComponentFactoryResolver);
    open<T>(component: Type<T>, config?: SkyFlyoutConfig): SkyFlyoutInstance<T>;
    close(): void;
    private createHostComponent();
    private removeHostComponent();
    private addListeners<T>(flyout);
}
