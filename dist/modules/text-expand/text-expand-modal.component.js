import { Component } from '@angular/core';
import { SkyModalInstance } from '../modal';
import { SkyTextExpandModalContext } from './text-expand-modal-context';
var SkyTextExpandModalComponent = (function () {
    function SkyTextExpandModalComponent(context, instance) {
        this.context = context;
        this.instance = instance;
    }
    SkyTextExpandModalComponent.prototype.close = function () {
        this.instance.close();
    };
    return SkyTextExpandModalComponent;
}());
export { SkyTextExpandModalComponent };
SkyTextExpandModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-text-expand-modal',
                template: "<sky-modal>\n  <sky-modal-header>{{context.header}}</sky-modal-header>\n  <sky-modal-content class=\"sky-text-expand-modal-content\">{{context.text}}</sky-modal-content>\n  <sky-modal-footer>\n    <button\n      class=\"sky-btn sky-btn-link\"\n      (click)=\"close()\">{{'text_expand_close_text' | skyResources}}</button>\n  </sky-modal-footer>\n</sky-modal>\n",
                styles: [".sky-text-expand-ellipsis {\n  letter-spacing: 2px;\n  white-space: nowrap;\n  margin-right: 3px;\n}\n\n.sky-text-expand-space {\n  white-space: normal;\n}\n\n.sky-text-expand-see-more {\n  white-space: nowrap;\n}\n\n.sky-text-expand-text {\n  margin: 0;\n  white-space: pre-wrap;\n}\n\n.sky-text-expand-container {\n  word-break: break-word;\n  word-wrap: break-word;\n  overflow: hidden;\n  height: auto;\n  transition: max-height 250ms;\n}\n\n.sky-text-expand-modal-content {\n  white-space: pre-line;\n}\n"]
            },] },
];
/** @nocollapse */
SkyTextExpandModalComponent.ctorParameters = function () { return [
    { type: SkyTextExpandModalContext, },
    { type: SkyModalInstance, },
]; };
//# sourceMappingURL=text-expand-modal.component.js.map