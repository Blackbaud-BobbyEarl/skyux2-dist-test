import { EventEmitter } from '@angular/core';
var SkyModalHostService = (function () {
    function SkyModalHostService(fullPage) {
        this.fullPage = fullPage;
        this.close = new EventEmitter();
        this.openHelp = new EventEmitter();
        SkyModalHostService.modalHosts.push(this);
    }
    Object.defineProperty(SkyModalHostService, "openModalCount", {
        get: function () {
            return SkyModalHostService.modalHosts.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyModalHostService, "fullPageModalCount", {
        get: function () {
            var fullPageModals = SkyModalHostService.modalHosts.filter(function (modal) { return modal.fullPage; });
            return fullPageModals.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyModalHostService, "BASE_Z_INDEX", {
        get: function () {
            return 1040;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyModalHostService, "backdropZIndex", {
        get: function () {
            return SkyModalHostService.BASE_Z_INDEX + SkyModalHostService.modalHosts.length * 10;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyModalHostService, "topModal", {
        get: function () {
            return SkyModalHostService.modalHosts[SkyModalHostService.modalHosts.length - 1];
        },
        enumerable: true,
        configurable: true
    });
    SkyModalHostService.prototype.getModalZIndex = function () {
        var zIndex = SkyModalHostService.BASE_Z_INDEX + 1;
        zIndex += (SkyModalHostService.modalHosts.indexOf(this) + 1) * 10;
        return zIndex;
    };
    SkyModalHostService.prototype.onClose = function () {
        this.close.emit();
    };
    SkyModalHostService.prototype.onOpenHelp = function (helpKey) {
        this.openHelp.emit(helpKey);
    };
    SkyModalHostService.prototype.destroy = function () {
        SkyModalHostService.modalHosts.splice(SkyModalHostService.modalHosts.indexOf(this), 1);
    };
    return SkyModalHostService;
}());
export { SkyModalHostService };
SkyModalHostService.modalHosts = [];
//# sourceMappingURL=modal-host.service.js.map