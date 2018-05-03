import { Component } from '@angular/core';
var SkyFileAttachmentDemoComponent = (function () {
    function SkyFileAttachmentDemoComponent() {
        this.maxFileSize = 4000000;
        this.acceptedTypes = 'image/png,image/jpeg';
        this.filesToUpload = [];
        this.rejectedFiles = [];
        this.allItems = [];
        this.linksToUpload = [];
    }
    SkyFileAttachmentDemoComponent.prototype.filesUpdated = function (result) {
        this.filesToUpload = this.filesToUpload.concat(result.files);
        this.rejectedFiles = this.rejectedFiles.concat(result.rejectedFiles);
        this.allItems = this.allItems.concat(result.files);
    };
    SkyFileAttachmentDemoComponent.prototype.linkAdded = function (result) {
        this.linksToUpload = this.linksToUpload.concat(result);
        this.allItems = this.allItems.concat(result);
    };
    SkyFileAttachmentDemoComponent.prototype.validateFile = function (file) {
        if (file.file.name.indexOf('a') === 0) {
            return 'You may not upload a file that begins with the letter "a."';
        }
    };
    SkyFileAttachmentDemoComponent.prototype.deleteFile = function (file) {
        this.removeFromArray(this.allItems, file);
        this.removeFromArray(this.filesToUpload, file);
        this.removeFromArray(this.linksToUpload, file);
    };
    SkyFileAttachmentDemoComponent.prototype.removeFromArray = function (items, obj) {
        if (items) {
            var index = items.indexOf(obj);
            if (index !== -1) {
                items.splice(index, 1);
            }
        }
    };
    return SkyFileAttachmentDemoComponent;
}());
export { SkyFileAttachmentDemoComponent };
SkyFileAttachmentDemoComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-file-attachment-demo',
                template: "<div style=\"width: 60%; margin-left: auto; margin-right: auto;\">\n  <sky-file-drop\n    (filesChanged)=\"filesUpdated($event)\"\n    (linkChanged)=\"linkAdded($event)\"\n    [maxFileSize]=\"maxFileSize\"\n    [validateFn]=\"validateFile\"\n    [allowLinks]=\"true\"\n    [acceptedTypes]=\"acceptedTypes\">\n  </sky-file-drop>\n\n  <sky-alert\n    [alertType]=\"'danger'\"\n    [closeable]=\"true\"\n    *ngIf=\"rejectedFiles.length > 0\">\n    The file <strong>{{rejectedFiles[rejectedFiles.length - 1].file.name}}</strong> is invalid.\n    Reason: {{rejectedFiles[rejectedFiles.length - 1].errorType}} violation.\n    Error param: {{rejectedFiles[rejectedFiles.length - 1].errorParam}}\n  </sky-alert>\n\n  <div *ngFor=\"let file of allItems\">\n    <sky-file-item\n      [fileItem]=\"file\"\n      (deleteFile)=\"deleteFile($event)\">\n    </sky-file-item>\n  </div>\n</div>\n"
            },] },
];
/** @nocollapse */
SkyFileAttachmentDemoComponent.ctorParameters = function () { return []; };
//# sourceMappingURL=file-attachment-demo.component.js.map