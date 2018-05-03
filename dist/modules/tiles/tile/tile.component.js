import { Component, ElementRef, EventEmitter, Input, Optional, Output } from '@angular/core';
import { skyAnimationSlide } from '../../animation/slide';
import { SkyTileDashboardService } from '../tile-dashboard/tile-dashboard.service';
var SkyTileComponent = (function () {
    function SkyTileComponent(elementRef, dashboardService) {
        this.elementRef = elementRef;
        this.dashboardService = dashboardService;
        this.isInDashboardColumn = false;
        this.showSettings = true;
        this.settingsClick = new EventEmitter();
        this.isCollapsedChange = new EventEmitter();
        this._isCollapsed = false;
        this.isInDashboardColumn = !!dashboardService;
    }
    Object.defineProperty(SkyTileComponent.prototype, "isCollapsed", {
        get: function () {
            if (this.dashboardService) {
                return this.dashboardService.tileIsCollapsed(this);
            }
            return this._isCollapsed;
        },
        set: function (value) {
            if (this.dashboardService) {
                this.dashboardService.setTileCollapsed(this, value);
            }
            else {
                this._isCollapsed = value;
            }
            this.isCollapsedChange.emit(value);
        },
        enumerable: true,
        configurable: true
    });
    SkyTileComponent.prototype.settingsButtonClicked = function () {
        this.settingsClick.emit(undefined);
    };
    Object.defineProperty(SkyTileComponent.prototype, "hasSettings", {
        get: function () {
            return this.settingsClick.observers.length > 0 && this.showSettings;
        },
        enumerable: true,
        configurable: true
    });
    SkyTileComponent.prototype.titleClick = function () {
        this.isCollapsed = !this.isCollapsed;
    };
    SkyTileComponent.prototype.chevronDirectionChange = function (direction) {
        this.isCollapsed = direction === 'down';
    };
    return SkyTileComponent;
}());
export { SkyTileComponent };
SkyTileComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-tile',
                styles: [".sky-tile {\n  background-color: #fff;\n  margin-bottom: 20px;\n}\n\n.sky-tile-header {\n  border-color: #cdcfd2;\n  border-style: solid solid none;\n  border-width: 4px 0 0;\n  display: flex;\n}\n\n.sky-tile-header-content {\n  display: flex;\n  flex: 1;\n  align-items: baseline;\n  cursor: pointer;\n}\n\n.sky-tile-title {\n  font-family: \"Blackbaud Sans Condensed\", \"Helvetica Neue Condensed\", \"Arial Narrow\";\n  color: #282b31;\n  font-weight: 300;\n  font-size: 26px;\n  margin: 0;\n  padding: 10px 15px;\n}\n\n.sky-tile-summary {\n  font-family: \"Blackbaud Sans Condensed\", \"Helvetica Neue Condensed\", \"Arial Narrow\";\n  color: #282b31;\n  font-weight: 500;\n  font-size: 22px;\n  color: #007ca6;\n  opacity: 0;\n  padding-right: 15px;\n  transition: opacity 250ms;\n  max-height: 30px;\n  overflow: hidden;\n}\n\n.sky-tile-collapsed .sky-tile-summary {\n  opacity: 1;\n}\n\n.sky-tile-header-column-tools {\n  flex-shrink: 0;\n}\n\n.sky-tile-content {\n  border-color: #e2e3e4;\n  border-image: none;\n  border-style: solid solid none;\n  border-width: 1px 0;\n}\n\n:host /deep/ .sky-tile-tools .sky-chevron {\n  margin: 12px 9px 12px 0;\n}\n\n.sky-tile-settings {\n  color: #cdcfd2;\n  cursor: pointer;\n  height: 24px;\n  margin: 12px 9px 12px 0;\n  padding: 0;\n  background-color: transparent;\n  border: none;\n  width: 24px;\n}\n\n.sky-tile-settings:hover {\n  color: #979ba2;\n  transition: color 150ms;\n}\n\n.sky-tile-grab-handle {\n  color: #cdcfd2;\n  cursor: pointer;\n  cursor: move;\n  cursor: -webkit-grab;\n  cursor: -moz-grab;\n  font-size: 15px;\n  padding: 15px 15px 15px 0;\n}\n\n.sky-tile-grab-handle:hover {\n  color: #979ba2;\n  transition: color 150ms;\n}\n"],
                template: "<section\n    class=\"sky-tile\"\n    [ngClass]=\"{\n      'sky-tile-collapsed': isCollapsed\n    }\"\n>\n  <header class=\"sky-tile-header\">\n    <div class=\"sky-tile-header-content\" (click)=\"titleClick()\">\n      <h1 class=\"sky-tile-title\">\n        <ng-content select=\"sky-tile-title\"></ng-content>\n      </h1>\n      <div class=\"sky-tile-summary\">\n        <ng-content select=\"sky-tile-summary\"></ng-content>\n      </div>\n    </div>\n    <div class=\"sky-tile-header-column-tools\">\n      <div class=\"sky-tile-tools\">\n        <sky-chevron\n            [direction]=\"isCollapsed ? 'down' : 'up'\"\n            (directionChange)=\"chevronDirectionChange($event)\"\n        >\n        </sky-chevron>\n        <button\n            type=\"button\"\n            *ngIf=\"hasSettings\"\n            class=\"sky-tile-settings fa fa-cog\"\n            [attr.aria-label]=\"'tile_settings' | skyResources\"\n            (click)=\"settingsButtonClicked();\"\n        >\n        </button>\n        <i\n            class=\"sky-tile-grab-handle fa fa-th\"\n            *ngIf=\"isInDashboardColumn\"\n        >\n        </i>\n      </div>\n    </div>\n  </header>\n  <div class=\"sky-tile-content\" [@skyAnimationSlide]=\"isCollapsed ? 'up' : 'down'\">\n    <ng-content select=\"sky-tile-content\"></ng-content>\n  </div>\n</section>\n",
                animations: [skyAnimationSlide]
            },] },
];
/** @nocollapse */
SkyTileComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: SkyTileDashboardService, decorators: [{ type: Optional },] },
]; };
SkyTileComponent.propDecorators = {
    'showSettings': [{ type: Input },],
    'settingsClick': [{ type: Output },],
    'isCollapsedChange': [{ type: Output },],
    'isCollapsed': [{ type: Input },],
};
//# sourceMappingURL=tile.component.js.map