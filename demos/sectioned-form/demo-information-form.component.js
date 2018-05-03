import { Component } from '@angular/core';
import { SkySectionedFormService } from '../../core';
var SkyDemoInformationFormComponent = (function () {
    function SkyDemoInformationFormComponent(sectionedFormService) {
        this.sectionedFormService = sectionedFormService;
        this._name = '';
        this._id = '5324901';
    }
    Object.defineProperty(SkyDemoInformationFormComponent.prototype, "nameRequired", {
        get: function () {
            return this._nameRequired;
        },
        set: function (value) {
            this._nameRequired = value;
            this.sectionedFormService.requiredFieldChanged(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyDemoInformationFormComponent.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
            if (this._nameRequired) {
                this.sectionedFormService.requiredFieldChanged(!this._name);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyDemoInformationFormComponent.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
            var valid = this.idValid(this._id);
            this.sectionedFormService.invalidFieldChanged(!valid);
        },
        enumerable: true,
        configurable: true
    });
    SkyDemoInformationFormComponent.prototype.idValid = function (value) {
        if (value) {
            var regExp = new RegExp('^[0-9]+$');
            return regExp.test(value);
        }
        else {
            return true;
        }
    };
    return SkyDemoInformationFormComponent;
}());
export { SkyDemoInformationFormComponent };
SkyDemoInformationFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-demo-information-form',
                template: "<div style=\"display: flex;\">\n  <div style=\"margin-right: 10px; flex: 1;\">\n    <label \n      for=\"inputName\" \n      class=\"sky-control-label\"\n      [ngClass]=\"{'sky-control-label-required': nameRequired}\"\n    >\n      Name\n    </label>\n    <input \n      class=\"sky-form-control\"\n      [(ngModel)]=\"name\"\n      id=\"inputName\" \n      type=\"text\"\n      [required]=\"nameRequired\"\n    />\n  </div>\n  <div style=\"margin-right: 10px; flex: 1;\">\n    <label \n      for=\"inputId\" \n      class=\"sky-control-label\"\n    >\n      ID\n    </label>\n    <input \n      class=\"sky-form-control\"\n      [(ngModel)]=\"id\"\n      id=\"inputId\" \n      type=\"text\"\n    />\n  </div>\n</div>\n\n<div style=\"margin-top: 10px;\">\n  <sky-checkbox [(ngModel)]=\"nameRequired\">\n    <sky-checkbox-label>\n      Make 'Name' required\n    </sky-checkbox-label>\n  </sky-checkbox>\n</div>\n  \n"
            },] },
];
/** @nocollapse */
SkyDemoInformationFormComponent.ctorParameters = function () { return [
    { type: SkySectionedFormService, },
]; };
//# sourceMappingURL=demo-information-form.component.js.map