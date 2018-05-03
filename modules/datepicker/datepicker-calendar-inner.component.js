import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SkyDateFormatter } from './date-formatter';
var nextDatepickerId = 0;
var SkyDatepickerCalendarInnerComponent = (function () {
    function SkyDatepickerCalendarInnerComponent() {
        this.selectedDateChange = new EventEmitter(undefined);
        this.calendarModeChange = new EventEmitter();
        this.minMode = 'day';
        this.maxMode = 'year';
        this.monthColLimit = 3;
        this.yearColLimit = 5;
        this.datepickerMode = 'day';
        this.yearRange = 20;
        this.formatDay = 'DD';
        this.formatMonth = 'MMMM';
        this.formatYear = 'YYYY';
        this.formatDayHeader = 'dd';
        this.formatDayTitle = 'MMMM YYYY';
        this.formatMonthTitle = 'YYYY';
        this.datepickerId = "sky-datepicker-" + ++nextDatepickerId;
        this.stepDay = {};
        this.stepMonth = {};
        this.stepYear = {};
        this.modes = ['day', 'month', 'year'];
        this.dateFormatter = new SkyDateFormatter();
        this.keys = {
            13: 'enter',
            32: 'space',
            33: 'pageup',
            34: 'pagedown',
            35: 'end',
            36: 'home',
            37: 'left',
            38: 'up',
            39: 'right',
            40: 'down'
        };
    }
    SkyDatepickerCalendarInnerComponent.prototype.ngOnInit = function () {
        if (this.selectedDate) {
            this.activeDate = new Date(this.selectedDate);
        }
        else {
            this.activeDate = new Date();
        }
    };
    SkyDatepickerCalendarInnerComponent.prototype.ngOnChanges = function (changes) {
        this.refreshView();
    };
    SkyDatepickerCalendarInnerComponent.prototype.setCompareHandler = function (handler, type) {
        if (type === 'day') {
            this.compareHandlerDay = handler;
        }
        if (type === 'month') {
            this.compareHandlerMonth = handler;
        }
        if (type === 'year') {
            this.compareHandlerYear = handler;
        }
    };
    SkyDatepickerCalendarInnerComponent.prototype.compare = function (date1, date2) {
        if (date1 === undefined || date2 === undefined) {
            return undefined;
        }
        if (this.datepickerMode === 'day' && this.compareHandlerDay) {
            return this.compareHandlerDay(date1, date2);
        }
        if (this.datepickerMode === 'month' && this.compareHandlerMonth) {
            return this.compareHandlerMonth(date1, date2);
        }
        /* istanbul ignore else */
        /* sanity check */
        if (this.datepickerMode === 'year' && this.compareHandlerYear) {
            return this.compareHandlerYear(date1, date2);
        }
    };
    SkyDatepickerCalendarInnerComponent.prototype.setRefreshViewHandler = function (handler, type) {
        if (type === 'day') {
            this.refreshViewHandlerDay = handler;
        }
        if (type === 'month') {
            this.refreshViewHandlerMonth = handler;
        }
        if (type === 'year') {
            this.refreshViewHandlerYear = handler;
        }
    };
    SkyDatepickerCalendarInnerComponent.prototype.refreshView = function () {
        if (this.datepickerMode === 'day' && this.refreshViewHandlerDay) {
            this.refreshViewHandlerDay();
        }
        if (this.datepickerMode === 'month' && this.refreshViewHandlerMonth) {
            this.refreshViewHandlerMonth();
        }
        if (this.datepickerMode === 'year' && this.refreshViewHandlerYear) {
            this.refreshViewHandlerYear();
        }
    };
    SkyDatepickerCalendarInnerComponent.prototype.setKeydownHandler = function (handler, type) {
        if (type === 'day') {
            this.handleKeydownDay = handler;
        }
        if (type === 'month') {
            this.handleKeydownMonth = handler;
        }
        if (type === 'year') {
            this.handleKeydownYear = handler;
        }
    };
    SkyDatepickerCalendarInnerComponent.prototype.handleKeydown = function (key, event) {
        if (this.datepickerMode === 'day' && this.handleKeydownDay) {
            this.handleKeydownDay(key, event);
        }
        if (this.datepickerMode === 'month' && this.handleKeydownMonth) {
            this.handleKeydownMonth(key, event);
        }
        if (this.datepickerMode === 'year' && this.handleKeydownYear) {
            this.handleKeydownYear(key, event);
        }
    };
    SkyDatepickerCalendarInnerComponent.prototype.dateFilter = function (date, format) {
        return this.dateFormatter.format(date, format);
    };
    SkyDatepickerCalendarInnerComponent.prototype.isActive = function (dateObject) {
        if (this.compare(dateObject.date, this.activeDate) === 0) {
            this.activeDateId = dateObject.uid;
            return true;
        }
        return false;
    };
    SkyDatepickerCalendarInnerComponent.prototype.onKeydown = function (event) {
        var key = this.keys[event.which];
        if (!key || event.shiftKey || event.altKey) {
            return;
        }
        event.preventDefault();
        event.stopPropagation();
        if (key === 'enter' || key === 'space') {
            if (this.isDisabled(this.activeDate)) {
                return;
            }
            this.select(this.activeDate);
        }
        else if (event.ctrlKey && (key === 'up' || key === 'down')) {
            this.toggleMode(key === 'up' ? 1 : -1);
        }
        else {
            this.handleKeydown(key, event);
            this.refreshView();
        }
    };
    SkyDatepickerCalendarInnerComponent.prototype.createDateObject = function (date, format, isSecondary, id) {
        var dateObject = {
            date: new Date(date.getFullYear(), date.getMonth(), date.getDate()),
            label: this.dateFilter(date, format),
            selected: this.compare(date, this.selectedDate) === 0,
            disabled: this.isDisabled(date),
            current: this.compare(date, new Date()) === 0,
            secondary: isSecondary,
            uid: id
        };
        return dateObject;
    };
    SkyDatepickerCalendarInnerComponent.prototype.createCalendarRows = function (dates, size) {
        var rows = [];
        while (dates.length > 0) {
            rows.push(dates.splice(0, size));
        }
        return rows;
    };
    /*
      This is ensures that no strangeness happens when converting a date to local time.
    */
    SkyDatepickerCalendarInnerComponent.prototype.fixTimeZone = function (date) {
        var newDate = new Date(date);
        newDate.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
        return newDate;
    };
    SkyDatepickerCalendarInnerComponent.prototype.selectCalendar = function (event, date, closePicker) {
        if (closePicker === void 0) { closePicker = false; }
        if (!closePicker) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.select(date);
    };
    SkyDatepickerCalendarInnerComponent.prototype.select = function (date, isManual) {
        if (isManual === void 0) { isManual = true; }
        this.activeDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        /*
            Only actually select date if in minmode (day picker mode).
            Otherwise, just change the active view for the datepicker.
        */
        if (this.datepickerMode === this.minMode) {
            this.selectedDate = new Date(this.activeDate);
            if (isManual) {
                this.selectedDateChange.emit(this.selectedDate);
            }
        }
        else {
            this.datepickerMode = this.modes[this.modes.indexOf(this.datepickerMode) - 1];
            this.calendarModeChange.emit(this.datepickerMode);
        }
        this.refreshView();
    };
    SkyDatepickerCalendarInnerComponent.prototype.moveCalendar = function (event, direction) {
        event.preventDefault();
        event.stopPropagation();
        this.move(direction);
    };
    SkyDatepickerCalendarInnerComponent.prototype.move = function (direction) {
        var expectedStep;
        if (this.datepickerMode === 'day') {
            expectedStep = this.stepDay;
        }
        if (this.datepickerMode === 'month') {
            expectedStep = this.stepMonth;
        }
        if (this.datepickerMode === 'year') {
            expectedStep = this.stepYear;
        }
        /* istanbul ignore else */
        /* sanity check */
        if (expectedStep) {
            var year = this.activeDate.getFullYear() + (direction * (expectedStep.years || 0));
            var month = this.activeDate.getMonth() + (direction * (expectedStep.months || 0));
            this.activeDate = new Date(year, month, 1);
            this.refreshView();
        }
    };
    SkyDatepickerCalendarInnerComponent.prototype.toggleModeCalendar = function (event, direction) {
        event.preventDefault();
        event.stopPropagation();
        this.toggleMode(direction);
    };
    SkyDatepickerCalendarInnerComponent.prototype.toggleMode = function (direction) {
        direction = direction || 1;
        /* istanbul ignore else */
        /* sanity check */
        if (!(direction === 1 && this.datepickerMode === this.maxMode) &&
            !(this.datepickerMode === this.minMode && direction === -1)) {
            this.datepickerMode = this.modes[this.modes.indexOf(this.datepickerMode) + direction];
            this.calendarModeChange.emit(this.datepickerMode);
            this.refreshView();
        }
    };
    SkyDatepickerCalendarInnerComponent.prototype.isDisabled = function (date) {
        return ((this.minDate && this.compare(date, this.minDate) < 0)
            || (this.maxDate && this.compare(date, this.maxDate) > 0));
    };
    return SkyDatepickerCalendarInnerComponent;
}());
export { SkyDatepickerCalendarInnerComponent };
SkyDatepickerCalendarInnerComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-datepicker-inner',
                template: "<div\n  *ngIf=\"datepickerMode\"\n  class=\"sky-datepicker-calendar-inner\"\n  (keydown)=\"onKeydown($event)\">\n  <ng-content></ng-content>\n</div>\n",
                styles: [".sky-datepicker-calendar-inner {\n  border-radius: 5px;\n  background-color: #ffffff;\n  border-top: 1px solid #e2e3e4;\n  border-bottom: 1px solid #e2e3e4;\n  border-left: 1px solid #e2e3e4;\n  border-right: 1px solid #e2e3e4;\n}\n\n.sky-datepicker-calendar-inner /deep/ .sky-btn-default {\n  border-color: #ffffff;\n}\n\n.sky-datepicker-calendar-inner /deep/ .sky-btn-default:hover, .sky-datepicker-calendar-inner /deep/ .sky-btn-active {\n  border-color: #c2c4c6;\n}\n\n.sky-datepicker-calendar-inner /deep/ .sky-datepicker-center {\n  text-align: center;\n}\n\n.sky-datepicker-calendar-inner /deep/ .sky-datepicker-btn-selected {\n  color: #ffffff;\n  background-color: #007ca6;\n  border-top: 1px solid #cdcfd2;\n  border-bottom: 1px solid #cdcfd2;\n  border-left: 1px solid #cdcfd2;\n  border-right: 1px solid #cdcfd2;\n}\n\n.sky-datepicker-calendar-inner /deep/ .sky-datepicker-secondary {\n  color: #686c73;\n}\n\n.sky-datepicker-calendar-inner /deep/ .sky-datepicker-btn-date {\n  min-width: 100%;\n}\n\n.sky-datepicker-calendar-inner /deep/ .sky-datepicker-calendar-title {\n  width: 100%;\n}\n"]
            },] },
];
/** @nocollapse */
SkyDatepickerCalendarInnerComponent.ctorParameters = function () { return []; };
SkyDatepickerCalendarInnerComponent.propDecorators = {
    'startingDay': [{ type: Input },],
    'minDate': [{ type: Input },],
    'maxDate': [{ type: Input },],
    'selectedDate': [{ type: Input },],
    'selectedDateChange': [{ type: Output },],
    'calendarModeChange': [{ type: Output },],
};
//# sourceMappingURL=datepicker-calendar-inner.component.js.map