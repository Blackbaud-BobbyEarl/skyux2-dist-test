import { Component } from '@angular/core';
var SkyVerticalTabsDemoComponent = (function () {
    function SkyVerticalTabsDemoComponent() {
        this.groups = [
            {
                heading: 'Group 1',
                isOpen: false,
                isDisabled: false,
                subTabs: [
                    { tabHeading: 'Group 1 — Tab 1', content: 'Group 1 — Tab 1 Content' },
                    { tabHeading: 'Group 1 — Tab 2', content: 'Group 1 — Tab 2 Content', tabHeaderCount: 7 }
                ]
            },
            {
                heading: 'Group 2',
                isOpen: true,
                isDisabled: false,
                subTabs: [
                    { tabHeading: 'Group 2 — Tab 1', content: 'Group 2 — Tab 1 Content', active: true },
                    { tabHeading: 'Group 2 — Tab 2 — Disabled',
                        content: 'Group 2 — Tab 2 Content',
                        disabled: true
                    }
                ]
            },
            {
                heading: 'Disabled',
                isOpen: false,
                isDisabled: true,
                subTabs: []
            }
        ];
    }
    SkyVerticalTabsDemoComponent.prototype.tabChanged = function (newIndex) {
        console.log("new active " + newIndex);
    };
    return SkyVerticalTabsDemoComponent;
}());
export { SkyVerticalTabsDemoComponent };
SkyVerticalTabsDemoComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-vertical-tabs-demo',
                template: "<div style=\"height: 40vh\">\n  <sky-vertical-tabset\n    showTabsText=\"Tab list\"\n    (activeChange)=\"tabChanged($event)\">\n\n    <sky-vertical-tabset-group\n      *ngFor=\"let group of groups\"\n      [groupHeading]=\"group.heading\"\n      [open]=\"group.isOpen\"\n      [disabled]=\"group.isDisabled\">\n\n      <sky-vertical-tab\n        *ngFor=\"let tab of group.subTabs\"\n        [active]=\"tab.active\"\n        [tabHeading]=\"tab.tabHeading\"\n        [tabHeaderCount]=\"tab.tabHeaderCount\"\n        [disabled]=\"tab.disabled\">\n        {{ tab.content }}\n      </sky-vertical-tab>\n    </sky-vertical-tabset-group>\n  </sky-vertical-tabset>\n</div>\n\n<h3>\n  Without groups\n</h3>\n\n<sky-vertical-tabset (activeChange)=\"tabChanged($event)\">\n  <sky-vertical-tab tabHeading=\"tab 1\">\n    Tab 1 content\n  </sky-vertical-tab>\n  <sky-vertical-tab tabHeading=\"tab 2\" active=\"true\">\n    Tab 2 content\n  </sky-vertical-tab>\n  <sky-vertical-tab tabHeading=\"tab 3\">\n    Tab 3 content\n  </sky-vertical-tab>\n</sky-vertical-tabset>\n"
            },] },
];
/** @nocollapse */
SkyVerticalTabsDemoComponent.ctorParameters = function () { return []; };
//# sourceMappingURL=vertical-tabs-demo.component.js.map