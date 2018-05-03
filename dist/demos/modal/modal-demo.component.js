import { Component } from '@angular/core';
import { SkyModalService } from '../../core';
import { SkyModalDemoContext } from './modal-demo-context';
import { SkyModalDemoFormComponent } from './modal-demo-form.component';
import { SkyModalDemoTiledFormComponent } from './modal-demo-tiled-form.component';
var SkyModalDemoComponent = (function () {
    function SkyModalDemoComponent(modal) {
        this.modal = modal;
    }
    SkyModalDemoComponent.prototype.openModal = function (type) {
        var context = new SkyModalDemoContext();
        context.valueA = 'Hello';
        var options = {
            providers: [{ provide: SkyModalDemoContext, useValue: context }],
            ariaDescribedBy: 'docs-modal-content'
        };
        var modalInstanceType = SkyModalDemoFormComponent;
        switch (type) {
            case 'fullScreenModal':
                options.fullPage = true;
                break;
            case 'smallModal':
                options.size = 'small';
                break;
            case 'largeModal':
                options.size = 'large';
                break;
            case 'tiledModal':
                modalInstanceType = SkyModalDemoTiledFormComponent;
                break;
            case 'withHelpHeader':
                options.helpKey = 'demo-key.html';
                break;
            default:
                break;
        }
        var modalInstance = this.modal.open(modalInstanceType, options);
        modalInstance.closed.subscribe(function (result) {
            console.log("Modal closed with reason: " + result.reason + " and data: " + result.data);
        });
        modalInstance.helpOpened.subscribe(function (helpKey) {
            context.eventMessage = "\n        Modal header help was invoked with the following help key: " + helpKey + "\n      ";
        });
    };
    return SkyModalDemoComponent;
}());
export { SkyModalDemoComponent };
SkyModalDemoComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-modal-demo',
                template: "<button type=\"button\" class=\"sky-btn sky-btn-default\" (click)=\"openModal('defaultModal')\">\n  Open modal\n</button>\n\n<button type=\"button\" class=\"sky-btn sky-btn-default\" (click)=\"openModal('smallModal')\">\n  Open small modal\n</button>\n\n<button type=\"button\" class=\"sky-btn sky-btn-default\" (click)=\"openModal('largeModal')\">\n  Open large modal\n</button>\n\n<button type=\"button\" class=\"sky-btn sky-btn-default\" (click)=\"openModal('fullScreenModal')\">\n Open full-screen modal\n</button>\n\n<button type=\"button\" class=\"sky-btn sky-btn-default\" (click)=\"openModal('tiledModal')\">\n  Open tiled modal\n</button>\n\n<button type=\"button\" class=\"sky-btn sky-btn-default\" (click)=\"openModal('withHelpHeader')\">\n  Open modal with help header\n</button>\n"
            },] },
];
/** @nocollapse */
SkyModalDemoComponent.ctorParameters = function () { return [
    { type: SkyModalService, },
]; };
//# sourceMappingURL=modal-demo.component.js.map