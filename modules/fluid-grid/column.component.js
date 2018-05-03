import { Component, HostBinding, Input } from '@angular/core';
var SkyColumnComponent = (function () {
    function SkyColumnComponent() {
    }
    SkyColumnComponent.prototype.getClassNames = function () {
        var classnames = [
            'sky-column'
        ];
        if (this.screenXSmall) {
            classnames.push("sky-column-xs-" + this.screenXSmall);
        }
        if (this.screenSmall) {
            classnames.push("sky-column-sm-" + this.screenSmall);
        }
        if (this.screenMedium) {
            classnames.push("sky-column-md-" + this.screenMedium);
        }
        if (this.screenLarge) {
            classnames.push("sky-column-lg-" + this.screenLarge);
        }
        return classnames.join(' ');
    };
    SkyColumnComponent.prototype.ngOnInit = function () {
        this.classnames = this.getClassNames();
    };
    return SkyColumnComponent;
}());
export { SkyColumnComponent };
SkyColumnComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-column',
                template: "<ng-content></ng-content>\n",
                styles: [":host.sky-column {\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%;\n  min-height: 1px;\n}\n\n:host.sky-column-xs-1 {\n  width: 8.33333%;\n}\n\n:host.sky-column-xs-2 {\n  width: 16.66667%;\n}\n\n:host.sky-column-xs-3 {\n  width: 25%;\n}\n\n:host.sky-column-xs-4 {\n  width: 33.33333%;\n}\n\n:host.sky-column-xs-5 {\n  width: 41.66667%;\n}\n\n:host.sky-column-xs-6 {\n  width: 50%;\n}\n\n:host.sky-column-xs-7 {\n  width: 58.33333%;\n}\n\n:host.sky-column-xs-8 {\n  width: 66.66667%;\n}\n\n:host.sky-column-xs-9 {\n  width: 75%;\n}\n\n:host.sky-column-xs-10 {\n  width: 83.33333%;\n}\n\n:host.sky-column-xs-11 {\n  width: 91.66667%;\n}\n\n:host.sky-column-xs-12 {\n  width: 100%;\n}\n\n@media (min-width: 768px) {\n  :host.sky-column-sm-1 {\n    width: 8.33333%;\n  }\n  :host.sky-column-sm-2 {\n    width: 16.66667%;\n  }\n  :host.sky-column-sm-3 {\n    width: 25%;\n  }\n  :host.sky-column-sm-4 {\n    width: 33.33333%;\n  }\n  :host.sky-column-sm-5 {\n    width: 41.66667%;\n  }\n  :host.sky-column-sm-6 {\n    width: 50%;\n  }\n  :host.sky-column-sm-7 {\n    width: 58.33333%;\n  }\n  :host.sky-column-sm-8 {\n    width: 66.66667%;\n  }\n  :host.sky-column-sm-9 {\n    width: 75%;\n  }\n  :host.sky-column-sm-10 {\n    width: 83.33333%;\n  }\n  :host.sky-column-sm-11 {\n    width: 91.66667%;\n  }\n  :host.sky-column-sm-12 {\n    width: 100%;\n  }\n}\n\n@media (min-width: 992px) {\n  :host.sky-column-md-1 {\n    width: 8.33333%;\n  }\n  :host.sky-column-md-2 {\n    width: 16.66667%;\n  }\n  :host.sky-column-md-3 {\n    width: 25%;\n  }\n  :host.sky-column-md-4 {\n    width: 33.33333%;\n  }\n  :host.sky-column-md-5 {\n    width: 41.66667%;\n  }\n  :host.sky-column-md-6 {\n    width: 50%;\n  }\n  :host.sky-column-md-7 {\n    width: 58.33333%;\n  }\n  :host.sky-column-md-8 {\n    width: 66.66667%;\n  }\n  :host.sky-column-md-9 {\n    width: 75%;\n  }\n  :host.sky-column-md-10 {\n    width: 83.33333%;\n  }\n  :host.sky-column-md-11 {\n    width: 91.66667%;\n  }\n  :host.sky-column-md-12 {\n    width: 100%;\n  }\n}\n\n@media (min-width: 1200px) {\n  :host.sky-column-lg-1 {\n    width: 8.33333%;\n  }\n  :host.sky-column-lg-2 {\n    width: 16.66667%;\n  }\n  :host.sky-column-lg-3 {\n    width: 25%;\n  }\n  :host.sky-column-lg-4 {\n    width: 33.33333%;\n  }\n  :host.sky-column-lg-5 {\n    width: 41.66667%;\n  }\n  :host.sky-column-lg-6 {\n    width: 50%;\n  }\n  :host.sky-column-lg-7 {\n    width: 58.33333%;\n  }\n  :host.sky-column-lg-8 {\n    width: 66.66667%;\n  }\n  :host.sky-column-lg-9 {\n    width: 75%;\n  }\n  :host.sky-column-lg-10 {\n    width: 83.33333%;\n  }\n  :host.sky-column-lg-11 {\n    width: 91.66667%;\n  }\n  :host.sky-column-lg-12 {\n    width: 100%;\n  }\n}\n"]
            },] },
];
/** @nocollapse */
SkyColumnComponent.ctorParameters = function () { return []; };
SkyColumnComponent.propDecorators = {
    'screenXSmall': [{ type: Input },],
    'screenSmall': [{ type: Input },],
    'screenMedium': [{ type: Input },],
    'screenLarge': [{ type: Input },],
    'classnames': [{ type: HostBinding, args: ['class',] },],
};
//# sourceMappingURL=column.component.js.map