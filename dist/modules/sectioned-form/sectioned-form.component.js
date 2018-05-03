import { Component, ViewChild, EventEmitter, Output, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { style, trigger, transition, animate } from '@angular/animations';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
import { SkyMediaQueryService } from './../media-queries/media-query.service';
import { SkyVerticalTabsetService, VISIBLE_STATE } from './../vertical-tabset/vertical-tabset.service';
var SkySectionedFormComponent = (function () {
    function SkySectionedFormComponent(tabService, changeRef) {
        this.tabService = tabService;
        this.changeRef = changeRef;
        this.indexChanged = new EventEmitter();
        this._ngUnsubscribe = new Subject();
    }
    SkySectionedFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tabService.indexChanged
            .takeUntil(this._ngUnsubscribe)
            .subscribe(function (index) {
            _this.indexChanged.emit(index);
            _this.changeRef.markForCheck();
        });
        this.tabService.switchingMobile
            .takeUntil(this._ngUnsubscribe)
            .subscribe(function (mobile) { return _this.changeRef.detectChanges(); });
        if (this.tabService.isMobile()) {
            this.tabService.animationVisibleState = VISIBLE_STATE;
        }
    };
    SkySectionedFormComponent.prototype.ngAfterViewChecked = function () {
        this.tabService.content = this.content;
        this.tabService.updateContent();
    };
    SkySectionedFormComponent.prototype.ngOnDestroy = function () {
        this._ngUnsubscribe.next();
        this._ngUnsubscribe.complete();
    };
    SkySectionedFormComponent.prototype.tabsVisible = function () {
        return this.tabService.tabsVisible();
    };
    SkySectionedFormComponent.prototype.showTabs = function () {
        this.tabService.showTabs();
        this.changeRef.markForCheck();
    };
    return SkySectionedFormComponent;
}());
export { SkySectionedFormComponent };
SkySectionedFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-sectioned-form',
                template: "<div class=\"sky-sectioned-form\" (window:resize)=\"tabService.updateContent()\">\n  <div \n    *ngIf=\"tabsVisible()\"\n    class=\"sky-sectioned-form-tabs\"\n    [@tabEnter]=\"tabService.animationVisibleState\"\n  >\n    <ng-content></ng-content>\n  </div>\n  <div \n    #skySectionSideContent \n    *ngIf=\"tabService.contentVisible()\"\n    class=\"sky-sectioned-form-content\"\n    [@contentEnter]=\"tabService.animationVisibleState\"\n  >\n  </div>\n</div>\n\n",
                styles: [".sky-sectioned-form-content {\n  padding: 15px;\n}\n\n@media (min-width: 768px) {\n  .sky-sectioned-form {\n    display: flex;\n  }\n  .sky-sectioned-form-tabs {\n    flex-basis: 30%;\n    border-right: 1px solid #e2e3e4;\n  }\n  .sky-sectioned-form-content {\n    flex-basis: 70%;\n  }\n}\n"],
                providers: [SkyVerticalTabsetService, SkyMediaQueryService],
                changeDetection: ChangeDetectionStrategy.OnPush,
                animations: [
                    trigger('tabEnter', [
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
SkySectionedFormComponent.ctorParameters = function () { return [
    { type: SkyVerticalTabsetService, },
    { type: ChangeDetectorRef, },
]; };
SkySectionedFormComponent.propDecorators = {
    'indexChanged': [{ type: Output },],
    'content': [{ type: ViewChild, args: ['skySectionSideContent',] },],
};
//# sourceMappingURL=sectioned-form.component.js.map