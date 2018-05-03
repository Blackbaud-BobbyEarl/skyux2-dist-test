import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SkyErrorModalService } from '../error/error-modal.service';
import { SkyResources } from '../resources/resources';
var SkyAvatarComponent = (function () {
    function SkyAvatarComponent(errorService) {
        this.errorService = errorService;
        this.avatarChanged = new EventEmitter();
        this.maxFileSize = 500000;
    }
    Object.defineProperty(SkyAvatarComponent.prototype, "src", {
        get: function () {
            return this._src;
        },
        set: function (value) {
            this._src = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyAvatarComponent.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyAvatarComponent.prototype, "canChange", {
        get: function () {
            return this._canChange;
        },
        set: function (value) {
            this._canChange = value;
        },
        enumerable: true,
        configurable: true
    });
    SkyAvatarComponent.prototype.photoDrop = function (result) {
        /* sanity check */
        /* istanbul ignore else */
        if (result.files && result.files.length > 0) {
            this.avatarChanged.emit(result.files[0]);
        }
        else if (result.rejectedFiles && result.rejectedFiles.length > 0) {
            this.handleError(result.rejectedFiles);
        }
    };
    SkyAvatarComponent.prototype.handleError = function (rejectedFiles) {
        var rejectedFile = rejectedFiles[0];
        if (rejectedFile.errorType === 'maxFileSize') {
            var title = SkyResources.getString('avatar_error_too_large_title');
            var descriptionResource = SkyResources.getString('avatar_error_too_large_description');
            var description = descriptionResource.replace('{0}', this.maxFileSizeText());
            this.openErrorModal(title, description);
        }
        else if (rejectedFile.errorType === 'fileType') {
            var title = SkyResources.getString('avatar_error_not_image_title');
            var description = SkyResources.getString('avatar_error_not_image_description');
            this.openErrorModal(title, description);
        }
    };
    SkyAvatarComponent.prototype.maxFileSizeText = function () {
        return (this.maxFileSize / 1000) + " KB";
    };
    SkyAvatarComponent.prototype.openErrorModal = function (title, description) {
        var config = {
            errorTitle: title,
            errorDescription: description,
            errorCloseText: SkyResources.getString('errormodal_ok')
        };
        this.errorService.open(config);
    };
    return SkyAvatarComponent;
}());
export { SkyAvatarComponent };
SkyAvatarComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-avatar',
                template: "<div class=\"sky-avatar\">\n  <div *ngIf=\"canChange\">\n    <div class=\"sky-avatar-file-drop\">\n      <sky-file-drop\n        [multiple]=\"false\"\n        [acceptedTypes]=\"'image/*'\"\n        [maxFileSize]=\"maxFileSize\"\n        (filesChanged)=\"photoDrop($event)\">\n        <sky-avatar-inner [src]=\"src\" [name]=\"name\"></sky-avatar-inner>\n      </sky-file-drop>\n    </div>\n  </div>\n  <div *ngIf=\"!canChange\">\n    <sky-avatar-inner [src]=\"src\" [name]=\"name\"></sky-avatar-inner>\n  </div>\n</div>\n",
                styles: [".sky-avatar /deep/ .sky-file-drop-accept .sky-avatar-wrapper {\n  border: dashed 2px #71bf43;\n}\n\n.sky-avatar /deep/ .sky-file-drop-reject .sky-avatar-wrapper {\n  border: dashed 2px #ef4044;\n}\n\n.sky-avatar /deep/ .sky-file-drop .sky-avatar-wrapper {\n  cursor: pointer;\n}\n\n.sky-avatar /deep/ .sky-file-drop-col {\n  flex-basis: initial;\n}\n"]
            },] },
];
/** @nocollapse */
SkyAvatarComponent.ctorParameters = function () { return [
    { type: SkyErrorModalService, },
]; };
SkyAvatarComponent.propDecorators = {
    'src': [{ type: Input },],
    'name': [{ type: Input },],
    'canChange': [{ type: Input },],
    'avatarChanged': [{ type: Output },],
};
//# sourceMappingURL=avatar.component.js.map