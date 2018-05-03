import { Component, EventEmitter, Input, Output, ContentChildren } from '@angular/core';
import { SkyCardTitleComponent } from './card-title.component';
var SkyCardComponent = (function () {
    function SkyCardComponent() {
        this.selectedChange = new EventEmitter();
        this.showTitle = true;
    }
    SkyCardComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.showTitle = this.titleComponent.length > 0;
        this.subscription = this.titleComponent.changes.subscribe(function () {
            _this.showTitle = _this.titleComponent.length > 0;
        });
    };
    SkyCardComponent.prototype.contentClick = function () {
        if (this.selectable) {
            this.selected = !this.selected;
            this.selectedChange.emit(this.selected);
        }
    };
    SkyCardComponent.prototype.ngOnDestroy = function () {
        /* istanbul ignore else */
        /* sanity check */
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    return SkyCardComponent;
}());
export { SkyCardComponent };
SkyCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-card',
                styles: [".sky-card {\n  background-color: #fff;\n  border-top: 1px solid #cdcfd2;\n  border-bottom: 1px solid #cdcfd2;\n  border-left: 1px solid #cdcfd2;\n  border-right: 1px solid #cdcfd2;\n  display: inline-flex;\n  flex-direction: column;\n  height: 350px;\n  margin: 0 10px 10px 0;\n  transition: background-color 150ms;\n  vertical-align: top;\n  width: 350px;\n}\n\n.sky-card-small {\n  height: 250px;\n  width: 225px;\n}\n\n.sky-card-selectable .sky-card-header,\n.sky-card-selectable .sky-card-content {\n  cursor: pointer;\n}\n\n.sky-card-selected {\n  background-color: #f1eef6;\n  transition: background-color 150ms;\n}\n\n.sky-card-header {\n  align-items: center;\n  display: flex;\n  flex-shrink: 0;\n  margin: 0;\n  padding: 10px 0 0 0;\n}\n\n.sky-card-heading-left,\n.sky-card-heading-right {\n  font-weight: normal;\n  max-width: 34px;\n}\n\n.sky-card-heading-left {\n  padding-left: 10px;\n}\n\n.sky-card-heading-right {\n  padding-right: 10px;\n}\n\n.sky-card-heading-middle {\n  flex-grow: 1;\n  padding: 0 10px;\n  overflow: hidden;\n}\n\n.sky-card-title {\n  font-family: \"Blackbaud Sans Condensed\", \"Helvetica Neue Condensed\", \"Arial Narrow\";\n  color: #282b31;\n  font-weight: 300;\n  font-size: 26px;\n  margin: 0;\n  line-height: 1.42857;\n}\n\n.sky-card-check {\n  flex-shrink: 0;\n  padding-right: 10px;\n}\n\n.sky-card-check .sky-check-wrapper {\n  margin-bottom: 2px;\n}\n\n.sky-card-content {\n  flex-grow: 1;\n  font-weight: normal;\n  margin: 0;\n  padding: 10px;\n  overflow: hidden;\n}\n\n.sky-card-actions {\n  bottom: 0;\n  flex-shrink: 0;\n  text-align: center;\n}\n\n.sky-card-actions .sky-context-menu-btn {\n  height: 32px;\n  width: 32px;\n}\n"],
                template: "<section class=\"sky-card sky-shadow\"\n    [ngClass]=\"\n      {\n        'sky-card-small': size === 'small',\n        'sky-card-selectable': selectable,\n        'sky-card-selected': selectable &amp;&amp; selected\n      }\n\">\n  <header>\n\n    <div (click)=\"contentClick()\" class=\"sky-card-header\" *ngIf=\"selectable || showTitle\">\n      <div class=\"sky-card-heading-middle\">\n        <h1 class=\"sky-card-title\" *ngIf=\"showTitle\">\n          <ng-content select=\"sky-card-title\"></ng-content>\n        </h1>\n      </div>\n      <div class=\"sky-card-check\" *ngIf=\"selectable\">\n        <sky-checkbox\n          (click)=\"$event.stopPropagation()\"\n          [ngModel]=\"selected\"\n          (ngModelChange)=\"contentClick()\"\n          [label]=\"'card_checkbox_label' | skyResources\"\n          ></sky-checkbox>\n      </div>\n    </div>\n  </header>\n  <div class=\"sky-card-content\" (click)=\"contentClick()\">\n    <ng-content select=\"sky-card-content\"></ng-content>\n  </div>\n  <div class=\"sky-card-actions\" [hidden]=\"actionsEl.children.length === 0\" #actionsEl>\n    <ng-content select=\"sky-card-actions\"></ng-content>\n  </div>\n</section>\n"
            },] },
];
/** @nocollapse */
SkyCardComponent.ctorParameters = function () { return []; };
SkyCardComponent.propDecorators = {
    'size': [{ type: Input },],
    'selectable': [{ type: Input },],
    'selected': [{ type: Input },],
    'selectedChange': [{ type: Output },],
    'titleComponent': [{ type: ContentChildren, args: [SkyCardTitleComponent,] },],
};
//# sourceMappingURL=card.component.js.map