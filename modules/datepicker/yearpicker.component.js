import { Component } from '@angular/core';
import { SkyDatepickerCalendarInnerComponent } from './datepicker-calendar-inner.component';
var SkyYearPickerComponent = (function () {
    function SkyYearPickerComponent(datepicker) {
        this.rows = [];
        this.datepicker = datepicker;
    }
    SkyYearPickerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.datepicker.stepYear = { years: this.datepicker.yearRange };
        this.datepicker.setRefreshViewHandler(function () {
            _this.refreshYearView();
        }, 'year');
        this.datepicker.setCompareHandler(this.compareYears, 'year');
        this.datepicker.setKeydownHandler(function (key, event) {
            _this.keydownYears(key, event);
        }, 'year');
        this.datepicker.refreshView();
    };
    SkyYearPickerComponent.prototype.getStartingYear = function (year) {
        return Math.floor((year - 1) / this.datepicker.yearRange) * this.datepicker.yearRange + 1;
    };
    SkyYearPickerComponent.prototype.compareYears = function (date1, date2) {
        return date1.getFullYear() - date2.getFullYear();
    };
    SkyYearPickerComponent.prototype.refreshYearView = function () {
        var years = new Array(this.datepicker.yearRange);
        var date;
        var start = this.getStartingYear(this.datepicker.activeDate.getFullYear());
        for (var i = 0; i < this.datepicker.yearRange; i++) {
            date = new Date(this.datepicker.activeDate);
            date.setFullYear(start + i, 0, 1);
            years[i] =
                this.datepicker.createDateObject(date, this.datepicker.formatYear, false, this.datepicker.datepickerId + '-' + i);
        }
        this.title = [years[0].label,
            years[this.datepicker.yearRange - 1].label].join(' - ');
        this.rows = this.datepicker.createCalendarRows(years, this.datepicker.yearColLimit);
    };
    SkyYearPickerComponent.prototype.keydownYears = function (key, event) {
        var date = this.datepicker.activeDate.getFullYear();
        /* istanbul ignore else */
        /* sanity check */
        if (key === 'left') {
            date = date - 1;
        }
        else if (key === 'up') {
            date = date - this.datepicker.yearColLimit;
        }
        else if (key === 'right') {
            date = date + 1;
        }
        else if (key === 'down') {
            date = date + this.datepicker.yearColLimit;
        }
        else if (key === 'pageup' || key === 'pagedown') {
            date += (key === 'pageup' ? -1 : 1) * this.datepicker.yearRange;
        }
        else if (key === 'home') {
            date = this.getStartingYear(this.datepicker.activeDate.getFullYear());
        }
        else if (key === 'end') {
            date
                = this.getStartingYear(this.datepicker.activeDate.getFullYear()) + this.datepicker.yearRange - 1;
        }
        this.datepicker.activeDate.setFullYear(date);
    };
    return SkyYearPickerComponent;
}());
export { SkyYearPickerComponent };
SkyYearPickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-yearpicker',
                template: "<table *ngIf=\"datepicker.datepickerMode==='year'\" role=\"grid\">\n  <thead>\n    <tr>\n      <th>\n        <button\n          type=\"button\"\n          class=\"sky-btn sky-btn-default sky-btn-sm sky-datepicker-btn-previous\"\n          (click)=\"datepicker.moveCalendar($event, -1)\"\n          tabindex=\"-1\"\n          >\n          <i class=\"fa fa-chevron-left\"></i>\n        </button>\n      </th>\n      <th [attr.colspan]=\"((datepicker.yearColLimit - 2) <= 0) ? 1 : datepicker.yearColLimit - 2\">\n        <button\n          [id]=\"datepicker.datepickerId + '-title'\"\n          role=\"heading\"\n          type=\"button\"\n          class=\"sky-btn sky-btn-default sky-btn-sm sky-datepicker-calendar-title\"\n          (click)=\"datepicker.toggleModeCalendar($event)\"\n          [disabled]=\"datepicker.datepickerMode === datepicker.maxMode\"\n          [ngClass]=\"{'sky-btn-disabled': datepicker.datepickerMode === datepicker.maxMode}\"\n          tabindex=\"-1\"\n          >\n          <strong>{{title}}</strong>\n        </button>\n      </th>\n      <th>\n        <button\n          type=\"button\"\n          class=\"sky-btn sky-btn-default sky-btn-sm sky-datepicker-btn-next\"\n          (click)=\"datepicker.moveCalendar($event, 1)\"\n          tabindex=\"-1\"\n          >\n          <i class=\"fa fa-chevron-right\"></i>\n        </button>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let row of rows\">\n      <td\n        *ngFor=\"let date of row\"\n        class=\"sky-datepicker-row\"\n        role=\"gridcell\"\n        >\n        <button\n          type=\"button\"\n          class=\"sky-btn sky-btn-default sky-datepicker-btn-date\"\n          [ngClass]=\"{'sky-datepicker-btn-selected': date.selected, 'sky-btn-disabled': date.disabled, 'sky-btn-active': datepicker.isActive(date)}\"\n          [disabled]=\"date.disabled\"\n          (click)=\"datepicker.selectCalendar($event, date.date)\"\n          tabindex=\"-1\"\n          >\n          <span\n            [ngClass]=\"{'sky-datepicker-current': date.current }\">{{date.label}}</span>\n        </button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n"
            },] },
];
/** @nocollapse */
SkyYearPickerComponent.ctorParameters = function () { return [
    { type: SkyDatepickerCalendarInnerComponent, },
]; };
//# sourceMappingURL=yearpicker.component.js.map