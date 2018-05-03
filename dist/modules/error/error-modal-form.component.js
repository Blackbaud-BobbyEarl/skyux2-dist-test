import { Component } from '@angular/core';
import { ErrorModalConfig } from './error-modal-config';
import { SkyModalInstance } from '../modal/modal-instance';
var SkyErrorModalFormComponent = (function () {
    function SkyErrorModalFormComponent(context, instance) {
        this.context = context;
        this.instance = instance;
    }
    return SkyErrorModalFormComponent;
}());
export { SkyErrorModalFormComponent };
SkyErrorModalFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-error-modal-form',
                template: "<sky-modal>\n  <sky-modal-content>\n    <div class=\"sky-error-modal-container\">\n      <span class=\"sky-error-modal-title\">{{ context.errorTitle }}</span>\n      <span class=\"sky-error-modal-description\">{{ context.errorDescription }}</span>\n      <div class=\"sky-error-modal-close\">\n        <button\n          type=\"button\"\n          class=\"sky-btn sky-btn-primary\"\n          (click)=\"instance.close()\"\n        >\n          {{ context.errorCloseText }}\n        </button>\n      </div>\n    </div>\n  </sky-modal-content>\n</sky-modal>\n",
                styles: [".sky-error-modal-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.sky-error-modal-title {\n  font-weight: bold;\n}\n\n.sky-error-modal-description {\n  max-width: 100%;\n}\n\n.sky-error-modal-close {\n  margin-top: 10px;\n}\n"]
            },] },
];
/** @nocollapse */
SkyErrorModalFormComponent.ctorParameters = function () { return [
    { type: ErrorModalConfig, },
    { type: SkyModalInstance, },
]; };
//# sourceMappingURL=error-modal-form.component.js.map