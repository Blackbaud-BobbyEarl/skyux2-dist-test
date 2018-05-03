import { Component } from '@angular/core';
import { SkyModalInstance } from '../../core';
import { SkyModalDemoContext } from './modal-demo-context';
var SkyModalDemoFormComponent = (function () {
    function SkyModalDemoFormComponent(context, instance) {
        this.context = context;
        this.instance = instance;
        this.title = 'Hello world';
    }
    return SkyModalDemoFormComponent;
}());
export { SkyModalDemoFormComponent };
SkyModalDemoFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-demo-modal-form',
                template: "<sky-modal>\n  <sky-modal-header>\n    {{title}}\n  </sky-modal-header>\n  <sky-modal-content>\n    <div id=\"docs-modal-content\">\n      This modal can have content!\n    </div>\n    <label>\n      Value A\n      <input type=\"text\" [(ngModel)]=\"context.valueA\">\n    </label>\n    <p>\n      <sky-alert *ngIf=\"context.eventMessage\">\n        {{context.eventMessage}}\n      </sky-alert>\n    </p>\n  </sky-modal-content>\n  <sky-modal-footer>\n    <button\n      type=\"button\"\n      class=\"sky-btn sky-btn-primary\"\n      (click)=\"instance.save('Something cool')\">\n      Close\n    </button>\n  </sky-modal-footer>\n</sky-modal>\n"
            },] },
];
/** @nocollapse */
SkyModalDemoFormComponent.ctorParameters = function () { return [
    { type: SkyModalDemoContext, },
    { type: SkyModalInstance, },
]; };
//# sourceMappingURL=modal-demo-form.component.js.map