import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { SkyDatepickerCalendarInnerComponent } from './datepicker-calendar-inner.component';
import { SkyDatepickerConfigService } from './datepicker-config.service';
import { SkyDateFormatter } from './date-formatter';
var SkyDatepickerCalendarComponent = (function () {
    function SkyDatepickerCalendarComponent(config) {
        this.selectedDateChange = new EventEmitter(undefined);
        this.calendarModeChange = new EventEmitter();
        this._now = new Date();
        this.formatter = new SkyDateFormatter();
        this.config = config;
        this.configureOptions();
    }
    SkyDatepickerCalendarComponent.prototype.configureOptions = function () {
        Object.assign(this, this.config);
    };
    SkyDatepickerCalendarComponent.prototype.onCalendarModeChange = function (event) {
        this.calendarModeChange.emit(event);
    };
    SkyDatepickerCalendarComponent.prototype.onSelectedDateChange = function (event) {
        this.selectedDateChange.emit(event);
    };
    SkyDatepickerCalendarComponent.prototype.writeValue = function (value) {
        if (value !== undefined
            && this.formatter.dateIsValid(value)
            && this.selectedDate !== undefined
            && this._datepicker.compareHandlerDay(value, this.selectedDate) === 0) {
            return;
        }
        if (this.formatter.dateIsValid(value)) {
            this.selectedDate = value;
            this._datepicker.select(value, false);
        }
        else {
            this.selectedDate = new Date();
            this._datepicker.select(new Date(), false);
        }
    };
    return SkyDatepickerCalendarComponent;
}());
export { SkyDatepickerCalendarComponent };
SkyDatepickerCalendarComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-datepicker-calendar',
                template: "<div class=\"sky-datepicker-calendar\">\n  <sky-datepicker-inner\n      [selectedDate]=\"selectedDate\"\n      [minDate]=\"minDate\"\n      [maxDate]=\"maxDate\"\n      [startingDay]=\"startingDay\"\n      (selectedDateChange)=\"onSelectedDateChange($event)\"\n      (calendarModeChange)=\"onCalendarModeChange($event)\">\n    <sky-daypicker tabindex=\"0\"></sky-daypicker>\n    <sky-monthpicker tabindex=\"0\"></sky-monthpicker>\n    <sky-yearpicker tabindex=\"0\"></sky-yearpicker>\n  </sky-datepicker-inner>\n</div>\n",
                styles: [".sky-datepicker-calendar {\n  display: block;\n}\n"]
            },] },
];
/** @nocollapse */
SkyDatepickerCalendarComponent.ctorParameters = function () { return [
    { type: SkyDatepickerConfigService, },
]; };
SkyDatepickerCalendarComponent.propDecorators = {
    'minDate': [{ type: Input },],
    'maxDate': [{ type: Input },],
    'startingDay': [{ type: Input },],
    'selectedDate': [{ type: Input },],
    'selectedDateChange': [{ type: Output },],
    'calendarModeChange': [{ type: Output },],
    '_datepicker': [{ type: ViewChild, args: [SkyDatepickerCalendarInnerComponent,] },],
};
//# sourceMappingURL=datepicker-calendar.component.js.map