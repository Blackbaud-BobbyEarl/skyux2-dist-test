import { Component, ViewChild } from '@angular/core';
import { ListStateDispatcher } from '../list/state';
import { ListToolbarItemModel } from '../list/state';
var SkyListFilterButtonComponent = (function () {
    function SkyListFilterButtonComponent(dispatcher) {
        this.dispatcher = dispatcher;
    }
    SkyListFilterButtonComponent.prototype.ngAfterViewInit = function () {
        this.dispatcher.toolbarAddItems([
            new ListToolbarItemModel({
                template: this.filterButtonTemplate,
                location: 'right'
            })
        ], 0);
    };
    return SkyListFilterButtonComponent;
}());
export { SkyListFilterButtonComponent };
SkyListFilterButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-list-filter-button',
                template: "<ng-template #filterButton>\n  <ng-content></ng-content>\n</ng-template>\n"
            },] },
];
/** @nocollapse */
SkyListFilterButtonComponent.ctorParameters = function () { return [
    { type: ListStateDispatcher, },
]; };
SkyListFilterButtonComponent.propDecorators = {
    'filterButtonTemplate': [{ type: ViewChild, args: ['filterButton',] },],
};
//# sourceMappingURL=list-filter-button.component.js.map