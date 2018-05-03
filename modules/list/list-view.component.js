import 'rxjs/add/operator/distinctUntilChanged';
var moment = require('moment');
var ListViewComponent = (function () {
    function ListViewComponent(state, defaultName) {
        var _this = this;
        this.viewId = moment().toDate().getTime().toString();
        this.state = state;
        this.viewName = defaultName;
        this.hasToolbar = this.state.map(function (s) { return s.toolbar.exists; });
        this.active = this.state.map(function (s) { return s.views.active === _this.viewId; });
        this.active.distinctUntilChanged().subscribe(function (isActive) { return isActive ? _this.onViewActive() : _this.onViewInactive(); });
    }
    Object.defineProperty(ListViewComponent.prototype, "id", {
        get: function () {
            return this.viewId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListViewComponent.prototype, "label", {
        get: function () {
            return this.viewName;
        },
        enumerable: true,
        configurable: true
    });
    /* istanbul ignore next */
    ListViewComponent.prototype.onViewActive = function () {
    };
    ListViewComponent.prototype.onViewInactive = function () {
    };
    return ListViewComponent;
}());
export { ListViewComponent };
//# sourceMappingURL=list-view.component.js.map