import { Component, EventEmitter, Input, Output } from '@angular/core';
var SkyChevronComponent = (function () {
    function SkyChevronComponent() {
        this.directionChange = new EventEmitter();
        this.direction = 'up';
        this.disabled = false;
    }
    SkyChevronComponent.prototype.chevronClick = function () {
        this.direction = this.direction === 'up' ? 'down' : 'up';
        this.directionChange.emit(this.direction);
    };
    return SkyChevronComponent;
}());
export { SkyChevronComponent };
SkyChevronComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-chevron',
                styles: [".sky-chevron {\n  border: none;\n  background-color: transparent;\n  flex-shrink: 0;\n  height: 24px;\n  margin: 0;\n  overflow: hidden;\n  padding: 0;\n  width: 24px;\n  cursor: pointer;\n}\n\n.sky-chevron:hover .sky-chevron-part {\n  border-color: #979ba2;\n}\n\n.sky-chevron-part {\n  border-color: #cdcfd2;\n  border-style: solid;\n  border-width: 3px 0 0 0;\n  display: inline-block;\n  height: 10px;\n  position: relative;\n  top: 6px;\n  transition: transform 250ms, left 250ms;\n  vertical-align: top;\n  width: 10px;\n}\n\n.sky-chevron-up .sky-chevron-left {\n  left: 7px;\n  transform: rotate(-45deg);\n}\n\n.sky-chevron-up .sky-chevron-right {\n  left: -6px;\n  transform: rotate(45deg);\n}\n\n.sky-chevron-down .sky-chevron-left {\n  left: 2px;\n  transform: rotate(45deg);\n}\n\n.sky-chevron-down .sky-chevron-right {\n  left: -1px;\n  transform: rotate(-45deg);\n}\n"],
                template: "<button\n    type=\"button\"\n    class=\"sky-chevron\"\n    [ngClass]=\"['sky-chevron-' + direction]\"\n    (click)=\"$event.stopPropagation();chevronClick()\"\n    [attr.aria-label]=\"(direction === 'down' ? 'chevron_expand' : 'chevron_collapse') | skyResources\"\n    [disabled]=\"disabled\"\n>\n  <i class=\"sky-chevron-part sky-chevron-left\"></i>\n  <i class=\"sky-chevron-part sky-chevron-right\"></i>\n</button>\n"
            },] },
];
/** @nocollapse */
SkyChevronComponent.ctorParameters = function () { return []; };
SkyChevronComponent.propDecorators = {
    'directionChange': [{ type: Output },],
    'direction': [{ type: Input },],
    'disabled': [{ type: Input },],
};
//# sourceMappingURL=chevron.component.js.map