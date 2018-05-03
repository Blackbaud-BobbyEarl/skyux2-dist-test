import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { ListItemModel } from '../../core';
export declare class SkyListFiltersInlineDemoComponent {
    items: Observable<any>;
    fruitTypeFilterFunction(item: ListItemModel, filterValue: any): boolean;
    hideOrangeFilterFunction(item: ListItemModel, filterValue: any): boolean;
}
