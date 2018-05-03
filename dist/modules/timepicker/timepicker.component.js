import { Component, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { SkyDropdownMessageType } from '../dropdown';
var moment = require('moment');
var SkyTimepickerComponent = (function () {
    function SkyTimepickerComponent() {
        this.selectedTimeChanged = new EventEmitter();
        this.dropdownController = new Subject();
        this.timeFormat = 'hh';
        this.is8601 = false;
    }
    SkyTimepickerComponent.prototype.ngOnInit = function () {
        this.setFormat(this.timeFormat);
    };
    SkyTimepickerComponent.prototype.setFormat = function (format) {
        var h = 12;
        var m = 12;
        var minuteMultiplier = 5;
        var localeFormat = 'h:mm A';
        if (format === 'hh') {
            h = 12;
            m = 12;
            minuteMultiplier = 5;
            localeFormat = 'h:mm A';
        }
        if (format === 'HH') {
            h = 24;
            m = 4;
            minuteMultiplier = 15;
            localeFormat = 'HH:mm';
            this.is8601 = true;
        }
        var data;
        data = {
            'hours': Array.apply(undefined, Array(h))
                .map(function (x, i) {
                if (format === 'hh') {
                    return ++i;
                }
                /* istanbul ignore else */
                if (format === 'HH') {
                    return i;
                }
                /* istanbul ignore next */
                /* sanity check */
                return 0;
            }),
            'minutes': Array.apply(undefined, Array(m))
                .map(function (x, i) {
                return i * minuteMultiplier;
            }),
            'localeFormat': localeFormat,
            'minuteMultiplier': minuteMultiplier
        };
        this.hours = data.hours;
        this.minutes = data.minutes;
        this.localeFormat = data.localeFormat;
        this.minuteMultiplier = data.minuteMultiplier;
    };
    Object.defineProperty(SkyTimepickerComponent.prototype, "selectedTime", {
        get: function () {
            var time = {
                hour: moment(this.activeTime).hour(),
                minute: moment(this.activeTime).minute(),
                meridie: moment(this.activeTime).format('A'),
                timezone: parseInt(moment(this.activeTime).format('Z'), 10),
                iso8601: this.activeTime,
                local: moment(this.activeTime).format(this.localeFormat),
                customFormat: (typeof this.returnFormat !== 'undefined')
                    ? this.returnFormat : this.localeFormat
            };
            return time;
        },
        set: function (newTime) {
            if (typeof newTime !== 'undefined') {
                /* sanity check */
                /* istanbul ignore else */
                if (newTime.local !== 'Invalid date') {
                    this.activeTime = newTime.iso8601;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    SkyTimepickerComponent.prototype.setTime = function (event) {
        /* istanbul ignore else */
        if (typeof event !== 'undefined') {
            /* istanbul ignore else */
            if (event.type === 'click') {
                event.stopPropagation();
                if (event.target.name === 'hour') {
                    this.selectedHour = parseInt(event.target.innerHTML, 0);
                }
                if (event.target.name === 'minute') {
                    this.selectedMinute = parseInt(event.target.innerHTML, 0);
                }
                if (event.target.name === 'meridie') {
                    this.selectedMeridies = event.target.innerHTML;
                }
            }
        }
    };
    SkyTimepickerComponent.prototype.onButtonClick = function () {
        this.dropdownController.next({
            type: SkyDropdownMessageType.Close
        });
    };
    Object.defineProperty(SkyTimepickerComponent.prototype, "selectedHour", {
        get: function () {
            if (!this.is8601) {
                /* istanbul ignore next */
                return parseInt(moment(this.activeTime).format('h'), 0) || 1;
            }
            /* istanbul ignore else */
            if (this.is8601) {
                return moment(this.activeTime).hour() + 0;
            }
        },
        set: function (setHour) {
            var hour;
            var hourOffset = 0;
            if (this.selectedMeridies === 'AM' && setHour === 12) {
                hourOffset = -12;
            }
            if (this.selectedMeridies === 'PM' && setHour !== 12) {
                hourOffset = 12;
            }
            if (this.is8601) {
                hourOffset = 0;
            }
            hour = moment({ 'hour': setHour }).add(hourOffset, 'hours').hour();
            this.activeTime = moment({
                'hour': hour,
                'minute': moment(this.activeTime).get('minute') + 0
            }).toDate();
            this.selectedTimeChanged.emit(this.selectedTime);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyTimepickerComponent.prototype, "selectedMinute", {
        get: function () {
            return moment(this.activeTime).minute() + 0;
        },
        set: function (minute) {
            this.activeTime = moment({
                'hour': moment(this.activeTime).get('hour') + 0,
                'minute': minute
            }).toDate();
            this.selectedTimeChanged.emit(this.selectedTime);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyTimepickerComponent.prototype, "selectedMeridies", {
        get: function () {
            if (this.activeTime) {
                return moment(this.activeTime).format('A');
            }
            return '';
        },
        set: function (meridies) {
            /* istanbul ignore else */
            if (!this.is8601) {
                if (meridies !== this.selectedMeridies) {
                    this.activeTime = moment(this.activeTime).add(12, 'hours').toDate();
                    this.selectedTimeChanged.emit(this.selectedTime);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    return SkyTimepickerComponent;
}());
export { SkyTimepickerComponent };
SkyTimepickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-timepicker',
                template: "<div class=\"sky-input-group\">\n  <ng-content></ng-content>\n  <div class=\"sky-input-group-btn sky-input-group-timepicker-btn\">\n    <sky-dropdown\n      buttonType=\"clock-o\"\n      alignment=\"right\"\n      [messageStream]=\"dropdownController\">\n      <sky-dropdown-menu>\n        <sky-dropdown-item>\n          <div class=\"sky-timepicker-container\">\n            <section class=\"sky-timepicker-column\" [ngClass]=\"{'sky-timepicker-24hour':is8601}\">\n              <ol>\n                <li *ngFor=\"let hour of hours;\">\n                  <button type=\"button\" name=\"hour\" (click)=\"setTime($event);\" [ngClass]=\"{'sky-btn-active': selectedHour === hour}\">{{hour}}</button>\n                </li>\n              </ol>\n            </section>\n            <section class=\"sky-timepicker-column\">\n              <ol>\n                <li *ngFor=\"let minute of minutes;\">\n                  <button type=\"button\" name=\"minute\" (click)=\"setTime($event);\" [ngClass]=\"{'sky-btn-active': selectedMinute === minute}\">{{ '00' .substring(0, 2 - (minute) .toString() .length) + (minute) }}</button>\n                </li>\n              </ol>\n            </section>\n            <section *ngIf=\"!is8601\" class=\"sky-timepicker-column\">\n              <ol>\n                <li>\n                  <button type=\"button\" name=\"meridie\" (click)=\"setTime($event);\" [ngClass]=\"{'sky-btn-active': selectedMeridies === 'AM'}\">AM</button>\n                </li>\n                <li>\n                  <button type=\"button\" name=\"meridie\" (click)=\"setTime($event);\" [ngClass]=\"{'sky-btn-active': selectedMeridies === 'PM'}\">PM</button>\n                </li>\n              </ol>\n            </section>\n          </div>\n          <div class=\"sky-timepicker-container sky-timepicker-footer\">\n            <section class=\"sky-timepicker-column\">\n              <button\n                type=\"button\"\n                (click)=\"onButtonClick()\">\n                {{'timepicker_close' | skyResources}}\n              </button>\n            </section>\n          </div>\n        </sky-dropdown-item>\n      </sky-dropdown-menu>\n    </sky-dropdown>\n  </div>\n</div>\n",
                styles: [".sky-input-group-timepicker-btn /deep/ .sky-btn {\n  border-radius: 0;\n}\n\n.sky-input-group-timepicker-btn /deep/ .sky-dropdown-menu {\n  box-shadow: none;\n  background-color: transparent;\n  text-align: center;\n}\n\n.sky-input-group /deep/ .sky-dropdown-item {\n  box-shadow: 0 0 3px 0;\n}\n\n.sky-timepicker-container {\n  font-size: 15px;\n  display: flex;\n  padding: 5px;\n  background-color: #eeeeef;\n}\n\n.sky-timepicker-container button {\n  background-color: #ffffff;\n  border-width: 0;\n  padding: 15px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  width: 100%;\n  height: 100%;\n}\n\n.sky-timepicker-container :last-child ol {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.sky-timepicker-container :last-child ol li {\n  border-bottom: 1px solid #e2e3e4;\n  flex: 1;\n}\n\n.sky-timepicker-column {\n  margin: 5px;\n}\n\n.sky-timepicker-column ol {\n  border-top: 1px solid #e2e3e4;\n  border-right: 1px solid #e2e3e4;\n  border-bottom: 1px solid #e2e3e4;\n  border-left: 1px solid #e2e3e4;\n  column-gap: 1px;\n  columns: 2;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\n.sky-timepicker-column ol li {\n  text-align: center;\n  cursor: pointer;\n  margin: 0;\n}\n\n.sky-timepicker-column ol li button {\n  cursor: pointer;\n}\n\n.sky-timepicker-column ol li button:focus {\n  outline: thin dotted;\n  outline: -webkit-focus-ring-color auto 5px;\n  outline-offset: -2px;\n}\n\n.sky-timepicker-column ol li button:hover {\n  background-color: #eeeeef;\n}\n\n.sky-timepicker-column ol li button:active {\n  background-color: #e2e3e4;\n}\n\n.sky-timepicker-column ol li button.sky-btn-active:hover {\n  background-color: #007ca6;\n}\n\n.sky-timepicker-column ol .sky-btn-active {\n  background-color: #007ca6;\n  color: #ffffff;\n}\n\n.sky-timepicker-column.sky-timepicker-24hour ol {\n  columns: 4;\n}\n\n.sky-timepicker-column.sky-timepicker-24hour ol li {\n  border-bottom-width: 0px;\n}\n\n.sky-timepicker-footer {\n  margin: 0px;\n  padding: 10px;\n  padding-top: 0px;\n}\n\n.sky-timepicker-footer .sky-timepicker-column {\n  width: 100%;\n}\n\n.sky-timepicker-footer button {\n  border-style: solid;\n  border-width: 1px;\n  border-color: #e2e3e4;\n  padding: 10px;\n  cursor: pointer;\n}\n"],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
SkyTimepickerComponent.ctorParameters = function () { return []; };
SkyTimepickerComponent.propDecorators = {
    'selectedTimeChanged': [{ type: Output },],
};
//# sourceMappingURL=timepicker.component.js.map