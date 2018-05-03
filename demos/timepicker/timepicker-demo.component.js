import { Component } from '@angular/core';
var SkyTimepickerDemoComponent = (function () {
    function SkyTimepickerDemoComponent() {
        this.format12 = 'hh';
        this.format24 = 'HH';
        this.returnFormat = 'HH:mm:ssZ';
        this.selectedTime1 = '8:30 PM';
        this.selectedTime2 = '20:30';
        this.selectedTime3 = '02:00:00-0400';
    }
    return SkyTimepickerDemoComponent;
}());
export { SkyTimepickerDemoComponent };
SkyTimepickerDemoComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-timepicker-demo',
                template: "<h3>\n  12-hour timepicker\n</h3>\n\n<div style=\"max-width: 400px\">\n  <sky-timepicker #timePickerExample1>\n    <input\n      type=\"text\"\n      [skyTimepickerInput]=\"timePickerExample1\"\n      [timeFormat]=\"format12\"\n      [(ngModel)]=\"selectedTime1\"\n      #time=\"ngModel\">\n  </sky-timepicker>\n\n  <div\n    class=\"sky-error-label\"\n    *ngIf=\"time.errors && time.errors.skyTime && (time.dirty || time.touched)\">\n    <span [hidden]=\"!time.errors.skyTime.invalid\" >\n      Please enter a valid time.\n    </span>\n  </div>\n</div>\n\n<div>\n  Selected time is {{selectedTime1?.local}}\n</div>\n\n<br/>\n\n<h3>\n  24-hour timepicker.\n</h3>\n\n<div style=\"max-width: 400px\">\n  <sky-timepicker #timePickerExample2>\n    <input\n    type=\"text\"\n    [skyTimepickerInput]=\"timePickerExample2\"\n    [timeFormat]=\"format24\"\n    [(ngModel)]=\"selectedTime2\"\n    #time2=\"ngModel\">\n  </sky-timepicker>\n  <div\n    class=\"sky-error-label\"\n    *ngIf=\"time2.errors && time2.errors.skyTime && (time2.dirty || time2.touched)\">\n    <span [hidden]=\"!time2.errors.skyTime.invalid\">\n      Please enter a valid time.\n    </span>\n  </div>\n</div>\n\n<div>\n  Selected time is {{selectedTime2?.hour}}:{{selectedTime2?.minute}}\n</div>\n\n<br/>\n\n<h3>\n  Custom timepicker\n</h3>\n\n<div style=\"max-width: 400px\">\n  <sky-timepicker #timePickerExample3>\n    <input\n      type=\"hidden\"\n      [skyTimepickerInput]=\"timePickerExample3\"\n      [timeFormat]=\"format24\"\n      [returnFormat]=\"returnFormat\"\n      [(ngModel)]=\"selectedTime3\"\n      #time3=\"ngModel\">\n  </sky-timepicker>\n  <div\n    class=\"sky-error-label\"\n    *ngIf=\"time3.errors && time3.errors.skyTime && (time3.dirty || time3.touched)\">\n    <span [hidden]=\"!time.errors.skyTime.invalid\">\n      Please enter a valid time.\n    </span>\n  </div>\n  Selected time is {{selectedTime3?.local}}\n</div>\n"
            },] },
];
/** @nocollapse */
SkyTimepickerDemoComponent.ctorParameters = function () { return []; };
//# sourceMappingURL=timepicker-demo.component.js.map