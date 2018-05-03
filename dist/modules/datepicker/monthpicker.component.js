import { Component } from '@angular/core';
import { SkyDatepickerCalendarInnerComponent } from './datepicker-calendar-inner.component';
var SkyMonthPickerComponent = (function () {
    function SkyMonthPickerComponent(datepicker) {
        this.rows = [];
        this.datepicker = datepicker;
    }
    SkyMonthPickerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.datepicker.stepMonth = {
            years: 1
        };
        this.datepicker.setRefreshViewHandler(function () {
            _this.refreshMonthView();
        }, 'month');
        this.datepicker.setCompareHandler(this.compareMonth, 'month');
        this.datepicker.refreshView();
        this.datepicker.setKeydownHandler(function (key, event) {
            _this.keydownMonths(key, event);
        }, 'month');
    };
    SkyMonthPickerComponent.prototype.compareMonth = function (date1, date2) {
        var d1 = new Date(date1.getFullYear(), date1.getMonth());
        var d2 = new Date(date2.getFullYear(), date2.getMonth());
        return d1.getTime() - d2.getTime();
    };
    SkyMonthPickerComponent.prototype.refreshMonthView = function () {
        var months = new Array(12);
        var year = this.datepicker.activeDate.getFullYear();
        var date;
        for (var i = 0; i < 12; i++) {
            date = new Date(year, i, 1);
            date = this.datepicker.fixTimeZone(date);
            months[i] =
                this.datepicker.createDateObject(date, this.datepicker.formatMonth, false, this.datepicker.datepickerId + '-' + i);
        }
        this.title =
            this.datepicker.dateFilter(this.datepicker.activeDate, this.datepicker.formatMonthTitle);
        this.rows = this.datepicker.createCalendarRows(months, this.datepicker.monthColLimit);
    };
    SkyMonthPickerComponent.prototype.keydownMonths = function (key, event) {
        var date = this.datepicker.activeDate.getMonth();
        /* istanbul ignore else */
        /* sanity check */
        if (key === 'left') {
            date = date - 1;
        }
        else if (key === 'up') {
            date = date - this.datepicker.monthColLimit;
        }
        else if (key === 'right') {
            date = date + 1;
        }
        else if (key === 'down') {
            date = date + this.datepicker.monthColLimit;
        }
        else if (key === 'pageup' || key === 'pagedown') {
            var year = this.datepicker.activeDate.getFullYear() + (key === 'pageup' ? -1 : 1);
            this.datepicker.activeDate.setFullYear(year);
        }
        else if (key === 'home') {
            date = 0;
        }
        else if (key === 'end') {
            date = 11;
        }
        this.datepicker.activeDate.setMonth(date);
    };
    return SkyMonthPickerComponent;
}());
export { SkyMonthPickerComponent };
SkyMonthPickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-monthpicker',
                template: "<table *ngIf=\"datepicker.datepickerMode==='month'\" role=\"grid\">\n  <thead>\n    <tr>\n      <th>\n        <button\n          type=\"button\"\n          class=\"sky-btn sky-btn-default sky-btn-sm sky-datepicker-btn-previous\"\n          (click)=\"datepicker.moveCalendar($event, -1)\"\n          tabindex=\"-1\"\n          >\n          <i class=\"fa fa-chevron-left\"></i>\n        </button></th>\n      <th [attr.colspan]=\"((datepicker.monthColLimit - 2) <= 0) ? 1 : datepicker.monthColLimit - 2\">\n        <button\n          [id]=\"datepicker.datepickerId + '-title'\"\n          type=\"button\"\n          class=\"sky-btn sky-btn-default sky-btn-sm sky-datepicker-calendar-title\"\n          (click)=\"datepicker.toggleModeCalendar($event)\"\n          [disabled]=\"datepicker.datepickerMode === maxMode\"\n          [ngClass]=\"{'sky-btn-disabled': datepicker.datepickerMode === maxMode}\"\n          tabindex=\"-1\"\n          >\n          <strong>{{title}}</strong>\n        </button>\n      </th>\n      <th>\n        <button\n          type=\"button\"\n          class=\"sky-btn sky-btn-default sky-btn-sm sky-datepicker-btn-next\"\n          (click)=\"datepicker.moveCalendar($event, 1)\"\n          tabindex=\"-1\"\n          >\n          <i class=\"fa fa-chevron-right\"></i>\n        </button>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let row of rows\">\n      <td\n        *ngFor=\"let date of row\"\n        class=\"text-center\"\n        role=\"gridcell\"\n        id=\"{{date.uid}}\">\n        <button\n          type=\"button\"\n          class=\"sky-btn sky-btn-default sky-datepicker-btn-date\"\n          [ngClass]=\"{'sky-datepicker-btn-selected': date.selected, 'sky-btn-disabled': date.disabled, 'sky-btn-active': datepicker.isActive(date)}\"\n          [disabled]=\"date.disabled\"\n          (click)=\"datepicker.selectCalendar($event, date.date)\"\n          tabindex=\"-1\"\n          >\n          <span [ngClass]=\"{'sky-datepicker-current': date.current}\">{{date.label}}</span>\n        </button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n"
            },] },
];
/** @nocollapse */
SkyMonthPickerComponent.ctorParameters = function () { return [
    { type: SkyDatepickerCalendarInnerComponent, },
]; };
//# sourceMappingURL=monthpicker.component.js.map