import { Component } from '@angular/core';
var SkyCheckboxDemoComponent = (function () {
    function SkyCheckboxDemoComponent() {
        this.checkboxItems = [
            {
                description: 'Checkbox 1'
            },
            {
                description: 'Checkbox 2',
                checked: true
            },
            {
                description: 'Disabled',
                disabled: true
            },
            {
                description: 'Disabled and selected',
                checked: true,
                disabled: true
            }
        ];
    }
    return SkyCheckboxDemoComponent;
}());
export { SkyCheckboxDemoComponent };
SkyCheckboxDemoComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-checkbox-demo',
                template: "<fieldset>\n  <legend>Checkbox options</legend>\n  <ul class=\"sky-list-unstyled\">\n    <li *ngFor=\"let checkboxItem of checkboxItems\">\n      <sky-checkbox [(ngModel)]=\"checkboxItem.checked\" [disabled]=\"checkboxItem.disabled\">\n        <sky-checkbox-label>\n          {{ checkboxItem.description }}\n        </sky-checkbox-label>\n      </sky-checkbox>\n    </li>\n  </ul>\n</fieldset>\n<b>Checked state:</b>\n<ul class=\"sky-list-unstyled\">\n  <li *ngFor=\"let checkboxItem of checkboxItems\">\n    {{ checkboxItem.description }}: <b>{{ checkboxItem.checked ? 'true': 'false' }}</b>\n  </li>\n</ul>\n"
            },] },
];
/** @nocollapse */
SkyCheckboxDemoComponent.ctorParameters = function () { return []; };
//# sourceMappingURL=checkbox-demo.component.js.map