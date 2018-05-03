import { Component, Input, ElementRef, ViewChild } from '@angular/core';
import { SkyTextExpandRepeaterAdapterService } from './text-expand-repeater-adapter.service';
import { SkyResourcesService } from '../resources';
var SkyTextExpandRepeaterComponent = (function () {
    function SkyTextExpandRepeaterComponent(resources, elRef, textExpandRepeaterAdapter) {
        this.resources = resources;
        this.elRef = elRef;
        this.textExpandRepeaterAdapter = textExpandRepeaterAdapter;
        this.seeMoreText = this.resources.getString('text_expand_see_more');
        this.seeLessText = this.resources.getString('text_expand_see_less');
        this.isExpanded = false;
    }
    Object.defineProperty(SkyTextExpandRepeaterComponent.prototype, "data", {
        set: function (value) {
            this.setup(value);
        },
        enumerable: true,
        configurable: true
    });
    SkyTextExpandRepeaterComponent.prototype.ngAfterViewInit = function () {
        if (this.contentItems) {
            this.items = this.textExpandRepeaterAdapter.getItems(this.elRef);
            for (var i = this.maxItems; i < this.contentItems.length; i++) {
                this.textExpandRepeaterAdapter.hideItem(this.items[i]);
            }
        }
    };
    SkyTextExpandRepeaterComponent.prototype.animationEnd = function () {
        // Ensure the correct items are displayed
        if (!this.isExpanded) {
            for (var i = this.maxItems; i < this.contentItems.length; i++) {
                this.textExpandRepeaterAdapter.hideItem(this.items[i]);
            }
        }
        // Set height back to auto so the browser can change the height as needed with window changes
        this.textExpandRepeaterAdapter.setContainerHeight(this.containerEl, undefined);
    };
    SkyTextExpandRepeaterComponent.prototype.repeaterExpand = function () {
        var _this = this;
        if (!this.isExpanded) {
            this.setContainerMaxHeight();
            setTimeout(function () {
                _this.isExpanded = true;
                _this.animateRepeater(true);
            });
        }
        else {
            this.setContainerMaxHeight();
            setTimeout(function () {
                _this.isExpanded = false;
                _this.animateRepeater(false);
            });
        }
    };
    SkyTextExpandRepeaterComponent.prototype.setContainerMaxHeight = function () {
        // ensure everything is reset
        this.animationEnd();
        /* Before animation is kicked off, ensure that a maxHeight exists */
        /* Once we have support for angular v4 animations with parameters we can use that instead */
        var currentHeight = this.textExpandRepeaterAdapter.getContainerHeight(this.containerEl);
        this.textExpandRepeaterAdapter.setContainerHeight(this.containerEl, currentHeight + "px");
    };
    SkyTextExpandRepeaterComponent.prototype.animateRepeater = function (expanding) {
        var _this = this;
        var adapter = this.textExpandRepeaterAdapter;
        var container = this.containerEl;
        adapter.setContainerHeight(container, undefined);
        var currentHeight = adapter.getContainerHeight(container);
        for (var i = this.maxItems; i < this.contentItems.length; i++) {
            if (!expanding) {
                adapter.hideItem(this.items[i]);
            }
            else {
                adapter.showItem(this.items[i]);
            }
        }
        var newHeight = adapter.getContainerHeight(container);
        if (!expanding) {
            this.buttonText = this.seeMoreText;
        }
        else {
            this.buttonText = this.seeLessText;
        }
        if (newHeight < currentHeight) {
            // The new text is smaller than the old text, so put the old text back before doing
            // the collapse animation to avoid showing a big chunk of whitespace.
            for (var i = this.maxItems; i < this.contentItems.length; i++) {
                adapter.showItem(this.items[i]);
            }
        }
        adapter.setContainerHeight(container, currentHeight + "px");
        // This timeout is necessary due to the browser needing to pick up the non-auto height being set
        // in order to do the transtion in height correctly. Without it the transition does not fire.
        setTimeout(function () {
            adapter.setContainerHeight(container, newHeight + "px");
            /* This resets values if the transition does not get kicked off */
            setTimeout(function () {
                _this.animationEnd();
            }, 500);
        }, 10);
    };
    SkyTextExpandRepeaterComponent.prototype.setup = function (value) {
        if (value) {
            var length_1 = value.length;
            if (length_1 > this.maxItems) {
                this.expandable = true;
                this.buttonText = this.seeMoreText;
                this.isExpanded = false;
            }
            else {
                this.expandable = false;
            }
            this.contentItems = value;
        }
        else {
            this.contentItems = undefined;
            this.expandable = false;
        }
    };
    return SkyTextExpandRepeaterComponent;
}());
export { SkyTextExpandRepeaterComponent };
SkyTextExpandRepeaterComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-text-expand-repeater',
                template: "<div class=\"sky-text-expand-repeater\">\n  <ul class=\"sky-text-expand-repeater-container\" (transitionend)=\"animationEnd()\" #container>\n    <li *ngFor=\"let item of contentItems\" class=\"sky-text-expand-repeater-item\">\n      {{item}}\n    </li>\n  </ul>\n  <button type=\"button\" class=\"sky-btn sky-btn-link-inline sky-text-expand-repeater-see-more\" *ngIf=\"expandable\" (click)=\"repeaterExpand()\">\n    {{buttonText}}\n  </button>\n</div>\n",
                styles: [".sky-text-expand-repeater-container {\n  overflow-y: hidden;\n  height: auto;\n  margin-bottom: 0;\n  transition: max-height 250ms;\n}\n\n.sky-text-expand-repeater-see-more {\n  white-space: nowrap;\n  padding-left: 40px;\n}\n"],
                providers: [
                    SkyTextExpandRepeaterAdapterService,
                    SkyResourcesService
                ]
            },] },
];
/** @nocollapse */
SkyTextExpandRepeaterComponent.ctorParameters = function () { return [
    { type: SkyResourcesService, },
    { type: ElementRef, },
    { type: SkyTextExpandRepeaterAdapterService, },
]; };
SkyTextExpandRepeaterComponent.propDecorators = {
    'maxItems': [{ type: Input },],
    'data': [{ type: Input },],
    'containerEl': [{ type: ViewChild, args: ['container',] },],
};
//# sourceMappingURL=text-expand-repeater.component.js.map