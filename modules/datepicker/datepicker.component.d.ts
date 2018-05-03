import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { SkyDatepickerCalendarComponent } from './datepicker-calendar.component';
import { SkyDropdownComponent, SkyDropdownMessage } from '../dropdown';
export declare class SkyDatepickerComponent {
    calendar: SkyDatepickerCalendarComponent;
    dropdown: SkyDropdownComponent;
    dropdownController: Subject<SkyDropdownMessage>;
    dateChanged: EventEmitter<Date>;
    maxDate: Date;
    minDate: Date;
    dateSelected(newDate: Date): void;
    setSelectedDate(newDate: Date): void;
    setMinDate(_minDate: Date): void;
    setMaxDate(_maxDate: Date): void;
    onCalendarModeChange(): void;
}
