import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
var SkyFileDropComponent = (function () {
    function SkyFileDropComponent() {
        this.filesChanged = new EventEmitter();
        this.linkChanged = new EventEmitter();
        this.minFileSize = 0;
        this.maxFileSize = 500000;
        this.multiple = true;
        this.noClick = false;
        this.allowLinks = false;
        this.rejectedOver = false;
        this.acceptedOver = false;
    }
    SkyFileDropComponent.prototype.dropClicked = function () {
        if (!this.noClick) {
            this.inputEl.nativeElement.click();
        }
    };
    SkyFileDropComponent.prototype.fileChangeEvent = function (fileChangeEvent) {
        this.handleFiles(fileChangeEvent.target.files);
    };
    SkyFileDropComponent.prototype.fileDragEnter = function (dragEnterEvent) {
        // Save this target to know when the drag event leaves
        this.enterEventTarget = dragEnterEvent.target;
        dragEnterEvent.stopPropagation();
        dragEnterEvent.preventDefault();
    };
    SkyFileDropComponent.prototype.fileDragOver = function (dragOverEvent) {
        var transfer = dragOverEvent.dataTransfer;
        dragOverEvent.stopPropagation();
        dragOverEvent.preventDefault();
        if (transfer) {
            if (transfer.items) {
                var files = transfer.items;
                for (var index = 0; index < files.length; index++) {
                    var file = files[index];
                    if (file.type && this.fileTypeRejected(file.type)) {
                        this.rejectedOver = true;
                        this.acceptedOver = false;
                        return;
                    }
                }
                if (files.length > 0 && !this.acceptedOver) {
                    this.rejectedOver = false;
                    this.acceptedOver = true;
                }
            }
            else if (transfer.files) {
                // If the browser does not support DataTransfer.items,
                // defer file-type checking to drop handler.
                // https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/items#Browser_compatibility
                this.rejectedOver = false;
                this.acceptedOver = true;
            }
        }
    };
    SkyFileDropComponent.prototype.fileDrop = function (dropEvent) {
        dropEvent.stopPropagation();
        dropEvent.preventDefault();
        this.enterEventTarget = undefined;
        this.rejectedOver = false;
        this.acceptedOver = false;
        if (dropEvent.dataTransfer && dropEvent.dataTransfer.files) {
            if (this.verifyDropFiles(dropEvent.dataTransfer.files)) {
                this.handleFiles(dropEvent.dataTransfer.files);
            }
        }
    };
    SkyFileDropComponent.prototype.fileDragLeave = function (dragLeaveEvent) {
        if (this.enterEventTarget === dragLeaveEvent.target) {
            this.rejectedOver = false;
            this.acceptedOver = false;
        }
    };
    SkyFileDropComponent.prototype.addLinkEnter = function (event) {
        if (event.which === 13) {
            this.addLink(event);
        }
    };
    SkyFileDropComponent.prototype.addLink = function (event) {
        event.preventDefault();
        this.linkChanged.emit({ url: this.linkUrl });
        this.linkUrl = undefined;
    };
    SkyFileDropComponent.prototype.emitFileChangeEvent = function (totalFiles, rejectedFileArray, validFileArray) {
        if (totalFiles === rejectedFileArray.length + validFileArray.length) {
            this.filesChanged.emit({
                files: validFileArray,
                rejectedFiles: rejectedFileArray
            });
            this.inputEl.nativeElement.value = '';
        }
    };
    SkyFileDropComponent.prototype.filesRejected = function (file, validFileArray, rejectedFileArray, totalFiles) {
        rejectedFileArray.push(file);
        this.emitFileChangeEvent(totalFiles, rejectedFileArray, validFileArray);
    };
    SkyFileDropComponent.prototype.loadFile = function (fileDrop, file, validFileArray, rejectedFileArray, totalFiles) {
        var reader = new FileReader();
        reader.addEventListener('load', function (event) {
            file.url = event.target.result;
            validFileArray.push(file);
            fileDrop.emitFileChangeEvent(totalFiles, rejectedFileArray, validFileArray);
        });
        reader.addEventListener('error', function (event) {
            fileDrop.filesRejected(file, validFileArray, rejectedFileArray, totalFiles);
        });
        reader.addEventListener('abort', function (event) {
            fileDrop.filesRejected(file, validFileArray, rejectedFileArray, totalFiles);
        });
        reader.readAsDataURL(file.file);
    };
    SkyFileDropComponent.prototype.getMimeSubtype = function (type) {
        return type.substr(type.indexOf('/') + 1, type.length);
    };
    SkyFileDropComponent.prototype.getMimeMainType = function (type) {
        return type.substr(0, type.indexOf('/'));
    };
    SkyFileDropComponent.prototype.fileTypeInArray = function (typeArray, fileType) {
        if (typeArray.indexOf(fileType) !== -1) {
            return true;
        }
        for (var index = 0; index < typeArray.length; index++) {
            var type = typeArray[index];
            var validSubtype = this.getMimeSubtype(type);
            if (validSubtype === '*') {
                if (this.getMimeMainType(type) === this.getMimeMainType(fileType)) {
                    return true;
                }
            }
        }
        return false;
    };
    SkyFileDropComponent.prototype.fileTypeRejected = function (fileType) {
        if (!this.acceptedTypes) {
            return false;
        }
        if (!fileType) {
            return true;
        }
        var acceptedTypesUpper = this.acceptedTypes.toUpperCase();
        var typeArray = acceptedTypesUpper.split(',');
        return !this.fileTypeInArray(typeArray, fileType.toUpperCase());
    };
    SkyFileDropComponent.prototype.handleFiles = function (files) {
        var validFileArray = [];
        var rejectedFileArray = [];
        var totalFiles = files.length;
        var fileDrop = this;
        for (var index = 0; index < files.length; index++) {
            var fileItem = {
                file: files.item(index)
            };
            if (fileItem.file.size < this.minFileSize) {
                fileItem.errorType = 'minFileSize';
                fileItem.errorParam = this.minFileSize.toString();
                this.filesRejected(fileItem, validFileArray, rejectedFileArray, totalFiles);
            }
            else if (fileItem.file.size > this.maxFileSize) {
                fileItem.errorType = 'maxFileSize';
                fileItem.errorParam = this.maxFileSize.toString();
                this.filesRejected(fileItem, validFileArray, rejectedFileArray, totalFiles);
            }
            else if (this.fileTypeRejected(fileItem.file.type)) {
                fileItem.errorType = 'fileType';
                fileItem.errorParam = this.acceptedTypes;
                this.filesRejected(fileItem, validFileArray, rejectedFileArray, totalFiles);
            }
            else if (this.validateFn) {
                var errorParam = this.validateFn(fileItem);
                if (!!errorParam) {
                    fileItem.errorType = 'validate';
                    fileItem.errorParam = errorParam;
                    this.filesRejected(fileItem, validFileArray, rejectedFileArray, totalFiles);
                }
                else {
                    this.loadFile(fileDrop, fileItem, validFileArray, rejectedFileArray, totalFiles);
                }
            }
            else {
                this.loadFile(fileDrop, fileItem, validFileArray, rejectedFileArray, totalFiles);
            }
        }
    };
    SkyFileDropComponent.prototype.verifyDropFiles = function (files) {
        if (!this.multiple && files.length > 1) {
            return false;
        }
        for (var index = 0; index < files.length; index++) {
            var file = files.item(index);
            if (file.webkitGetAsEntry && file.webkitGetAsEntry() && file.webkitGetAsEntry().isDirectory) {
                return false;
            }
        }
        return true;
    };
    return SkyFileDropComponent;
}());
export { SkyFileDropComponent };
SkyFileDropComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-file-drop',
                template: "<div\n  class=\"sky-file-drop-row\" [ngClass]=\"{ 'sky-file-drop-allow-links': allowLinks }\">\n  <div\n    class=\"sky-file-drop-col\"\n    [ngClass]=\"{ 'sky-file-drop-accept': acceptedOver, 'sky-file-drop-reject': rejectedOver }\">\n\n    <button\n      class=\"sky-file-drop sky-file-drop-target\"\n      type=\"button\"\n      (click)=\"dropClicked()\"\n      (dragover)=\"fileDragOver($event)\"\n      (dragenter)=\"fileDragEnter($event)\"\n      (dragleave)=\"fileDragLeave($event)\"\n      (drop)=\"fileDrop($event)\"\n      [attr.aria-label]=\"'file_upload_drag_or_click' | skyResources\">\n    </button>\n\n    <input\n      tabindex=\"-1\"\n      aria-hidden=\"true\"\n      type=\"file\"\n      class=\"sky-file-input-hidden\"\n      [attr.multiple]=\"multiple ? multiple: null\"\n      [attr.accept]=\"acceptedTypes ? acceptedTypes: null\"\n      (change)=\"fileChangeEvent($event)\"\n      #fileInput>\n\n    <div class=\"sky-file-drop-contents\" *ngIf=\"customEl.children.length === 0\">\n      <div class=\"sky-file-drop-contents-not-over\">\n        <div class=\"sky-file-drop-text-header\">\n          {{ 'file_upload_drag_file_here' | skyResources }}\n        </div>\n        <div class=\"sky-file-drop-text\">\n          {{ 'file_upload_or_click_to_browse' | skyResources }}\n        </div>\n        <i class=\"fa fa-cloud-upload sky-file-upload-icon\"></i>\n      </div>\n\n      <!-- This will appear when file is dragged over and is valid -->\n      <div class=\"sky-file-drop-contents-accept\" >\n        <div class=\"sky-file-drop-text-header\">\n          {{ 'file_upload_drop_files_here' | skyResources }}\n        </div>\n        <i class=\"fa fa-bullseye sky-file-upload-icon\"></i>\n      </div>\n\n      <!-- This will appear when file is dragged over and is invalid -->\n      <div class=\"sky-file-drop-contents-reject\" >\n        <div class=\"sky-file-drop-text-header\">\n          {{ 'file_upload_invalid_file' | skyResources }}\n        </div>\n        <i class=\"fa fa-times-circle sky-file-upload-icon\"></i>\n      </div>\n    </div>\n\n    <div class=\"sky-file-drop-contents-custom\" #customEl>\n      <ng-content></ng-content>\n    </div>\n  </div>\n  <div class=\"sky-file-drop-col\" *ngIf=\"allowLinks\">\n    <div class=\"sky-file-drop-contents\">\n      <div class=\"sky-file-drop-link\">\n        <div class=\"sky-file-drop-link-header\">\n          <div class=\"sky-file-drop-text-header\">\n            {{ 'file_upload_paste_link' | skyResources }}\n          </div>\n        </div>\n        <div class=\"sky-form-group\">\n          <input\n            type=\"text\"\n            class=\"sky-form-control\"\n            [attr.placeholder]=\"'file_upload_link_placeholder' | skyResources\"\n            [(ngModel)]=\"linkUrl\"\n            (keyup)=\"addLinkEnter($event)\"\n            [attr.aria-label]=\"'file_upload_link_input' | skyResources\">\n        </div>\n        <button\n          type=\"button\"\n          class=\"sky-btn sky-btn-primary\"\n          [disabled]=\"!linkUrl\"\n          (click)=\"addLink($event)\">\n          {{ 'file_upload_paste_link_done' | skyResources }}\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n",
                styles: [".sky-file-drop-col {\n  margin-bottom: 10px;\n  padding-left: 5px;\n  padding-right: 5px;\n  position: relative;\n}\n\n@media (min-width: 768px) {\n  .sky-file-drop-row {\n    display: flex;\n  }\n  .sky-file-drop-col {\n    flex-basis: 100%;\n  }\n  .sky-file-drop-allow-links.sky-file-drop-col {\n    flex-basis: 50%;\n  }\n}\n\nbutton.sky-file-drop {\n  height: 100%;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n}\n\nbutton.sky-file-drop:hover {\n  cursor: pointer;\n}\n\n.sky-file-drop-contents {\n  border-top: 1px solid #cdcfd2;\n  border-bottom: 1px solid #cdcfd2;\n  border-left: 1px solid #cdcfd2;\n  border-right: 1px solid #cdcfd2;\n  background-color: #eeeeef;\n  padding: 10px;\n  color: #282b31;\n  cursor: pointer;\n  width: 100%;\n  text-align: center;\n  height: 100%;\n}\n\n.sky-file-drop-contents .sky-file-drop-link-header {\n  margin-bottom: 5px;\n}\n\n.sky-file-drop-noclick .sky-file-drop-contents {\n  cursor: default;\n}\n\n.sky-file-drop-accept .sky-file-drop-contents,\n.sky-file-drop-reject .sky-file-drop-contents {\n  border-style: dashed;\n  border-width: 1px;\n}\n\n.sky-file-drop-accept .sky-file-drop-contents-not-over,\n.sky-file-drop-reject .sky-file-drop-contents-not-over {\n  display: none;\n}\n\n.sky-file-drop-accept .sky-file-drop-contents {\n  border-color: #71bf43;\n  color: #282b31;\n}\n\n.sky-file-drop-accept .sky-file-drop-contents-accept {\n  display: block;\n}\n\n.sky-file-drop-reject .sky-file-drop-contents {\n  border-color: #ef4044;\n  color: #282b31;\n}\n\n.sky-file-drop-reject .sky-file-drop-contents-reject {\n  display: block;\n}\n\n.sky-file-drop-contents-accept,\n.sky-file-drop-contents-reject {\n  display: none;\n}\n\n.sky-file-upload-icon {\n  display: block;\n  font-size: 40px;\n  margin-top: 10px;\n}\n\n.sky-file-drop-link {\n  cursor: default;\n}\n\n.sky-file-drop-text-header {\n  font-family: \"Blackbaud Sans Condensed\", \"Helvetica Neue Condensed\", \"Arial Narrow\";\n  color: #282b31;\n  font-weight: 500;\n  font-size: 22px;\n  margin: 0;\n}\n\n.sky-file-drop-text {\n  font-size: 15px;\n  margin-top: 5px;\n  margin-bottom: 20px;\n}\n\n.sky-file-drop-text,\n.sky-file-drop-text-header {\n  line-height: 1.1;\n  display: block;\n}\n\n.sky-file-upload-icon {\n  color: #686c73;\n}\n\n.sky-file-drop {\n  background-color: transparent;\n  border: none;\n  display: block;\n  -webkit-appearance: none;\n  width: 100%;\n  padding: 0;\n}\n\n.sky-file-input-hidden {\n  display: none;\n}\n"]
            },] },
];
/** @nocollapse */
SkyFileDropComponent.ctorParameters = function () { return []; };
SkyFileDropComponent.propDecorators = {
    'filesChanged': [{ type: Output },],
    'linkChanged': [{ type: Output },],
    'minFileSize': [{ type: Input },],
    'maxFileSize': [{ type: Input },],
    'multiple': [{ type: Input },],
    'validateFn': [{ type: Input },],
    'acceptedTypes': [{ type: Input },],
    'noClick': [{ type: Input },],
    'allowLinks': [{ type: Input },],
    'inputEl': [{ type: ViewChild, args: ['fileInput',] },],
};
//# sourceMappingURL=file-drop.component.js.map