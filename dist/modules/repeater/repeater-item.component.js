import { Component, Input } from '@angular/core';
import { skyAnimationSlide } from '../animation/slide';
import { SkyRepeaterService } from './repeater.service';
import { SkyLogService } from '../log/log.service';
var SkyRepeaterItemComponent = (function () {
    function SkyRepeaterItemComponent(repeaterService, logService) {
        this.repeaterService = repeaterService;
        this.logService = logService;
        this.selectable = false;
        this._isCollapsible = true;
        this._isExpanded = true;
        this._isSelected = false;
        this.slideForExpanded(false);
    }
    Object.defineProperty(SkyRepeaterItemComponent.prototype, "isExpanded", {
        get: function () {
            return this._isExpanded;
        },
        set: function (value) {
            this.updateForExpanded(value, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyRepeaterItemComponent.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyRepeaterItemComponent.prototype, "isCollapsible", {
        get: function () {
            return this._isCollapsible;
        },
        set: function (value) {
            if (this._isCollapsible !== value) {
                this._isCollapsible = value;
                /*istanbul ignore else */
                if (!this._isCollapsible) {
                    this.updateForExpanded(true, false);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    SkyRepeaterItemComponent.prototype.headerClick = function () {
        if (this.isCollapsible) {
            this.updateForExpanded(!this.isExpanded, true);
        }
    };
    SkyRepeaterItemComponent.prototype.chevronDirectionChange = function (direction) {
        this.updateForExpanded(direction === 'up', true);
    };
    SkyRepeaterItemComponent.prototype.updateForExpanded = function (value, animate) {
        if (this.isCollapsible === false && value === false) {
            this.logService.warn("Setting isExpanded to false when the repeater item is not collapsible\n        will have no effect.");
        }
        else if (this._isExpanded !== value) {
            this._isExpanded = value;
            this.repeaterService.onItemCollapseStateChange(this);
            this.slideForExpanded(animate);
        }
    };
    SkyRepeaterItemComponent.prototype.updateIsSelected = function (value) {
        this._isSelected = value.checked;
    };
    SkyRepeaterItemComponent.prototype.slideForExpanded = function (animate) {
        this.slideDirection = this.isExpanded ? 'down' : 'up';
    };
    return SkyRepeaterItemComponent;
}());
export { SkyRepeaterItemComponent };
SkyRepeaterItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-repeater-item',
                styles: [".sky-repeater-item {\n  display: flex;\n  padding: 10px;\n  border-bottom: 1px dotted #cdcfd2;\n}\n\n.sky-repeater-item-left {\n  padding-top: 7px;\n}\n\n.sky-repeater-item-right {\n  flex-grow: 1;\n}\n\n.sky-repeater-item-header {\n  align-items: center;\n  display: flex;\n}\n\n.sky-repeater-item-chevron {\n  margin-left: 10px;\n}\n\n.sky-repeater-item-context-menu {\n  padding: 5px 10px 0 0;\n}\n\n.sky-repeater-item-checkbox {\n  padding: 0 10px 0 0;\n}\n\n.sky-repeater-item-selected {\n  background-color: #f1eef6;\n  transition: background-color 150ms;\n}\n\n.sky-repeater-item-title {\n  font-family: \"Blackbaud Sans\", \"Helvetica Neue\", Arial, sans-serif;\n  color: #282b31;\n  font-weight: 600;\n  font-size: 16px;\n  margin: 10px 0;\n  flex-grow: 1;\n}\n\n.sky-repeater-item-collapsible .sky-repeater-item-header {\n  cursor: pointer;\n}\n\n.sky-repeater-item-collapsible .sky-repeater-item-content {\n  padding-right: 34px;\n}\n\n.sky-repeater-item-collapsed .sky-repeater-item-content {\n  display: none;\n}\n"],
                template: "<section\n    class=\"sky-repeater-item\"\n    [ngClass]=\"{'sky-repeater-item-collapsible': isCollapsible, 'sky-repeater-item-selected': isSelected}\"\n>\n\n  <div class=\"sky-repeater-item-left\">\n    <sky-checkbox\n      *ngIf=\"selectable\"\n      class=\"sky-repeater-item-checkbox\"\n      [checked]=\"isSelected\"\n      [label]=\"'repeater_item_checkbox_label' | skyResources\"\n      (change)=\"updateIsSelected($event)\"\n    >\n    </sky-checkbox>\n    <div\n        class=\"sky-repeater-item-context-menu\"\n        [hidden]=\"contextMenuEl.children.length === 0\"\n        #contextMenuEl\n    >\n      <ng-content select=\"sky-repeater-item-context-menu\"></ng-content>\n    </div>\n  </div>\n  <div class=\"sky-repeater-item-right\">\n    <header\n        class=\"sky-repeater-item-header\"\n        [hidden]=\"titleEl.children.length === 0\"\n        (click)=\"headerClick()\"\n    >\n      <h1 class=\"sky-repeater-item-title\" #titleEl>\n        <ng-content select=\"sky-repeater-item-title\"></ng-content>\n      </h1>\n      <div class=\"sky-repeater-item-chevron\" [hidden]=\"!isCollapsible\">\n        <sky-chevron\n            [direction]=\"isExpanded ? 'up' : 'down'\"\n            (directionChange)=\"chevronDirectionChange($event)\"\n        >\n        </sky-chevron>\n      </div>\n    </header>\n    <div class=\"sky-repeater-item-content\" [@skyAnimationSlide]=\"slideDirection\">\n      <ng-content select=\"sky-repeater-item-content\"></ng-content>\n    </div>\n  </div>\n</section>\n",
                animations: [skyAnimationSlide]
            },] },
];
/** @nocollapse */
SkyRepeaterItemComponent.ctorParameters = function () { return [
    { type: SkyRepeaterService, },
    { type: SkyLogService, },
]; };
SkyRepeaterItemComponent.propDecorators = {
    'isExpanded': [{ type: Input },],
    'selectable': [{ type: Input },],
};
//# sourceMappingURL=repeater-item.component.js.map