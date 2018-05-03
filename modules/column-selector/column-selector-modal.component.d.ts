import { SkyModalInstance } from '../modal';
import { SkyColumnSelectorContext } from './column-selector-context';
export declare class SkyColumnSelectorComponent {
    context: SkyColumnSelectorContext;
    instance: SkyModalInstance;
    newSelectedColumnIds: Array<string>;
    constructor(context: SkyColumnSelectorContext, instance: SkyModalInstance);
    selectedColumnsChange(selectedMap: Map<string, boolean>): void;
    cancelChanges(): void;
    applyChanges(): void;
}
