import { Component } from '@angular/core';
var SkyTextExpandDemoComponent = (function () {
    function SkyTextExpandDemoComponent() {
        // tslint:disable-next-line
        this.shortText = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibu';
        // tslint:disable-next-line
        this.longText = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.\nAenean massa.\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\nDonec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.\nNulla consequat massa quis enim.\nDonec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.\nInteger tincidunt.\nCras dapibu';
        this.repeaterData = [
            'Repeater item 1',
            'Repeater item 2',
            'Repeater item 3',
            'Repeater item 4',
            'Repeater item 5'
        ];
    }
    return SkyTextExpandDemoComponent;
}());
export { SkyTextExpandDemoComponent };
SkyTextExpandDemoComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-text-expand-demo',
                template: "<h3>\n  Text expand\n</h3>\n\n<sky-text-expand\n  [text]=\"shortText\">\n</sky-text-expand>\n\n<h3>\n  Text expand modal view\n</h3>\n\n<sky-text-expand\n  [text]=\"longText\">\n</sky-text-expand>\n\n<h3>\n  Text expand modal view (with newlines)\n</h3>\n\n<sky-text-expand\n  [text]=\"longText\"\n  [truncateNewlines]=\"false\">\n</sky-text-expand>\n\n<h3>\n  Text expand repeater\n</h3>\n\n<sky-text-expand-repeater\n  [data]=\"repeaterData\"\n  [maxItems]=\"2\">\n</sky-text-expand-repeater>\n"
            },] },
];
/** @nocollapse */
SkyTextExpandDemoComponent.ctorParameters = function () { return []; };
//# sourceMappingURL=text-expand-demo.component.js.map