import { Component } from '@angular/core';
var SkyRadioDemoComponent = (function () {
    function SkyRadioDemoComponent() {
        this.selectedValue = '3';
        this.valueGuy = '2';
    }
    return SkyRadioDemoComponent;
}());
export { SkyRadioDemoComponent };
SkyRadioDemoComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-radio-demo',
                template: "<form #checkForm=\"ngForm\">\n  <div>\n    <fieldset>\n      <legend>Radio button options</legend>\n      <ul class=\"sky-list-unstyled\">\n        <li>\n          <sky-radio name=\"radiotest\" [(ngModel)]=\"selectedValue\" #cb=\"ngModel\" value=\"1\">\n            <sky-radio-label>Option 1</sky-radio-label>\n          </sky-radio>\n        </li>\n\n        <li>\n          <sky-radio\n            name=\"radiotest\"\n            [ngModel]=\"selectedValue\"\n            (ngModelChange)=\"selectedValue = $event\"\n            disabled=\"true\"\n            [value]=\"valueGuy\">\n            <sky-radio-label>Option 2</sky-radio-label>\n          </sky-radio>\n        </li>\n\n        <li>\n          <sky-radio name=\"radiotest\" [ngModel]=\"selectedValue\" (ngModelChange)=\"selectedValue = $event\" value=\"3\">\n            <sky-radio-label>Option 3</sky-radio-label>\n          </sky-radio>\n        </li>\n      </ul>\n    </fieldset>\n\n    <br />\n    Selected option: {{selectedValue}}\n    Touched: {{cb.touched}}\n    Pristine: {{cb.pristine}}\n  </div>\n</form>\n"
            },] },
];
/** @nocollapse */
SkyRadioDemoComponent.ctorParameters = function () { return []; };
//# sourceMappingURL=radio-demo.component.js.map