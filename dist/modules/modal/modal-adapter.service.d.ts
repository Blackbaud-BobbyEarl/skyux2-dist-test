import { SkyWindowRefService } from '../window';
export declare class SkyModalAdapterService {
    private windowRef;
    private static readonly MODAL_BODY_FULL_CLASS;
    private static readonly MODAL_BODY_CLASS;
    private docRef;
    private bodyEl;
    constructor(windowRef: SkyWindowRefService);
    addHostEl(): void;
    removeHostEl(): void;
    toggleFullPageModalClass(isAddFull: boolean): void;
    setPageScroll(isAdd: boolean): void;
    getModalOpener(): HTMLElement;
    private addClassToBody(className);
    private removeClassFromBody(className);
}
