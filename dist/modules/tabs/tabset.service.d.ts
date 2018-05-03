import { SkyTabComponent } from './tab.component';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/take';
export declare class SkyTabsetService {
    tabs: BehaviorSubject<Array<SkyTabComponent>>;
    activeIndex: BehaviorSubject<any>;
    activateTab(tab: SkyTabComponent): void;
    activateTabIndex(tabIndex: string | number): void;
    addTab(tab: SkyTabComponent): void;
    destroyTab(tab: SkyTabComponent): void;
    destroy(): void;
    private getLastTabIndex(tabs);
    private getTabFromIndex(index, currentTabs);
}
