import { Component, ContentChildren } from '@angular/core';
import { SkyToolbarSectionComponent } from './toolbar-section.component';
var SkyToolbarComponent = (function () {
    function SkyToolbarComponent() {
        this.hasSections = false;
    }
    SkyToolbarComponent.prototype.ngAfterContentInit = function () {
        this.hasSections = this.sectionComponents.length > 0;
    };
    return SkyToolbarComponent;
}());
export { SkyToolbarComponent };
SkyToolbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-toolbar',
                styles: [".sky-toolbar-container {\n  min-height: 49px;\n  background-color: #ffffff;\n  padding: 5px 10px;\n  border-top: 1px solid #cdcfd2;\n  border-bottom: 1px solid #cdcfd2;\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n\n.sky-toolbar-container /deep/ sky-toolbar-section:not(:first-child) .sky-toolbar-section {\n  border-top: 1px solid #cdcfd2;\n}\n\n.sky-toolbar-sectioned {\n  display: block;\n  padding: 0;\n}\n"],
                template: "<div\n  class=\"sky-toolbar-container\"\n  [ngClass]=\"{ 'sky-toolbar-sectioned': hasSections}\">\n  <ng-content></ng-content>\n</div>\n"
            },] },
];
/** @nocollapse */
SkyToolbarComponent.ctorParameters = function () { return []; };
SkyToolbarComponent.propDecorators = {
    'sectionComponents': [{ type: ContentChildren, args: [SkyToolbarSectionComponent, { descendants: true },] },],
};
//# sourceMappingURL=toolbar.component.js.map