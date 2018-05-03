import { Component } from '@angular/core';
var SkyTextHighlightDemoComponent = (function () {
    function SkyTextHighlightDemoComponent() {
        this.showAdditionalContent = false;
    }
    return SkyTextHighlightDemoComponent;
}());
export { SkyTextHighlightDemoComponent };
SkyTextHighlightDemoComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-text-highlight-demo',
                template: "<div class=\"sky-form-group\">\n  <label for=\"sky-demo-search-term\">Enter text to highlight:</label>\n  <br>\n  <input\n    id=\"sky-demo-search-term\"\n    type=\"text\"\n    style=\"margin: 10px 0 10px 0; width: 180px;\"\n    class=\"sky-form-control\"\n    [(ngModel)]=\"searchTerm\">\n</div>\n\n<div style=\"margin-bottom: 10px;\">\n  <sky-checkbox [(ngModel)]=\"showAdditionalContent\">\n    <sky-checkbox-label>Display additional content</sky-checkbox-label>\n  </sky-checkbox>\n</div>\n\n<div [skyHighlight]=\"searchTerm\">\n  The text that you enter is highlighted here.\n  <div *ngIf=\"showAdditionalContent\">\n    This additional content is highlighted too!\n  </div>\n</div>\n"
            },] },
];
/** @nocollapse */
SkyTextHighlightDemoComponent.ctorParameters = function () { return []; };
//# sourceMappingURL=text-highlight-demo.component.js.map