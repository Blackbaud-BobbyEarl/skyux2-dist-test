import { EventEmitter } from '@angular/core';
import { SkyDatepickerCalendarInnerComponent } from './datepicker-calendar-inner.component';
import { SkyDatepickerConfigService } from './datepicker-config.service';
export declare class SkyDatepickerCalendarComponent {
    minDate: Date;
    maxDate: Date;
    /** starting day of the week from 0-6 (0=Sunday, ..., 6=Saturday) */
    startingDay: number;
    /** currently selected date */
    selectedDate: Date;
    selectedDateChange: EventEmitter<Date>;
    calendarModeChange: EventEmitter<string>;
    _datepicker: SkyDatepickerCalendarInnerComponent;
    protected _now: Date;
    protected config: SkyDatepickerConfigService;
    private formatter;
    constructor(config: SkyDatepickerConfigService);
    configureOptions(): void;
    onCalendarModeChange(event: string): void;
    onSelectedDateChange(event: Date): void;
    writeValue(value: Date): void;
}
