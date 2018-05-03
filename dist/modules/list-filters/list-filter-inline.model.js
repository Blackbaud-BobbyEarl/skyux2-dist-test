import { EventEmitter } from '@angular/core';
var SkyListFilterInlineModel = (function () {
    function SkyListFilterInlineModel(data) {
        this.onChange = new EventEmitter();
        if (data) {
            this.name = data.name;
            this.filterFunction = data.filterFunction;
            this.value = data.value;
            this.template = data.template;
            this.defaultValue = data.defaultValue;
        }
    }
    SkyListFilterInlineModel.prototype.changed = function (value) {
        this.value = value;
        this.onChange.emit(value);
    };
    return SkyListFilterInlineModel;
}());
export { SkyListFilterInlineModel };
//# sourceMappingURL=list-filter-inline.model.js.map