import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
var SkyListSecondaryActionsService = (function () {
    function SkyListSecondaryActionsService() {
        this.secondaryActionsCount = 0;
        this.secondaryActionsSubject = new BehaviorSubject(0);
        this.actionsStream = new BehaviorSubject([]);
        this.actions = [];
    }
    SkyListSecondaryActionsService.prototype.addSecondaryAction = function (action) {
        this.secondaryActionsCount++;
        this.secondaryActionsSubject.next(this.secondaryActionsCount);
        this.actions.push(action);
        this.actionsStream.next(this.actions);
    };
    SkyListSecondaryActionsService.prototype.removeSecondaryAction = function (action) {
        this.secondaryActionsCount--;
        this.secondaryActionsSubject.next(this.secondaryActionsCount);
        this.actions = this.actions.filter(function (existingItem) { return existingItem !== action; });
        this.actionsStream.next(this.actions);
    };
    SkyListSecondaryActionsService.prototype.ngOnDestroy = function () {
        this.secondaryActionsSubject.complete();
        this.actionsStream.complete();
    };
    return SkyListSecondaryActionsService;
}());
export { SkyListSecondaryActionsService };
SkyListSecondaryActionsService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SkyListSecondaryActionsService.ctorParameters = function () { return []; };
//# sourceMappingURL=list-secondary-actions.service.js.map