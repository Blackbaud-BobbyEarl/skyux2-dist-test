import { Component } from '@angular/core';
import { SkyDatepickerCalendarInnerComponent } from './datepicker-calendar-inner.component';
var SkyDayPickerComponent = (function () {
    function SkyDayPickerComponent(datepicker) {
        this.labels = [];
        this.rows = [];
        this.weekNumbers = [];
        this.daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        this.datepicker = datepicker;
    }
    SkyDayPickerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.datepicker.stepDay = { months: 1 };
        this.datepicker.setRefreshViewHandler(function () {
            _this.refreshDayView();
        }, 'day');
        this.datepicker.setCompareHandler(this.compareDays, 'day');
        this.datepicker.setKeydownHandler(function (key, event) {
            _this.keydownDays(key, event);
        }, 'day');
        this.datepicker.refreshView();
    };
    SkyDayPickerComponent.prototype.getDates = function (startDate, n) {
        var dates = new Array(n);
        var current = new Date(startDate.getTime());
        var i = 0;
        var date;
        while (i < n) {
            date = new Date(current.getTime());
            date = this.datepicker.fixTimeZone(date);
            dates[i++] = date;
            current = new Date(current.getFullYear(), current.getMonth(), current.getDate() + 1);
        }
        return dates;
    };
    SkyDayPickerComponent.prototype.compareDays = function (date1, date2) {
        var d1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
        var d2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
        return d1.getTime() - d2.getTime();
    };
    SkyDayPickerComponent.prototype.refreshDayView = function () {
        var year = this.datepicker.activeDate.getFullYear();
        var month = this.datepicker.activeDate.getMonth();
        var firstDayOfMonth = new Date(year, month, 1);
        var difference = this.datepicker.startingDay - firstDayOfMonth.getDay();
        var numDisplayedFromPreviousMonth = (difference > 0)
            ? 7 - difference
            : -difference;
        var firstDate = new Date(firstDayOfMonth.getTime());
        /* istanbul ignore else */
        /* sanity check */
        if (numDisplayedFromPreviousMonth > 0) {
            firstDate.setDate(-numDisplayedFromPreviousMonth + 1);
        }
        // 42 is the number of days on a six-week calendar
        var days = this.getDates(firstDate, 42);
        var pickerDates = [];
        for (var i = 0; i < 42; i++) {
            var _dateObject = this.datepicker.createDateObject(days[i], this.datepicker.formatDay, days[i].getMonth() !== month, this.datepicker.datepickerId + '-' + i);
            pickerDates[i] = _dateObject;
        }
        this.labels = [];
        for (var j = 0; j < 7; j++) {
            this.labels[j] = {};
            this.labels[j].abbr =
                this.datepicker.dateFilter(pickerDates[j].date, this.datepicker.formatDayHeader);
            this.labels[j].full = this.datepicker.dateFilter(pickerDates[j].date, 'EEEE');
        }
        this.title =
            this.datepicker.dateFilter(this.datepicker.activeDate, this.datepicker.formatDayTitle);
        this.rows = this.datepicker.createCalendarRows(pickerDates, 7);
    };
    SkyDayPickerComponent.prototype.keydownDays = function (key, event) {
        var date = this.datepicker.activeDate.getDate();
        /* istanbul ignore else */
        /* sanity check */
        if (key === 'left') {
            date = date - 1;
        }
        else if (key === 'up') {
            date = date - 7;
        }
        else if (key === 'right') {
            date = date + 1;
        }
        else if (key === 'down') {
            date = date + 7;
        }
        else if (key === 'pageup' || key === 'pagedown') {
            var month = this.datepicker.activeDate.getMonth() + (key === 'pageup' ? -1 : 1);
            this.datepicker.activeDate.setMonth(month, 1);
            date =
                Math.min(this.getDaysInMonth(this.datepicker.activeDate.getFullYear(), this.datepicker.activeDate.getMonth()), date);
        }
        else if (key === 'home') {
            date = 1;
        }
        else if (key === 'end') {
            date = this.getDaysInMonth(this.datepicker.activeDate.getFullYear(), this.datepicker.activeDate.getMonth());
        }
        this.datepicker.activeDate.setDate(date);
    };
    SkyDayPickerComponent.prototype.getDaysInMonth = function (year, month) {
        return month === 1 && year % 4 === 0 &&
            (year % 400 === 0 || year % 100 !== 0) ? 29 : this.daysInMonth[month];
    };
    return SkyDayPickerComponent;
}());
export { SkyDayPickerComponent };
SkyDayPickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-daypicker',
                template: "<table\n  *ngIf=\"datepicker.datepickerMode==='day'\"\n  role=\"grid\"\n  [attr.aria-labelledby]=\"datepicker.datepickerId+'-title'\"\n  [attr.aria-activedescendant]=\"datepicker.activeDateId\">\n  <thead>\n    <tr>\n      <th scope=\"col\">\n        <button\n          type=\"button\"\n          class=\"sky-btn sky-btn-default sky-btn-sm sky-datepicker-btn-previous\"\n          (click)=\"datepicker.moveCalendar($event, -1)\"\n          tabindex=\"-1\"\n          aria-hidden=\"true\"\n          >\n          <i class=\"fa fa-chevron-left\"></i>\n        </button>\n      </th>\n      <th [attr.colspan]=\"5 + (datepicker.showWeeks ? 1 : 0)\" scope=\"col\">\n        <button\n          [id]=\"datepicker.datepickerId + '-title'\"\n          type=\"button\"\n          class=\"sky-btn sky-btn-default sky-btn-sm sky-datepicker-calendar-title\"\n          (click)=\"datepicker.toggleModeCalendar($event)\"\n          [disabled]=\"datepicker.datepickerMode === datepicker.maxMode\"\n          [ngClass]=\"{'sky-btn-disabled': datepicker.datepickerMode === datepicker.maxMode}\"\n          tabindex=\"-1\"\n          aria-hidden=\"true\"\n          >\n          <strong>{{title}}</strong>\n        </button>\n      </th>\n      <th scope=\"col\">\n        <button\n          type=\"button\"\n          class=\"sky-btn sky-btn-default sky-btn-sm sky-datepicker-btn-next\"\n          (click)=\"datepicker.moveCalendar($event, 1)\"\n          tabindex=\"-1\"\n          aria-hidden=\"true\"\n          >\n          <i class=\"fa fa-chevron-right\"></i>\n        </button>\n      </th>\n    </tr>\n    <tr>\n      <th\n        scope=\"col\"\n        *ngFor=\"let label of labels\"\n        class=\"sky-datepicker-center sky-datepicker-weekdays\">\n        <small [attr.aria-label]=\"label.full\">\n          <b>{{label.abbr}}</b>\n        </small>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <ng-template\n      ngFor\n      [ngForOf]=\"rows\"\n      let-row=\"$implicit\"\n      let-index=\"index\"\n      >\n      <tr role=\"row\">\n        <td\n          *ngFor=\"let date of row\"\n          class=\"sky-datepicker-center\"\n          role=\"gridcell\"\n          [id]=\"date.uid\"\n          >\n          <button\n            type=\"button\"\n            class=\"sky-btn sky-btn-sm sky-btn-default sky-datepicker-btn-date\"\n            [ngClass]=\"{ 'sky-datepicker-btn-selected': date.selected, 'sky-btn-disabled': date.disabled, 'sky-btn-active': datepicker.isActive(date)}\"\n            [disabled]=\"date.disabled\"\n            (click)=\"datepicker.selectCalendar($event, date.date, true)\"\n            tabindex=\"-1\"\n            >\n            <span\n              [ngClass]=\"{'sky-datepicker-secondary': date.secondary }\"\n              >{{date.label}}</span>\n          </button>\n        </td>\n      </tr>\n    </ng-template>\n  </tbody>\n</table>\n"
            },] },
];
/** @nocollapse */
SkyDayPickerComponent.ctorParameters = function () { return [
    { type: SkyDatepickerCalendarInnerComponent, },
]; };
//# sourceMappingURL=daypicker.component.js.map