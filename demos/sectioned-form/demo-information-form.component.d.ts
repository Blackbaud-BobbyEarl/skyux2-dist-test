import { SkySectionedFormService } from '../../core';
export declare class SkyDemoInformationFormComponent {
    private sectionedFormService;
    private _nameRequired;
    private _name;
    private _id;
    nameRequired: boolean;
    name: string;
    id: string;
    constructor(sectionedFormService: SkySectionedFormService);
    private idValid(value);
}
