import { Injectable } from '@angular/core';
/* tslint:disable */
var tabbableSelector = 'a[href], area[href], input:not([disabled]):not([tabindex=\'-1\']), ' +
    'button:not([disabled]):not([tabindex=\'-1\']),select:not([disabled]):not([tabindex=\'-1\']), textarea:not([disabled]):not([tabindex=\'-1\']), ' +
    'iframe, object, embed, *[tabindex]:not([tabindex=\'-1\']), *[contenteditable=true]';
/* tslint:enable */
var SkyModalComponentAdapterService = (function () {
    function SkyModalComponentAdapterService() {
    }
    SkyModalComponentAdapterService.prototype.handleWindowChange = function (modalEl) {
        var boundedHeightEl = modalEl.nativeElement.querySelector('.sky-modal');
        var fullPageModalEl = modalEl.nativeElement.querySelector('.sky-modal-full-page');
        /*
          Set modal height equal to max height of window (accounting for padding above and below modal)
        */
        var newHeight = window.innerHeight - 40;
        boundedHeightEl.style.maxHeight = newHeight.toString() + 'px';
        if (fullPageModalEl) {
            fullPageModalEl.style.height = window.innerHeight.toString() + 'px';
            fullPageModalEl.style.maxHeight = window.innerHeight.toString() + 'px';
        }
        else {
            /*
              IE11 doesn't handle flex and max-height correctly so we have to explicitly add
              max-height to the content that accounts for standard header and footer height.
            */
            var modalContentEl = modalEl.nativeElement.querySelector('.sky-modal-content');
            var contentHeight = newHeight - 114;
            modalContentEl.style.maxHeight = contentHeight.toString() + 'px';
        }
    };
    SkyModalComponentAdapterService.prototype.loadFocusElementList = function (modalEl) {
        var _this = this;
        var elements = Array.prototype.slice.call(modalEl.nativeElement.querySelectorAll(tabbableSelector));
        return elements.filter(function (element) {
            return _this.isVisible(element);
        });
    };
    SkyModalComponentAdapterService.prototype.isFocusInFirstItem = function (event, list) {
        /* istanbul ignore next */
        /* sanity check */
        var eventTarget = event.target || event.srcElement;
        return list.length > 0 && eventTarget === list[0];
    };
    SkyModalComponentAdapterService.prototype.isFocusInLastItem = function (event, list) {
        /* istanbul ignore next */
        /* sanity check */
        var eventTarget = event.target || event.srcElement;
        return list.length > 0 && eventTarget === list[list.length - 1];
    };
    SkyModalComponentAdapterService.prototype.isModalFocused = function (event, modalEl) {
        /* istanbul ignore next */
        /* sanity check */
        var eventTarget = event.target || event.srcElement;
        return modalEl &&
            eventTarget === modalEl.nativeElement.querySelector('.sky-modal-dialog');
    };
    SkyModalComponentAdapterService.prototype.focusLastElement = function (list) {
        if (list.length > 0) {
            list[list.length - 1].focus();
            return true;
        }
        return false;
    };
    SkyModalComponentAdapterService.prototype.focusFirstElement = function (list) {
        if (list.length > 0) {
            list[0].focus();
            return true;
        }
        return false;
    };
    SkyModalComponentAdapterService.prototype.modalOpened = function (modalEl) {
        /* istanbul ignore else */
        /* handle the case where somehow there is a focused element already in the modal */
        if (!(document.activeElement && modalEl.nativeElement.contains(document.activeElement))) {
            var currentScrollX = window.pageXOffset;
            var currentScrollY = window.pageYOffset;
            var inputWithAutofocus = modalEl.nativeElement.querySelector('[autofocus]');
            if (inputWithAutofocus) {
                inputWithAutofocus.focus();
            }
            else {
                var focusEl = modalEl.nativeElement.querySelector('.sky-modal');
                focusEl.focus();
            }
            window.scrollTo(currentScrollX, currentScrollY);
        }
    };
    SkyModalComponentAdapterService.prototype.isVisible = function (element) {
        return !!(element.offsetWidth ||
            element.offsetHeight ||
            element.getClientRects().length);
    };
    return SkyModalComponentAdapterService;
}());
export { SkyModalComponentAdapterService };
SkyModalComponentAdapterService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SkyModalComponentAdapterService.ctorParameters = function () { return []; };
//# sourceMappingURL=modal-component-adapter.service.js.map