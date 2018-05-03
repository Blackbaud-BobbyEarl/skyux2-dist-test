import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SkyFileDropComponent } from './file-drop.component';
import { SkyFileItemComponent } from './file-item.component';
import { SkyResourcesModule } from '../resources';
import { SkyFileSizePipe } from './file-size.pipe';
var SkyFileAttachmentsModule = (function () {
    function SkyFileAttachmentsModule() {
    }
    return SkyFileAttachmentsModule;
}());
export { SkyFileAttachmentsModule };
SkyFileAttachmentsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SkyFileDropComponent,
                    SkyFileItemComponent,
                    SkyFileSizePipe
                ],
                imports: [
                    CommonModule,
                    SkyResourcesModule,
                    FormsModule
                ],
                exports: [
                    SkyFileDropComponent,
                    SkyFileItemComponent,
                    SkyFileSizePipe
                ],
                providers: [
                    DecimalPipe
                ]
            },] },
];
/** @nocollapse */
SkyFileAttachmentsModule.ctorParameters = function () { return []; };
//# sourceMappingURL=fileattachments.module.js.map