var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Injectable } from '@angular/core';
import { StateDispatcher, StateOrchestrator } from 'microedge-rxstate/dist';
var GridStateDispatcher = (function (_super) {
    __extends(GridStateDispatcher, _super);
    function GridStateDispatcher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return GridStateDispatcher;
}(StateDispatcher));
export { GridStateDispatcher };
GridStateDispatcher.decorators = [
    { type: Injectable },
];
/** @nocollapse */
GridStateDispatcher.ctorParameters = function () { return []; };
var GridStateOrchestrator = (function (_super) {
    __extends(GridStateOrchestrator, _super);
    function GridStateOrchestrator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return GridStateOrchestrator;
}(StateOrchestrator));
export { GridStateOrchestrator };
//# sourceMappingURL=grid-state.rxstate.js.map