import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/take';
export declare class SkyListViewChecklistDemoComponent {
    items: Observable<{
        id: string;
        column1: number;
        column2: string;
        column3: string;
    }[]>;
    selectedItems: any[];
    selectMode: string;
    selectedItemsChange(selectedMap: Map<string, boolean>): void;
}
