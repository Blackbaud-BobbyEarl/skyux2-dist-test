import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SkyAutocompleteSearchFunction, SkyAutocompleteSearchFunctionFilter, SkyAutocompleteSelectionChange } from '../../core';
export declare class SkyAutocompleteDemoComponent implements OnInit {
    private formBuilder;
    reactiveForm: FormGroup;
    templateDrivenModel: any;
    selectedColor: any;
    colors: any[];
    largestOcean: any;
    oceans: any[];
    farthestPlanet: any;
    planets: any[];
    searchFilters: SkyAutocompleteSearchFunctionFilter[];
    constructor(formBuilder: FormBuilder);
    ngOnInit(): void;
    submitTemplateForm(formData: any): void;
    submitReactiveForm(): void;
    onPlanetSelection(args: SkyAutocompleteSelectionChange): void;
    getOceanSearchFunction(): SkyAutocompleteSearchFunction;
    private createForm();
}
