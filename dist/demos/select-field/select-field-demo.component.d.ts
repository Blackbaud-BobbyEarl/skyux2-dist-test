import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/take';
export declare class SkySelectFieldDemoComponent implements OnInit {
    private formBuilder;
    reactiveForm: FormGroup;
    colors: {
        id: string;
        label: string;
    }[];
    fruits: {
        id: string;
        category: string;
        label: string;
        description: string;
    }[];
    fruitStream: BehaviorSubject<any>;
    colorStream: BehaviorSubject<any>;
    templateDrivenModel: any;
    constructor(formBuilder: FormBuilder);
    ngOnInit(): void;
    submitReactiveForm(): void;
    submitTemplateForm(formData: any): void;
    private createForm();
    private populateData();
}
