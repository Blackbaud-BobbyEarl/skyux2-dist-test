import { Injectable, Renderer2 } from '@angular/core';
import { SkyWindowRefService } from '../window';
var SkyPopoverAdapterService = (function () {
    function SkyPopoverAdapterService(renderer, windowRef) {
        this.renderer = renderer;
        this.windowRef = windowRef;
    }
    SkyPopoverAdapterService.prototype.getPopoverPosition = function (elements, placement, alignment) {
        var max = 4;
        var counter = 0;
        var coords;
        do {
            coords = this.getPopoverCoordinates(elements, placement, alignment);
            if (coords.isOutsideViewport) {
                placement = (counter % 2 === 0) ?
                    this.getInversePlacement(placement) :
                    this.getNextPlacement(placement);
            }
            counter++;
        } while (coords.isOutsideViewport && counter < max);
        if (counter === max && coords.isOutsideViewport) {
            placement = 'fullscreen';
        }
        var arrowCoords = this.getArrowCoordinates(elements, coords, placement);
        var position = this.verifyCoordinatesNearCaller(elements, {
            top: coords.top,
            left: coords.left,
            arrowTop: arrowCoords.top,
            arrowLeft: arrowCoords.left,
            placement: placement,
            alignment: alignment
        });
        return position;
    };
    SkyPopoverAdapterService.prototype.hidePopover = function (elem) {
        this.renderer.addClass(elem.nativeElement, 'sky-popover-hidden');
    };
    SkyPopoverAdapterService.prototype.showPopover = function (elem) {
        this.renderer.removeClass(elem.nativeElement, 'sky-popover-hidden');
    };
    SkyPopoverAdapterService.prototype.isPopoverLargerThanParent = function (popover) {
        var windowObj = this.windowRef.getWindow();
        var popoverRect = popover.nativeElement.getBoundingClientRect();
        return (popoverRect.height >= windowObj.innerHeight ||
            popoverRect.width >= windowObj.innerWidth);
    };
    SkyPopoverAdapterService.prototype.getParentScrollListeners = function (popover, callback) {
        var _this = this;
        var bodyElement = this.windowRef.getWindow().document.body;
        var parentElements = this.getScrollableParentElements(popover);
        var listeners = parentElements.map(function (parentElement) {
            var target = (parentElement === bodyElement) ? 'window' : parentElement;
            return _this.renderer.listen(target, 'scroll', function () {
                var isVisible = (target === 'window')
                    ? true
                    : _this.isVisibleWithinScrollable(target, popover.nativeElement);
                callback(isVisible);
            });
        });
        return listeners;
    };
    SkyPopoverAdapterService.prototype.getPopoverCoordinates = function (elements, placement, alignment) {
        var windowObj = this.windowRef.getWindow();
        var popoverRect = elements.popover.nativeElement.getBoundingClientRect();
        var callerRect = elements.caller.nativeElement.getBoundingClientRect();
        var callerXCenter = callerRect.width / 2;
        var scrollRight = windowObj.innerWidth;
        var scrollBottom = windowObj.innerHeight;
        var top;
        var left;
        var bleedLeft = 0;
        var bleedRight = 0;
        var bleedTop = 0;
        var bleedBottom = 0;
        var isOutsideViewport = false;
        /* tslint:disable-next-line:switch-default */
        switch (placement) {
            case 'above':
                top = callerRect.top - popoverRect.height;
                bleedTop = top;
                break;
            case 'below':
                top = callerRect.bottom;
                bleedBottom = scrollBottom - (top + popoverRect.height);
                break;
            case 'right':
                left = callerRect.right;
                bleedRight = scrollRight - (left + popoverRect.width);
                break;
            case 'left':
                left = callerRect.left - popoverRect.width;
                bleedLeft = left;
                break;
        }
        if (placement === 'right' || placement === 'left') {
            top = callerRect.top - (popoverRect.height / 2) + (callerRect.height / 2);
            bleedTop = top;
            bleedBottom = scrollBottom - (top + popoverRect.height);
        }
        if (placement === 'above' || placement === 'below') {
            // Make adjustments based on horizontal alignment.
            switch (alignment) {
                default:
                case 'center':
                    left = callerRect.left - (popoverRect.width / 2) + callerXCenter;
                    break;
                case 'left':
                    left = callerRect.left;
                    break;
                case 'right':
                    left = callerRect.left - popoverRect.width + callerRect.width;
                    break;
            }
            bleedLeft = left;
            bleedRight = scrollRight - (left + popoverRect.width);
        }
        // Clipped on left?
        if (bleedLeft < 0) {
            if (placement === 'left') {
                isOutsideViewport = true;
            }
            left = 0;
        }
        // Clipped on right?
        if (bleedRight < 0) {
            if (placement === 'right') {
                isOutsideViewport = true;
            }
            left += bleedRight;
        }
        // Clipped on top?
        if (bleedTop < 0) {
            if (placement === 'above') {
                isOutsideViewport = true;
            }
            top -= bleedTop;
        }
        // Clipped on bottom?
        if (bleedBottom < 0) {
            if (placement === 'below') {
                isOutsideViewport = true;
            }
            top += bleedBottom;
        }
        return {
            top: top,
            left: left,
            isOutsideViewport: isOutsideViewport
        };
    };
    SkyPopoverAdapterService.prototype.getArrowCoordinates = function (elements, popoverCoords, placement) {
        var callerRect = elements.caller.nativeElement.getBoundingClientRect();
        var popoverRect = elements.popover.nativeElement.getBoundingClientRect();
        var arrowRect = elements.popoverArrow.nativeElement.getBoundingClientRect();
        var callerXCenter = (callerRect.width / 2);
        var callerYCenter = (callerRect.height / 2);
        var top;
        var left;
        if (placement === 'left' || placement === 'right') {
            top = callerRect.top - popoverCoords.top + callerYCenter;
            if (top < callerYCenter) {
                top = callerYCenter;
            }
            if (top > popoverRect.height - callerYCenter) {
                top = popoverRect.height - callerYCenter;
            }
        }
        if (placement === 'above' || placement === 'below') {
            left = callerRect.left - popoverCoords.left + callerXCenter;
            if (left < arrowRect.width) {
                left = arrowRect.width;
            }
            if (left > popoverRect.width - arrowRect.width) {
                left = popoverRect.width - arrowRect.width;
            }
        }
        return { top: top, left: left };
    };
    // This method ensures that the popover remains close to caller element,
    // when the caller element is no longer visible after scrolling.
    SkyPopoverAdapterService.prototype.verifyCoordinatesNearCaller = function (elements, position) {
        var windowObj = this.windowRef.getWindow();
        var callerRect = elements.caller.nativeElement.getBoundingClientRect();
        var popoverRect = elements.popover.nativeElement.getBoundingClientRect();
        var pixelTolerance = 40;
        if (position.placement === 'left' || position.placement === 'right') {
            if (callerRect.top < 0) {
                position.top = callerRect.top;
            }
            if (callerRect.bottom > windowObj.innerHeight) {
                position.top = callerRect.bottom - popoverRect.height;
            }
        }
        if (position.placement === 'above' || position.placement === 'below') {
            if (position.left + pixelTolerance > callerRect.right) {
                position.left = callerRect.right - pixelTolerance;
            }
            if (position.left + popoverRect.width - pixelTolerance < callerRect.left) {
                position.left = callerRect.left - popoverRect.width + pixelTolerance;
            }
        }
        return position;
    };
    SkyPopoverAdapterService.prototype.getNextPlacement = function (placement) {
        var placements = ['above', 'right', 'below', 'left'];
        var index = placements.indexOf(placement) + 1;
        if (index === placements.length) {
            index = 0;
        }
        return placements[index];
    };
    SkyPopoverAdapterService.prototype.getInversePlacement = function (placement) {
        var pairings = {
            above: 'below',
            below: 'above',
            right: 'left',
            left: 'right'
        };
        return pairings[placement];
    };
    SkyPopoverAdapterService.prototype.getScrollableParentElements = function (element) {
        var windowObj = this.windowRef.getWindow();
        var bodyElement = windowObj.document.body;
        var result = [bodyElement];
        var parentElement = element.nativeElement.parentNode;
        while (parentElement !== undefined &&
            parentElement !== bodyElement &&
            parentElement instanceof HTMLElement) {
            var overflowY = windowObj.getComputedStyle(parentElement, undefined).overflowY.toLowerCase();
            if (overflowY === 'auto' || overflowY === 'hidden' || overflowY === 'scroll') {
                result.push(parentElement);
            }
            parentElement = parentElement.parentNode;
        }
        return result;
    };
    // Returns true if the popover is visible in the scrollable parent.
    SkyPopoverAdapterService.prototype.isVisibleWithinScrollable = function (container, popover) {
        var containerRect = container.getBoundingClientRect();
        var popoverRect = popover.getBoundingClientRect();
        var percentageTopVisible = (popoverRect.top === 0) ? 100 : popoverRect.top / containerRect.top * 100;
        var percentageBottomVisible = (containerRect.bottom === 0) ? 100 : containerRect.bottom / popoverRect.bottom * 100;
        return (percentageTopVisible > 95 && percentageBottomVisible > 95);
    };
    return SkyPopoverAdapterService;
}());
export { SkyPopoverAdapterService };
SkyPopoverAdapterService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SkyPopoverAdapterService.ctorParameters = function () { return [
    { type: Renderer2, },
    { type: SkyWindowRefService, },
]; };
//# sourceMappingURL=popover-adapter.service.js.map