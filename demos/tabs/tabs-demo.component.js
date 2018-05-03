import { Component } from '@angular/core';
var SkyTabsDemoComponent = (function () {
    function SkyTabsDemoComponent() {
        this.activeTabIndex = 0;
        this.tabs = [
            {
                heading: 'Tab 1',
                content: 'Content 1',
                active: true
            },
            {
                heading: 'Tab 2',
                content: 'Content 2'
            },
            {
                heading: 'Tab 3',
                content: 'Content 3'
            }
        ];
        this.tabsWithCounts = [
            {
                heading: 'Records',
                content: 'Placeholder content for records',
                headerCount: 10,
                active: true
            },
            {
                heading: 'Gifts',
                content: 'Placeholder content for gifts',
                headerCount: 14
            },
            {
                heading: 'Users',
                content: 'Placeholder content for users',
                headerCount: 144
            }
        ];
    }
    SkyTabsDemoComponent.prototype.closeClick = function (tabIndex) {
        this.tabs.splice(tabIndex, 1);
    };
    SkyTabsDemoComponent.prototype.newTabClick = function () {
        var nextTab = this.tabs && this.tabs.length + 1;
        this.tabs.push({
            heading: 'Tab ' + nextTab,
            content: 'Content ' + nextTab,
            active: true
        });
    };
    SkyTabsDemoComponent.prototype.openTabClick = function () {
        alert('You clicked the open tab button');
    };
    SkyTabsDemoComponent.prototype.tabChanged = function (newIndex) {
        console.log('new active', this.activeTabIndex);
    };
    return SkyTabsDemoComponent;
}());
export { SkyTabsDemoComponent };
SkyTabsDemoComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-tabs-demo',
                template: "<sky-tabset\n  (newTab)=\"newTabClick()\"\n  (openTab)=\"openTabClick()\"\n  [active]=\"activeTabIndex\"\n  (activeChange)=\"tabChanged($event)\">\n  <sky-tab\n    *ngFor=\"let tab of tabs; let i = index\"\n    [tabHeading]=\"tab.heading\"\n    (close)=\"closeClick(i)\">\n    {{tab.content}}\n  </sky-tab>\n  <sky-tab\n    tabHeading=\"Permanent tab\"\n    tabIndex=\"permanent\">\n    This tab cannot be closed.\n  </sky-tab>\n</sky-tabset>\n\n<h3>\n  Tabs example with counter\n</h3>\n\n<sky-tabset\n  [active]=\"0\">\n  <sky-tab\n    *ngFor=\"let tab of tabsWithCounts\"\n    [tabHeading]=\"tab.heading\"\n    [tabHeaderCount]=\"tab.headerCount\">\n    {{tab.content}}\n  </sky-tab>\n</sky-tabset>\n"
            },] },
];
/** @nocollapse */
SkyTabsDemoComponent.ctorParameters = function () { return []; };
//# sourceMappingURL=tabs-demo.component.js.map