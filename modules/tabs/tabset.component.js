import { Component, ContentChildren, ElementRef, EventEmitter, Input, Output, ChangeDetectorRef } from '@angular/core';
import 'rxjs/add/operator/distinctUntilChanged';
import { SkyTabComponent } from './tab.component';
import { SkyTabsetAdapterService } from './tabset-adapter.service';
import { SkyTabsetService } from './tabset.service';
var SkyTabsetComponent = (function () {
    function SkyTabsetComponent(tabsetService, adapterService, elRef, changeRef) {
        this.tabsetService = tabsetService;
        this.adapterService = adapterService;
        this.elRef = elRef;
        this.changeRef = changeRef;
        this.tabStyle = 'tabs';
        this.newTab = new EventEmitter();
        this.openTab = new EventEmitter();
        this.activeChange = new EventEmitter();
        this.tabDisplayMode = 'tabs';
    }
    SkyTabsetComponent.prototype.tabCloseClick = function (tab) {
        tab.close.emit(undefined);
    };
    SkyTabsetComponent.prototype.newTabClick = function () {
        this.newTab.emit(undefined);
    };
    SkyTabsetComponent.prototype.openTabClick = function () {
        this.openTab.emit(undefined);
    };
    SkyTabsetComponent.prototype.windowResize = function () {
        this.adapterService.detectOverflow();
    };
    SkyTabsetComponent.prototype.selectTab = function (newTab) {
        this.tabsetService.activateTab(newTab);
    };
    SkyTabsetComponent.prototype.ngOnChanges = function (changes) {
        if (changes['active'] && changes['active'].currentValue !== changes['active'].previousValue) {
            this.tabsetService.activateTabIndex(this.active);
        }
    };
    SkyTabsetComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (this.active || this.active === 0) {
            this.tabsetService.activateTabIndex(this.active);
        }
        this.tabsetService.activeIndex.distinctUntilChanged().subscribe(function (newActiveIndex) {
            // HACK: Not selecting the active tab in a timeout causes an error.
            // https://github.com/angular/angular/issues/6005
            setTimeout(function () {
                if (newActiveIndex !== _this.active) {
                    _this.active = newActiveIndex;
                    _this.activeChange.emit(newActiveIndex);
                }
            });
        });
    };
    SkyTabsetComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.adapterService.init(this.elRef);
        this.adapterService.overflowChange.subscribe(function (currentOverflow) {
            _this.updateDisplayMode(currentOverflow);
        });
        setTimeout(function () {
            _this.adapterService.detectOverflow();
            _this.updateDisplayMode(_this.adapterService.currentOverflow);
            _this.changeRef.detectChanges();
        }, 0);
    };
    SkyTabsetComponent.prototype.ngDoCheck = function () {
        this.adapterService.detectOverflow();
    };
    SkyTabsetComponent.prototype.ngOnDestroy = function () {
        this.tabsetService.destroy();
    };
    SkyTabsetComponent.prototype.updateDisplayMode = function (currentOverflow) {
        this.tabDisplayMode = currentOverflow ? 'dropdown' : 'tabs';
    };
    return SkyTabsetComponent;
}());
export { SkyTabsetComponent };
SkyTabsetComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-tabset',
                styles: [".sky-tabset {\n  align-items: center;\n  border-bottom: 2px solid #007ca6;\n  display: flex;\n  list-style-type: none;\n  margin: 0;\n  overflow: hidden;\n  padding: 0 0 0 15px;\n  white-space: nowrap;\n}\n\n.sky-tabset.sky-tabset-style-wizard {\n  border-bottom: none;\n  padding-bottom: 10px;\n  padding-left: 0;\n}\n\n.sky-tabset-btns {\n  order: 1;\n  padding-left: 10px;\n}\n\n.sky-tabset-dropdown {\n  order: 0;\n  max-width: 100%;\n}\n\n.sky-tabset-mode-dropdown {\n  /* This line fixes an issue with extra whitespace under collapsed (dropdown) tabs in IE 11. */\n  line-height: 0;\n}\n\n.sky-tabset-mode-dropdown .sky-tabset-tabs {\n  visibility: hidden;\n  order: 2;\n}\n\n.sky-tabset-tabs {\n  order: 0;\n  white-space: nowrap;\n}\n\n.sky-tabset-btn-new,\n.sky-tabset-btn-open {\n  color: #007ca6;\n}\n"],
                template: "<div\n    class=\"sky-tabset\" role=\"tablist\"\n    [ngClass]=\"'sky-tabset-mode-' + tabDisplayMode + ' sky-tabset-style-' + tabStyle\"\n    (window:resize)=\"windowResize()\"\n>\n  <span class=\"sky-tabset-dropdown\">\n    <sky-tab-dropdown\n        *ngIf=\"tabDisplayMode === 'dropdown'\"\n        [tabs]=\"tabs\"\n        (tabClick)=\"selectTab($event)\"\n        (closeClick)=\"tabCloseClick($event)\"\n    >\n    </sky-tab-dropdown>\n  </span>\n  <span class=\"sky-tabset-tabs\">\n    <sky-tab-button\n        *ngFor=\"let tab of tabs; let i = index\"\n        [tabHeading]=\"tab.tabHeading\"\n        [tabHeaderCount]=\"tab.tabHeaderCount\"\n        [tabStyle]=\"tabStyle\"\n        [active]=\"tab.active\"\n        [allowClose]=\"tab.allowClose\"\n        [disabled]=\"tab.disabled\"\n        (tabClick)=\"selectTab(tab)\"\n        (closeClick)=\"tabCloseClick(tab)\"\n    ></sky-tab-button>\n  </span>\n  <span class=\"sky-tabset-btns\">\n    <button\n        type=\"button\"\n        class=\"sky-btn sky-btn-default sky-tabset-btn-new\"\n        (click)=\"newTabClick()\"\n        [attr.aria-label]=\"'tab_add' | skyResources\"\n        *ngIf=\"newTab.observers.length > 0\"\n    >\n      <i class=\"fa fa-lg fa-plus-circle\"></i>\n    </button>\n    <button\n        type=\"button\"\n        class=\"sky-btn sky-btn-default sky-tabset-btn-open\"\n        (click)=\"openTabClick()\"\n        [attr.aria-label]=\"'tab_open' | skyResources\"\n        *ngIf=\"openTab.observers.length > 0\"\n    >\n      <i class=\"fa fa-lg fa-folder-open-o\"></i>\n    </button>\n  </span>\n</div>\n<ng-content></ng-content>\n",
                providers: [SkyTabsetAdapterService, SkyTabsetService]
            },] },
];
/** @nocollapse */
SkyTabsetComponent.ctorParameters = function () { return [
    { type: SkyTabsetService, },
    { type: SkyTabsetAdapterService, },
    { type: ElementRef, },
    { type: ChangeDetectorRef, },
]; };
SkyTabsetComponent.propDecorators = {
    'tabStyle': [{ type: Input },],
    'active': [{ type: Input },],
    'newTab': [{ type: Output },],
    'openTab': [{ type: Output },],
    'activeChange': [{ type: Output },],
    'tabs': [{ type: ContentChildren, args: [SkyTabComponent,] },],
};
//# sourceMappingURL=tabset.component.js.map