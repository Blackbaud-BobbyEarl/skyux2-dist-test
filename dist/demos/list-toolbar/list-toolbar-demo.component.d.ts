import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
export declare class SkyListToolbarDemoComponent {
    items: Observable<{
        id: string;
        column1: number;
        column2: string;
        column3: string;
    }[]>;
}
