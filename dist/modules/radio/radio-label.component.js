import { Component, HostListener } from '@angular/core';
var SkyRadioLabelComponent = (function () {
    function SkyRadioLabelComponent() {
    }
    // When clicking on a checkbox label, angular registers two click events.
    // This handler ignores all events except for those that deal with the checkbox input explicitly.
    SkyRadioLabelComponent.prototype.onClick = function (event) {
        event.stopPropagation();
    };
    return SkyRadioLabelComponent;
}());
export { SkyRadioLabelComponent };
SkyRadioLabelComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-radio-label',
                template: "<ng-content></ng-content>\n"
            },] },
];
/** @nocollapse */
SkyRadioLabelComponent.ctorParameters = function () { return []; };
SkyRadioLabelComponent.propDecorators = {
    'onClick': [{ type: HostListener, args: ['click', ['$event'],] },],
};
//# sourceMappingURL=radio-label.component.js.map