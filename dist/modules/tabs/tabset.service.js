import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/take';
var SkyTabsetService = (function () {
    function SkyTabsetService() {
        this.tabs = new BehaviorSubject([]);
        this.activeIndex = new BehaviorSubject(0);
    }
    SkyTabsetService.prototype.activateTab = function (tab) {
        var _this = this;
        this.tabs.take(1).subscribe(function (currentTabs) {
            _this.activeIndex.next(tab.tabIndex);
        });
    };
    SkyTabsetService.prototype.activateTabIndex = function (tabIndex) {
        var _this = this;
        this.tabs.take(1).subscribe(function (currentTabs) {
            var newSelectedTab = _this.getTabFromIndex(tabIndex, currentTabs);
            if (newSelectedTab) {
                _this.activeIndex.next(newSelectedTab.tabIndex);
            }
            else {
                _this.activeIndex.next(tabIndex);
            }
        });
    };
    SkyTabsetService.prototype.addTab = function (tab) {
        var _this = this;
        this.tabs.take(1).subscribe(function (currentTabs) {
            if (!tab.tabIndex) {
                tab.tabIndex = 0;
                var lastTabIndex = _this.getLastTabIndex(currentTabs);
                if (currentTabs && (lastTabIndex || lastTabIndex === 0)) {
                    tab.tabIndex = lastTabIndex + 1;
                }
            }
            currentTabs.push(tab);
            _this.tabs.next(currentTabs);
        });
    };
    SkyTabsetService.prototype.destroyTab = function (tab) {
        var _this = this;
        this.tabs.take(1).subscribe(function (currentTabs) {
            var tabIndex = currentTabs.indexOf(tab);
            if (tab.active) {
                // Try selecting the next tab first, and if there's no next tab then
                // try selecting the previous one.
                var newActiveTab = currentTabs[tabIndex + 1] || currentTabs[tabIndex - 1];
                /*istanbul ignore else */
                if (newActiveTab) {
                    _this.activeIndex.next(newActiveTab.tabIndex);
                }
            }
            if (tabIndex > -1) {
                currentTabs.splice(tabIndex, 1);
            }
            _this.tabs.next(currentTabs);
        });
    };
    SkyTabsetService.prototype.destroy = function () {
        this.tabs.complete();
        this.activeIndex.complete();
    };
    SkyTabsetService.prototype.getLastTabIndex = function (tabs) {
        var result = undefined;
        for (var i = 0; i < tabs.length; i++) {
            if (typeof tabs[i].tabIndex === 'number' &&
                (result === undefined || result < tabs[i].tabIndex)) {
                result = tabs[i].tabIndex;
            }
        }
        return result;
    };
    SkyTabsetService.prototype.getTabFromIndex = function (index, currentTabs) {
        for (var i = 0, n = currentTabs.length; i < n; i++) {
            var existingTab = currentTabs[i];
            if (existingTab.tabIndex === index || existingTab.tabIndex.toString() === index) {
                return existingTab;
            }
        }
        return undefined;
    };
    return SkyTabsetService;
}());
export { SkyTabsetService };
SkyTabsetService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SkyTabsetService.ctorParameters = function () { return []; };
//# sourceMappingURL=tabset.service.js.map