import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SkyModalService } from '../../core';
import { SkyListFiltersModalDemoComponent } from './list-filters-demo-modal.component';
import { SkyListFiltersModalDemoContext } from './list-filters-demo-modal-context';
var SkyListFiltersDemoComponent = (function () {
    function SkyListFiltersDemoComponent(modalService) {
        this.modalService = modalService;
        this.listFilters = [];
        this.modalFilters = [];
        this.items = Observable.of([
            {
                id: 0,
                name: 'Orange',
                description: 'A round, orange fruit.',
                type: 'citrus',
                color: 'orange'
            },
            {
                id: 1,
                name: 'Mango',
                description: 'Delicious in smoothies, but don\'t eat the skin.',
                type: 'other',
                color: 'orange'
            },
            {
                id: 2,
                name: 'Lime',
                description: 'A sour, green fruit used in many drinks.',
                type: 'citrus',
                color: 'green'
            },
            {
                id: 3,
                name: 'Strawberry',
                description: 'A red fruit that goes well with shortcake.',
                type: 'berry',
                color: 'red'
            },
            {
                id: 4,
                name: 'Blueberry',
                description: 'A small, blue fruit often found in muffins.',
                type: 'berry',
                color: 'blue'
            }
        ]);
    }
    SkyListFiltersDemoComponent.prototype.openFilterModal = function () {
        var _this = this;
        var instance = this.modalService.open(SkyListFiltersModalDemoComponent, [
            {
                provide: SkyListFiltersModalDemoContext,
                useValue: {
                    appliedFilters: this.modalFilters
                }
            }
        ]);
        instance.closed.subscribe(function (result) {
            if (result.reason === 'save') {
                _this.listFilters = result.data.slice();
            }
        });
    };
    return SkyListFiltersDemoComponent;
}());
export { SkyListFiltersDemoComponent };
SkyListFiltersDemoComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-list-filters-demo',
                template: "<sky-list\n  [data]=\"items\"\n  [defaultView]=\"grid\"\n  [appliedFilters]=\"listFilters\"\n  (appliedFiltersChange)=\"modalFilters = $event\">\n  <sky-list-toolbar>\n    <sky-list-secondary-actions>\n      <sky-list-secondary-action>\n        <button type=\"button\">\n          Option\n        </button>\n      </sky-list-secondary-action>\n    </sky-list-secondary-actions>\n    <sky-list-toolbar-sort\n      label=\"Fruit name (A - Z)\"\n      field=\"name\"\n      [descending]=\"false\"\n      type=\"string\"\n    >\n    </sky-list-toolbar-sort>\n    <sky-list-toolbar-sort\n      label=\"Fruit name (Z - A)\"\n      field=\"name\"\n      [descending]=\"true\"\n      type=\"string\"\n    >\n    </sky-list-toolbar-sort>\n    <sky-list-filter-button>\n      <sky-filter-button\n        (filterButtonClick)=\"openFilterModal()\">\n      </sky-filter-button>\n    </sky-list-filter-button>\n    <sky-list-filter-summary\n      (summaryItemClick)=\"openFilterModal()\">\n    </sky-list-filter-summary>\n  </sky-list-toolbar>\n\n  <sky-list-view-grid fit=\"scroll\" #grid>\n    <sky-grid-column\n      field=\"name\"\n      heading=\"Name\">\n    </sky-grid-column>\n    <sky-grid-column\n      field=\"description\"\n      heading=\"Description\">\n    </sky-grid-column>\n  </sky-list-view-grid>\n </sky-list>\n"
            },] },
];
/** @nocollapse */
SkyListFiltersDemoComponent.ctorParameters = function () { return [
    { type: SkyModalService, },
]; };
//# sourceMappingURL=list-filters-demo.component.js.map