import { SkyResourcesService } from '../resources/resources.service';
import { SkyTabsetComponent } from './tabset.component';
export declare class SkyTabsetNavButtonComponent {
    private resources;
    tabset: SkyTabsetComponent;
    buttonType: string;
    buttonText: string;
    readonly disabled: boolean;
    private readonly selectedTab;
    private readonly nextTab;
    private readonly previousTab;
    private _buttonText;
    constructor(resources: SkyResourcesService);
    buttonClick(): void;
}
