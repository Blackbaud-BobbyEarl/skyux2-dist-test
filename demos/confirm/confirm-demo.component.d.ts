import { SkyConfirmButtonAction, SkyConfirmService } from '../../core';
export declare class SkyConfirmDemoComponent {
    private confirmService;
    selectedAction: SkyConfirmButtonAction;
    constructor(confirmService: SkyConfirmService);
    openOKConfirm(): void;
    openYesCancelConfirm(): void;
    openYesNoCancelConfirm(): void;
    openCustomConfirm(): void;
}
