import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import 'rxjs/add/operator/take';
import { SkyFlyoutAdapterService } from './flyout-adapter.service';
import { SkyFlyoutComponent } from './flyout.component';
import { SkyFlyoutMessageType } from './types';
var SkyFlyoutService = (function () {
    function SkyFlyoutService(adapter, appRef, injector, resolver) {
        this.adapter = adapter;
        this.appRef = appRef;
        this.injector = injector;
        this.resolver = resolver;
        this.removeAfterClosed = false;
    }
    SkyFlyoutService.prototype.open = function (component, config) {
        if (!this.host) {
            this.host = this.createHostComponent();
        }
        var flyout = this.host.instance.attach(component, config);
        this.addListeners(flyout);
        return flyout;
    };
    SkyFlyoutService.prototype.close = function () {
        if (this.host) {
            this.removeAfterClosed = true;
            this.host.instance.messageStream.next({
                type: SkyFlyoutMessageType.Close
            });
        }
    };
    SkyFlyoutService.prototype.createHostComponent = function () {
        var componentRef = this.resolver
            .resolveComponentFactory(SkyFlyoutComponent)
            .create(this.injector);
        var domElem = componentRef.hostView.rootNodes[0];
        this.appRef.attachView(componentRef.hostView);
        this.adapter.appendToBody(domElem);
        return componentRef;
    };
    SkyFlyoutService.prototype.removeHostComponent = function () {
        if (this.host) {
            this.appRef.detachView(this.host.hostView);
            this.host.destroy();
            this.host = undefined;
        }
        this.adapter.removeHostElement();
    };
    SkyFlyoutService.prototype.addListeners = function (flyout) {
        var _this = this;
        this.removeAfterClosed = false;
        this.host.instance.messageStream
            .take(1)
            .subscribe(function (message) {
            if (message.type === SkyFlyoutMessageType.Close) {
                _this.removeAfterClosed = true;
            }
        });
        flyout.closed.take(1).subscribe(function () {
            if (_this.removeAfterClosed) {
                _this.removeHostComponent();
            }
        });
    };
    return SkyFlyoutService;
}());
export { SkyFlyoutService };
SkyFlyoutService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SkyFlyoutService.ctorParameters = function () { return [
    { type: SkyFlyoutAdapterService, },
    { type: ApplicationRef, },
    { type: Injector, },
    { type: ComponentFactoryResolver, },
]; };
//# sourceMappingURL=flyout.service.js.map