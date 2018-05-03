import { Component, EventEmitter, Input, Output, ChangeDetectorRef } from '@angular/core';
import { SkyTabsetService } from './tabset.service';
var SkyTabComponent = (function () {
    function SkyTabComponent(tabsetService, ref) {
        this.tabsetService = tabsetService;
        this.ref = ref;
        this.close = new EventEmitter();
    }
    Object.defineProperty(SkyTabComponent.prototype, "allowClose", {
        get: function () {
            return this.close.observers.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    SkyTabComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.tabsetService.addTab(_this);
            _this.tabsetService.activeIndex.subscribe(function (activeIndex) {
                _this.active = _this.tabIndex === activeIndex;
                _this.ref.markForCheck();
            });
            if (_this.active) {
                _this.tabsetService.activateTab(_this);
            }
        });
    };
    SkyTabComponent.prototype.ngOnChanges = function (changes) {
        /* istanbul ignore else */
        /* sanity check */
        if (changes) {
            var activeChange = changes['active'];
            if (activeChange
                && this.tabIndex !== undefined
                && activeChange.previousValue !== activeChange.currentValue
                && this.active) {
                this.tabsetService.activateTab(this);
            }
        }
    };
    SkyTabComponent.prototype.ngOnDestroy = function () {
        this.tabsetService.destroyTab(this);
    };
    return SkyTabComponent;
}());
export { SkyTabComponent };
SkyTabComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-tab',
                template: "<div class=\"sky-tab\" [hidden]=\"!active\" role=\"tabpanel\">\n  <ng-content></ng-content>\n</div>\n"
            },] },
];
/** @nocollapse */
SkyTabComponent.ctorParameters = function () { return [
    { type: SkyTabsetService, },
    { type: ChangeDetectorRef, },
]; };
SkyTabComponent.propDecorators = {
    'tabHeading': [{ type: Input },],
    'tabHeaderCount': [{ type: Input },],
    'disabled': [{ type: Input },],
    'tabIndex': [{ type: Input },],
    'active': [{ type: Input },],
    'close': [{ type: Output },],
};
//# sourceMappingURL=tab.component.js.map