import { ChangeDetectorRef, Component } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { SkyDropdownMessageType } from '../../core';
var SkyDropdownDemoComponent = (function () {
    function SkyDropdownDemoComponent(changeDetector) {
        this.changeDetector = changeDetector;
        this.dropdownController = new Subject();
        this.items = [
            { name: 'Option 1', disabled: false },
            { name: 'Option 2', disabled: true },
            { name: 'Option 3', disabled: false },
            { name: 'Option 4', disabled: false },
            { name: 'Option 5', disabled: false }
        ];
    }
    SkyDropdownDemoComponent.prototype.optionClicked = function (option) {
        alert('You selected option ' + option);
    };
    SkyDropdownDemoComponent.prototype.openDropdown = function () {
        this.sendMessage(SkyDropdownMessageType.Open);
    };
    SkyDropdownDemoComponent.prototype.closeDropdown = function () {
        this.sendMessage(SkyDropdownMessageType.Close);
    };
    SkyDropdownDemoComponent.prototype.focusTriggerButton = function () {
        this.sendMessage(SkyDropdownMessageType.FocusTriggerButton);
    };
    SkyDropdownDemoComponent.prototype.focusNextItem = function () {
        this.sendMessage(SkyDropdownMessageType.FocusNextItem);
    };
    SkyDropdownDemoComponent.prototype.focusPreviousItem = function () {
        this.sendMessage(SkyDropdownMessageType.FocusPreviousItem);
    };
    SkyDropdownDemoComponent.prototype.changeItems = function () {
        this.items.pop();
        this.changeDetector.detectChanges();
    };
    SkyDropdownDemoComponent.prototype.onMenuChanges = function (change) {
        if (change.activeIndex !== undefined) {
            console.log('The menu\'s active index changed to:', change.activeIndex);
        }
    };
    SkyDropdownDemoComponent.prototype.sendMessage = function (type) {
        var message = { type: type };
        this.dropdownController.next(message);
    };
    return SkyDropdownDemoComponent;
}());
export { SkyDropdownDemoComponent };
SkyDropdownDemoComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-dropdown-demo',
                template: "\n<h3>\n  Button types and styles\n</h3>\n\n<sky-row>\n  <sky-column screenSmall=\"6\">\n    <ul class=\"sky-list-unstyled\">\n      <li>\n        Default (select) style:\n        <br>\n        <sky-dropdown>\n          <sky-dropdown-button>\n            Show dropdown\n          </sky-dropdown-button>\n          <sky-dropdown-menu>\n            <sky-dropdown-item *ngFor=\"let item of items\">\n              <button type=\"button\" [attr.disabled]=\"item.disabled ? '' : null\">\n                {{ item.name }}\n              </button>\n            </sky-dropdown-item>\n          </sky-dropdown-menu>\n        </sky-dropdown>\n      </li>\n      <li>\n        Context menu style:\n        <br>\n        <sky-dropdown\n          buttonType=\"context-menu\">\n          <sky-dropdown-menu>\n            <sky-dropdown-item *ngFor=\"let item of items\">\n              <button type=\"button\" [attr.disabled]=\"item.disabled ? '' : null\">\n                {{ item.name }}\n              </button>\n            </sky-dropdown-item>\n          </sky-dropdown-menu>\n        </sky-dropdown>\n      </li>\n      <li>\n        Icon style:\n        <br>\n        <sky-dropdown\n          buttonType=\"folder-open-o\">\n          <sky-dropdown-menu>\n            <sky-dropdown-item *ngFor=\"let item of items\">\n              <button type=\"button\" [attr.disabled]=\"item.disabled ? '' : null\">\n                {{ item.name }}\n              </button>\n            </sky-dropdown-item>\n          </sky-dropdown-menu>\n        </sky-dropdown>\n      </li>\n    </ul>\n  </sky-column>\n  <sky-column screenSmall=\"6\">\n    <ul class=\"sky-list-unstyled\" style=\"text-align:right\">\n      <li>\n        Select primary style:\n        <br>\n        <sky-dropdown\n          alignment=\"right\"\n          buttonStyle=\"primary\">\n          <sky-dropdown-button>\n            Show dropdown\n          </sky-dropdown-button>\n          <sky-dropdown-menu>\n            <sky-dropdown-item *ngFor=\"let item of items\">\n              <button type=\"button\" [attr.disabled]=\"item.disabled ? '' : null\">\n                {{ item.name }}\n              </button>\n            </sky-dropdown-item>\n          </sky-dropdown-menu>\n        </sky-dropdown>\n      </li>\n      <li>\n        Context menu with primary style:\n        <br>\n        <sky-dropdown\n          alignment=\"right\"\n          buttonType=\"context-menu\"\n          buttonStyle=\"primary\">\n          <sky-dropdown-menu>\n            <sky-dropdown-item *ngFor=\"let item of items\">\n              <button type=\"button\" [attr.disabled]=\"item.disabled ? '' : null\">\n                {{ item.name }}\n              </button>\n            </sky-dropdown-item>\n          </sky-dropdown-menu>\n        </sky-dropdown>\n      </li>\n      <li>\n        Icon with primary style:\n        <br>\n        <sky-dropdown\n          alignment=\"right\"\n          buttonType=\"folder-open-o\"\n          buttonStyle=\"primary\">\n          <sky-dropdown-menu>\n            <sky-dropdown-item *ngFor=\"let item of items\">\n              <button type=\"button\" [attr.disabled]=\"item.disabled ? '' : null\">\n                {{ item.name }}\n              </button>\n            </sky-dropdown-item>\n          </sky-dropdown-menu>\n        </sky-dropdown>\n      </li>\n    </ul>\n  </sky-column>\n</sky-row>\n\n<h3>\n  Interacting with a dropdown programmatically\n</h3>\n\n<p>\n  <button\n    type=\"button\"\n    class=\"sky-btn sky-btn-default\"\n    (click)=\"openDropdown()\">\n    Open dropdown\n  </button>\n\n  <button\n    type=\"button\"\n    class=\"sky-btn sky-btn-default\"\n    (click)=\"closeDropdown()\">\n    Close dropdown\n  </button>\n\n  <button\n    type=\"button\"\n    class=\"sky-btn sky-btn-default\"\n    (click)=\"focusTriggerButton()\">\n    Focus trigger button\n  </button>\n\n  <button\n    type=\"button\"\n    class=\"sky-btn sky-btn-default\"\n    (click)=\"focusNextItem()\">\n    Focus next item\n  </button>\n\n  <button\n    type=\"button\"\n    class=\"sky-btn sky-btn-default\"\n    (click)=\"focusPreviousItem()\">\n    Focus previous item\n  </button>\n\n  <button\n    type=\"button\"\n    class=\"sky-btn sky-btn-default\"\n    (click)=\"changeItems()\">\n    Change items\n  </button>\n</p>\n<sky-dropdown\n  buttonStyle=\"primary\"\n  [dismissOnBlur]=\"false\"\n  [messageStream]=\"dropdownController\">\n  <sky-dropdown-button>\n    Open\n  </sky-dropdown-button>\n  <sky-dropdown-menu\n    [useNativeFocus]=\"false\"\n    (menuChanges)=\"onMenuChanges($event)\">\n    <sky-dropdown-item *ngFor=\"let item of items\">\n      <button type=\"button\" [attr.disabled]=\"item.disabled ? '' : null\">\n        {{ item.name }}\n      </button>\n    </sky-dropdown-item>\n  </sky-dropdown-menu>\n</sky-dropdown>\n<p>\n  This menu does not bring the active items to focus; this is useful for custom implementations where the focus should remain on a different control.\n</p>\n"
            },] },
];
/** @nocollapse */
SkyDropdownDemoComponent.ctorParameters = function () { return [
    { type: ChangeDetectorRef, },
]; };
//# sourceMappingURL=dropdown-demo.component.js.map