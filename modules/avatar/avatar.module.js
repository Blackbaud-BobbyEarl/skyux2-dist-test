import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkyFileAttachmentsModule } from '../fileattachments';
import { SkyAvatarComponent } from './avatar.component';
import { SkyAvatarInnerComponent } from './avatar.inner.component';
import { SkyResourcesModule } from '../resources';
import { SkyModalModule } from '../modal/modal.module';
import { SkyErrorModalService } from '../error/error-modal.service';
var SkyAvatarModule = (function () {
    function SkyAvatarModule() {
    }
    return SkyAvatarModule;
}());
export { SkyAvatarModule };
SkyAvatarModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SkyAvatarInnerComponent, SkyAvatarComponent],
                imports: [CommonModule, SkyResourcesModule, SkyFileAttachmentsModule, SkyModalModule],
                exports: [SkyAvatarComponent, SkyAvatarInnerComponent],
                providers: [SkyErrorModalService]
            },] },
];
/** @nocollapse */
SkyAvatarModule.ctorParameters = function () { return []; };
//# sourceMappingURL=avatar.module.js.map