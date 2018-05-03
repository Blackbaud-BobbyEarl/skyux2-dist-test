import { TemplateRef } from '@angular/core';
export declare class SkyGridColumnModel {
    template: TemplateRef<any>;
    id: string;
    field: string;
    heading: string;
    type: string;
    width: number;
    hidden: boolean;
    locked: boolean;
    description: string;
    isSortable: boolean;
    searchFunction: (data: any, searchText: string) => boolean;
    constructor(template: TemplateRef<any>, data?: any);
}
