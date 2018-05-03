import { OnInit } from '@angular/core';
import { SkyDatepickerCalendarInnerComponent } from './datepicker-calendar-inner.component';
import { SkyDatepickerDate } from './datepicker-date';
export declare class SkyMonthPickerComponent implements OnInit {
    title: string;
    rows: Array<Array<SkyDatepickerDate>>;
    datepicker: SkyDatepickerCalendarInnerComponent;
    maxMode: string;
    constructor(datepicker: SkyDatepickerCalendarInnerComponent);
    ngOnInit(): void;
    private compareMonth(date1, date2);
    private refreshMonthView();
    private keydownMonths(key, event);
}
