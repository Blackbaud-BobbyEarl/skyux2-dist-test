import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { SkySortService } from './sort.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
var SORT_ITEM_ID_PREFIX = 'sky-sort-item-';
var sortItemIdNumber = 0;
var SkySortItemComponent = (function () {
    function SkySortItemComponent(sortService, detector) {
        this.sortService = sortService;
        this.detector = detector;
        this.itemSelect = new EventEmitter();
        this.isSelected = new BehaviorSubject(false);
    }
    SkySortItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        sortItemIdNumber++;
        this.sortItemId = SORT_ITEM_ID_PREFIX + sortItemIdNumber.toString();
        this.subscription = this.sortService.selectedItem.subscribe(function (itemId) {
            _this.isSelected.next(itemId === _this.sortItemId);
            _this.detector.detectChanges();
        });
        if (this.active) {
            this.sortService.selectItem(this.sortItemId);
        }
    };
    SkySortItemComponent.prototype.ngOnChanges = function (changes) {
        if (changes && changes['active']
            && changes['active'].currentValue
            && changes['active'].currentValue !== changes['active'].previousValue) {
            this.sortService.selectItem(this.sortItemId);
        }
    };
    SkySortItemComponent.prototype.itemClicked = function () {
        this.sortService.selectItem(this.sortItemId);
        this.itemSelect.emit();
    };
    SkySortItemComponent.prototype.ngOnDestroy = function () {
        /* istanbul ignore else */
        /* sanity check */
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    return SkySortItemComponent;
}());
export { SkySortItemComponent };
SkySortItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-sort-item',
                styles: [".sky-sort-item {\n  background-color: transparent;\n  border: none;\n  display: block;\n  margin: 4px;\n  min-width: 160px;\n  text-align: left;\n  transition: background-color 150ms;\n}\n\n.sky-sort-item.sky-dropdown-item-active, .sky-sort-item:hover {\n  background-color: #eeeeef;\n}\n\n.sky-sort-item.sky-dropdown-item-disabled {\n  cursor: default;\n}\n\n.sky-sort-item.sky-dropdown-item-disabled:hover {\n  background-color: transparent;\n}\n\n.sky-sort-item ::ng-deep > button {\n  background-color: transparent;\n  border: none;\n  color: #282b31;\n  cursor: pointer;\n  display: block;\n  padding: 3px 20px;\n  text-align: left;\n  width: 100%;\n}\n\n.sky-sort-item ::ng-deep > button[disabled] {\n  color: #686c73;\n}\n\n.sky-sort-item ::ng-deep > button[disabled]:hover {\n  cursor: default;\n}\n\n.sky-sort-item-selected {\n  background-color: #f1eef6;\n  padding: 4px;\n  margin: 0;\n}\n"],
                template: "<div\n    class=\"sky-sort-item\"\n    [ngClass]=\"{'sky-sort-item-selected': (isSelected | async)}\">\n    <button\n      type=\"button\"\n      [ngClass]=\"{'sky-emphasized': (isSelected | async)}\"\n      (click)=\"itemClicked()\">\n        <ng-content></ng-content>\n    </button>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
SkySortItemComponent.ctorParameters = function () { return [
    { type: SkySortService, },
    { type: ChangeDetectorRef, },
]; };
SkySortItemComponent.propDecorators = {
    'active': [{ type: Input },],
    'itemSelect': [{ type: Output },],
};
//# sourceMappingURL=sort-item.component.js.map