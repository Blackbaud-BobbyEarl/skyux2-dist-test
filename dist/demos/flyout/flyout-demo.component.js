import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { SkyFlyoutService } from '../../core';
import { FlyoutDemoContext } from './flyout-demo-context';
import { SkyFlyoutDemoInternalComponent } from './flyout-demo-internal.component';
var SkyFlyoutDemoComponent = (function () {
    function SkyFlyoutDemoComponent(flyoutService) {
        this.flyoutService = flyoutService;
        this.users = Observable.of([
            { id: '1', name: 'Sally' },
            { id: '2', name: 'John' },
            { id: '3', name: 'David' },
            { id: '4', name: 'Janet' }
        ]);
    }
    SkyFlyoutDemoComponent.prototype.openRecord = function (record) {
        var _this = this;
        this.flyout = this.flyoutService.open(SkyFlyoutDemoInternalComponent, {
            providers: [{
                    provide: FlyoutDemoContext,
                    useValue: record
                }],
            ariaDescribedBy: 'my-describedby-id',
            ariaLabelledBy: 'my-labelledby-id',
            ariaRole: 'modal',
            defaultWidth: 500,
            maxWidth: 1000,
            minWidth: 200
        });
        this.flyout.closed.subscribe(function () {
            _this.flyout = undefined;
        });
    };
    SkyFlyoutDemoComponent.prototype.closeFlyout = function () {
        this.flyout.close();
    };
    SkyFlyoutDemoComponent.prototype.removeFlyout = function () {
        this.flyoutService.close();
        this.flyout = undefined;
    };
    SkyFlyoutDemoComponent.prototype.isRecordOpen = function (record) {
        return (this.flyout &&
            this.flyout.componentInstance.context.id === record.id);
    };
    return SkyFlyoutDemoComponent;
}());
export { SkyFlyoutDemoComponent };
SkyFlyoutDemoComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-flyout-demo',
                template: "<sky-list\n  [data]=\"users\"\n  [defaultView]=\"grid\">\n  <sky-list-view-grid #grid>\n    <sky-grid-column\n      [locked]=\"true\"\n      [template]=\"customTemplate\">\n    </sky-grid-column>\n    <sky-grid-column\n      field=\"name\"\n      heading=\"Name\"\n      [locked]=\"true\">\n    </sky-grid-column>\n  </sky-list-view-grid>\n</sky-list>\n\n<ng-template\n  let-row=\"row\"\n  #customTemplate>\n  <button\n    type=\"button\"\n    class=\"sky-btn sky-btn-link\"\n    (click)=\"openRecord(row)\">\n    View record\n  </button>\n  <button\n    *ngIf=\"isRecordOpen(row)\"\n    type=\"button\"\n    class=\"sky-btn sky-btn-default\"\n    title=\"Close record\"\n    (click)=\"closeFlyout()\">\n    <i class=\"fa fa-close\" aria-hidden=\"true\"></i>\n  </button>\n</ng-template>\n\n<div *ngIf=\"flyout\">\n  <p>\n    This button will close the flyout and then delete the host element from the document.\n  </p>\n\n  <button\n    type=\"button\"\n    class=\"sky-btn sky-btn-default\"\n    (click)=\"removeFlyout()\">\n    <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n    Delete flyout\n  </button>\n</div>\n"
            },] },
];
/** @nocollapse */
SkyFlyoutDemoComponent.ctorParameters = function () { return [
    { type: SkyFlyoutService, },
]; };
//# sourceMappingURL=flyout-demo.component.js.map