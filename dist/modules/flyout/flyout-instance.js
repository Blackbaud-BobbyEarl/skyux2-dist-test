import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { SkyFlyoutMessageType } from './types';
var SkyFlyoutInstance = (function () {
    function SkyFlyoutInstance() {
        var _this = this;
        this.closed = new EventEmitter();
        this.isOpen = true;
        this._hostController = new Subject();
        this.closed.subscribe(function () {
            _this.isOpen = false;
        });
    }
    Object.defineProperty(SkyFlyoutInstance.prototype, "hostController", {
        // Used to communicate with the host component.
        get: function () {
            return this._hostController;
        },
        enumerable: true,
        configurable: true
    });
    SkyFlyoutInstance.prototype.close = function () {
        this.hostController.next({
            type: SkyFlyoutMessageType.Close
        });
        this.hostController.complete();
    };
    return SkyFlyoutInstance;
}());
export { SkyFlyoutInstance };
//# sourceMappingURL=flyout-instance.js.map