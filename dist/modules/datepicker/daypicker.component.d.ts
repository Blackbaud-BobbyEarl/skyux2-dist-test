import { OnInit } from '@angular/core';
import { SkyDatepickerCalendarInnerComponent } from './datepicker-calendar-inner.component';
import { SkyDatepickerDate } from './datepicker-date';
export declare class SkyDayPickerComponent implements OnInit {
    labels: any[];
    title: string;
    rows: Array<Array<SkyDatepickerDate>>;
    weekNumbers: number[];
    datepicker: SkyDatepickerCalendarInnerComponent;
    CURRENT_THEME_TEMPLATE: any;
    private daysInMonth;
    constructor(datepicker: SkyDatepickerCalendarInnerComponent);
    ngOnInit(): void;
    protected getDates(startDate: Date, n: number): Date[];
    private compareDays(date1, date2);
    private refreshDayView();
    private keydownDays(key, event);
    private getDaysInMonth(year, month);
}
