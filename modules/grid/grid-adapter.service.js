import { Injectable } from '@angular/core';
var GRID_HEADER_DRAGGING_CLASS = 'sky-grid-header-dragging';
var GRID_HEADER_LOCKED_SELECTOR = '.sky-grid-header-locked';
var SkyGridAdapterService = (function () {
    function SkyGridAdapterService() {
    }
    SkyGridAdapterService.prototype.initializeDragAndDrop = function (dragulaService, dropCallback) {
        dragulaService.drag.subscribe(function (_a) {
            var source = _a[1];
            return source.classList.add(GRID_HEADER_DRAGGING_CLASS);
        });
        dragulaService.dragend.subscribe(function (_a) {
            var source = _a[1];
            return source.classList.remove(GRID_HEADER_DRAGGING_CLASS);
        });
        dragulaService.drop.subscribe(function (_a) {
            var container = _a[2];
            var columnIds = [];
            var nodes = container.getElementsByTagName('th');
            for (var i = 0; i < nodes.length; i++) {
                var el = nodes[i];
                var id = el.getAttribute('sky-cmp-id');
                columnIds.push(id);
            }
            dropCallback(columnIds);
        });
        dragulaService.setOptions('sky-grid-heading', {
            moves: function (el, container, handle) {
                return handle !== undefined && !handle.matches(GRID_HEADER_LOCKED_SELECTOR);
            },
            accepts: function (el, target, source, sibling) {
                return sibling === undefined || !sibling || !sibling.matches(GRID_HEADER_LOCKED_SELECTOR);
            }
        });
    };
    return SkyGridAdapterService;
}());
export { SkyGridAdapterService };
SkyGridAdapterService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SkyGridAdapterService.ctorParameters = function () { return []; };
//# sourceMappingURL=grid-adapter.service.js.map