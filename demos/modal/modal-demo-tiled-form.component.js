import { Component } from '@angular/core';
import { SkyModalInstance } from '../../core';
import { SkyModalDemoContext } from './modal-demo-context';
var SkyModalDemoTiledFormComponent = (function () {
    function SkyModalDemoTiledFormComponent(context, instance) {
        this.context = context;
        this.instance = instance;
        this.title = 'Hello world';
    }
    return SkyModalDemoTiledFormComponent;
}());
export { SkyModalDemoTiledFormComponent };
SkyModalDemoTiledFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-demo-modal-tiled-form',
                template: "<sky-modal [tiledBody]=\"true\">\n  <sky-modal-header>\n    {{title}}\n  </sky-modal-header>\n  <sky-modal-content>\n    <sky-tile>\n      <sky-tile-title>Section 1</sky-tile-title>\n      <sky-tile-content>\n        <sky-tile-content-section>\n          Content 1\n        </sky-tile-content-section>\n      </sky-tile-content>\n    </sky-tile>\n    <sky-tile>\n      <sky-tile-title>Section 2</sky-tile-title>\n      <sky-tile-content>\n        <sky-tile-content-section>\n          Content 2\n        </sky-tile-content-section>\n      </sky-tile-content>\n    </sky-tile>\n  </sky-modal-content>\n  <sky-modal-footer>\n    <button\n      type=\"button\"\n      class=\"sky-btn sky-btn-primary\"\n      (click)=\"instance.save('Something cool')\"\n    >\n      Close\n    </button>\n  </sky-modal-footer>\n</sky-modal>\n"
            },] },
];
/** @nocollapse */
SkyModalDemoTiledFormComponent.ctorParameters = function () { return [
    { type: SkyModalDemoContext, },
    { type: SkyModalInstance, },
]; };
//# sourceMappingURL=modal-demo-tiled-form.component.js.map