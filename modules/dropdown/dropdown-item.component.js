import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef } from '@angular/core';
var SkyDropdownItemComponent = (function () {
    function SkyDropdownItemComponent(elementRef, changeDetector) {
        this.elementRef = elementRef;
        this.changeDetector = changeDetector;
        this.isActive = false;
        this.isDisabled = false;
    }
    SkyDropdownItemComponent.prototype.ngAfterViewInit = function () {
        this.buttonElement = this.elementRef.nativeElement.querySelector('button');
        this.isDisabled = !this.isFocusable();
        this.changeDetector.detectChanges();
    };
    SkyDropdownItemComponent.prototype.focusElement = function (enableNativeFocus) {
        this.isActive = true;
        if (enableNativeFocus) {
            this.buttonElement.focus();
        }
        this.changeDetector.detectChanges();
    };
    SkyDropdownItemComponent.prototype.isFocusable = function () {
        /*tslint:disable no-null-keyword */
        var isFocusable = (this.buttonElement &&
            this.buttonElement.getAttribute('disabled') === null);
        /*tslint:enable */
        return isFocusable;
    };
    SkyDropdownItemComponent.prototype.resetState = function () {
        this.isActive = false;
        this.changeDetector.markForCheck();
    };
    return SkyDropdownItemComponent;
}());
export { SkyDropdownItemComponent };
SkyDropdownItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-dropdown-item',
                template: "<div\n  class=\"sky-dropdown-item\"\n  [ngClass]=\"{\n    'sky-dropdown-item-active': isActive,\n    'sky-dropdown-item-disabled': isDisabled\n  }\">\n  <ng-content>\n  </ng-content>\n</div>\n",
                styles: [".sky-dropdown-item {\n  background-color: transparent;\n  border: none;\n  display: block;\n  margin: 4px;\n  min-width: 160px;\n  text-align: left;\n  transition: background-color 150ms;\n}\n\n.sky-dropdown-item.sky-dropdown-item-active, .sky-dropdown-item:hover {\n  background-color: #eeeeef;\n}\n\n.sky-dropdown-item.sky-dropdown-item-disabled {\n  cursor: default;\n}\n\n.sky-dropdown-item.sky-dropdown-item-disabled:hover {\n  background-color: transparent;\n}\n\n.sky-dropdown-item ::ng-deep > button {\n  background-color: transparent;\n  border: none;\n  color: #282b31;\n  cursor: pointer;\n  display: block;\n  padding: 3px 20px;\n  text-align: left;\n  width: 100%;\n}\n\n.sky-dropdown-item ::ng-deep > button[disabled] {\n  color: #686c73;\n}\n\n.sky-dropdown-item ::ng-deep > button[disabled]:hover {\n  cursor: default;\n}\n"],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
SkyDropdownItemComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: ChangeDetectorRef, },
]; };
//# sourceMappingURL=dropdown-item.component.js.map