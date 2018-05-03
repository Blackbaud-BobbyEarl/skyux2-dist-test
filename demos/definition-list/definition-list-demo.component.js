import { Component } from '@angular/core';
var SkyDefinitionListDemoComponent = (function () {
    function SkyDefinitionListDemoComponent() {
        this.personalInfo = [
            {
                label: 'Job title',
                value: 'Engineer'
            },
            {
                label: 'Hobby',
                value: 'Volleyball'
            },
            {
                label: 'Experience',
                value: '3 years'
            }
        ];
        this.systemInfo = [
            {
                label: 'Username',
                value: 'user1'
            },
            {
                label: 'Role',
                value: 'Admin'
            },
            {
                label: 'Last log-in time'
            }
        ];
    }
    return SkyDefinitionListDemoComponent;
}());
export { SkyDefinitionListDemoComponent };
SkyDefinitionListDemoComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-definition-list-demo',
                template: "<sky-definition-list>\n  <sky-definition-list-heading>\n    Personal information\n  </sky-definition-list-heading>\n  <sky-definition-list-content\n    *ngFor=\"let item of personalInfo\">\n    <sky-definition-list-label>\n      {{item.label}}\n    </sky-definition-list-label>\n    <sky-definition-list-value>\n      {{item.value}}\n    </sky-definition-list-value>\n  </sky-definition-list-content>\n</sky-definition-list>\n<sky-definition-list\n  labelWidth=\"150px\"\n  defaultValue=\"No information found\">\n  <sky-definition-list-heading>\n    System information\n  </sky-definition-list-heading>\n  <sky-definition-list-content\n    *ngFor=\"let item of systemInfo\">\n    <sky-definition-list-label>\n      {{item.label}}\n    </sky-definition-list-label>\n    <sky-definition-list-value>\n      {{item.value}}\n    </sky-definition-list-value>\n  </sky-definition-list-content>\n</sky-definition-list>\n"
            },] },
];
/** @nocollapse */
SkyDefinitionListDemoComponent.ctorParameters = function () { return []; };
//# sourceMappingURL=definition-list-demo.component.js.map