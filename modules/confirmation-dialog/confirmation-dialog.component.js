import { Component } from '@angular/core';
import { SkyConfirmationDialogConfig } from './confirmation-dialog-config';
import { SkyConfirmationDialogType } from './confirmation-dialog-type';
import { SkyModalInstance } from '../modal/modal-instance';
import { SkyResources } from '../resources';
var SkyConfirmationDialogComponent = (function () {
    function SkyConfirmationDialogComponent(context, instance) {
        this.context = context;
        this.instance = instance;
    }
    SkyConfirmationDialogComponent.prototype.ngOnInit = function () {
        if (!this.context.type) {
            this.context.type = SkyConfirmationDialogType.YesCancelDialog;
        }
        if (!this.context.buttons) {
            this.context.buttons = new Array();
        }
        this.createButtons();
    };
    SkyConfirmationDialogComponent.prototype.createButtons = function () {
        this.buttons = this.getDefaultButtons();
        // If button config is supplied through the config object, use those values
        this.overrideButtonConfig();
    };
    SkyConfirmationDialogComponent.prototype.getDefaultButtons = function () {
        switch (this.context.type) {
            case SkyConfirmationDialogType.OKDialog: return [
                {
                    text: SkyResources.getString('confirm_dialog_default_ok_text'),
                    autofocus: true,
                    buttonType: 'primary'
                }
            ];
            case SkyConfirmationDialogType.YesNoCancelDialog: return [
                {
                    text: SkyResources.getString('confirm_dialog_default_yes_text'),
                    autofocus: true,
                    buttonType: 'primary'
                },
                {
                    text: SkyResources.getString('confirm_dialog_default_no_text'),
                    buttonType: 'default'
                },
                {
                    text: SkyResources.getString('confirm_dialog_default_cancel_text'),
                    buttonType: 'link'
                }
            ];
            default: return [
                {
                    text: SkyResources.getString('confirm_dialog_default_yes_text'),
                    autofocus: true,
                    buttonType: 'primary'
                },
                {
                    text: SkyResources.getString('confirm_dialog_default_cancel_text'),
                    buttonType: 'link'
                }
            ];
        }
    };
    SkyConfirmationDialogComponent.prototype.overrideButtonConfig = function () {
        var _this = this;
        var configButtons = this.context.buttons;
        this.buttons.forEach(function (button, i) {
            if (configButtons[i]) {
                if (configButtons[i].text) {
                    _this.buttons[i].text = _this.context.buttons[i].text;
                }
                if (configButtons[i].autofocus) {
                    _this.buttons[0].autofocus = false; // clear out default
                    _this.buttons[i].autofocus = true;
                }
            }
        });
    };
    return SkyConfirmationDialogComponent;
}());
export { SkyConfirmationDialogComponent };
SkyConfirmationDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-confirmation-dialog',
                template: "<div class=\"sky-confirmation-dialog\">\n  <sky-modal>\n    <sky-modal-content>\n      <div class=\"sky-confirmation-dialog-container\">\n        <div class=\"sky-confirmation-dialog-message-container\">\n          <span class=\"sky-confirmation-dialog-message sky-emphasized\">\n            {{ context.message }}\n          </span>\n        </div>\n        <div class=\"sky-confirmation-dialog-buttons\">\n          <button\n            *ngFor=\"let btn of buttons\"\n            type=\"button\"\n            class=\"sky-btn sky-confirmation-dialog-btn sky-btn-{{ btn.buttonType }}\"\n            (click)=\"instance.close(btn.text)\"\n            [attr.autofocus]=\"btn.autofocus ? 'autofocus' : null\"\n          >\n            {{ btn.text }}\n          </button>\n        </div>\n      </div>\n    </sky-modal-content>\n  </sky-modal>\n</div>\n",
                styles: [".sky-confirmation-dialog-message-container {\n  padding-top: 5px;\n  margin-bottom: 30px;\n}\n\n.sky-confirmation-dialog-buttons {\n  padding-bottom: 5px;\n}\n\n.sky-confirmation-dialog-btn {\n  min-width: 15%;\n  margin-right: 5px;\n}\n"]
            },] },
];
/** @nocollapse */
SkyConfirmationDialogComponent.ctorParameters = function () { return [
    { type: SkyConfirmationDialogConfig, },
    { type: SkyModalInstance, },
]; };
//# sourceMappingURL=confirmation-dialog.component.js.map