import { Component } from '@angular/core';
import { SkyConfirmService, SkyConfirmType } from '../../core';
var SkyConfirmDemoComponent = (function () {
    function SkyConfirmDemoComponent(confirmService) {
        this.confirmService = confirmService;
    }
    SkyConfirmDemoComponent.prototype.openOKConfirm = function () {
        var _this = this;
        var dialog = this.confirmService.open({
            message: 'Do you wish to continue?',
            type: SkyConfirmType.OK
        });
        dialog.closed.subscribe(function (result) {
            _this.selectedAction = result.action;
        });
    };
    SkyConfirmDemoComponent.prototype.openYesCancelConfirm = function () {
        var _this = this;
        var dialog = this.confirmService.open({
            message: 'Do you wish to continue?',
            type: SkyConfirmType.YesCancel
        });
        dialog.closed.subscribe(function (result) {
            _this.selectedAction = result.action;
        });
    };
    SkyConfirmDemoComponent.prototype.openYesNoCancelConfirm = function () {
        var _this = this;
        var dialog = this.confirmService.open({
            message: 'Do you wish to continue?',
            type: SkyConfirmType.YesNoCancel
        });
        dialog.closed.subscribe(function (result) {
            _this.selectedAction = result.action;
        });
    };
    SkyConfirmDemoComponent.prototype.openCustomConfirm = function () {
        var _this = this;
        var dialog = this.confirmService.open({
            message: 'What option are you going to select?',
            type: SkyConfirmType.Custom,
            buttons: [
                { text: '1', action: 'foo', styleType: 'primary' },
                { text: '2', action: 'bar' },
                { text: '3', action: 'baz', autofocus: true }
            ]
        });
        dialog.closed.subscribe(function (result) {
            _this.selectedAction = result.action;
        });
    };
    return SkyConfirmDemoComponent;
}());
export { SkyConfirmDemoComponent };
SkyConfirmDemoComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-confirm-demo',
                template: "<div style=\"margin-bottom: 20px;\">\n  <button\n    type=\"button\"\n    class=\"sky-btn sky-btn-default\"\n    (click)=\"openOKConfirm()\">\n    OK confirm\n  </button>\n\n  <button\n    type=\"button\"\n    class=\"sky-btn sky-btn-default\"\n    (click)=\"openYesCancelConfirm()\">\n    Yes/cancel confirm\n  </button>\n\n  <button\n    type=\"button\"\n    class=\"sky-btn sky-btn-default\"\n    (click)=\"openYesNoCancelConfirm()\">\n    Yes/no/cancel confirm\n  </button>\n\n  <button\n    type=\"button\"\n    class=\"sky-btn sky-btn-default\"\n    (click)=\"openCustomConfirm()\">\n    Custom confirm\n  </button>\n</div>\n\n<sky-alert *ngIf=\"selectedAction\">\n  You selected \"{{ selectedAction }}\".\n</sky-alert>\n"
            },] },
];
/** @nocollapse */
SkyConfirmDemoComponent.ctorParameters = function () { return [
    { type: SkyConfirmService, },
]; };
//# sourceMappingURL=confirm-demo.component.js.map