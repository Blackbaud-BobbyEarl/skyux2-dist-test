import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { SkyToken, SkyTokenSelectedEventArgs, SkyTokensMessage } from '../../core';
export declare class SkyTokensDemoComponent implements OnDestroy {
    colors: SkyToken[];
    filters: SkyToken[];
    tokensController: Subject<SkyTokensMessage>;
    private defaultColors;
    private selectedFilters;
    constructor();
    ngOnDestroy(): void;
    resetColors(): void;
    changeColors(): void;
    destroyColors(): void;
    createColors(): void;
    onTokenSelected(args: SkyTokenSelectedEventArgs): void;
    onFocusIndexUnderRange(): void;
    onFocusIndexOverRange(): void;
    focusLastToken(): void;
    private parseTokens(data);
}
