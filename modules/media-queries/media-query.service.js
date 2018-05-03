import { Injectable, NgZone } from '@angular/core';
import { SkyMediaBreakpoints } from './media-breakpoints';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
var SkyMediaQueryService = (function () {
    function SkyMediaQueryService(zone) {
        var _this = this;
        this.zone = zone;
        this._current = SkyMediaBreakpoints.md;
        this.currentSubject = new BehaviorSubject(this.current);
        this.xsListener = function (mql) {
            _this.setupListener(mql, SkyMediaBreakpoints.xs);
        };
        this.smListener = function (mql) {
            _this.setupListener(mql, SkyMediaBreakpoints.sm);
        };
        this.mdListener = function (mql) {
            _this.setupListener(mql, SkyMediaBreakpoints.md);
        };
        this.lgListener = function (mql) {
            _this.setupListener(mql, SkyMediaBreakpoints.lg);
        };
        this.xsMql = matchMedia(SkyMediaQueryService.xs);
        this.xsMql.addListener(this.xsListener);
        this.smMql = matchMedia(SkyMediaQueryService.sm);
        this.smMql.addListener(this.smListener);
        this.mdMql = matchMedia(SkyMediaQueryService.md);
        this.mdMql.addListener(this.mdListener);
        this.lgMql = matchMedia(SkyMediaQueryService.lg);
        this.lgMql.addListener(this.lgListener);
        this.setupListener(this.xsMql, SkyMediaBreakpoints.xs);
        this.setupListener(this.smMql, SkyMediaBreakpoints.sm);
        this.setupListener(this.mdMql, SkyMediaBreakpoints.md);
        this.setupListener(this.lgMql, SkyMediaBreakpoints.lg);
    }
    Object.defineProperty(SkyMediaQueryService.prototype, "current", {
        get: function () {
            return this._current;
        },
        enumerable: true,
        configurable: true
    });
    SkyMediaQueryService.prototype.subscribe = function (listener) {
        return this.currentSubject.subscribe({
            next: function (breakpoints) {
                listener(breakpoints);
            }
        });
    };
    SkyMediaQueryService.prototype.destroy = function () {
        this.xsMql.removeListener(this.xsListener);
        this.xsMql = undefined;
        this.xsListener = undefined;
        this.smMql.removeListener(this.smListener);
        this.smMql = undefined;
        this.smListener = undefined;
        this.mdMql.removeListener(this.mdListener);
        this.mdMql = undefined;
        this.mdListener = undefined;
        this.lgMql.removeListener(this.lgListener);
        this.lgMql = undefined;
        this.lgListener = undefined;
        this.currentSubject.complete();
    };
    SkyMediaQueryService.prototype.setupListener = function (mql, breakpoints) {
        var _this = this;
        this.zone.run(function () {
            if (mql.matches) {
                _this._current = breakpoints;
                _this.currentSubject.next(breakpoints);
            }
        });
    };
    return SkyMediaQueryService;
}());
export { SkyMediaQueryService };
SkyMediaQueryService.xs = '(max-width: 767px)';
SkyMediaQueryService.sm = '(min-width: 768px) and (max-width: 991px)';
SkyMediaQueryService.md = '(min-width: 992px) and (max-width: 1199px)';
SkyMediaQueryService.lg = '(min-width: 1200px)';
SkyMediaQueryService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SkyMediaQueryService.ctorParameters = function () { return [
    { type: NgZone, },
]; };
//# sourceMappingURL=media-query.service.js.map