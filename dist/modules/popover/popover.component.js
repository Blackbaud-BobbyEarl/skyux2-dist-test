import { ChangeDetectorRef, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
import { SkyWindowRefService } from '../window';
import { SkyPopoverAdapterService } from './popover-adapter.service';
var SkyPopoverComponent = (function () {
    function SkyPopoverComponent(adapterService, changeDetector, elementRef, windowRef) {
        this.adapterService = adapterService;
        this.changeDetector = changeDetector;
        this.elementRef = elementRef;
        this.windowRef = windowRef;
        this.dismissOnBlur = true;
        this.popoverOpened = new EventEmitter();
        this.popoverClosed = new EventEmitter();
        this.isOpen = false;
        this.isVisible = false;
        this.isMouseEnter = false;
        this.classNames = [];
        this.animationState = 'hidden';
        this.idled = new Subject();
        this.isMarkedForCloseOnMouseLeave = false;
        this.scrollListeners = [];
    }
    Object.defineProperty(SkyPopoverComponent.prototype, "alignment", {
        get: function () {
            return this._alignment || 'center';
        },
        set: function (value) {
            this._alignment = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyPopoverComponent.prototype, "placement", {
        get: function () {
            return this._placement || 'above';
        },
        set: function (value) {
            this._placement = value;
        },
        enumerable: true,
        configurable: true
    });
    SkyPopoverComponent.prototype.ngOnInit = function () {
        this.preferredPlacement = this.placement;
        this.adapterService.hidePopover(this.popoverContainer);
    };
    SkyPopoverComponent.prototype.ngOnDestroy = function () {
        this.removeListeners();
        this.idled.complete();
    };
    SkyPopoverComponent.prototype.positionNextTo = function (caller, placement, alignment) {
        var _this = this;
        if (!caller) {
            return;
        }
        this.close();
        this.caller = caller;
        this.placement = placement;
        this.alignment = alignment;
        this.preferredPlacement = this.placement;
        this.changeDetector.markForCheck();
        // Let the styles render before gauging the dimensions.
        this.windowRef.getWindow().setTimeout(function () {
            if (_this.adapterService.isPopoverLargerThanParent(_this.popoverContainer)) {
                _this.placement = 'fullscreen';
            }
            _this.isVisible = true;
            _this.positionPopover();
            _this.addListeners();
            _this.animationState = 'visible';
            _this.changeDetector.markForCheck();
        });
    };
    SkyPopoverComponent.prototype.reposition = function () {
        this.placement = this.preferredPlacement;
        this.changeDetector.markForCheck();
        if (this.adapterService.isPopoverLargerThanParent(this.popoverContainer)) {
            this.placement = 'fullscreen';
        }
        this.positionPopover();
    };
    SkyPopoverComponent.prototype.close = function () {
        this.animationState = 'hidden';
        this.removeListeners();
        this.changeDetector.markForCheck();
    };
    SkyPopoverComponent.prototype.onAnimationStart = function (event) {
        if (event.fromState === 'void') {
            return;
        }
        if (event.toState === 'visible') {
            this.adapterService.showPopover(this.popoverContainer);
        }
    };
    SkyPopoverComponent.prototype.onAnimationDone = function (event) {
        if (event.fromState === 'void') {
            return;
        }
        if (event.toState === 'hidden') {
            this.isOpen = false;
            this.adapterService.hidePopover(this.popoverContainer);
            this.popoverClosed.emit(this);
        }
        else {
            this.isOpen = true;
            this.popoverOpened.emit(this);
        }
    };
    SkyPopoverComponent.prototype.markForCloseOnMouseLeave = function () {
        this.isMarkedForCloseOnMouseLeave = true;
    };
    SkyPopoverComponent.prototype.positionPopover = function () {
        if (this.placement !== 'fullscreen') {
            var elements = {
                popover: this.popoverContainer,
                popoverArrow: this.popoverArrow,
                caller: this.caller
            };
            var position = this.adapterService.getPopoverPosition(elements, this.preferredPlacement, this.alignment);
            this.placement = position.placement;
            this.alignment = position.alignment;
            this.popoverTop = position.top;
            this.popoverLeft = position.left;
            this.arrowTop = position.arrowTop;
            this.arrowLeft = position.arrowLeft;
        }
        this.changeDetector.markForCheck();
    };
    SkyPopoverComponent.prototype.addListeners = function () {
        var _this = this;
        var windowObj = this.windowRef.getWindow();
        var hostElement = this.elementRef.nativeElement;
        Observable
            .fromEvent(windowObj, 'resize')
            .takeUntil(this.idled)
            .subscribe(function () {
            _this.reposition();
        });
        Observable
            .fromEvent(windowObj.document, 'focusin')
            .takeUntil(this.idled)
            .subscribe(function (event) {
            var targetIsChild = (hostElement.contains(event.target));
            var targetIsCaller = (_this.caller && _this.caller.nativeElement === event.target);
            /* istanbul ignore else */
            if (!targetIsChild && !targetIsCaller && _this.dismissOnBlur) {
                // The popover is currently being operated by the user, and
                // has just lost keyboard focus. We should close it.
                _this.close();
            }
        });
        Observable
            .fromEvent(windowObj.document, 'click')
            .takeUntil(this.idled)
            .subscribe(function (event) {
            if (!_this.isMouseEnter && _this.dismissOnBlur) {
                _this.close();
            }
        });
        Observable
            .fromEvent(hostElement, 'mouseenter')
            .takeUntil(this.idled)
            .subscribe(function () {
            _this.isMouseEnter = true;
        });
        Observable
            .fromEvent(hostElement, 'mouseleave')
            .takeUntil(this.idled)
            .subscribe(function () {
            _this.isMouseEnter = false;
            if (_this.isMarkedForCloseOnMouseLeave) {
                _this.close();
                _this.isMarkedForCloseOnMouseLeave = false;
            }
        });
        Observable
            .fromEvent(hostElement, 'keyup')
            .takeUntil(this.idled)
            .subscribe(function (event) {
            var key = event.key.toLowerCase();
            if (key === 'escape') {
                event.stopPropagation();
                event.preventDefault();
                _this.close();
                /* istanbul ignore else */
                if (_this.caller) {
                    _this.caller.nativeElement.focus();
                }
            }
        });
        this.scrollListeners = this.adapterService
            .getParentScrollListeners(this.popoverContainer, function (isElementVisibleWithinScrollable) {
            _this.reposition();
            _this.isVisible = isElementVisibleWithinScrollable;
            _this.changeDetector.markForCheck();
        });
    };
    SkyPopoverComponent.prototype.removeListeners = function () {
        this.idled.next(true);
        if (this.scrollListeners) {
            this.scrollListeners.forEach(function (listener) {
                // Remove renderer-generated listeners by calling the listener itself.
                // https://github.com/angular/angular/issues/9368#issuecomment-227199778
                listener();
            });
            this.scrollListeners = [];
        }
    };
    return SkyPopoverComponent;
}());
export { SkyPopoverComponent };
SkyPopoverComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-popover',
                template: "<div class=\"sky-popover-container\"\n  tabindex=\"-1\"\n  [ngClass]=\"[\n    'sky-popover-alignment-' + alignment,\n    'sky-popover-placement-' + placement\n  ]\"\n  (@popoverState.start)=\"onAnimationStart($event)\"\n  (@popoverState.done)=\"onAnimationDone($event)\"\n  [@popoverState]=\"animationState\"\n  [style.top.px]=\"popoverTop\"\n  [style.left.px]=\"popoverLeft\"\n  [style.visibility]=\"(isVisible) ? 'visible': 'hidden'\"\n  #popoverContainer>\n  <div class=\"sky-popover sky-shadow sky-rounded-corners\">\n    <header class=\"sky-popover-header\" *ngIf=\"popoverTitle\">\n      <h1 class=\"sky-popover-title\">\n        {{ popoverTitle }}\n      </h1>\n    </header>\n    <div class=\"sky-popover-body\">\n      <ng-content></ng-content>\n    </div>\n    <div\n      class=\"sky-popover-arrow\"\n      [style.top.px]=\"arrowTop\"\n      [style.left.px]=\"arrowLeft\"\n      aria-hidden=\"true\"\n      #popoverArrow></div>\n  </div>\n</div>\n",
                styles: [".sky-popover-container {\n  position: fixed;\n  z-index: 999;\n  min-width: 276px;\n  max-width: 276px;\n}\n\n.sky-popover-container.sky-popover-hidden {\n  visibility: hidden;\n  opacity: 0;\n  top: -9999px !important;\n  left: -9999px !important;\n}\n\n.sky-popover-container:focus {\n  outline: none;\n}\n\n@media (max-width: 276px) {\n  .sky-popover-container {\n    max-width: 100%;\n    min-width: auto;\n  }\n}\n\n.sky-popover {\n  background-color: #ffffff;\n}\n\n.sky-popover-header {\n  padding: 10px 10px 0 10px;\n}\n\n.sky-popover-header + .sky-popover-body {\n  padding-top: 2px;\n}\n\n.sky-popover-title {\n  font-family: \"Blackbaud Sans\", \"Helvetica Neue\", Arial, sans-serif;\n  color: #282b31;\n  font-weight: 600;\n  font-size: 16px;\n  margin: 0;\n}\n\n.sky-popover-body {\n  padding: 10px;\n}\n\n.sky-popover-arrow {\n  width: 0;\n  height: 0;\n  position: absolute;\n  border: 10px solid transparent;\n}\n\n.sky-popover-placement-fullscreen {\n  background-color: rgba(0, 0, 0, 0.2);\n  padding: 10px !important;\n  top: 0 !important;\n  left: 0 !important;\n  right: 0;\n  bottom: 0;\n  width: 100% !important;\n  max-width: none;\n  max-height: 100%;\n  height: auto !important;\n}\n\n.sky-popover-placement-fullscreen > .sky-popover {\n  border-top: 1px solid #cdcfd2;\n  border-bottom: 1px solid #cdcfd2;\n  border-left: 1px solid #cdcfd2;\n  border-right: 1px solid #cdcfd2;\n  overflow: auto;\n  max-height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.sky-popover-placement-fullscreen > .sky-popover .sky-popover-header {\n  padding: 10px;\n  border-bottom: 1px solid #e2e3e4;\n}\n\n.sky-popover-placement-fullscreen > .sky-popover .sky-popover-body {\n  position: relative;\n}\n\n.sky-popover-placement-above {\n  padding-bottom: 10px;\n}\n\n.sky-popover-placement-above .sky-popover {\n  border-bottom: 10px solid #00b4f1;\n}\n\n.sky-popover-placement-above .sky-popover-arrow {\n  border-bottom: 0;\n  border-top-color: #00b4f1;\n  bottom: 0;\n  left: 50%;\n  margin-left: -10px;\n}\n\n.sky-popover-placement-below {\n  padding-top: 10px;\n}\n\n.sky-popover-placement-below .sky-popover {\n  border-top: 10px solid #00b4f1;\n}\n\n.sky-popover-placement-below .sky-popover-arrow {\n  border-top: 0;\n  border-bottom-color: #00b4f1;\n  top: 0;\n  left: 50%;\n  margin-left: -10px;\n}\n\n.sky-popover-placement-right {\n  padding-left: 10px;\n}\n\n.sky-popover-placement-right .sky-popover {\n  border-left: 10px solid #00b4f1;\n}\n\n.sky-popover-placement-right .sky-popover-arrow {\n  border-left: 0;\n  border-right-color: #00b4f1;\n  left: 0;\n  top: 50%;\n  margin-top: -10px;\n}\n\n.sky-popover-placement-left {\n  padding-right: 10px;\n}\n\n.sky-popover-placement-left .sky-popover {\n  border-right: 10px solid #00b4f1;\n}\n\n.sky-popover-placement-left .sky-popover-arrow {\n  border-right: 0;\n  border-left-color: #00b4f1;\n  right: 0;\n  top: 50%;\n  margin-top: -10px;\n}\n\n.sky-popover-placement-above.sky-popover-alignment-left .sky-popover-arrow,\n.sky-popover-placement-below.sky-popover-alignment-left .sky-popover-arrow {\n  left: 40px;\n  right: auto;\n}\n\n.sky-popover-placement-above.sky-popover-alignment-right .sky-popover-arrow,\n.sky-popover-placement-below.sky-popover-alignment-right .sky-popover-arrow {\n  left: auto;\n  right: 40px;\n}\n"],
                providers: [SkyPopoverAdapterService],
                animations: [
                    trigger('popoverState', [
                        state('visible', style({ opacity: 1, visibility: 'visible' })),
                        state('hidden', style({ opacity: 0 })),
                        transition('hidden => visible', animate('150ms')),
                        transition('visible => hidden', animate('150ms'))
                    ])
                ],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
SkyPopoverComponent.ctorParameters = function () { return [
    { type: SkyPopoverAdapterService, },
    { type: ChangeDetectorRef, },
    { type: ElementRef, },
    { type: SkyWindowRefService, },
]; };
SkyPopoverComponent.propDecorators = {
    'dismissOnBlur': [{ type: Input },],
    'popoverTitle': [{ type: Input },],
    'alignment': [{ type: Input },],
    'placement': [{ type: Input },],
    'popoverOpened': [{ type: Output },],
    'popoverClosed': [{ type: Output },],
    'popoverContainer': [{ type: ViewChild, args: ['popoverContainer',] },],
    'popoverArrow': [{ type: ViewChild, args: ['popoverArrow',] },],
};
//# sourceMappingURL=popover.component.js.map