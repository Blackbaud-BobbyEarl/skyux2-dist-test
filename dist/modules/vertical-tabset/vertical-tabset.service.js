import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { SkyMediaQueryService } from './../media-queries/media-query.service';
import { SkyMediaBreakpoints } from '../media-queries/media-breakpoints';
export var VISIBLE_STATE = 'shown';
var SkyVerticalTabsetService = (function () {
    function SkyVerticalTabsetService(mediaQueryService) {
        this.mediaQueryService = mediaQueryService;
        this.tabs = [];
        this.tabClicked = new BehaviorSubject(undefined);
        this.activeIndex = undefined;
        this.hidingTabs = new BehaviorSubject(false);
        this.showingTabs = new BehaviorSubject(false);
        this.tabAdded = new Subject();
        this.indexChanged = new BehaviorSubject(undefined);
        this.switchingMobile = new Subject();
        this._tabsVisible = false;
        this._contentAdded = false;
        this._isWidescreen = false;
    }
    Object.defineProperty(SkyVerticalTabsetService.prototype, "content", {
        set: function (value) {
            this._content = value;
        },
        enumerable: true,
        configurable: true
    });
    SkyVerticalTabsetService.prototype.addTab = function (tab) {
        var index = this.tabs.length;
        tab.index = index;
        this.tabs.push(tab);
        if (tab.active) {
            this.activateTab(tab);
        }
        this.tabAdded.next(tab);
    };
    SkyVerticalTabsetService.prototype.activateTab = function (tab) {
        var _this = this;
        // unactivate active tab
        var activeTab = this.tabs.find(function (t) { return t.index === _this.activeIndex; });
        if (activeTab && activeTab.index !== tab.index) {
            activeTab.active = false;
            activeTab.tabDeactivated();
        }
        this.activeIndex = tab.index;
        this.tabClicked.next(true);
        this.updateTabClicked();
    };
    SkyVerticalTabsetService.prototype.activeTabContent = function () {
        var _this = this;
        var activeTab = this.tabs.find(function (t) { return t.index === _this.activeIndex; });
        if (activeTab) {
            return activeTab.tabContent;
        }
        else {
            return undefined;
        }
    };
    SkyVerticalTabsetService.prototype.isMobile = function () {
        return this.mediaQueryService.current === SkyMediaBreakpoints.xs;
    };
    SkyVerticalTabsetService.prototype.updateContent = function () {
        if (!this._contentAdded && this.contentVisible()) {
            // content needs to be moved
            this.moveContent();
        }
        else if (this._contentAdded && !this.contentVisible()) {
            // content hidden
            this._contentAdded = false;
        }
        var mobile = this.isMobile();
        if (mobile && this._isWidescreen) {
            // switching to mobile
            this.switchingMobile.next(true);
            if (!this.tabsVisible()) {
                this.hidingTabs.next(true);
            }
        }
        else if (!mobile && !this._isWidescreen) {
            // switching to widescreen
            this.switchingMobile.next(false);
            if (!this._tabsVisible) {
                this.showingTabs.next(true);
            }
        }
        this._isWidescreen = !mobile;
    };
    SkyVerticalTabsetService.prototype.tabsVisible = function () {
        return !this.isMobile() || this._tabsVisible;
    };
    SkyVerticalTabsetService.prototype.contentVisible = function () {
        return !this.isMobile() || !this._tabsVisible;
    };
    SkyVerticalTabsetService.prototype.showTabs = function () {
        this._tabsVisible = true;
        this._contentAdded = false;
        this.animationVisibleState = VISIBLE_STATE;
        this.showingTabs.next(true);
    };
    SkyVerticalTabsetService.prototype.moveContent = function () {
        if (this._content && !this._contentAdded) {
            var activeContent = this.activeTabContent();
            if (activeContent && activeContent.nativeElement) {
                this._content.nativeElement.appendChild(activeContent.nativeElement);
                this._contentAdded = true;
            }
        }
    };
    SkyVerticalTabsetService.prototype.updateTabClicked = function () {
        this._contentAdded = false;
        if (this.isMobile()) {
            this._tabsVisible = false;
            this.animationVisibleState = VISIBLE_STATE;
            this.hidingTabs.next(true);
        }
        this.indexChanged.next(this.activeIndex);
    };
    return SkyVerticalTabsetService;
}());
export { SkyVerticalTabsetService };
SkyVerticalTabsetService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SkyVerticalTabsetService.ctorParameters = function () { return [
    { type: SkyMediaQueryService, },
]; };
//# sourceMappingURL=vertical-tabset.service.js.map