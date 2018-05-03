import { Directive, ElementRef, Input } from '@angular/core';
import { MutationObserverService } from '../mutation/mutation-observer-service';
var className = 'sky-highlight-mark';
var SkyTextHighlightDirective = (function () {
    function SkyTextHighlightDirective(el, observerService) {
        this.el = el;
        this.observerService = observerService;
        this.skyHighlight = undefined;
        this.existingHighlight = false;
    }
    SkyTextHighlightDirective.getRegexMatch = function (node, searchText) {
        var text = node.nodeValue;
        var newSearchText = searchText.replace(/\\/g, '\\\\');
        var searchRegex = new RegExp(newSearchText, 'gi');
        return searchRegex.exec(text);
    };
    SkyTextHighlightDirective.markNode = function (node, searchText) {
        var regexMatch = SkyTextHighlightDirective.getRegexMatch(node, searchText);
        // found match
        if (regexMatch && regexMatch.length > 0) {
            // split apart text node with mark tags in the middle on the search term
            var matchIndex = regexMatch.index;
            var middle = node.splitText(matchIndex);
            middle.splitText(searchText.length);
            var middleClone = middle.cloneNode(true);
            var markNode = document.createElement('mark');
            markNode.className = className;
            markNode.appendChild(middleClone);
            middle.parentNode.replaceChild(markNode, middle);
            return 1;
        }
        else {
            return 0;
        }
    };
    SkyTextHighlightDirective.markTextNodes = function (node, searchText) {
        if (node.nodeType === 3) {
            return SkyTextHighlightDirective.markNode(node, searchText);
        }
        else if (node.nodeType === 1 && node.childNodes) {
            for (var i = 0; i < node.childNodes.length; i++) {
                var childNode = node.childNodes[i];
                i += SkyTextHighlightDirective.markTextNodes(childNode, searchText);
            }
        }
        return 0;
    };
    SkyTextHighlightDirective.removeHighlight = function (el) {
        var matchedElements = el.nativeElement.querySelectorAll("mark." + className);
        /* istanbul ignore else */
        /* sanity check */
        if (matchedElements) {
            for (var i = 0; i < matchedElements.length; i++) {
                var node = matchedElements[i];
                var parentNode = node.parentNode;
                parentNode.replaceChild(node.firstChild, node);
                parentNode.normalize();
            }
        }
    };
    SkyTextHighlightDirective.prototype.ngOnChanges = function (changes) {
        if (changes.skyHighlight && !changes.skyHighlight.firstChange) {
            this.highlight();
        }
    };
    SkyTextHighlightDirective.prototype.ngAfterViewInit = function () {
        var me = this;
        this.observer = this.observerService.create(function (mutations) {
            me.highlight();
        });
        this.observeDom();
    };
    SkyTextHighlightDirective.prototype.ngAfterContentChecked = function () {
        this.highlight();
    };
    SkyTextHighlightDirective.prototype.ngOnDestroy = function () {
        if (this.observer) {
            this.observer.disconnect();
        }
    };
    SkyTextHighlightDirective.prototype.readyForHighlight = function (searchText) {
        return searchText && this.el.nativeElement;
    };
    SkyTextHighlightDirective.prototype.highlight = function () {
        if (this.observer) {
            this.observer.disconnect();
        }
        var searchText = this.skyHighlight;
        if (this.existingHighlight) {
            SkyTextHighlightDirective.removeHighlight(this.el);
        }
        if (this.readyForHighlight(searchText)) {
            var node = this.el.nativeElement;
            // mark all matched text in the DOM
            SkyTextHighlightDirective.markTextNodes(node, searchText);
            this.existingHighlight = true;
        }
        this.observeDom();
    };
    SkyTextHighlightDirective.prototype.observeDom = function () {
        if (this.observer) {
            var config = { attributes: true, childList: true, characterData: true };
            this.observer.observe(this.el.nativeElement, config);
        }
    };
    return SkyTextHighlightDirective;
}());
export { SkyTextHighlightDirective };
SkyTextHighlightDirective.decorators = [
    { type: Directive, args: [{
                selector: '[skyHighlight]'
            },] },
];
/** @nocollapse */
SkyTextHighlightDirective.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: MutationObserverService, },
]; };
SkyTextHighlightDirective.propDecorators = {
    'skyHighlight': [{ type: Input },],
};
//# sourceMappingURL=text-highlight.directive.js.map