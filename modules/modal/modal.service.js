import { ApplicationRef, ComponentFactoryResolver, Injectable } from '@angular/core';
import { SkyModalInstance } from './modal-instance';
import { SkyModalHostComponent } from './modal-host.component';
import { SkyModalAdapterService } from './modal-adapter.service';
var SkyModalService = (function () {
    function SkyModalService(resolver, appRef, adapter) {
        var _this = this;
        this.resolver = resolver;
        this.appRef = appRef;
        this.adapter = adapter;
        /*
          This timeout is needed because you can run into errors like 'ApplicationRef.tick is called
          recursively' when the modal service is injected into a component hidden by an *ngIf.
        */
        setTimeout(function () {
            _this.createHostComponent();
        });
    }
    // Open Method
    SkyModalService.prototype.open = function () {
        var modalInstance = new SkyModalInstance();
        this.createHostComponent();
        var providersOrConfig = arguments[1];
        var params = this.getConfigFromParameter(providersOrConfig);
        var component = arguments[0];
        params.providers.push({
            provide: SkyModalInstance,
            useValue: modalInstance
        });
        SkyModalService.hostComponent.open(modalInstance, component, params);
        return modalInstance;
    };
    SkyModalService.prototype.dispose = function () {
        /* istanbul ignore else */
        /* sanity check */
        if (SkyModalService.hostComponent) {
            SkyModalService.hostComponent = undefined;
            this.adapter.removeHostEl();
        }
    };
    SkyModalService.prototype.getConfigFromParameter = function (providersOrConfig) {
        var defaultParams = {
            'providers': [],
            'fullPage': false,
            'size': 'medium',
            'tiledBody': false
        };
        var params = undefined;
        var method = undefined;
        // Object Literal Lookup for backwards compatability.
        method = {
            'providers?': Object.assign({}, defaultParams, { 'providers': providersOrConfig }),
            'config': Object.assign({}, defaultParams, providersOrConfig)
        };
        if (Array.isArray(providersOrConfig) === true) {
            params = method['providers?'];
        }
        else {
            params = method['config'];
        }
        return params;
    };
    SkyModalService.prototype.createHostComponent = function () {
        if (!SkyModalService.hostComponent) {
            var factory = this.resolver.resolveComponentFactory(SkyModalHostComponent);
            this.adapter.addHostEl();
            var cmpRef = this.appRef.bootstrap(factory);
            SkyModalService.hostComponent = cmpRef.instance;
        }
    };
    return SkyModalService;
}());
export { SkyModalService };
SkyModalService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SkyModalService.ctorParameters = function () { return [
    { type: ComponentFactoryResolver, },
    { type: ApplicationRef, },
    { type: SkyModalAdapterService, },
]; };
//# sourceMappingURL=modal.service.js.map