import { Component, Input, ViewChild } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
import { SkyVerticalTabComponent } from './../vertical-tabset/vertical-tab.component';
import { SkySectionedFormService } from './sectioned-form.service';
var SkySectionedFormSectionComponent = (function () {
    function SkySectionedFormSectionComponent(sectionedFormService) {
        this.sectionedFormService = sectionedFormService;
        this._ngUnsubscribe = new Subject();
    }
    SkySectionedFormSectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sectionedFormService.requiredChange
            .takeUntil(this._ngUnsubscribe)
            .subscribe(function (required) { return _this.fieldRequired = required; });
        this.sectionedFormService.invalidChange
            .takeUntil(this._ngUnsubscribe)
            .subscribe(function (invalid) { return _this.fieldInvalid = invalid; });
    };
    SkySectionedFormSectionComponent.prototype.ngOnDestroy = function () {
        this._ngUnsubscribe.next();
        this._ngUnsubscribe.complete();
    };
    return SkySectionedFormSectionComponent;
}());
export { SkySectionedFormSectionComponent };
SkySectionedFormSectionComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-sectioned-form-section',
                template: "<sky-vertical-tab \n  [ngClass]=\"{\n    'sky-tab-field-required': fieldRequired,\n    'sky-tab-field-invalid': fieldInvalid\n  }\"\n  [tabHeading]=\"heading\" \n  [tabHeaderCount]=\"itemCount\" \n  [active]=\"active\"\n  [showTabRightArrow]=\"true\"\n>\n  <div #tabContent>\n    <ng-content></ng-content>\n  </div>\n</sky-vertical-tab>",
                providers: [SkySectionedFormService],
                styles: [":host .sky-tab-field-required /deep/ .sky-vertical-tab-heading:after {\n  content: \"*\";\n  color: #ef4044;\n  padding-left: 5px;\n}\n\n:host .sky-tab-field-invalid /deep/ .sky-vertical-tab-heading:after {\n  content: \"\\f071\";\n  font-family: FontAwesome;\n  margin-right: 5px;\n  color: #ef4044;\n}\n"]
            },] },
];
/** @nocollapse */
SkySectionedFormSectionComponent.ctorParameters = function () { return [
    { type: SkySectionedFormService, },
]; };
SkySectionedFormSectionComponent.propDecorators = {
    'heading': [{ type: Input },],
    'itemCount': [{ type: Input },],
    'active': [{ type: Input },],
    'tab': [{ type: ViewChild, args: [SkyVerticalTabComponent,] },],
};
//# sourceMappingURL=sectioned-form-section.component.js.map