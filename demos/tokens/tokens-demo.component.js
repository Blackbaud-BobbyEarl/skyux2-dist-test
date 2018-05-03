import { Component } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { SkyTokensMessageType } from '../../core';
var SkyTokensDemoComponent = (function () {
    function SkyTokensDemoComponent() {
        this.defaultColors = [
            { name: 'Red' },
            { name: 'Black' },
            { name: 'Blue' },
            { name: 'Brown' },
            { name: 'Green' },
            { name: 'Orange' },
            { name: 'Pink' },
            { name: 'Purple' },
            { name: 'Turquoise' },
            { name: 'White' },
            { name: 'Yellow' }
        ];
        this.selectedFilters = [
            { label: 'Canada' },
            { label: 'Older than 55' },
            { label: 'Employed' },
            { label: 'Added before 2018' }
        ];
        this.createColors();
        this.filters = this.parseTokens(this.selectedFilters);
    }
    SkyTokensDemoComponent.prototype.ngOnDestroy = function () {
        if (this.tokensController) {
            this.tokensController.complete();
        }
    };
    SkyTokensDemoComponent.prototype.resetColors = function () {
        this.createColors();
    };
    SkyTokensDemoComponent.prototype.changeColors = function () {
        this.colors = this.parseTokens([
            { name: 'Red' },
            { name: 'White' },
            { name: 'Blue' }
        ]);
    };
    SkyTokensDemoComponent.prototype.destroyColors = function () {
        this.colors = undefined;
    };
    SkyTokensDemoComponent.prototype.createColors = function () {
        this.colors = this.parseTokens(this.defaultColors);
    };
    SkyTokensDemoComponent.prototype.onTokenSelected = function (args) {
        console.log('Token selected:', args);
    };
    SkyTokensDemoComponent.prototype.onFocusIndexUnderRange = function () {
        console.log('Focus index was less than zero.');
    };
    SkyTokensDemoComponent.prototype.onFocusIndexOverRange = function () {
        console.log('Focus index was greater than the number of tokens.');
    };
    SkyTokensDemoComponent.prototype.focusLastToken = function () {
        if (!this.tokensController) {
            this.tokensController = new Subject();
        }
        this.tokensController.next({
            type: SkyTokensMessageType.FocusLastToken
        });
    };
    SkyTokensDemoComponent.prototype.parseTokens = function (data) {
        return data.map(function (item) {
            return {
                value: item
            };
        });
    };
    return SkyTokensDemoComponent;
}());
export { SkyTokensDemoComponent };
SkyTokensDemoComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-tokens-demo',
                template: "<h3 class=\"sky-subsection-heading\">\n  Default setup\n</h3>\n\n<p>\n  These tokens can be navigated with the arrow keys, and they can be dismissed with the close buttons.\n</p>\n\n<p>\n  <sky-tokens\n    [(tokens)]=\"colors\">\n  </sky-tokens>\n</p>\n\n<hr>\n\n<h3 class=\"sky-subsection-heading\">\n  Non-dismissible tokens\n</h3>\n\n<p>\n  These tokens cannot be dismissed, but they can still be navigated with the arrow keys.\n</p>\n\n<p>\n  <sky-tokens\n    [(tokens)]=\"colors\"\n    [dismissible]=\"false\">\n  </sky-tokens>\n</p>\n\n<hr>\n\n<h3 class=\"sky-subsection-heading\">\n  Non-focusable tokens\n</h3>\n\n<p>\n  These tokens cannot be focused using the tab key, but they can still be clicked and navigated with the arrow keys.\n</p>\n\n<p>\n  <sky-tokens\n    [(tokens)]=\"colors\"\n    [dismissible]=\"false\"\n    [focusable]=\"false\">\n  </sky-tokens>\n</p>\n\n<hr>\n\n<h3 class=\"sky-subsection-heading\">\n  Disabled tokens\n</h3>\n\n<p>\n  These tokens are disabled and cannot be dismissed or navigated with the arrow keys.\n</p>\n\n<p>\n  <sky-tokens\n    [(tokens)]=\"colors\"\n    [disabled]=\"true\">\n  </sky-tokens>\n</p>\n\n<hr>\n\n<h3 class=\"sky-subsection-heading\">\n  Token value interactions\n</h3>\n\n<p>\n  <button\n    class=\"sky-btn sky-btn-default\"\n    type=\"button\"\n    (click)=\"changeColors()\">\n    Change tokens\n  </button>\n\n  <button\n    class=\"sky-btn sky-btn-default\"\n    type=\"button\"\n    (click)=\"resetColors()\">\n    Reset tokens\n  </button>\n\n  <button\n    class=\"sky-btn sky-btn-default\"\n    type=\"button\"\n    (click)=\"destroyColors()\">\n    Destroy tokens\n  </button>\n</p>\n\n<hr>\n\n<h3 class=\"sky-subsection-heading\">\n  Custom setup\n</h3>\n\n<p>\n  These tokens define a custom property to display their values. When users select a token, it emits an event.\n</p>\n\n<p>\n  <sky-tokens\n    displayWith=\"label\"\n    [(tokens)]=\"filters\"\n    [messageStream]=\"tokensController\"\n    (focusIndexOverRange)=\"onFocusIndexOverRange()\"\n    (focusIndexUnderRange)=\"onFocusIndexUnderRange()\"\n    (tokenSelected)=\"onTokenSelected($event)\">\n    (You may also include content inside the tokens component.)\n  </sky-tokens>\n</p>\n\n<p>\n  <button\n    class=\"sky-btn sky-btn-default\"\n    (click)=\"focusLastToken()\">\n    Focus last token\n  </button>\n</p>\n"
            },] },
];
/** @nocollapse */
SkyTokensDemoComponent.ctorParameters = function () { return []; };
//# sourceMappingURL=tokens-demo.component.js.map