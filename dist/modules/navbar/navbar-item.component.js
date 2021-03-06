import { Component, Input } from '@angular/core';
var SkyNavbarItemComponent = (function () {
    function SkyNavbarItemComponent() {
    }
    return SkyNavbarItemComponent;
}());
export { SkyNavbarItemComponent };
SkyNavbarItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-navbar-item',
                template: "<div\n    class=\"sky-navbar-item\"\n    [ngClass]=\"{'sky-navbar-item-active': active}\"\n>\n  <ng-content></ng-content>\n</div>\n",
                styles: [".sky-navbar-item {\n  display: block;\n  font-weight: 600;\n  margin-right: 5px;\n  height: 100%;\n}\n\n.sky-navbar-item /deep/ a,\n.sky-navbar-item /deep/ .sky-dropdown-button {\n  background-color: transparent;\n  border: none;\n  color: #a7b1c2;\n  display: block;\n  padding: 16px 12px;\n  text-decoration: none;\n  width: 100%;\n}\n\n.sky-navbar-item /deep/ .sky-dropdown-menu {\n  background-color: #2f4050;\n}\n\n.sky-navbar-item /deep/ .sky-dropdown-item {\n  color: #a7b1c2;\n  display: block;\n  font-size: 13px;\n  font-weight: normal;\n  margin: 0;\n}\n\n.sky-navbar-item /deep/ .sky-dropdown-item:hover {\n  background-color: #293846;\n  color: #ffffff;\n}\n\n.sky-navbar-item /deep/ .sky-dropdown-item:hover > /deep/ a,\n.sky-navbar-item /deep/ .sky-dropdown-item:hover /deep/ .sky-dropdown-button {\n  color: #ffffff;\n}\n\n.sky-navbar-item /deep/ .sky-dropdown:hover .sky-dropdown-button,\n.sky-navbar-item /deep/ .sky-navbar-item-active,\n.sky-navbar-item.sky-navbar-item-active /deep/ > *,\n.sky-navbar-item.sky-navbar-item-active /deep/ .sky-dropdown-button {\n  background-color: #293846;\n  color: #ffffff;\n  border-bottom: 4px solid #1c84c6;\n  padding-bottom: 12px;\n}\n"]
            },] },
];
/** @nocollapse */
SkyNavbarItemComponent.ctorParameters = function () { return []; };
SkyNavbarItemComponent.propDecorators = {
    'active': [{ type: Input },],
};
//# sourceMappingURL=navbar-item.component.js.map