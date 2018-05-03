import { Observable } from 'rxjs/Observable';
export declare function getData(item: any, selector: string): any;
export declare function compare(value1: any, value2: any): 0 | 1 | -1;
export declare function isObservable(obj: any | Observable<any>): obj is Observable<any>;
