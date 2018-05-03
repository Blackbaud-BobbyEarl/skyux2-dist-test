import { ApplicationRef, ComponentFactoryResolver } from '@angular/core';
import { SkyModalInstance } from './modal-instance';
import { SkyModalAdapterService } from './modal-adapter.service';
import { SkyModalConfigurationInterface as IConfig } from './modal.interface';
export declare class SkyModalService {
    private resolver;
    private appRef;
    private adapter;
    private static hostComponent;
    constructor(resolver: ComponentFactoryResolver, appRef: ApplicationRef, adapter: SkyModalAdapterService);
    open(component: any, providers?: any[]): SkyModalInstance;
    open(component: any, config?: IConfig): SkyModalInstance;
    dispose(): void;
    private getConfigFromParameter(providersOrConfig);
    private createHostComponent();
}
