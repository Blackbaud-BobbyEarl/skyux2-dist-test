import { Component } from '@angular/core';
var SkyDatepickerDemoComponent = (function () {
    function SkyDatepickerDemoComponent() {
    }
    return SkyDatepickerDemoComponent;
}());
export { SkyDatepickerDemoComponent };
SkyDatepickerDemoComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-datepicker-demo',
                template: "<div style=\"max-width: 50%\">\n  <sky-datepicker #picker>\n    <input\n      [(ngModel)]=\"selectedDate\"\n      [skyDatepickerInput]=\"picker\"\n      [minDate]=\"minDate\"\n      [maxDate]=\"maxDate\"\n      #date=\"ngModel\"/>\n  </sky-datepicker>\n  <div\n    class=\"sky-error-label\"\n    *ngIf=\"date.errors && date.errors.skyDate && (date.dirty || date.touched)\">\n\n    <span [hidden]=\"!date.errors.skyDate.invalid\">\n      Please enter a valid date.\n    </span>\n\n    <span [hidden]=\"!date.errors.skyDate.minDate\">\n      Date is prior to minimum date range.\n    </span>\n\n    <span [hidden]=\"!date.errors.skyDate.maxDate\">\n      Date is after maximum date range.\n    </span>\n  </div>\n</div>\n\n<div>\n  Selected date is {{selectedDate}}\n</div>\n"
            },] },
];
/** @nocollapse */
SkyDatepickerDemoComponent.ctorParameters = function () { return []; };
//# sourceMappingURL=datepicker-demo.component.js.map