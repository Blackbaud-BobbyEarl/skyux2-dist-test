import { OnInit } from '@angular/core';
export declare class SkySortDemoComponent implements OnInit {
    initialState: number;
    sortOptions: {
        id: number;
        label: string;
        name: string;
        descending: boolean;
    }[];
    sortedItems: any[];
    sortItems(item: any): void;
    ngOnInit(): void;
}
