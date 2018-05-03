import { Component, ContentChildren, Input } from '@angular/core';
import { SkyRepeaterItemComponent } from './repeater-item.component';
import { SkyRepeaterService } from './repeater.service';
var SkyRepeaterComponent = (function () {
    function SkyRepeaterComponent(repeaterService) {
        var _this = this;
        this.repeaterService = repeaterService;
        this._expandMode = 'none';
        this.repeaterService.itemCollapseStateChange.subscribe(function (item) {
            if (_this.expandMode === 'single' && item.isExpanded) {
                _this.items.forEach(function (otherItem) {
                    if (otherItem !== item && otherItem.isExpanded) {
                        otherItem.isExpanded = false;
                    }
                });
            }
        });
        this.updateForExpandMode();
    }
    Object.defineProperty(SkyRepeaterComponent.prototype, "expandMode", {
        get: function () {
            return this._expandMode || 'none';
        },
        set: function (value) {
            this._expandMode = value;
            this.updateForExpandMode();
        },
        enumerable: true,
        configurable: true
    });
    SkyRepeaterComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        // HACK: Not updating for expand mode in a timeout causes an error.
        // https://github.com/angular/angular/issues/6005
        this.items.changes.subscribe(function () {
            setTimeout(function () {
                _this.updateForExpandMode(_this.items.last);
            }, 0);
        });
        setTimeout(function () {
            _this.updateForExpandMode();
        }, 0);
    };
    SkyRepeaterComponent.prototype.updateForExpandMode = function (itemAdded) {
        if (this.items) {
            var foundExpanded_1 = false;
            var isCollapsible_1 = this.expandMode !== 'none';
            var isSingle_1 = this.expandMode === 'single';
            // Keep any newly-added expanded item expanded and collapse the rest.
            if (itemAdded && itemAdded.isExpanded) {
                foundExpanded_1 = true;
            }
            this.items.forEach(function (item) {
                item.isCollapsible = isCollapsible_1;
                if (item !== itemAdded && isSingle_1 && item.isExpanded) {
                    if (foundExpanded_1) {
                        item.updateForExpanded(false, false);
                    }
                    foundExpanded_1 = true;
                }
            });
        }
    };
    return SkyRepeaterComponent;
}());
export { SkyRepeaterComponent };
SkyRepeaterComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-repeater',
                styles: [".sky-repeater {\n  padding: 0;\n}\n"],
                template: "<div class=\"sky-repeater\">\n  <ng-content></ng-content>\n</div>\n"
            },] },
];
/** @nocollapse */
SkyRepeaterComponent.ctorParameters = function () { return [
    { type: SkyRepeaterService, },
]; };
SkyRepeaterComponent.propDecorators = {
    'expandMode': [{ type: Input },],
    'items': [{ type: ContentChildren, args: [SkyRepeaterItemComponent,] },],
};
//# sourceMappingURL=repeater.component.js.map