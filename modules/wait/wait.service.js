import { ComponentFactoryResolver, ApplicationRef, Injectable } from '@angular/core';
import { SkyWaitPageComponent } from './wait-page.component';
import { SkyWaitPageAdapterService } from './wait-page-adapter.service';
var SkyWaitService = (function () {
    function SkyWaitService(resolver, appRef, waitAdapter) {
        this.resolver = resolver;
        this.appRef = appRef;
        this.waitAdapter = waitAdapter;
    }
    SkyWaitService.prototype.beginBlockingPageWait = function () {
        this.beginPageWait(true);
    };
    SkyWaitService.prototype.beginNonBlockingPageWait = function () {
        this.beginPageWait(false);
    };
    SkyWaitService.prototype.endBlockingPageWait = function () {
        this.endPageWait(true);
    };
    SkyWaitService.prototype.endNonBlockingPageWait = function () {
        this.endPageWait(false);
    };
    SkyWaitService.prototype.clearAllPageWaits = function () {
        this.clearPageWait(true);
        this.clearPageWait(false);
    };
    SkyWaitService.prototype.dispose = function () {
        if (SkyWaitService.waitComponent) {
            SkyWaitService.waitComponent = undefined;
            SkyWaitService.pageWaitBlockingCount = 0;
            SkyWaitService.pageWaitNonBlockingCount = 0;
            this.waitAdapter.removePageWaitEl();
        }
    };
    SkyWaitService.prototype.setWaitComponentProperties = function (isBlocking) {
        if (isBlocking) {
            SkyWaitService.waitComponent.hasBlockingWait = true;
            SkyWaitService.pageWaitBlockingCount++;
        }
        else {
            SkyWaitService.waitComponent.hasNonBlockingWait = true;
            SkyWaitService.pageWaitNonBlockingCount++;
        }
    };
    SkyWaitService.prototype.beginPageWait = function (isBlocking) {
        var _this = this;
        if (!SkyWaitService.waitComponent) {
            /*
                Dynamic component creation needs to be done in a timeout to prevent ApplicationRef from
                crashing when wait service is called in Angular lifecycle functions.
            */
            setTimeout(function () {
                var factory = _this.resolver.resolveComponentFactory(SkyWaitPageComponent);
                _this.waitAdapter.addPageWaitEl();
                var cmpRef = _this.appRef.bootstrap(factory);
                SkyWaitService.waitComponent = cmpRef.instance;
                _this.setWaitComponentProperties(isBlocking);
            });
        }
        else {
            this.setWaitComponentProperties(isBlocking);
        }
    };
    SkyWaitService.prototype.endPageWait = function (isBlocking) {
        if (SkyWaitService.waitComponent) {
            if (isBlocking) {
                if (SkyWaitService.pageWaitBlockingCount > 0) {
                    SkyWaitService.pageWaitBlockingCount--;
                }
                if (SkyWaitService.pageWaitBlockingCount < 1) {
                    SkyWaitService.waitComponent.hasBlockingWait = false;
                }
            }
            else {
                if (SkyWaitService.pageWaitNonBlockingCount > 0) {
                    SkyWaitService.pageWaitNonBlockingCount--;
                }
                if (SkyWaitService.pageWaitNonBlockingCount < 1) {
                    SkyWaitService.waitComponent.hasNonBlockingWait = false;
                }
            }
        }
    };
    SkyWaitService.prototype.clearPageWait = function (isBlocking) {
        if (SkyWaitService.waitComponent) {
            if (isBlocking) {
                SkyWaitService.pageWaitBlockingCount = 0;
                SkyWaitService.waitComponent.hasBlockingWait = false;
            }
            else {
                SkyWaitService.pageWaitNonBlockingCount = 0;
                SkyWaitService.waitComponent.hasNonBlockingWait = false;
            }
        }
    };
    return SkyWaitService;
}());
export { SkyWaitService };
SkyWaitService.pageWaitBlockingCount = 0;
SkyWaitService.pageWaitNonBlockingCount = 0;
SkyWaitService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SkyWaitService.ctorParameters = function () { return [
    { type: ComponentFactoryResolver, },
    { type: ApplicationRef, },
    { type: SkyWaitPageAdapterService, },
]; };
//# sourceMappingURL=wait.service.js.map