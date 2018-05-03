import { EventEmitter, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { SkyDropdownMessage } from '../dropdown';
import { SkyTimepickerTimeOutput } from './timepicker.interface';
export declare class SkyTimepickerComponent implements OnInit {
    selectedTimeChanged: EventEmitter<SkyTimepickerTimeOutput>;
    dropdownController: Subject<SkyDropdownMessage>;
    activeTime: Date;
    returnFormat: string;
    timeFormat: string;
    hours: Array<number>;
    minutes: Array<number>;
    localeFormat: string;
    minuteMultiplier: number;
    is8601: boolean;
    ngOnInit(): void;
    setFormat(format: string): void;
    selectedTime: SkyTimepickerTimeOutput;
    setTime(event: any): void;
    onButtonClick(): void;
    selectedHour: number;
    selectedMinute: number;
    selectedMeridies: string;
}
