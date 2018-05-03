import { OnInit } from '@angular/core';
import { SkyResourcesService } from '../resources/resources.service';
export declare class SkyErrorComponent implements OnInit {
    private resources;
    errorType: string;
    title: string;
    description: string;
    private _errorType;
    constructor(resources: SkyResourcesService);
    ngOnInit(): void;
    setErrorTypeFields(): void;
    showBrokenImage(): boolean;
    showNotFoundImage(): boolean;
    showConstructionImage(): boolean;
    showSecurityImage(): boolean;
}
