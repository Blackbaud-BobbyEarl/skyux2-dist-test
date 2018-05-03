import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SkyAutocompleteSearchFunctionFilter } from '../../core';
export declare class SkyLookupDemoComponent implements OnInit {
    private formBuilder;
    reactiveForm: FormGroup;
    people: any[];
    friends: any[];
    constructor(formBuilder: FormBuilder);
    ngOnInit(): void;
    getSearchFilters(): SkyAutocompleteSearchFunctionFilter[];
    enableLookup(): void;
    disableLookup(): void;
    submitReactiveForm(): void;
    private createForm();
}
