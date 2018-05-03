import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, EventEmitter, HostListener, Input, Optional, Output } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
import { SkyDropdownComponent } from './dropdown.component';
import { SkyDropdownItemComponent } from './dropdown-item.component';
import { SkyDropdownMessageType } from './types';
var SkyDropdownMenuComponent = (function () {
    function SkyDropdownMenuComponent(changeDetector, dropdownComponent) {
        this.changeDetector = changeDetector;
        this.dropdownComponent = dropdownComponent;
        this.useNativeFocus = true;
        this.menuChanges = new EventEmitter();
        this.ngUnsubscribe = new Subject();
        this._menuIndex = 0;
    }
    Object.defineProperty(SkyDropdownMenuComponent.prototype, "menuIndex", {
        get: function () {
            return this._menuIndex;
        },
        set: function (value) {
            if (value < 0) {
                value = this.menuItems.length - 1;
            }
            if (value >= this.menuItems.length) {
                value = 0;
            }
            this._menuIndex = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyDropdownMenuComponent.prototype, "hasFocusableItems", {
        get: function () {
            var found = this.menuItems.find(function (item) { return item.isFocusable(); });
            return (found !== undefined);
        },
        enumerable: true,
        configurable: true
    });
    SkyDropdownMenuComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        /* istanbul ignore else */
        if (this.dropdownComponent) {
            this.dropdownComponent.messageStream
                .takeUntil(this.ngUnsubscribe)
                .subscribe(function (message) {
                /* tslint:disable-next-line:switch-default */
                switch (message.type) {
                    case SkyDropdownMessageType.Open:
                    case SkyDropdownMessageType.Close:
                        _this.reset();
                        break;
                    case SkyDropdownMessageType.FocusFirstItem:
                        _this.focusFirstItem();
                        break;
                    case SkyDropdownMessageType.FocusNextItem:
                        _this.focusNextItem();
                        break;
                    case SkyDropdownMessageType.FocusPreviousItem:
                        _this.focusPreviousItem();
                        break;
                }
            });
            this.menuChanges
                .takeUntil(this.ngUnsubscribe)
                .subscribe(function (change) {
                // Close the dropdown when a menu item is selected.
                if (change.selectedItem) {
                    _this.dropdownComponent.messageStream.next({
                        type: SkyDropdownMessageType.Close
                    });
                }
                if (change.items) {
                    // Update the popover style and position whenever the number of
                    // items changes.
                    _this.dropdownComponent.messageStream.next({
                        type: SkyDropdownMessageType.Reposition
                    });
                }
            });
        }
        // Reset dropdown whenever the menu items change.
        this.menuItems.changes
            .takeUntil(this.ngUnsubscribe)
            .subscribe(function (items) {
            _this.reset();
            _this.menuChanges.emit({
                items: items.toArray()
            });
        });
    };
    SkyDropdownMenuComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    SkyDropdownMenuComponent.prototype.onClick = function (event) {
        var _this = this;
        var selectedItem = this.menuItems
            .find(function (item, i) {
            var found = (item.elementRef.nativeElement.contains(event.target));
            if (found) {
                _this.menuIndex = i;
                _this.menuChanges.next({
                    activeIndex: _this.menuIndex
                });
            }
            return found;
        });
        /* istanbul ignore else */
        if (selectedItem) {
            this.menuChanges.next({
                selectedItem: selectedItem
            });
        }
    };
    SkyDropdownMenuComponent.prototype.onKeyDown = function (event) {
        var key = event.key.toLowerCase();
        if (key === 'arrowdown' || key === 'down') {
            this.focusNextItem();
            event.preventDefault();
        }
        if (key === 'arrowup' || key === 'up') {
            this.focusPreviousItem();
            event.preventDefault();
        }
    };
    SkyDropdownMenuComponent.prototype.focusFirstItem = function () {
        if (!this.hasFocusableItems) {
            return;
        }
        this.menuIndex = 0;
        var firstItem = this.getItemByIndex(this.menuIndex);
        if (firstItem && firstItem.isFocusable()) {
            this.focusItem(firstItem);
        }
        else {
            this.focusNextItem();
        }
    };
    SkyDropdownMenuComponent.prototype.focusPreviousItem = function () {
        if (!this.hasFocusableItems) {
            return;
        }
        this.menuIndex--;
        var previousItem = this.getItemByIndex(this.menuIndex);
        if (previousItem && previousItem.isFocusable()) {
            this.focusItem(previousItem);
        }
        else {
            this.focusPreviousItem();
        }
    };
    SkyDropdownMenuComponent.prototype.focusNextItem = function () {
        if (!this.hasFocusableItems) {
            return;
        }
        this.menuIndex++;
        var nextItem = this.getItemByIndex(this.menuIndex);
        if (nextItem && nextItem.isFocusable()) {
            this.focusItem(nextItem);
        }
        else {
            this.focusNextItem();
        }
    };
    SkyDropdownMenuComponent.prototype.reset = function () {
        this._menuIndex = -1;
        this.resetItemsActiveState();
        this.changeDetector.markForCheck();
    };
    SkyDropdownMenuComponent.prototype.resetItemsActiveState = function () {
        this.menuItems.forEach(function (item) {
            item.resetState();
        });
    };
    SkyDropdownMenuComponent.prototype.focusItem = function (item) {
        this.resetItemsActiveState();
        item.focusElement(this.useNativeFocus);
        this.menuChanges.emit({
            activeIndex: this.menuIndex
        });
    };
    SkyDropdownMenuComponent.prototype.getItemByIndex = function (index) {
        return this.menuItems.find(function (item, i) {
            return (i === index);
        });
    };
    return SkyDropdownMenuComponent;
}());
export { SkyDropdownMenuComponent };
SkyDropdownMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-dropdown-menu',
                template: "<div class=\"sky-dropdown-menu\">\n  <ng-content>\n  </ng-content>\n</div>\n",
                styles: [".sky-dropdown-menu {\n  display: flex;\n  flex-direction: column;\n}\n\n.sky-dropdown-menu ::ng-deep button {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n"],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
SkyDropdownMenuComponent.ctorParameters = function () { return [
    { type: ChangeDetectorRef, },
    { type: SkyDropdownComponent, decorators: [{ type: Optional },] },
]; };
SkyDropdownMenuComponent.propDecorators = {
    'useNativeFocus': [{ type: Input },],
    'menuChanges': [{ type: Output },],
    'menuItems': [{ type: ContentChildren, args: [SkyDropdownItemComponent,] },],
    'onClick': [{ type: HostListener, args: ['click', ['$event'],] },],
    'onKeyDown': [{ type: HostListener, args: ['keydown', ['$event'],] },],
};
//# sourceMappingURL=dropdown-menu.component.js.map