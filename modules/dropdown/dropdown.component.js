import { ChangeDetectionStrategy, Component, HostListener, Input, ViewChild } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
import { SkyPopoverComponent } from '../popover';
import { SkyResources } from '../resources';
import { SkyWindowRefService } from '../window';
import { SkyDropdownMessageType } from './types';
var SkyDropdownComponent = (function () {
    function SkyDropdownComponent(windowRef) {
        this.windowRef = windowRef;
        this.alignment = 'left';
        this.dismissOnBlur = true;
        this.messageStream = new Subject();
        this.ngUnsubscribe = new Subject();
        this.isKeyboardActive = false;
        this.isOpen = false;
    }
    Object.defineProperty(SkyDropdownComponent.prototype, "buttonStyle", {
        get: function () {
            return this._buttonStyle || 'default';
        },
        set: function (value) {
            this._buttonStyle = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyDropdownComponent.prototype, "buttonType", {
        get: function () {
            return this._buttonType || 'select';
        },
        set: function (value) {
            this._buttonType = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyDropdownComponent.prototype, "label", {
        get: function () {
            return this._label || SkyResources.getString('context_menu_default_label');
        },
        set: function (value) {
            this._label = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyDropdownComponent.prototype, "trigger", {
        get: function () {
            return this._trigger || 'click';
        },
        set: function (value) {
            this._trigger = value;
        },
        enumerable: true,
        configurable: true
    });
    SkyDropdownComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageStream
            .takeUntil(this.ngUnsubscribe)
            .subscribe(function (message) {
            _this.handleIncomingMessages(message);
        });
    };
    SkyDropdownComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    SkyDropdownComponent.prototype.onKeyDown = function (event) {
        var _this = this;
        var key = event.key.toLowerCase();
        if (this.isOpen) {
            /* tslint:disable-next-line:switch-default */
            switch (key) {
                // After an item is selected with the enter key,
                // wait a moment before returning focus to the dropdown trigger element.
                case 'enter':
                    this.windowRef.getWindow().setTimeout(function () {
                        _this.sendMessage(SkyDropdownMessageType.FocusTriggerButton);
                    });
                    break;
                // Allow the menu to be opened with the arrowdown key
                // if it is first opened with the mouse.
                case 'down':
                case 'arrowdown':
                    if (!this.isKeyboardActive) {
                        this.isKeyboardActive = true;
                        this.sendMessage(SkyDropdownMessageType.FocusFirstItem);
                        event.preventDefault();
                    }
                    break;
            }
            return;
        }
        /* tslint:disable-next-line:switch-default */
        switch (key) {
            case 'enter':
                this.isKeyboardActive = true;
                break;
            case 'down':
            case 'arrowdown':
                this.isKeyboardActive = true;
                this.sendMessage(SkyDropdownMessageType.Open);
                event.preventDefault();
                break;
        }
    };
    SkyDropdownComponent.prototype.onPopoverOpened = function () {
        this.isOpen = true;
        // Focus the first item if the menu was opened with the keyboard.
        if (this.isKeyboardActive) {
            this.sendMessage(SkyDropdownMessageType.FocusFirstItem);
        }
    };
    SkyDropdownComponent.prototype.onPopoverClosed = function () {
        this.isOpen = false;
        this.isKeyboardActive = false;
    };
    SkyDropdownComponent.prototype.getPopoverTriggerType = function () {
        // Map the dropdown trigger type to the popover trigger type.
        return (this.trigger === 'click') ? 'click' : 'mouseenter';
    };
    SkyDropdownComponent.prototype.handleIncomingMessages = function (message) {
        var _this = this;
        /* tslint:disable-next-line:switch-default */
        switch (message.type) {
            case SkyDropdownMessageType.Open:
                this.positionPopover();
                break;
            case SkyDropdownMessageType.Close:
                this.popover.close();
                break;
            case SkyDropdownMessageType.Reposition:
                // Only reposition the dropdown if it is already open.
                if (this.isOpen) {
                    this.windowRef.getWindow().setTimeout(function () {
                        _this.popover.reposition();
                    });
                }
                break;
            case SkyDropdownMessageType.FocusTriggerButton:
                this.triggerButton.nativeElement.focus();
                break;
        }
    };
    SkyDropdownComponent.prototype.sendMessage = function (type) {
        this.messageStream.next({ type: type });
    };
    SkyDropdownComponent.prototype.positionPopover = function () {
        this.popover.positionNextTo(this.triggerButton, 'below', this.alignment);
    };
    return SkyDropdownComponent;
}());
export { SkyDropdownComponent };
SkyDropdownComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-dropdown',
                template: "<div class=\"sky-dropdown\">\n  <button\n    type=\"button\"\n    class=\"sky-btn sky-dropdown-button\"\n    [ngClass]=\"[\n      'sky-dropdown-button-type-' + buttonType,\n      'sky-btn-' + buttonStyle\n    ]\"\n    [attr.aria-label]=\"label\"\n    [attr.title]=\"title\"\n    [skyPopover]=\"popover\"\n    [skyPopoverTrigger]=\"getPopoverTriggerType()\"\n    [skyPopoverAlignment]=\"alignment\"\n    skyPopoverPlacement=\"below\"\n    #triggerButton>\n\n    <div [ngSwitch]=\"buttonType\">\n      <ng-template ngSwitchCase=\"context-menu\">\n        <i class=\"fa fa-ellipsis-h\"></i>\n      </ng-template>\n\n      <ng-template ngSwitchDefault>\n        <div\n          class=\"sky-dropdown-button-container\"\n          *ngIf=\"buttonType === 'select' || buttonType === 'tab' || !buttonType\">\n          <div class=\"sky-dropdown-button-content-container\">\n            <ng-content\n              select=\"sky-dropdown-button\">\n            </ng-content>\n          </div>\n          <div class=\"sky-dropdown-button-icon-container\">\n            <i class=\"fa fa-caret-down sky-dropdown-caret\"></i>\n          </div>\n        </div>\n        <div\n          *ngIf=\"buttonType !== 'select' && buttonType !== 'tab' && buttonType\">\n          <i\n            class=\"fa fa-lg\"\n            [ngClass]=\"['fa-' + buttonType]\"></i>\n        </div>\n      </ng-template>\n    </div>\n  </button>\n  <sky-popover\n    placement=\"below\"\n    [alignment]=\"alignment\"\n    [dismissOnBlur]=\"dismissOnBlur\"\n    (popoverOpened)=\"onPopoverOpened()\"\n    (popoverClosed)=\"onPopoverClosed()\"\n    [@.disabled]=\"true\"\n    #popover>\n    <ng-content\n      select=\"sky-dropdown-menu\">\n    </ng-content>\n  </sky-popover>\n</div>\n",
                styles: [".sky-dropdown ::ng-deep .sky-popover-container {\n  padding: 0;\n  min-width: auto;\n  max-width: none;\n}\n\n.sky-dropdown ::ng-deep .sky-popover-container .sky-popover {\n  border-radius: 0 !important;\n  border: 0 !important;\n}\n\n.sky-dropdown ::ng-deep .sky-popover-container .sky-popover-body {\n  padding: 0;\n}\n\n.sky-dropdown ::ng-deep .sky-popover-container .sky-popover-arrow {\n  display: none;\n}\n\n.sky-dropdown-button-type-tab {\n  background-color: transparent;\n  border: none;\n  border-radius: 4px 4px 0 0;\n  color: #686c73;\n  cursor: pointer;\n  display: inline-block;\n  font-weight: 600;\n  line-height: 1.8;\n  padding: 8px 16px;\n  background-color: #007ca6;\n  color: #fff;\n  max-width: 100%;\n}\n\n.sky-dropdown-button-type-tab:hover {\n  background-color: #eeeeef;\n  color: #282b31;\n  text-decoration: none;\n}\n\n.sky-dropdown-button-type-tab:hover {\n  background-color: #007ca6;\n  color: #fff;\n}\n\n.sky-dropdown-button-type-context-menu {\n  border-radius: 50%;\n  padding-bottom: 3px;\n  padding-left: 8px;\n  padding-right: 8px;\n  padding-top: 3px;\n}\n\n.sky-dropdown-caret {\n  margin-left: 10px;\n}\n\n.sky-dropdown-button-container {\n  display: flex;\n}\n\n.sky-dropdown-button-content-container {\n  flex-shrink: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.sky-dropdown-button-icon-container {\n  flex-grow: 1;\n}\n"],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
SkyDropdownComponent.ctorParameters = function () { return [
    { type: SkyWindowRefService, },
]; };
SkyDropdownComponent.propDecorators = {
    'alignment': [{ type: Input },],
    'buttonStyle': [{ type: Input },],
    'buttonType': [{ type: Input },],
    'label': [{ type: Input },],
    'dismissOnBlur': [{ type: Input },],
    'messageStream': [{ type: Input },],
    'title': [{ type: Input },],
    'trigger': [{ type: Input },],
    'triggerButton': [{ type: ViewChild, args: ['triggerButton',] },],
    'popover': [{ type: ViewChild, args: [SkyPopoverComponent,] },],
    'onKeyDown': [{ type: HostListener, args: ['keydown', ['$event'],] },],
};
//# sourceMappingURL=dropdown.component.js.map