import { Component, Input, ViewChild } from '@angular/core';
import { SkyResourcesService } from '../resources';
import { SkyModalService } from '../modal';
import { SkyTextExpandModalComponent } from './text-expand-modal.component';
import { SkyTextExpandModalContext } from './text-expand-modal-context';
import { SkyTextExpandAdapterService } from './text-expand-adapter.service';
var SkyTextExpandComponent = (function () {
    function SkyTextExpandComponent(resources, modalService, textExpandAdapter) {
        this.resources = resources;
        this.modalService = modalService;
        this.textExpandAdapter = textExpandAdapter;
        this._maxLength = 200;
        this.truncateNewlines = true;
        this.maxExpandedLength = 600;
        this.maxExpandedNewlines = 2;
        this.expandModalTitle = this.resources.getString('text_expand_modal_title');
        this.isExpanded = false;
        this.seeMoreText = this.resources.getString('text_expand_see_more');
        this.seeLessText = this.resources.getString('text_expand_see_less');
    }
    Object.defineProperty(SkyTextExpandComponent.prototype, "text", {
        set: function (value) {
            this.setup(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyTextExpandComponent.prototype, "maxLength", {
        get: function () { return this._maxLength; },
        set: function (value) {
            this._maxLength = value;
            this.setup(this.expandedText);
        },
        enumerable: true,
        configurable: true
    });
    SkyTextExpandComponent.prototype.textExpand = function () {
        var _this = this;
        if (this.newlineCount > this.maxExpandedNewlines
            || this.expandedText.length > this.maxExpandedLength) {
            // Modal View
            /* istanbul ignore else */
            /* sanity check */
            if (!this.isExpanded) {
                this.modalService.open(SkyTextExpandModalComponent, [
                    {
                        provide: SkyTextExpandModalContext,
                        useValue: {
                            header: this.expandModalTitle,
                            text: this.expandedText
                        }
                    }
                ]);
            }
        }
        else {
            // Normal View
            if (!this.isExpanded) {
                this.setContainerMaxHeight();
                setTimeout(function () {
                    _this.isExpanded = true;
                    _this
                        .animateText(_this.collapsedText, _this.expandedText, true);
                }, 10);
            }
            else {
                this.setContainerMaxHeight();
                setTimeout(function () {
                    _this.isExpanded = false;
                    _this
                        .animateText(_this.expandedText, _this.collapsedText, false);
                }, 10);
            }
        }
    };
    SkyTextExpandComponent.prototype.animationEnd = function () {
        // Ensure the correct text is displayed
        this.textExpandAdapter.setText(this.textEl, this.textToShow);
        // Set height back to auto so the browser can change the height as needed with window changes
        this.textExpandAdapter.setContainerHeight(this.containerEl, undefined);
    };
    SkyTextExpandComponent.prototype.ngAfterContentInit = function () {
        this.setup(this.expandedText);
    };
    SkyTextExpandComponent.prototype.setContainerMaxHeight = function () {
        // ensure everything is reset
        this.animationEnd();
        /* Before animation is kicked off, ensure that a maxHeight exists */
        /* Once we have support for angular v4 animations with parameters we can use that instead */
        var currentHeight = this.textExpandAdapter.getContainerHeight(this.containerEl);
        this.textExpandAdapter.setContainerHeight(this.containerEl, currentHeight + "px");
    };
    SkyTextExpandComponent.prototype.setup = function (value) {
        if (value) {
            this.newlineCount = this.getNewlineCount(value);
            this.collapsedText = this.getTruncatedText(value, this.maxLength);
            this.expandedText = value;
            if (this.collapsedText !== value) {
                this.buttonText = this.seeMoreText;
                this.isExpanded = false;
                this.expandable = true;
            }
            else {
                this.expandable = false;
            }
            this.textToShow = this.collapsedText;
        }
        else {
            this.textToShow = '';
            this.expandable = false;
        }
        this.textExpandAdapter.setText(this.textEl, this.textToShow);
    };
    SkyTextExpandComponent.prototype.getNewlineCount = function (value) {
        var matches = value.match(/\n/gi);
        if (matches) {
            return matches.length;
        }
        return 0;
    };
    SkyTextExpandComponent.prototype.getTruncatedText = function (value, length) {
        var i;
        if (this.truncateNewlines) {
            value = value.replace(/\n+/gi, ' ');
        }
        // Jump ahead one character and see if it's a space, and if it isn't,
        // back up to the first space and break there so a word doesn't get cut
        // in half.
        if (length < value.length) {
            for (i = length; i > length - 10; i--) {
                if (/\s/.test(value.charAt(i))) {
                    length = i;
                    break;
                }
            }
        }
        return value.substr(0, length);
    };
    SkyTextExpandComponent.prototype.animateText = function (previousText, newText, expanding) {
        var _this = this;
        var adapter = this.textExpandAdapter;
        var container = this.containerEl;
        // Reset max height
        adapter.setContainerHeight(container, undefined);
        // Measure the current height so we can animate from it.
        var currentHeight = adapter.getContainerHeight(container);
        this.textToShow = newText;
        adapter.setText(this.textEl, this.textToShow);
        this.buttonText = expanding ? this.seeLessText : this.seeMoreText;
        // Measure the new height so we can animate to it.
        var newHeight = adapter.getContainerHeight(container);
        if (newHeight < currentHeight) {
            // The new text is smaller than the old text, so put the old text back before doing
            // the collapse animation to avoid showing a big chunk of whitespace.
            adapter.setText(this.textEl, previousText);
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
    return SkyTextExpandComponent;
}());
export { SkyTextExpandComponent };
SkyTextExpandComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-text-expand',
                template: "<div\n  class=\"sky-text-expand-container\"\n  (transitionend)=\"animationEnd()\"\n   #container>\n  <span class=\"sky-text-expand-text\" #text></span>\n  <span class=\"sky-text-expand-ellipsis\" *ngIf=\"!isExpanded && expandable\">... </span>\n  <button type=\"button\" class=\"sky-btn sky-btn-link-inline sky-text-expand-see-more\" *ngIf=\"expandable\" (click)=\"textExpand()\">{{buttonText}}</button>\n</div>\n",
                styles: [".sky-text-expand-ellipsis {\n  letter-spacing: 2px;\n  white-space: nowrap;\n  margin-right: 3px;\n}\n\n.sky-text-expand-space {\n  white-space: normal;\n}\n\n.sky-text-expand-see-more {\n  white-space: nowrap;\n}\n\n.sky-text-expand-text {\n  margin: 0;\n  white-space: pre-wrap;\n}\n\n.sky-text-expand-container {\n  word-break: break-word;\n  word-wrap: break-word;\n  overflow: hidden;\n  height: auto;\n  transition: max-height 250ms;\n}\n\n.sky-text-expand-modal-content {\n  white-space: pre-line;\n}\n"],
                providers: [
                    SkyTextExpandAdapterService,
                    SkyResourcesService
                ]
            },] },
];
/** @nocollapse */
SkyTextExpandComponent.ctorParameters = function () { return [
    { type: SkyResourcesService, },
    { type: SkyModalService, },
    { type: SkyTextExpandAdapterService, },
]; };
SkyTextExpandComponent.propDecorators = {
    'text': [{ type: Input },],
    'truncateNewlines': [{ type: Input },],
    'maxLength': [{ type: Input },],
    'maxExpandedLength': [{ type: Input },],
    'maxExpandedNewlines': [{ type: Input },],
    'expandModalTitle': [{ type: Input },],
    'containerEl': [{ type: ViewChild, args: ['container',] },],
    'textEl': [{ type: ViewChild, args: ['text',] },],
};
//# sourceMappingURL=text-expand.component.js.map