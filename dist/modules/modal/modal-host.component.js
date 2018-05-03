import { Component, ComponentFactoryResolver, Injector, ReflectiveInjector, ViewChild, ViewContainerRef } from '@angular/core';
import { SkyModalAdapterService } from './modal-adapter.service';
import { SkyModalHostService } from './modal-host.service';
import { SkyModalConfiguration } from './modal-configuration';
var SkyModalHostComponent = (function () {
    function SkyModalHostComponent(resolver, adapter, injector) {
        this.resolver = resolver;
        this.adapter = adapter;
        this.injector = injector;
    }
    Object.defineProperty(SkyModalHostComponent.prototype, "modalOpen", {
        get: function () {
            return SkyModalHostService.openModalCount > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyModalHostComponent.prototype, "backdropZIndex", {
        get: function () {
            return SkyModalHostService.backdropZIndex;
        },
        enumerable: true,
        configurable: true
    });
    SkyModalHostComponent.prototype.open = function (modalInstance, component, config) {
        var params = Object.assign({}, config);
        var factory = this.resolver.resolveComponentFactory(component);
        var hostService = new SkyModalHostService(params.fullPage);
        var adapter = this.adapter;
        var modalOpener = adapter.getModalOpener();
        params.providers.push({
            provide: SkyModalHostService,
            useValue: hostService
        });
        params.providers.push({
            provide: SkyModalConfiguration,
            useValue: params
        });
        adapter.setPageScroll(SkyModalHostService.openModalCount > 0);
        adapter.toggleFullPageModalClass(SkyModalHostService.fullPageModalCount > 0);
        var providers = params.providers /* istanbul ignore next */ || [];
        var resolvedProviders = ReflectiveInjector.resolve(providers);
        var injector = ReflectiveInjector.fromResolvedProviders(resolvedProviders, this.injector);
        var modalComponentRef = this.target.createComponent(factory, undefined, injector);
        modalInstance.componentInstance = modalComponentRef.instance;
        function closeModal() {
            hostService.destroy();
            adapter.setPageScroll(SkyModalHostService.openModalCount > 0);
            adapter.toggleFullPageModalClass(SkyModalHostService.fullPageModalCount > 0);
            /* istanbul ignore else */
            /* sanity check */
            if (modalOpener && modalOpener.focus) {
                modalOpener.focus();
            }
            modalComponentRef.destroy();
        }
        hostService.openHelp.subscribe(function (helpKey) {
            modalInstance.openHelp(helpKey);
        });
        hostService.close.subscribe(function () {
            modalInstance.close();
        });
        modalInstance.closed.subscribe(function () {
            closeModal();
        });
    };
    return SkyModalHostComponent;
}());
export { SkyModalHostComponent };
SkyModalHostComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-modal-host',
                template: "<div\n    class=\"sky-modal-host-backdrop\"\n    [hidden]=\"!modalOpen\"\n    [ngStyle]=\"{\n      zIndex: backdropZIndex\n    }\"\n>\n</div>\n<div #target></div>\n",
                styles: [".sky-modal-host-backdrop {\n  background-color: rgba(0, 0, 0, 0.2);\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n"],
                viewProviders: [SkyModalAdapterService]
            },] },
];
/** @nocollapse */
SkyModalHostComponent.ctorParameters = function () { return [
    { type: ComponentFactoryResolver, },
    { type: SkyModalAdapterService, },
    { type: Injector, },
]; };
SkyModalHostComponent.propDecorators = {
    'target': [{ type: ViewChild, args: ['target', { read: ViewContainerRef },] },],
};
//# sourceMappingURL=modal-host.component.js.map