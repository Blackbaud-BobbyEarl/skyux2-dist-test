import { Component, EventEmitter, Input, Output } from '@angular/core';
var ALERT_TYPE_DEFAULT = 'warning';
var SkyAlertComponent = (function () {
    function SkyAlertComponent() {
        this.closedChange = new EventEmitter();
    }
    Object.defineProperty(SkyAlertComponent.prototype, "alertType", {
        get: function () {
            return this._alertType || ALERT_TYPE_DEFAULT;
        },
        set: function (value) {
            this._alertType = value;
        },
        enumerable: true,
        configurable: true
    });
    SkyAlertComponent.prototype.close = function () {
        this.closed = true;
        this.closedChange.emit(true);
    };
    return SkyAlertComponent;
}());
export { SkyAlertComponent };
SkyAlertComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-alert',
                styles: [".sky-alert {\n  padding: 0 10px;\n  margin-bottom: 20px;\n  border-left: solid 30px;\n  color: #282b31;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.sky-alert .sky-alert-content {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  width: 100%;\n}\n\n.sky-alert .sky-alert-content ::ng-deep a {\n  color: rgba(40, 43, 49, 0.8);\n  text-decoration: underline;\n}\n\n.sky-alert .sky-alert-content ::ng-deep a:hover {\n  color: #282b31;\n}\n\n.sky-alert button {\n  margin-left: auto;\n  width: 32px;\n  height: 32px;\n}\n\n.sky-alert-info {\n  background-color: #81d4f7;\n  border-color: #00b4f1;\n}\n\n.sky-alert-info:before {\n  content: \"\\f06a\";\n  font-family: FontAwesome;\n  margin-left: -31px;\n  margin-right: 20px;\n  color: #ffffff;\n}\n\n.sky-alert-success {\n  background-color: #b7da9b;\n  border-color: #71bf43;\n}\n\n.sky-alert-success:before {\n  content: \"\\f00c\";\n  font-family: FontAwesome;\n  margin-left: -32px;\n  margin-right: 19px;\n  color: #ffffff;\n}\n\n.sky-alert-warning {\n  background-color: purple;\n  border-color: #fbb034;\n}\n\n.sky-alert-warning:before {\n  content: \"\\f071\";\n  font-family: FontAwesome;\n  margin-left: -32px;\n  margin-right: 19px;\n  color: #ffffff;\n}\n\n.sky-alert-danger {\n  background-color: #f7a08f;\n  border-color: #ef4044;\n}\n\n.sky-alert-danger:before {\n  content: \"\\f071\";\n  font-family: FontAwesome;\n  margin-left: -32px;\n  margin-right: 19px;\n  color: #ffffff;\n}\n\n.sky-alert-close {\n  cursor: pointer;\n  font-weight: bold;\n  line-height: 1;\n  margin: 0;\n  padding: 0;\n  color: #282b31;\n  opacity: 0.8;\n  border: none;\n  background-color: transparent;\n  display: none;\n}\n\n.sky-alert-close:hover {\n  opacity: 1.0;\n}\n\n.sky-alert-closeable .sky-alert-close {\n  display: block;\n}\n"],
                template: "<div\n    class=\"sky-alert sky-rounded-corners\"\n    [ngClass]=\"{\n      'sky-alert-info': alertType === 'info',\n      'sky-alert-success': alertType === 'success',\n      'sky-alert-warning': alertType === 'warning',\n      'sky-alert-danger': alertType === 'danger',\n      'sky-alert-closeable': closeable\n    }\"\n    [hidden]=\"closed\"\n    role=\"alert\"\n>\n  <div class=\"sky-alert-content\"><ng-content></ng-content></div>\n  <button\n      type=\"button\"\n      class=\"sky-alert-close\"\n      (click)=\"close()\"\n      [attr.aria-label]=\"'alert_close' | skyResources\"\n      [hidden]=\"!closeable\"\n  >\n    <span aria-hidden=\"true\"><i class=\"fa fa-close\"></i></span>\n  </button>\n</div>\n"
            },] },
];
/** @nocollapse */
SkyAlertComponent.ctorParameters = function () { return []; };
SkyAlertComponent.propDecorators = {
    'alertType': [{ type: Input },],
    'closeable': [{ type: Input },],
    'closed': [{ type: Input },],
    'closedChange': [{ type: Output },],
};
//# sourceMappingURL=alert.component.js.map