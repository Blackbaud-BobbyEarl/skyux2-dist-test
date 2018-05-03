import { Component } from '@angular/core';
import { SkyModalInstance } from '../modal';
import { SkyResources } from '../resources';
import { SkyConfirmType } from './types';
import { SkyConfirmModalContext } from './confirm-modal-context';
var SkyConfirmComponent = (function () {
    function SkyConfirmComponent(config, modal) {
        this.config = config;
        this.modal = modal;
    }
    SkyConfirmComponent.prototype.ngOnInit = function () {
        var buttons;
        if (this.config.type === SkyConfirmType.Custom && this.config.buttons.length > 0) {
            buttons = this.getCustomButtons(this.config.buttons);
        }
        else {
            buttons = this.getPresetButtons();
        }
        this.buttons = buttons;
        this.message = this.config.message;
    };
    SkyConfirmComponent.prototype.close = function (button) {
        var result = {
            action: button.action
        };
        this.modal.close(result);
    };
    SkyConfirmComponent.prototype.getPresetButtons = function () {
        var buttons;
        switch (this.config.type) {
            default:
            case SkyConfirmType.OK:
                buttons = [
                    {
                        text: SkyResources.getString('confirm_dialog_default_ok_text'),
                        autofocus: true,
                        styleType: 'primary',
                        action: 'ok'
                    }
                ];
                break;
            case SkyConfirmType.YesNoCancel:
                buttons = [
                    {
                        text: SkyResources.getString('confirm_dialog_default_yes_text'),
                        autofocus: true,
                        styleType: 'primary',
                        action: 'yes'
                    },
                    {
                        text: SkyResources.getString('confirm_dialog_default_no_text'),
                        styleType: 'default',
                        action: 'no'
                    },
                    {
                        text: SkyResources.getString('confirm_dialog_default_cancel_text'),
                        styleType: 'link',
                        action: 'cancel'
                    }
                ];
                break;
            case SkyConfirmType.YesCancel:
                buttons = [
                    {
                        text: SkyResources.getString('confirm_dialog_default_yes_text'),
                        autofocus: true,
                        styleType: 'primary',
                        action: 'yes'
                    },
                    {
                        text: SkyResources.getString('confirm_dialog_default_cancel_text'),
                        styleType: 'link',
                        action: 'cancel'
                    }
                ];
                break;
        }
        return buttons;
    };
    SkyConfirmComponent.prototype.getCustomButtons = function (buttonConfig) {
        var buttons = [];
        buttonConfig.forEach(function (config) {
            buttons.push({
                text: config.text,
                action: config.action,
                styleType: config.styleType || 'default',
                autofocus: config.autofocus || false
            });
        });
        return buttons;
    };
    return SkyConfirmComponent;
}());
export { SkyConfirmComponent };
SkyConfirmComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-confirm',
                template: "<div class=\"sky-confirm\">\n  <sky-modal>\n    <sky-modal-content>\n      <div class=\"sky-confirm-message\">\n        {{ message }}\n      </div>\n      <div class=\"sky-confirm-buttons\">\n        <button\n          *ngFor=\"let button of buttons\"\n          type=\"button\"\n          class=\"sky-btn\"\n          ngClass=\"sky-btn-{{ button.styleType }}\"\n          (click)=\"close(button)\"\n          [attr.autofocus]=\"button.autofocus ? 'autofocus': null\">\n          {{ button.text }}\n        </button>\n      </div>\n    </sky-modal-content>\n  </sky-modal>\n</div>\n",
                styles: [".sky-confirm-message {\n  font-family: \"Blackbaud Sans\", \"Helvetica Neue\", Arial, sans-serif;\n  color: #282b31;\n  font-weight: 600;\n  font-size: 16px;\n  margin-top: 5px;\n  margin-bottom: 20px;\n}\n\n.sky-confirm-buttons .sky-btn {\n  margin-right: 5px;\n}\n\n.sky-confirm-buttons .sky-btn:last-child {\n  margin-right: 0;\n}\n"]
            },] },
];
/** @nocollapse */
SkyConfirmComponent.ctorParameters = function () { return [
    { type: SkyConfirmModalContext, },
    { type: SkyModalInstance, },
]; };
//# sourceMappingURL=confirm.component.js.map