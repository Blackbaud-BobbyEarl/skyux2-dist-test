import { OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
export declare class SkyListViewGridDemoComponent implements OnInit {
    items: Observable<{
        id: string;
        column1: number;
        column2: string;
        column3: string;
    }[]>;
    asyncHeading: BehaviorSubject<string>;
    ngOnInit(): void;
}
