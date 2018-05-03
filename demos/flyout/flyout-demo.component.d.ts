import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { SkyFlyoutInstance, SkyFlyoutService } from '../../core';
import { FlyoutDemoContext } from './flyout-demo-context';
import { SkyFlyoutDemoInternalComponent } from './flyout-demo-internal.component';
export declare class SkyFlyoutDemoComponent {
    private flyoutService;
    users: Observable<{
        id: string;
        name: string;
    }[]>;
    flyout: SkyFlyoutInstance<SkyFlyoutDemoInternalComponent>;
    constructor(flyoutService: SkyFlyoutService);
    openRecord(record: FlyoutDemoContext): void;
    closeFlyout(): void;
    removeFlyout(): void;
    isRecordOpen(record: FlyoutDemoContext): boolean;
}
