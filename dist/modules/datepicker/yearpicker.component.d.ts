import { OnInit } from '@angular/core';
import { SkyDatepickerCalendarInnerComponent } from './datepicker-calendar-inner.component';
import { SkyDatepickerDate } from './datepicker-date';
export declare class SkyYearPickerComponent implements OnInit {
    datepicker: SkyDatepickerCalendarInnerComponent;
    title: string;
    rows: Array<Array<SkyDatepickerDate>>;
    constructor(datepicker: SkyDatepickerCalendarInnerComponent);
    ngOnInit(): void;
    protected getStartingYear(year: number): number;
    private compareYears(date1, date2);
    private refreshYearView();
    private keydownYears(key, event);
}
