import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import 'rxjs/add/operator/take';
import { SkyListViewChecklistComponent } from '../list-view-checklist';
import { SkyModalInstance } from '../modal';
import { SkyWindowRefService } from '../window';
import { SkySelectFieldPickerContext } from './select-field-picker-context';
var SkySelectFieldPickerComponent = (function () {
    function SkySelectFieldPickerComponent(context, instance, elementRef, windowRef) {
        this.context = context;
        this.instance = instance;
        this.elementRef = elementRef;
        this.windowRef = windowRef;
        this.defaultCategory = 'any';
        this.selectedCategory = this.defaultCategory;
        this.selectedIds = [];
    }
    SkySelectFieldPickerComponent.prototype.ngOnInit = function () {
        this.data = this.context.data;
        this.headingText = this.context.headingText;
        this.selectMode = this.context.selectMode;
        this.selectedIds = this.getSelectedIds();
        this.assignCategories();
    };
    SkySelectFieldPickerComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.windowRef.getWindow().setTimeout(function () {
            _this.elementRef.nativeElement.querySelector('.sky-search-input').focus();
        });
    };
    SkySelectFieldPickerComponent.prototype.save = function () {
        var _this = this;
        this.latestData.subscribe(function (items) {
            var results = items.filter(function (item) {
                return (_this.selectedIds.indexOf(item.id) > -1);
            });
            _this.instance.save(results);
        });
    };
    SkySelectFieldPickerComponent.prototype.close = function () {
        this.instance.close();
    };
    SkySelectFieldPickerComponent.prototype.filterByCategory = function (model, category) {
        return (category === this.defaultCategory || model.data.category === category);
    };
    SkySelectFieldPickerComponent.prototype.onCategoryChange = function (change, filter) {
        // Reset the selected values when the category changes.
        this.listViewChecklist.clearSelections();
        filter.changed(change);
    };
    SkySelectFieldPickerComponent.prototype.onSelectedIdsChange = function (selectedMap) {
        var _this = this;
        this.latestData.subscribe(function (items) {
            _this.selectedIds = items.filter(function (item) { return selectedMap.get(item.id); })
                .map(function (item) { return item.id; });
        });
    };
    SkySelectFieldPickerComponent.prototype.assignCategories = function () {
        var _this = this;
        this.latestData.subscribe(function (items) {
            var allCategories = items.map(function (item) { return item.category; });
            // Remove duplicate category names:
            _this.categories = allCategories.filter(function (category, i, categories) {
                return (category && categories.indexOf(category) === i);
            });
        });
    };
    Object.defineProperty(SkySelectFieldPickerComponent.prototype, "latestData", {
        get: function () {
            return this.data.take(1);
        },
        enumerable: true,
        configurable: true
    });
    SkySelectFieldPickerComponent.prototype.getSelectedIds = function () {
        var context = this.context;
        var selectedValue = context.selectedValue;
        if (selectedValue) {
            if (context.selectMode === 'single') {
                return [context.selectedValue.id];
            }
            return context.selectedValue.map(function (item) { return item.id; });
        }
        return [];
    };
    return SkySelectFieldPickerComponent;
}());
export { SkySelectFieldPickerComponent };
SkySelectFieldPickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-select-field-picker',
                template: "<div class=\"sky-select-field-picker\">\n  <sky-modal>\n    <sky-modal-header>\n      {{ headingText }}\n    </sky-modal-header>\n    <sky-modal-content>\n      <div class=\"sky-select-field-picker-content\">\n        <sky-list\n          [data]=\"data\"\n          [selectedIds]=\"selectedIds\"\n          (selectedIdsChange)=\"onSelectedIdsChange($event)\">\n          <sky-list-toolbar>\n            <sky-list-filter-inline\n              *ngIf=\"categories && categories.length\">\n              <sky-list-filter-inline-item\n                name=\"category\"\n                [defaultValue]=\"defaultCategory\"\n                [filter]=\"filterByCategory\"\n                [value]=\"defaultCategory\">\n                <ng-template\n                  let-filter=\"filter\">\n                  <select\n                    [ngModel]=\"filter.value\"\n                    (ngModelChange)=\"onCategoryChange($event, filter)\">\n                    <option\n                      [value]=\"defaultCategory\">\n                      {{ 'select_field_picker_show_all_category' | skyResources }}\n                    </option>\n                    <option\n                      *ngFor=\"let category of categories\"\n                      [value]=\"category\">\n                      {{ category }}\n                    </option>\n                  </select>\n                </ng-template>\n              </sky-list-filter-inline-item>\n            </sky-list-filter-inline>\n          </sky-list-toolbar>\n          <sky-list-view-checklist\n            label=\"label\"\n            description=\"description\"\n            [selectMode]=\"selectMode\">\n          </sky-list-view-checklist>\n          <sky-list-paging\n            pageSize=\"6\">\n          </sky-list-paging>\n        </sky-list>\n      </div>\n    </sky-modal-content>\n    <sky-modal-footer>\n      <button\n        type=\"button\"\n        class=\"sky-btn sky-btn-primary sky-select-field-picker-btn-save\"\n        (click)=\"save()\">\n        {{ 'select_field_picker_save_button' | skyResources }}\n      </button>\n      <button\n        type=\"button\"\n        class=\"sky-btn sky-btn-link sky-select-field-picker-btn-close\"\n        (click)=\"close()\">\n        {{ 'select_field_picker_close_button' | skyResources }}\n      </button>\n    </sky-modal-footer>\n  </sky-modal>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
SkySelectFieldPickerComponent.ctorParameters = function () { return [
    { type: SkySelectFieldPickerContext, },
    { type: SkyModalInstance, },
    { type: ElementRef, },
    { type: SkyWindowRefService, },
]; };
SkySelectFieldPickerComponent.propDecorators = {
    'listViewChecklist': [{ type: ViewChild, args: [SkyListViewChecklistComponent,] },],
};
//# sourceMappingURL=select-field-picker.component.js.map