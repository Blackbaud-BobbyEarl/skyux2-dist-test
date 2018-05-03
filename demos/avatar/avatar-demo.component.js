import { Component } from '@angular/core';
var SkyAvatarDemoComponent = (function () {
    function SkyAvatarDemoComponent() {
        this.name = 'Robert C. Hernandez';
        this.showImage = true;
        this.avatarUrl = 'https://imgur.com/tBiGElW.png';
    }
    Object.defineProperty(SkyAvatarDemoComponent.prototype, "src", {
        get: function () {
            return this.showImage ? this.avatarUrl : undefined;
        },
        enumerable: true,
        configurable: true
    });
    SkyAvatarDemoComponent.prototype.updateSrc = function (fileItem) {
        /*
          This is where you might upload the new avatar,
          but for this demo we'll just update it locally.
        */
        if (fileItem) {
            this.avatarUrl = fileItem.file;
        }
    };
    return SkyAvatarDemoComponent;
}());
export { SkyAvatarDemoComponent };
SkyAvatarDemoComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-avatar-demo',
                template: "<sky-avatar\n  [name]=\"name\"\n  [src]=\"src\"\n  [canChange]=\"true\"\n  (avatarChanged)=\"updateSrc($event)\">\n</sky-avatar>\n<sky-checkbox\n  [(ngModel)]=\"showImage\">\n  <sky-checkbox-label>Show image</sky-checkbox-label>\n</sky-checkbox>\n"
            },] },
];
/** @nocollapse */
SkyAvatarDemoComponent.ctorParameters = function () { return []; };
//# sourceMappingURL=avatar-demo.component.js.map