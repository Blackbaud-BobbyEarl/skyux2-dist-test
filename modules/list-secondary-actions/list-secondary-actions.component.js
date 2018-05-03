import { Component, ChangeDetectorRef, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/distinctUntilChanged';
import { ListStateDispatcher, ListToolbarItemModel } from '../list/state';
import { SkyListSecondaryActionsService } from './list-secondary-actions.service';
var SkyListSecondaryActionsComponent = (function () {
    function SkyListSecondaryActionsComponent(changeDetector, dispatcher, actionService) {
        this.changeDetector = changeDetector;
        this.dispatcher = dispatcher;
        this.actionService = actionService;
        this.dropdownHidden = false;
        this.actions = [];
        this.ngUnsubscribe = new Subject();
    }
    SkyListSecondaryActionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.actionService.actionsStream
            .takeUntil(this.ngUnsubscribe)
            .distinctUntilChanged()
            .subscribe(function (actions) {
            var hasSecondaryActions = (actions.length > 0);
            _this.dropdownHidden = !hasSecondaryActions;
            _this.actions = actions;
            _this.changeDetector.detectChanges();
        });
    };
    SkyListSecondaryActionsComponent.prototype.ngAfterViewInit = function () {
        var secondaryActionItem = new ListToolbarItemModel({
            id: 'secondary-actions',
            template: this.secondaryActionsTemplate,
            location: 'right'
        });
        this.dispatcher.toolbarAddItems([secondaryActionItem], -1);
    };
    SkyListSecondaryActionsComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    return SkyListSecondaryActionsComponent;
}());
export { SkyListSecondaryActionsComponent };
SkyListSecondaryActionsComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-list-secondary-actions',
                template: "<ng-template #secondaryActions>\n  <div\n    class=\"sky-list-secondary-actions\"\n    [ngClass]=\"{ 'sky-list-secondary-actions-hidden': dropdownHidden }\">\n    <sky-dropdown\n      buttonType=\"context-menu\"\n      [title]=\"'list_show_secondary_actions' | skyResources\">\n      <sky-dropdown-menu>\n        <sky-dropdown-item\n          *ngFor=\"let action of actions\">\n          <ng-container\n            *ngTemplateOutlet=\"action.template\">\n          </ng-container>\n        </sky-dropdown-item>\n      </sky-dropdown-menu>\n    </sky-dropdown>\n  </div>\n  <ng-content>\n  </ng-content>\n</ng-template>\n",
                styles: [".sky-list-secondary-actions ::ng-deep .sky-dropdown-button-type-context-menu {\n  padding: 6px 12px;\n}\n\n.sky-list-secondary-actions ::ng-deep .sky-dropdown-button-type-context-menu .fa-ellipsis-h {\n  /* add styles for fa-lg */\n  font-size: 1.33333em;\n  line-height: .75em;\n  vertical-align: -15%;\n}\n\n.sky-list-secondary-actions-hidden {\n  display: none;\n}\n"],
                providers: [
                    SkyListSecondaryActionsService
                ],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
SkyListSecondaryActionsComponent.ctorParameters = function () { return [
    { type: ChangeDetectorRef, },
    { type: ListStateDispatcher, },
    { type: SkyListSecondaryActionsService, },
]; };
SkyListSecondaryActionsComponent.propDecorators = {
    'secondaryActionsTemplate': [{ type: ViewChild, args: ['secondaryActions',] },],
};
//# sourceMappingURL=list-secondary-actions.component.js.map