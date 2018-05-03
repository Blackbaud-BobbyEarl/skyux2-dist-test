import { Component, ElementRef, Output, Input, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { SkySearchAdapterService } from './search-adapter.service';
import { SkyMediaBreakpoints, SkyMediaQueryService } from '../media-queries';
import { SkyResourcesService } from '../resources';
import { style, state, trigger, transition, animate } from '@angular/animations';
var INPUT_SHOWN_STATE = 'inputShown';
var INPUT_HIDDEN_STATE = 'inputHidden';
var EXPAND_MODE_RESPONSIVE = 'responsive';
var EXPAND_MODE_FIT = 'fit';
var EXPAND_MODE_NONE = 'none';
var SkySearchComponent = (function () {
    function SkySearchComponent(mediaQueryService, elRef, searchAdapter, resources, changeRef) {
        this.mediaQueryService = mediaQueryService;
        this.elRef = elRef;
        this.searchAdapter = searchAdapter;
        this.resources = resources;
        this.changeRef = changeRef;
        this.searchApply = new EventEmitter();
        this.searchChange = new EventEmitter();
        this.searchClear = new EventEmitter();
        this.expandMode = EXPAND_MODE_RESPONSIVE;
        this.isFullWidth = false;
        this.isCollapsible = true;
        this.inputAnimate = INPUT_SHOWN_STATE;
        this.searchButtonShown = false;
        this.mobileSearchShown = false;
        this.dismissButtonShown = false;
        this.clearButtonShown = false;
        this.searchInputFocused = false;
    }
    Object.defineProperty(SkySearchComponent.prototype, "placeholderText", {
        get: function () {
            if (this._placeholderText === undefined) {
                return this.resources.getString('search_placeholder');
            }
            else {
                return this._placeholderText;
            }
        },
        set: function (value) {
            this._placeholderText = value;
        },
        enumerable: true,
        configurable: true
    });
    SkySearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.searchShouldCollapse()) {
            this.breakpointSubscription = this.mediaQueryService.subscribe(function (args) {
                _this.mediaQueryCallback(args);
                _this.changeRef.detectChanges();
            });
        }
    };
    SkySearchComponent.prototype.ngOnChanges = function (changes) {
        if (this.expandModeBindingChanged(changes)) {
            switch (this.expandMode) {
                case EXPAND_MODE_NONE:
                    this.isCollapsible = false;
                    this.isFullWidth = false;
                    break;
                case EXPAND_MODE_FIT:
                    this.isCollapsible = false;
                    this.isFullWidth = true;
                    break;
                default:
                    this.isCollapsible = true;
                    this.isFullWidth = false;
                    break;
            }
        }
        if (this.searchBindingChanged(changes)) {
            this.clearButtonShown = this.searchText && this.searchText !== '';
            if (this.shouldOpenInput()) {
                this.inputAnimate = INPUT_SHOWN_STATE;
            }
        }
        this.changeRef.detectChanges();
    };
    SkySearchComponent.prototype.inputFocused = function (isFocused) {
        this.searchInputFocused = isFocused;
    };
    SkySearchComponent.prototype.clearSearchText = function () {
        this.searchText = '';
        this.clearButtonShown = false;
        this.searchAdapter.focusInput(this.elRef);
        this.searchChange.emit(this.searchText);
        this.searchApply.emit(this.searchText);
        this.searchClear.emit();
    };
    SkySearchComponent.prototype.enterPress = function (event, searchText) {
        if (event.which === 13) {
            this.applySearchText(searchText);
        }
    };
    SkySearchComponent.prototype.applySearchText = function (searchText) {
        if (searchText !== this.searchText) {
            this.searchText = searchText;
        }
        this.clearButtonShown = searchText && searchText !== '';
        if (searchText && searchText !== '') {
            this.searchAdapter.selectInput(this.elRef);
        }
        this.searchApply.emit(searchText);
    };
    SkySearchComponent.prototype.searchTextChanged = function (searchText) {
        this.searchText = searchText;
        this.searchChange.emit(searchText);
    };
    SkySearchComponent.prototype.toggleSearchInput = function (showInput) {
        if (this.searchShouldCollapse()) {
            if (showInput) {
                this.inputAnimate = INPUT_SHOWN_STATE;
            }
            else {
                this.inputAnimate = INPUT_HIDDEN_STATE;
            }
        }
    };
    SkySearchComponent.prototype.inputAnimationStart = function (event) {
        if (this.searchShouldCollapse()) {
            this.searchAdapter.startInputAnimation(this.elRef);
            if (event.toState === INPUT_SHOWN_STATE
                && this.mediaQueryService.current === SkyMediaBreakpoints.xs) {
                this.mobileSearchShown = true;
                this.searchButtonShown = false;
            }
        }
    };
    SkySearchComponent.prototype.inputAnimationEnd = function (event) {
        if (this.searchShouldCollapse()) {
            this.searchAdapter.endInputAnimation(this.elRef);
            this.searchButtonShown = event.toState === INPUT_HIDDEN_STATE
                && this.mediaQueryService.current === SkyMediaBreakpoints.xs;
            if ((event.toState === INPUT_HIDDEN_STATE
                && this.mediaQueryService.current === SkyMediaBreakpoints.xs)
                || this.mediaQueryService.current !== SkyMediaBreakpoints.xs) {
                this.mobileSearchShown = false;
            }
        }
    };
    SkySearchComponent.prototype.ngOnDestroy = function () {
        if (this.breakpointSubscription) {
            this.breakpointSubscription.unsubscribe();
        }
    };
    SkySearchComponent.prototype.searchBindingChanged = function (changes) {
        return changes['searchText'] &&
            changes['searchText'].previousValue !== changes['searchText'].currentValue;
    };
    SkySearchComponent.prototype.expandModeBindingChanged = function (changes) {
        return changes['expandMode'] &&
            changes['expandMode'].previousValue !== changes['expandMode'].currentValue;
    };
    SkySearchComponent.prototype.shouldOpenInput = function () {
        return this.searchText !== '' &&
            this.mediaQueryService.current === SkyMediaBreakpoints.xs && this.searchShouldCollapse();
    };
    SkySearchComponent.prototype.mediaQueryCallback = function (args) {
        if (this.searchShouldCollapse()) {
            if (args === SkyMediaBreakpoints.xs) {
                this.inputAnimate = INPUT_HIDDEN_STATE;
            }
            else if (this.inputAnimate !== INPUT_SHOWN_STATE) {
                this.inputAnimate = INPUT_SHOWN_STATE;
            }
            else {
                this.mobileSearchShown = false;
            }
        }
        this.changeRef.markForCheck();
    };
    SkySearchComponent.prototype.searchShouldCollapse = function () {
        return (this.isCollapsible || this.isCollapsible === undefined) && this.isFullWidth !== true;
    };
    return SkySearchComponent;
}());
export { SkySearchComponent };
SkySearchComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-search',
                template: "<div class=\"sky-search-container\">\n  <div\n    class=\"sky-search-button-container\">\n    <button\n      type=\"button\"\n      [ngClass]=\"{'sky-search-btn-open-applied': clearButtonShown}\"\n      [hidden]=\"!searchButtonShown\"\n      class=\"sky-btn sky-btn-default sky-search-btn-open\"\n      [attr.title]=\"'search_open' | skyResources\"\n      (click)=\"toggleSearchInput(true)\">\n      <i class=\"fa fa-search fa-lg\"></i>\n    </button>\n  </div>\n  <div\n    [hidden]=\"searchButtonShown\"\n    [ngClass]=\"{'sky-search-dismiss-absolute': mobileSearchShown || isFullWidth }\"\n    class=\"sky-search-dismiss-container\">\n    <div class=\"sky-search-item-input\">\n      <div\n        [ngClass]=\"{'sky-search-input-focused sky-rounded-corners': searchInputFocused}\"\n        [@inputState]=\"inputAnimate\"\n        (@inputState.start)=\"inputAnimationStart($event)\"\n        (@inputState.done)=\"inputAnimationEnd($event)\"\n        class=\"sky-search-input-container sky-input-group\">\n        <input\n          type=\"text\"\n          class=\"sky-form-control sky-search-input sky-rounded-corners\"\n          [ngModel]=\"searchText\"\n          (ngModelChange)=\"searchTextChanged($event)\"\n          (keyup)=\"enterPress($event, searchText)\"\n          (focus)=\"inputFocused(true)\"\n          (blur)=\"inputFocused(false)\"\n          [attr.aria-label]=\"'search_label' | skyResources\"\n          [attr.placeholder]=\"placeholderText\" />\n        <span\n          class=\"sky-input-group-btn sky-input-group-clear\"\n          [hidden]=\"!clearButtonShown\">\n          <button\n            tabindex=\"-1\"\n            aria-hidden=\"true\"\n            type=\"button\"\n            class=\"sky-btn sky-btn-default sky-search-btn sky-search-btn-clear\"\n            (click)=\"clearSearchText()\">\n            <i class=\"fa fa-times\"></i>\n          </button>\n        </span>\n        <span\n          class=\"sky-input-group-btn\">\n          <button\n            type=\"button\"\n            class=\"sky-btn sky-btn-default sky-search-btn sky-search-btn-apply\"\n            (click)=\"applySearchText(searchText)\"\n            [attr.aria-label]=\"'search_label' | skyResources\" >\n            <i class=\"fa fa-search fa-lg\"></i>\n          </button>\n        </span>\n      </div>\n    </div>\n    <div class=\"sky-search-item-dismiss\">\n      <button\n        *ngIf=\"mobileSearchShown\"\n        type=\"button\"\n        [attr.title]=\"'search_dismiss' | skyResources\"\n        class=\"sky-btn sky-btn-secondary sky-search-btn-dismiss\"\n        (click)=\"toggleSearchInput(false)\">\n        <i class=\"fa fa-chevron-circle-left fa-lg\">\n        </i>\n      </button>\n    </div>\n  </div>\n</div>\n",
                styles: [".sky-search-input {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-right: 0 none;\n  /**\n   * Prevents the IE clear icon from displaying in the input\n   * because our search control already includes a clear icon.\n   */\n}\n\n.sky-search-input:focus {\n  border: 0 none;\n  box-shadow: none;\n  outline: none;\n}\n\n.sky-search-input::-ms-clear {\n  display: none;\n}\n\n.sky-search-btn {\n  border-left: 0 none;\n}\n\n.sky-search-btn:hover, .sky-search-btn:focus {\n  background-color: #ffffff;\n}\n\n.sky-search-btn-apply {\n  padding-left: 6px;\n  border-top: 1px solid #cdcfd2;\n  border-bottom: 1px solid #cdcfd2;\n  border-right: 1px solid #cdcfd2;\n}\n\n.sky-search-btn-clear {\n  border-right: 0 none;\n  padding-right: 6px;\n  border-top: 1px solid #cdcfd2;\n  border-bottom: 1px solid #cdcfd2;\n}\n\n.sky-search-input-focused {\n  box-shadow: 0 0 8px rgba(0, 180, 241, 0.6);\n  border: 1px solid #00b4f1;\n  outline: none;\n}\n\n.sky-search-input-focused .sky-search-btn {\n  border-color: transparent;\n  border-top: 0 none;\n  border-bottom: 0 none;\n}\n\n.sky-search-input-focused .sky-search-btn-apply {\n  border-right: 0 none;\n}\n\n/**\n * Mobile styles\n */\n@media (min-width: 768px) {\n  .sky-search-input-container {\n    min-width: 300px !important;\n  }\n}\n\n/**\n * On iOS, the input will zoom when focused,\n * setting the font-size prevents this.\n */\n@media (max-width: 767px) {\n  .sky-search-input,\n  .sky-search-btn-apply,\n  .sky-search-btn-clear {\n    font-size: 15px;\n  }\n}\n\n.sky-search-btn-open-applied.sky-search-btn-open, .sky-search-btn-open-applied.sky-search-btn-open:hover {\n  color: #71bf43;\n  border: 2px solid #71bf43;\n  padding: 5px 11px;\n}\n\n.sky-search-dismiss-container {\n  display: flex;\n}\n\n.sky-search-item-dismiss {\n  flex-shrink: 0;\n  display: flex;\n}\n\n.sky-search-item-dismiss > .sky-btn {\n  border-color: transparent;\n}\n\n.sky-search-item-input {\n  flex-grow: 1;\n  display: flex;\n}\n\n.sky-search-dismiss-absolute {\n  position: absolute;\n  background-color: #ffffff;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  padding: 5px;\n}\n"],
                animations: [
                    trigger('inputState', [
                        state(INPUT_HIDDEN_STATE, style({
                            opacity: 0,
                            width: 0
                        })),
                        state(INPUT_SHOWN_STATE, style({
                            opacity: 1,
                            width: '100%'
                        })),
                        transition('* <=> *', animate('150ms'))
                    ])
                ],
                providers: [
                    SkySearchAdapterService,
                    SkyResourcesService
                ]
            },] },
];
/** @nocollapse */
SkySearchComponent.ctorParameters = function () { return [
    { type: SkyMediaQueryService, },
    { type: ElementRef, },
    { type: SkySearchAdapterService, },
    { type: SkyResourcesService, },
    { type: ChangeDetectorRef, },
]; };
SkySearchComponent.propDecorators = {
    'searchApply': [{ type: Output },],
    'searchChange': [{ type: Output },],
    'searchClear': [{ type: Output },],
    'searchText': [{ type: Input },],
    'expandMode': [{ type: Input },],
    'placeholderText': [{ type: Input },],
};
//# sourceMappingURL=search.component.js.map