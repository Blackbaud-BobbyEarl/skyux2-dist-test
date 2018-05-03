import { Component } from '@angular/core';
var SkyCardDemoComponent = (function () {
    function SkyCardDemoComponent() {
        this.showTitle = true;
        this.showContent = true;
        this.showAction = true;
        this.showCheckbox = true;
    }
    return SkyCardDemoComponent;
}());
export { SkyCardDemoComponent };
SkyCardDemoComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-card-demo',
                template: "<sky-card [selectable]=\"showCheckbox\">\n  <sky-card-title *ngIf=\"showTitle\">Large card</sky-card-title>\n  <sky-card-content *ngIf=\"showContent\">\n    This card demonstrates the amount of space that is available for a card that uses\n    the default large size. If the content does not require this much space, you can\n    set the card size to small. The type of content to display in the body of a card\n    varies based on what the card represents and whether it prompts users to action.\n  </sky-card-content>\n  <sky-card-actions *ngIf=\"showAction\">\n    <button class=\"sky-btn sky-btn-default\">Click me</button>\n  </sky-card-actions>\n</sky-card>\n<sky-card size=\"small\" [selectable]=\"showCheckbox\">\n  <sky-card-title *ngIf=\"showTitle\">Small card</sky-card-title>\n  <sky-card-content *ngIf=\"showContent\">\n    This card demonstrates the reduced amount of space that is available when you\n    set the card size to small.\n  </sky-card-content>\n  <sky-card-actions *ngIf=\"showAction\">\n    <sky-dropdown buttonType=\"context-menu\">\n      <sky-dropdown-menu>\n        <sky-dropdown-item>\n          <button type=\"button\">\n            Action\n          </button>\n        </sky-dropdown-item>\n      </sky-dropdown-menu>\n    </sky-dropdown>\n  </sky-card-actions>\n</sky-card>\n<div>\n  <ul class=\"sky-list-unstyled\">\n    <li>\n      <sky-checkbox [(ngModel)]=\"showTitle\">\n        <sky-checkbox-label>Show title</sky-checkbox-label>\n      </sky-checkbox>\n    </li>\n    <li>\n      <sky-checkbox [(ngModel)]=\"showContent\">\n        <sky-checkbox-label>Show content</sky-checkbox-label>\n      </sky-checkbox>\n    </li>\n    <li>\n      <sky-checkbox [(ngModel)]=\"showAction\">\n        <sky-checkbox-label>Show action</sky-checkbox-label>\n      </sky-checkbox>\n    </li>\n    <li>\n      <sky-checkbox [(ngModel)]=\"showCheckbox\">\n        <sky-checkbox-label>Show checkbox</sky-checkbox-label>\n      </sky-checkbox>\n    </li>\n  </ul>\n</div>\n"
            },] },
];
/** @nocollapse */
SkyCardDemoComponent.ctorParameters = function () { return []; };
//# sourceMappingURL=card-demo.component.js.map