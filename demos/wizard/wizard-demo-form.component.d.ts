import { SkyModalInstance } from '../../core';
export declare class SkyWizardDemoFormComponent {
    instance: SkyModalInstance;
    title: string;
    requiredValue1: string;
    requiredValue2: boolean;
    readonly step2Disabled: boolean;
    readonly step3Disabled: boolean;
    constructor(instance: SkyModalInstance);
    validateStep1(): boolean;
}
