import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
import { SkyDropdownMessageType } from '../dropdown';
import { SkyAutocompleteAdapterService } from './autocomplete-adapter.service';
import { SkyAutocompleteInputDirective } from './autocomplete-input.directive';
import { skyAutocompleteDefaultSearchFunction } from './autocomplete-default-search-function';
var SkyAutocompleteComponent = (function () {
    function SkyAutocompleteComponent(adapter, changeDetector, elementRef) {
        this.adapter = adapter;
        this.changeDetector = changeDetector;
        this.elementRef = elementRef;
        this.ngUnsubscribe = new Subject();
        this.isMouseEnter = false;
        this.searchResultsIndex = 0;
        this._dropdownController = new Subject();
        this._selectionChange = new EventEmitter();
    }
    Object.defineProperty(SkyAutocompleteComponent.prototype, "data", {
        get: function () {
            return this._data || [];
        },
        set: function (value) {
            this._data = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyAutocompleteComponent.prototype, "descriptorProperty", {
        get: function () {
            return this._descriptorProperty || 'name';
        },
        set: function (value) {
            this._descriptorProperty = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyAutocompleteComponent.prototype, "propertiesToSearch", {
        get: function () {
            return this._propertiesToSearch || ['name'];
        },
        set: function (value) {
            this._propertiesToSearch = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyAutocompleteComponent.prototype, "search", {
        get: function () {
            return this._search || skyAutocompleteDefaultSearchFunction({
                propertiesToSearch: this.propertiesToSearch,
                searchFilters: this.searchFilters,
                searchResultsLimit: this.searchResultsLimit
            });
        },
        set: function (value) {
            this._search = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyAutocompleteComponent.prototype, "searchResultTemplate", {
        get: function () {
            return this._searchResultTemplate || this.defaultSearchResultTemplate;
        },
        set: function (value) {
            this._searchResultTemplate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyAutocompleteComponent.prototype, "searchTextMinimumCharacters", {
        get: function () {
            return (this._searchTextMinimumCharacters > 0)
                ? this._searchTextMinimumCharacters : 1;
        },
        set: function (value) {
            this._searchTextMinimumCharacters = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyAutocompleteComponent.prototype, "selectionChange", {
        get: function () {
            return this._selectionChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyAutocompleteComponent.prototype, "dropdownController", {
        get: function () {
            return this._dropdownController;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyAutocompleteComponent.prototype, "searchResults", {
        get: function () {
            return this._searchResults || [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyAutocompleteComponent.prototype, "highlightText", {
        get: function () {
            return this._highlightText || '';
        },
        enumerable: true,
        configurable: true
    });
    SkyAutocompleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        var element = this.elementRef.nativeElement;
        Observable
            .fromEvent(element, 'keydown')
            .takeUntil(this.ngUnsubscribe)
            .subscribe(function (event) {
            _this.handleKeyDown(event);
        });
        Observable
            .fromEvent(element, 'mouseenter')
            .takeUntil(this.ngUnsubscribe)
            .subscribe(function () {
            _this.isMouseEnter = true;
        });
        Observable
            .fromEvent(element, 'mouseleave')
            .takeUntil(this.ngUnsubscribe)
            .subscribe(function () {
            _this.isMouseEnter = false;
        });
    };
    SkyAutocompleteComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (!this.inputDirective) {
            throw Error([
                'The SkyAutocompleteComponent requires a ContentChild input or',
                'textarea bound with the SkyAutocomplete directive. For example:',
                '`<input type="text" skyAutocomplete>`.'
            ].join(' '));
        }
        this.inputDirective.displayWith = this.descriptorProperty;
        this.inputDirective.textChanges
            .takeUntil(this.ngUnsubscribe)
            .subscribe(function (change) {
            _this.searchTextChanged(change.value);
        });
        this.inputDirective.blur
            .takeUntil(this.ngUnsubscribe)
            .subscribe(function () {
            if (!_this.isMouseEnter) {
                _this.searchText = '';
                _this.closeDropdown();
            }
        });
        this.adapter.watchDropdownWidth(this.elementRef);
    };
    SkyAutocompleteComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    SkyAutocompleteComponent.prototype.onMenuChanges = function (change) {
        if (change.activeIndex !== undefined) {
            this.searchResultsIndex = change.activeIndex;
        }
        if (change.selectedItem) {
            this.selectActiveSearchResult();
        }
        if (change.items) {
            this.sendDropdownMessage(SkyDropdownMessageType.FocusFirstItem);
        }
    };
    SkyAutocompleteComponent.prototype.handleKeyDown = function (event) {
        var key = event.key.toLowerCase();
        /* tslint:disable-next-line:switch-default */
        switch (key) {
            case 'arrowup':
                this.sendDropdownMessage(SkyDropdownMessageType.FocusPreviousItem);
                event.preventDefault();
                break;
            case 'arrowdown':
                // Trigger a search if there is search text and the dropdown is not open.
                if (this.searchText && !this.hasSearchResults()) {
                    var text = this.searchText;
                    this.searchText = '';
                    this.searchTextChanged(text);
                    event.preventDefault();
                }
                else {
                    this.sendDropdownMessage(SkyDropdownMessageType.FocusNextItem);
                    event.preventDefault();
                }
                break;
            case 'tab':
            case 'enter':
                /* istanbul ignore else */
                if (this.hasSearchResults()) {
                    this.selectActiveSearchResult();
                    event.preventDefault();
                    event.stopPropagation();
                }
                break;
            case 'escape':
                this.closeDropdown();
                event.preventDefault();
                break;
        }
    };
    SkyAutocompleteComponent.prototype.searchTextChanged = function (searchText) {
        var _this = this;
        var isEmpty = (!searchText || searchText.match(/^\s+$/));
        if (isEmpty) {
            this.searchText = '';
            this.closeDropdown();
            return;
        }
        var isLongEnough = (searchText.length >= this.searchTextMinimumCharacters);
        var isDifferent = (searchText !== this.searchText);
        this.searchText = searchText.trim();
        if (isLongEnough && isDifferent) {
            this.performSearch().then(function (results) {
                if (!_this.hasSearchResults()) {
                    _this.sendDropdownMessage(SkyDropdownMessageType.Open);
                }
                _this._searchResults = results;
                _this._highlightText = _this.searchText;
                _this.changeDetector.markForCheck();
            });
        }
    };
    SkyAutocompleteComponent.prototype.performSearch = function () {
        var result = this.search(this.searchText, this.data);
        if (result instanceof Array) {
            return Promise.resolve(result);
        }
        return result;
    };
    SkyAutocompleteComponent.prototype.selectActiveSearchResult = function () {
        var result = this.searchResults[this.searchResultsIndex];
        this.searchText = result[this.descriptorProperty];
        this.inputDirective.value = result;
        this.selectionChange.emit({
            selectedItem: result
        });
        this.closeDropdown();
    };
    SkyAutocompleteComponent.prototype.closeDropdown = function () {
        this._searchResults = [];
        this._highlightText = '';
        this.changeDetector.markForCheck();
        this.sendDropdownMessage(SkyDropdownMessageType.Close);
    };
    SkyAutocompleteComponent.prototype.sendDropdownMessage = function (type) {
        this.dropdownController.next({ type: type });
    };
    SkyAutocompleteComponent.prototype.hasSearchResults = function () {
        return (this.searchResults && this.searchResults.length > 0);
    };
    return SkyAutocompleteComponent;
}());
export { SkyAutocompleteComponent };
SkyAutocompleteComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-autocomplete',
                template: "<div class=\"sky-autocomplete\">\n  <ng-content>\n  </ng-content>\n  <div class=\"sky-autocomplete-results\">\n\n    <sky-dropdown\n      [dismissOnBlur]=\"false\"\n      [messageStream]=\"dropdownController\">\n\n      <sky-dropdown-button>\n      </sky-dropdown-button>\n\n      <sky-dropdown-menu\n        [useNativeFocus]=\"false\"\n        [skyHighlight]=\"highlightText\"\n        (menuChanges)=\"onMenuChanges($event)\">\n\n        <sky-dropdown-item\n          *ngFor=\"let result of searchResults; let i = index\">\n\n          <button\n            type=\"button\">\n            <ng-container\n              *ngTemplateOutlet=\"searchResultTemplate; context: { item: result }\">\n            </ng-container>\n          </button>\n\n        </sky-dropdown-item>\n      </sky-dropdown-menu>\n    </sky-dropdown>\n  </div>\n  <ng-template\n    let-item=\"item\"\n    #defaultSearchResultTemplate>\n    {{ item[descriptorProperty] }}\n  </ng-template>\n</div>\n",
                styles: [".sky-autocomplete {\n  position: relative;\n}\n\n.sky-autocomplete ::ng-deep .sky-dropdown-button {\n  visibility: hidden;\n  overflow: hidden;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n"],
                providers: [SkyAutocompleteAdapterService],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
SkyAutocompleteComponent.ctorParameters = function () { return [
    { type: SkyAutocompleteAdapterService, },
    { type: ChangeDetectorRef, },
    { type: ElementRef, },
]; };
SkyAutocompleteComponent.propDecorators = {
    'data': [{ type: Input },],
    'descriptorProperty': [{ type: Input },],
    'propertiesToSearch': [{ type: Input },],
    'search': [{ type: Input },],
    'searchResultTemplate': [{ type: Input },],
    'searchTextMinimumCharacters': [{ type: Input },],
    'searchFilters': [{ type: Input },],
    'searchResultsLimit': [{ type: Input },],
    'selectionChange': [{ type: Output },],
    'defaultSearchResultTemplate': [{ type: ViewChild, args: ['defaultSearchResultTemplate',] },],
    'inputDirective': [{ type: ContentChild, args: [SkyAutocompleteInputDirective,] },],
};
//# sourceMappingURL=autocomplete.component.js.map