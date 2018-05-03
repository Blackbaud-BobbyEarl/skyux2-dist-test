import { Component } from '@angular/core';
var SkyPageSummaryDemoComponent = (function () {
    function SkyPageSummaryDemoComponent() {
        this.name = 'Robert C. Hernandez';
        this.showAlert = true;
        this.showImage = true;
        this.showTitle = true;
        this.showSubtitle = true;
        this.showStatus = true;
        this.showContent = true;
        this.showKeyInfo = true;
    }
    return SkyPageSummaryDemoComponent;
}());
export { SkyPageSummaryDemoComponent };
SkyPageSummaryDemoComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-page-summary-demo',
                template: "<div style=\"border: solid 1px #ccc\">\n  <sky-page-summary>\n    <sky-page-summary-alert *ngIf=\"showAlert\">\n      <sky-alert alertType=\"info\">This is an alert.</sky-alert>\n    </sky-page-summary-alert>\n    <sky-page-summary-image *ngIf=\"showImage\">\n      <sky-avatar [name]=\"name\" [canChange]=\"true\"></sky-avatar>\n    </sky-page-summary-image>\n    <sky-page-summary-title *ngIf=\"showTitle\">\n      {{name}}\n    </sky-page-summary-title>\n    <sky-page-summary-subtitle *ngIf=\"showSubtitle\">\n      Board member\n    </sky-page-summary-subtitle>\n    <sky-page-summary-status *ngIf=\"showStatus\">\n      <sky-label labelType=\"success\">Fundraiser</sky-label>\n      <sky-label>Inactive</sky-label>\n    </sky-page-summary-status>\n    <sky-page-summary-content *ngIf=\"showContent\">\n      This is the arbitrary content section. You can display any kind of content to complement the\n      content on a page. We recommend that you display content to support the key tasks of users of\n      users who visit the page. We also recommend that you keep in mind the context of how users\n      will use the content and limit the amount of content to avoid overloading the summary.\n    </sky-page-summary-content>\n    <sky-page-summary-key-info *ngIf=\"showKeyInfo\">\n      <sky-key-info>\n        <sky-key-info-value>The key information</sky-key-info-value>\n      </sky-key-info>\n      <sky-key-info>\n        <sky-key-info-value>section highlights</sky-key-info-value>\n      </sky-key-info>\n      <sky-key-info>\n        <sky-key-info-value>important details</sky-key-info-value>\n      </sky-key-info>\n    </sky-page-summary-key-info>\n  </sky-page-summary>\n</div>\n\n<ul class=\"sky-list-unstyled\">\n  <li>\n    <sky-checkbox [(ngModel)]=\"showTitle\">\n      <sky-checkbox-label>Show title</sky-checkbox-label>\n    </sky-checkbox>\n  </li>\n  <li>\n    <sky-checkbox [(ngModel)]=\"showSubtitle\">\n      <sky-checkbox-label>Show subtitle</sky-checkbox-label>\n    </sky-checkbox>\n  </li>\n  <li>\n    <sky-checkbox [(ngModel)]=\"showImage\">\n      <sky-checkbox-label>Show image</sky-checkbox-label>\n    </sky-checkbox>\n  </li>\n  <li>\n    <sky-checkbox [(ngModel)]=\"showStatus\">\n      <sky-checkbox-label>Show record status</sky-checkbox-label>\n    </sky-checkbox>\n  </li>\n  <li>\n    <sky-checkbox [(ngModel)]=\"showKeyInfo\">\n      <sky-checkbox-label>Show key information</sky-checkbox-label>\n    </sky-checkbox>\n  </li>\n  <li>\n    <sky-checkbox [(ngModel)]=\"showContent\">\n      <sky-checkbox-label>Show arbitrary content</sky-checkbox-label>\n    </sky-checkbox>\n  </li>\n  <li>\n    <sky-checkbox [(ngModel)]=\"showAlert\">\n      <sky-checkbox-label>Show alert</sky-checkbox-label>\n    </sky-checkbox>\n  </li>\n</ul>\n"
            },] },
];
/** @nocollapse */
SkyPageSummaryDemoComponent.ctorParameters = function () { return []; };
//# sourceMappingURL=page-summary-demo.component.js.map