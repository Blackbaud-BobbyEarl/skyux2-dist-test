import { OnInit, OnDestroy } from '@angular/core';
import 'rxjs/add/operator/takeUntil';
import { SkyVerticalTabComponent } from './../vertical-tabset/vertical-tab.component';
import { SkySectionedFormService } from './sectioned-form.service';
export declare class SkySectionedFormSectionComponent implements OnInit, OnDestroy {
    private sectionedFormService;
    heading: string;
    itemCount: number;
    active: boolean;
    fieldRequired: boolean;
    fieldInvalid: boolean;
    tab: SkyVerticalTabComponent;
    private _ngUnsubscribe;
    constructor(sectionedFormService: SkySectionedFormService);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
