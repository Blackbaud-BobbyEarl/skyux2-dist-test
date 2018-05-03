import { Injectable } from '@angular/core';
var SkyAvatarAdapterService = (function () {
    function SkyAvatarAdapterService() {
    }
    SkyAvatarAdapterService.prototype.updateImage = function (elementRef, src) {
        this.revokeBlobUrl();
        var el = elementRef.nativeElement;
        /*istanbul ignore else */
        if (el) {
            var imageEl = el.querySelector('.sky-avatar-image');
            /*istanbul ignore else */
            if (imageEl) {
                var url = void 0;
                if (src) {
                    if (src instanceof File || src instanceof Blob) {
                        url = this.createBlobUrl(src);
                    }
                    else {
                        url = src;
                    }
                }
                imageEl.style.backgroundImage = url ? 'url(' + url + ')' : '';
            }
        }
    };
    SkyAvatarAdapterService.prototype.destroy = function () {
        this.revokeBlobUrl();
    };
    SkyAvatarAdapterService.prototype.createBlobUrl = function (src) {
        var url = URL.createObjectURL(src);
        // Keep the last blob URL around so we can revoke it later.
        // https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL
        this.blobUrl = url;
        return url;
    };
    SkyAvatarAdapterService.prototype.revokeBlobUrl = function () {
        if (this.blobUrl) {
            URL.revokeObjectURL(this.blobUrl);
            this.blobUrl = undefined;
        }
    };
    return SkyAvatarAdapterService;
}());
export { SkyAvatarAdapterService };
SkyAvatarAdapterService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SkyAvatarAdapterService.ctorParameters = function () { return []; };
//# sourceMappingURL=avatar-adapter.service.js.map