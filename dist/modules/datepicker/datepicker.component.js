import { Component, EventEmitter, ViewChild } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { SkyDatepickerCalendarComponent } from './datepicker-calendar.component';
import { SkyDropdownComponent, SkyDropdownMessageType } from '../dropdown';
var SkyDatepickerComponent = (function () {
    function SkyDatepickerComponent() {
        this.dropdownController = new Subject();
        this.dateChanged = new EventEmitter();
    }
    SkyDatepickerComponent.prototype.dateSelected = function (newDate) {
        this.dateChanged.emit(newDate);
        this.dropdownController.next({
            type: SkyDropdownMessageType.Close
        });
    };
    SkyDatepickerComponent.prototype.setSelectedDate = function (newDate) {
        this.calendar.writeValue(newDate);
    };
    SkyDatepickerComponent.prototype.setMinDate = function (_minDate) {
        this.minDate = _minDate;
    };
    SkyDatepickerComponent.prototype.setMaxDate = function (_maxDate) {
        this.maxDate = _maxDate;
    };
    SkyDatepickerComponent.prototype.onCalendarModeChange = function () {
        this.dropdownController.next({
            type: SkyDropdownMessageType.Reposition
        });
    };
    return SkyDatepickerComponent;
}());
export { SkyDatepickerComponent };
SkyDatepickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-datepicker',
                template: "<div class=\"sky-datepicker\">\n  <div class=\"sky-input-group\">\n    <ng-content></ng-content>\n\n    <div class=\"sky-input-group-btn sky-input-group-datepicker-btn\">\n      <sky-dropdown\n        buttonType=\"calendar\"\n        alignment=\"right\"\n        [messageStream]=\"dropdownController\">\n        <sky-dropdown-menu>\n          <sky-datepicker-calendar\n            (selectedDateChange)=\"dateSelected($event)\"\n            (calendarModeChange)=\"onCalendarModeChange()\"\n            [maxDate]=\"maxDate\"\n            [minDate]=\"minDate\">\n          </sky-datepicker-calendar>\n        </sky-dropdown-menu>\n      </sky-dropdown>\n    </div>\n  </div>\n</div>\n",
                styles: [".sky-input-group-datepicker-btn /deep/ .sky-dropdown-button.sky-btn {\n  border-radius: 0;\n  border-left-color: transparent;\n}\n\n.sky-input-group-datepicker-btn /deep/ .sky-dropdown-button.sky-btn:hover {\n  border-left: 1px solid #cdcfd2;\n}\n\n.sky-input-group-datepicker-btn /deep/ .sky-dropdown-menu {\n  box-shadow: none;\n  background-color: transparent;\n  text-align: center;\n}\n\n.sky-datepicker ::ng-deep .sky-popover-container .sky-popover {\n  box-shadow: none;\n  background-color: transparent;\n}\n"]
            },] },
];
/** @nocollapse */
SkyDatepickerComponent.ctorParameters = function () { return []; };
SkyDatepickerComponent.propDecorators = {
    'calendar': [{ type: ViewChild, args: [SkyDatepickerCalendarComponent,] },],
    'dropdown': [{ type: ViewChild, args: [SkyDropdownComponent,] },],
};
//# sourceMappingURL=datepicker.component.js.map