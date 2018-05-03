import { ComponentFactoryResolver, Injector, ViewContainerRef } from '@angular/core';
import { SkyModalAdapterService } from './modal-adapter.service';
import { SkyModalInstance } from './modal-instance';
import { SkyModalConfigurationInterface as IConfig } from './modal.interface';
export declare class SkyModalHostComponent {
    private resolver;
    private adapter;
    private injector;
    readonly modalOpen: boolean;
    readonly backdropZIndex: number;
    target: ViewContainerRef;
    constructor(resolver: ComponentFactoryResolver, adapter: SkyModalAdapterService, injector: Injector);
    open(modalInstance: SkyModalInstance, component: any, config?: IConfig): void;
}
