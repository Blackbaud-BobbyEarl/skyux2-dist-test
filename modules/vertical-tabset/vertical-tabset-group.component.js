import { Component, Input, ContentChildren, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { style, trigger, transition, animate } from '@angular/animations';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
import { SkyVerticalTabComponent } from './vertical-tab.component';
import { SkyVerticalTabsetService } from './vertical-tabset.service';
var SkyVerticalTabsetGroupComponent = (function () {
    function SkyVerticalTabsetGroupComponent(tabService, changeRef) {
        var _this = this;
        this.tabService = tabService;
        this.changeRef = changeRef;
        this._open = false;
        this._openBeforeTabsHidden = false;
        this._ngUnsubscribe = new Subject();
        this.tabClicked = function () {
            _this.changeRef.markForCheck();
        };
        this.tabsHidden = function () {
            // this fixes an animation bug with ngIf when the parent component goes from visible to hidden
            _this._openBeforeTabsHidden = _this.open;
            _this.open = false;
            _this.changeRef.detectChanges();
        };
        this.tabsShown = function () {
            _this.open = _this._openBeforeTabsHidden;
            _this.changeRef.detectChanges();
        };
    }
    Object.defineProperty(SkyVerticalTabsetGroupComponent.prototype, "open", {
        get: function () {
            return !this.disabled && this._open;
        },
        set: function (value) {
            this._open = value;
        },
        enumerable: true,
        configurable: true
    });
    SkyVerticalTabsetGroupComponent.prototype.ngOnInit = function () {
        this.tabService.hidingTabs
            .takeUntil(this._ngUnsubscribe)
            .subscribe(this.tabsHidden);
        this.tabService.showingTabs
            .takeUntil(this._ngUnsubscribe)
            .subscribe(this.tabsShown);
        this.tabService.tabClicked
            .takeUntil(this._ngUnsubscribe)
            .subscribe(this.tabClicked);
    };
    SkyVerticalTabsetGroupComponent.prototype.ngOnDestroy = function () {
        this._ngUnsubscribe.next();
        this._ngUnsubscribe.complete();
    };
    SkyVerticalTabsetGroupComponent.prototype.toggleMenuOpen = function () {
        if (!this.disabled) {
            this.open = !this.open;
        }
        this.changeRef.markForCheck();
    };
    SkyVerticalTabsetGroupComponent.prototype.subMenuOpen = function () {
        return this.tabs && (this.tabs.find(function (t) { return t.active; }) !== undefined);
    };
    return SkyVerticalTabsetGroupComponent;
}());
export { SkyVerticalTabsetGroupComponent };
SkyVerticalTabsetGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-vertical-tabset-group',
                template: "<div class=\"sky-vertical-tabset-group\">\n  <div\n    class=\"sky-vertical-tabset-group-header\" \n    [ngClass]=\"{'sky-vertical-tabset-group-header-sub-open': subMenuOpen()}\"\n    (click)=\"toggleMenuOpen()\"\n    (keyup.enter)=\"toggleMenuOpen()\"\n    [tabIndex]=\"-1\"\n  >\n    {{ groupHeading }}\n    <sky-chevron \n      class=\"sky-vertical-tabset-group-header-chevron\"\n      [direction]=\"open ? 'up' : 'down'\"\n      [disabled]=\"disabled\"\n      (directionChange)=\"toggleMenuOpen()\"\n      (keyup.enter)=\"$event.stopPropagation()\"\n    >\n    </sky-chevron>\n  </div>\n  <div\n    class=\"sky-vertical-tabset-group-content\"\n    *ngIf=\"open\"\n    [@tabSlide]\n  >\n    <ng-content></ng-content>\n  </div>\n</div>\n",
                styles: [".sky-vertical-tabset-group {\n  border-bottom: 1px solid #e2e3e4;\n  margin: 5px 0 5px 5px;\n}\n\n.sky-vertical-tabset-group-header {\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n  padding: 10px;\n  font-family: \"Blackbaud Sans\", \"Helvetica Neue\", Arial, sans-serif;\n  color: #282b31;\n  font-weight: 600;\n  font-size: 16px;\n  font-weight: 400;\n  color: #686c73;\n}\n\n.sky-vertical-tabset-group-header:hover {\n  color: #282b31;\n}\n\n.sky-vertical-tabset-group-header:focus {\n  outline: thin dotted;\n  outline: -webkit-focus-ring-color auto 5px;\n}\n\n:host[ng-reflect-disabled=\"true\"] .sky-vertical-tabset-group-header {\n  cursor: not-allowed;\n  font-style: italic;\n  opacity: 0.8;\n}\n\n:host[ng-reflect-disabled=\"true\"] .sky-vertical-tabset-group-header:hover {\n  color: #686c73;\n}\n\n:host[ng-reflect-disabled=\"true\"] .sky-vertical-tabset-group-header /deep/ button {\n  cursor: not-allowed;\n}\n\n.sky-vertical-tabset-group-header-sub-open {\n  font-family: \"Blackbaud Sans\", \"Helvetica Neue\", Arial, sans-serif;\n  color: #282b31;\n  font-weight: 600;\n  font-size: 16px;\n}\n\n.sky-vertical-tabset-group-content {\n  overflow: hidden;\n  border-top: 1px solid #e2e3e4;\n}\n\n:host /deep/ .sky-vertical-tabset-group-header-chevron > button {\n  font-size: 14px !important;\n}\n"],
                changeDetection: ChangeDetectionStrategy.OnPush,
                animations: [
                    trigger('tabSlide', [
                        transition(':enter', [
                            style({
                                height: '0',
                                visibility: 'hidden'
                            }),
                            animate('150ms ease-in', style({
                                height: '*',
                                visibility: 'visible'
                            }))
                        ]),
                        transition(':leave', [
                            style({
                                height: '*',
                                visibility: 'visible'
                            }),
                            animate('150ms ease-in', style({
                                height: '0',
                                visibility: 'hidden'
                            }))
                        ])
                    ])
                ]
            },] },
];
/** @nocollapse */
SkyVerticalTabsetGroupComponent.ctorParameters = function () { return [
    { type: SkyVerticalTabsetService, },
    { type: ChangeDetectorRef, },
]; };
SkyVerticalTabsetGroupComponent.propDecorators = {
    'groupHeading': [{ type: Input },],
    'disabled': [{ type: Input },],
    'open': [{ type: Input },],
    'tabs': [{ type: ContentChildren, args: [SkyVerticalTabComponent,] },],
};
//# sourceMappingURL=vertical-tabset-group.component.js.map