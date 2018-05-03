import { Component, ElementRef, Input } from '@angular/core';
import { SkyAvatarAdapterService } from './avatar-adapter.service';
var SkyAvatarInnerComponent = (function () {
    function SkyAvatarInnerComponent(elementRef, adapter) {
        this.elementRef = elementRef;
        this.adapter = adapter;
    }
    Object.defineProperty(SkyAvatarInnerComponent.prototype, "src", {
        get: function () {
            return this._src;
        },
        set: function (value) {
            this._src = value;
            this.updateImage();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyAvatarInnerComponent.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyAvatarInnerComponent.prototype, "initials", {
        get: function () {
            var initials;
            if (this.name) {
                var nameSplit = this.name.split(' ');
                initials = getInitial(nameSplit[0]);
                if (nameSplit.length > 1) {
                    initials += getInitial(nameSplit[nameSplit.length - 1]);
                }
            }
            return initials;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyAvatarInnerComponent.prototype, "colorIndex", {
        get: function () {
            var name = this.name;
            var colorIndex;
            if (name) {
                // Generate a unique-ish color based on the record name.  This is deterministic
                // so that a given name will always generate the same color.
                var seed = name.charCodeAt(0) + name.charCodeAt(name.length - 1) + name.length;
                colorIndex = Math.abs(seed % 6);
            }
            else {
                colorIndex = 0;
            }
            return colorIndex;
        },
        enumerable: true,
        configurable: true
    });
    SkyAvatarInnerComponent.prototype.ngAfterViewInit = function () {
        this.viewInitialized = true;
        this.updateImage();
    };
    SkyAvatarInnerComponent.prototype.ngOnDestroy = function () {
        this.adapter.destroy();
    };
    SkyAvatarInnerComponent.prototype.updateImage = function () {
        if (this.viewInitialized) {
            this.adapter.updateImage(this.elementRef, this.src);
        }
    };
    return SkyAvatarInnerComponent;
}());
export { SkyAvatarInnerComponent };
SkyAvatarInnerComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-avatar-inner',
                template: "<div class=\"sky-avatar-wrapper\">\n  <div class=\"sky-avatar-image\" [hidden]=\"!src\"></div>\n  <div\n    class=\"sky-avatar-initials\"\n    [ngClass]=\"'sky-palette-multi-' + (colorIndex + 1)\"\n    [hidden]=\"src || !name\"\n    >\n    <div class=\"sky-avatar-initials-inner\">\n      {{initials}}\n    </div>\n  </div>\n</div>\n",
                styles: [".sky-avatar-wrapper {\n  height: 104px;\n  width: 104px;\n  border: solid 2px transparent;\n  border-radius: 50%;\n  overflow: hidden;\n  position: relative;\n  top: -2px;\n  left: -2px;\n}\n\n.sky-avatar-image,\n.sky-avatar-initials {\n  height: 100px;\n  width: 100px;\n  background-position: 50%;\n  background-size: cover;\n  /* this removes the \"ghost margin\" from the bottom of the canvas element that would otherwise be imposed by line height rules for inline elements */\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.sky-avatar-initials-inner {\n  color: #fff;\n  cursor: default;\n  font-size: 50px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n"],
                providers: [SkyAvatarAdapterService]
            },] },
];
/** @nocollapse */
SkyAvatarInnerComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: SkyAvatarAdapterService, },
]; };
SkyAvatarInnerComponent.propDecorators = {
    'src': [{ type: Input },],
    'name': [{ type: Input },],
};
function getInitial(name) {
    return name.charAt(0).toUpperCase();
}
//# sourceMappingURL=avatar.inner.component.js.map