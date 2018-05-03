import { Component, Input, Output, KeyValueDiffers, EventEmitter } from '@angular/core';
var SkyFileItemComponent = (function () {
    function SkyFileItemComponent(differs) {
        this.differs = differs;
        this.deleteFile = new EventEmitter();
        this.differ = this.differs.find({}).create(undefined);
    }
    SkyFileItemComponent.prototype.ngDoCheck = function () {
        var changes = this.differ.diff(this.fileItem);
        if (changes) {
            var cls = void 0, extensionUpper = this.getFileExtensionUpper(), fileTypeUpper = void 0;
            switch (extensionUpper) {
                case '.PDF':
                    cls = 'pdf';
                    break;
                case '.GZ':
                case '.RAR':
                case '.TGZ':
                case '.ZIP':
                    cls = 'archive';
                    break;
                case '.PPT':
                case '.PPTX':
                    cls = 'powerpoint';
                    break;
                case '.DOC':
                case '.DOCX':
                    cls = 'word';
                    break;
                case '.XLS':
                case '.XLSX':
                    cls = 'excel';
                    break;
                case '.TXT':
                    cls = 'text';
                    break;
                case '.HTM':
                case '.HTML':
                    cls = 'code';
                    break;
                default:
                    break;
            }
            if (!cls) {
                fileTypeUpper = this.getFileTypeUpper();
                switch (fileTypeUpper.substr(0, fileTypeUpper.indexOf('/'))) {
                    case 'AUDIO':
                        cls = 'audio';
                        break;
                    case 'IMAGE':
                        // Normally images are displayed as thumbnails, but if an image type is not recognized
                        // as being widely supported by modern browsers (e.g. TIFF files) then an icon should
                        // be displayed instead.
                        cls = 'image';
                        break;
                    case 'TEXT':
                        cls = 'text';
                        break;
                    case 'VIDEO':
                        cls = 'video';
                        break;
                    default:
                        break;
                }
            }
            this.otherCls = 'fa-file-' + (cls ? cls + '-' : '') + 'o';
        }
    };
    SkyFileItemComponent.prototype.itemDelete = function () {
        this.deleteFile.emit(this.fileItem);
    };
    SkyFileItemComponent.prototype.isFile = function () {
        var file = this.fileItem.file;
        /* tslint:disable */
        return file && file !== undefined && file !== null && file.size !== undefined
            && file.size !== null;
        /* tslint:enable */
    };
    SkyFileItemComponent.prototype.isImg = function () {
        var fileTypeUpper = this.getFileTypeUpper(), slashIndex;
        slashIndex = fileTypeUpper.indexOf('/');
        if (slashIndex >= 0) {
            switch (fileTypeUpper.substr(fileTypeUpper.indexOf('/') + 1)) {
                case 'BMP':
                case 'GIF':
                case 'JPEG':
                case 'PNG':
                    return true;
                default:
                    break;
            }
        }
        return false;
    };
    SkyFileItemComponent.prototype.getFileExtensionUpper = function () {
        var extension = '', name;
        /* istanbul ignore else */
        /* sanity check */
        if (this.fileItem) {
            var file = this.fileItem.file;
            if (file) {
                /* istanbul ignore next */
                name = file.name || '';
                /* istanbul ignore next */
                extension = name.substr(name.lastIndexOf('.')) || '';
            }
            else {
                extension = '';
            }
        }
        return extension.toUpperCase();
    };
    SkyFileItemComponent.prototype.getFileTypeUpper = function () {
        var fileType = '';
        /* istanbul ignore else */
        /* sanity check */
        if (this.fileItem) {
            var file = this.fileItem.file;
            if (file) {
                fileType = file.type || '';
            }
            else {
                fileType = '';
            }
        }
        return fileType.toUpperCase();
    };
    return SkyFileItemComponent;
}());
export { SkyFileItemComponent };
SkyFileItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-file-item',
                template: "<div class=\"sky-file-item\">\n    <div class=\"sky-file-item-title\">\n        <div class=\"sky-file-item-name-container\">\n            <div class=\"sky-file-item-name\">\n                <strong *ngIf=\"isFile()\">{{fileItem.file.name || fileItem.url}}</strong>\n                <strong *ngIf=\"!isFile()\">{{fileItem.url}}</strong>\n            </div>\n            <div class=\"sky-file-item-size\" *ngIf=\"isFile()\">\n                ({{fileItem.file.size | skyFileSize}})\n            </div>\n        </div>\n        <div class=\"sky-pull-right\">\n          <button type=\"button\" class=\"sky-btn sky-btn-default sky-file-item-btn-delete\" [attr.aria-label]=\"'file_item_delete' | skyResources\" (click)=\"itemDelete()\">\n              <i class=\"fa fa-lg fa-trash-o\"></i>\n          </button>\n        </div>\n    </div>\n    <div class=\"sky-file-item-content\">\n        <div class=\"sky-file-item-preview\">\n            <div *ngIf=\"isImg()\" class=\"sky-file-item-preview-img-container\">\n              <img class=\"sky-file-item-preview-img\" [src]=\"fileItem.url\" />\n            </div>\n            <div *ngIf=\"!isImg()\" class=\"sky-file-item-preview-other\">\n                <i class=\"fa\" [ngClass]=\"otherCls\"></i>\n            </div>\n        </div>\n        <div class=\"sky-file-item-content-custom\">\n          <ng-content></ng-content>\n        </div>\n    </div>\n</div>\n",
                styles: [".sky-file-item {\n  border-top: 1px solid #e2e3e4;\n  border-bottom: 1px solid #e2e3e4;\n  border-left: 1px solid #e2e3e4;\n  border-right: 1px solid #e2e3e4;\n  background-color: #eeeeef;\n  padding: 10px;\n  margin-bottom: 10px;\n}\n\n.sky-file-item-name-container {\n  display: inline-block;\n  width: 85%;\n}\n\n.sky-file-item-name {\n  white-space: nowrap;\n  overflow: hidden;\n  -ms-text-overflow: ellipsis;\n  -o-text-overflow: ellipsis;\n  text-overflow: ellipsis;\n}\n\n.sky-file-item-title {\n  margin-bottom: 10px;\n}\n\n.sky-file-item-content {\n  display: flex;\n}\n\n.sky-file-item-preview {\n  flex-basis: 25%;\n}\n\n.sky-file-item-content-custom {\n  flex-basis: 75%;\n}\n\n.sky-file-item-preview-img-container {\n  text-align: center;\n}\n\n.sky-file-item-preview-img {\n  max-width: 100%;\n  height: auto;\n  box-shadow: 0 0 5px #666;\n}\n\n.sky-file-item-preview-other {\n  color: #686c73;\n  font-size: 100px;\n  line-height: 1;\n  text-align: center;\n  width: 100%;\n}\n"]
            },] },
];
/** @nocollapse */
SkyFileItemComponent.ctorParameters = function () { return [
    { type: KeyValueDiffers, },
]; };
SkyFileItemComponent.propDecorators = {
    'fileItem': [{ type: Input },],
    'deleteFile': [{ type: Output },],
};
//# sourceMappingURL=file-item.component.js.map