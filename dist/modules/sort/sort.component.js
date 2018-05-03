import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { SkyDropdownMessageType } from '../dropdown';
import { SkySortService } from './sort.service';
var SkySortComponent = (function () {
    function SkySortComponent() {
        this.dropdownController = new Subject();
    }
    SkySortComponent.prototype.dropdownClicked = function () {
        this.dropdownController.next({
            type: SkyDropdownMessageType.Close
        });
    };
    return SkySortComponent;
}());
export { SkySortComponent };
SkySortComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-sort',
                styles: [".sky-sort-menu-heading {\n  background-color: transparent;\n  border: none;\n  display: block;\n  margin: 4px;\n  min-width: 160px;\n  text-align: left;\n  transition: background-color 150ms;\n  padding: 3px 20px;\n  text-align: left;\n  width: 100%;\n}\n\n.sky-sort-heading-divider {\n  margin: 0;\n  height: 1px;\n  overflow: hidden;\n  background-color: #eeeeef;\n}\n"],
                template: "<div class=\"sky-sort\">\n  <sky-dropdown\n    buttonType=\"sort\"\n    [title]=\"'sort_button_label' | skyResources\"\n    [messageStream]=\"dropdownController\">\n    <sky-dropdown-menu (click)=\"dropdownClicked()\">\n      <div class=\"sky-sort-menu-heading sky-subsection-heading\">\n        {{'sort_menu_heading' | skyResources}}\n      </div>\n      <div class=\"sky-sort-heading-divider\">\n      </div>\n      <ng-content></ng-content>\n    </sky-dropdown-menu>\n  </sky-dropdown>\n</div>\n",
                providers: [
                    SkySortService
                ],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
SkySortComponent.ctorParameters = function () { return []; };
//# sourceMappingURL=sort.component.js.map