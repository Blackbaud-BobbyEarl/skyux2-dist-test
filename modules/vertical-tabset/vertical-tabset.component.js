import { Component, ViewChild, Input, ChangeDetectionStrategy, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { style, trigger, transition, animate } from '@angular/animations';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
import { SkyResourcesService } from './../resources/resources.service';
import { SkyVerticalTabsetService, VISIBLE_STATE } from './vertical-tabset.service';
import { SkyMediaQueryService } from './../media-queries/media-query.service';
var SkyVerticalTabsetComponent = (function () {
    function SkyVerticalTabsetComponent(tabService, resources, changeRef) {
        this.tabService = tabService;
        this.resources = resources;
        this.changeRef = changeRef;
        this.showTabsText = this.resources.getString('vertical_tabs_show_tabs_text');
        this.activeChange = new EventEmitter();
        this._ngUnsubscribe = new Subject();
    }
    SkyVerticalTabsetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tabService.indexChanged
            .takeUntil(this._ngUnsubscribe)
            .subscribe(function (index) {
            _this.activeChange.emit(index);
            _this.changeRef.markForCheck();
        });
        this.tabService.switchingMobile
            .takeUntil(this._ngUnsubscribe)
            .subscribe(function (mobile) { return _this.changeRef.detectChanges(); });
        if (this.tabService.isMobile()) {
            this.tabService.animationVisibleState = VISIBLE_STATE;
        }
    };
    SkyVerticalTabsetComponent.prototype.ngAfterViewChecked = function () {
        this.tabService.content = this.content;
        this.tabService.updateContent();
    };
    SkyVerticalTabsetComponent.prototype.ngOnDestroy = function () {
        this._ngUnsubscribe.next();
        this._ngUnsubscribe.complete();
    };
    return SkyVerticalTabsetComponent;
}());
export { SkyVerticalTabsetComponent };
SkyVerticalTabsetComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-vertical-tabset',
                template: " <div class=\"sky-vertical-tabset\" (window:resize)=\"tabService.updateContent()\">\n  <div \n    #contentWrapper \n    class=\"sky-vertical-tabset-group-container\"\n    [@tabGroupEnter]=\"tabService.animationVisibleState\"\n    *ngIf=\"tabService.tabsVisible()\"\n  >\n    <ng-content></ng-content>\n  </div> \n  <div \n    class=\"sky-vertical-tabset-content\"\n    [@contentEnter]=\"tabService.animationVisibleState\"\n    *ngIf=\"tabService.contentVisible()\"\n  >\n    <div #skySideContent></div>\n    <button \n      *ngIf=\"!tabService.tabsVisible()\"\n      (click)=\"tabService.showTabs()\"\n      class=\"sky-btn sky-btn-primary sky-vertical-tabset-show-tabs-btn\"\n    >\n      <i class=\"fa fa-chevron-left\"></i>\n      {{ showTabsText }}\n    </button>\n  </div>\n</div> \n",
                styles: ["@media (min-width: 768px) {\n  .sky-vertical-tabset {\n    display: flex;\n    height: 100%;\n  }\n  .sky-vertical-tabset-group-container {\n    border-right: 1px solid #cdcfd2;\n  }\n}\n\n.sky-vertical-tabset-content {\n  margin: 10px 0 0 10px;\n  flex-basis: 75%;\n  overflow-y: auto;\n}\n\n.sky-vertical-tabset-show-tabs-btn {\n  margin-top: 10px;\n}\n\n.sky-vertical-tabset-group-container {\n  flex-basis: 25%;\n  overflow-y: auto;\n}\n"],
                providers: [SkyVerticalTabsetService, SkyResourcesService, SkyMediaQueryService],
                changeDetection: ChangeDetectionStrategy.OnPush,
                animations: [
                    trigger('tabGroupEnter', [
                        transition("void => " + VISIBLE_STATE, [
                            style({ transform: 'translate(-100%)' }),
                            animate('150ms ease-in')
                        ])
                    ]),
                    trigger('contentEnter', [
                        transition("void => " + VISIBLE_STATE, [
                            style({ transform: 'translate(100%)' }),
                            animate('150ms ease-in')
                        ])
                    ])
                ]
            },] },
];
/** @nocollapse */
SkyVerticalTabsetComponent.ctorParameters = function () { return [
    { type: SkyVerticalTabsetService, },
    { type: SkyResourcesService, },
    { type: ChangeDetectorRef, },
]; };
SkyVerticalTabsetComponent.propDecorators = {
    'showTabsText': [{ type: Input },],
    'activeChange': [{ type: Output },],
    'tabGroups': [{ type: ViewChild, args: ['contentWrapper',] },],
    'content': [{ type: ViewChild, args: ['skySideContent',] },],
};
//# sourceMappingURL=vertical-tabset.component.js.map