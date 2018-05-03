import { Directive, ElementRef, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
import { SkyWindowRefService } from '../window';
var SkyPopoverDirective = (function () {
    function SkyPopoverDirective(elementRef, windowRef) {
        this.elementRef = elementRef;
        this.windowRef = windowRef;
        this.skyPopoverTrigger = 'click';
        this.idled = new Subject();
    }
    SkyPopoverDirective.prototype.ngOnChanges = function (changes) {
        /* istanbul ignore else */
        if (changes.skyPopover) {
            this.removeEventListeners();
            if (changes.skyPopover.currentValue !== undefined) {
                this.addEventListeners();
            }
        }
    };
    SkyPopoverDirective.prototype.ngOnDestroy = function () {
        this.removeEventListeners();
    };
    SkyPopoverDirective.prototype.togglePopover = function () {
        if (this.isPopoverOpen()) {
            this.closePopover();
            return;
        }
        this.positionPopover();
    };
    SkyPopoverDirective.prototype.positionPopover = function () {
        this.skyPopover.positionNextTo(this.elementRef, this.skyPopoverPlacement, this.skyPopoverAlignment);
    };
    SkyPopoverDirective.prototype.closePopover = function () {
        this.skyPopover.close();
    };
    SkyPopoverDirective.prototype.isPopoverOpen = function () {
        return (this.skyPopover && this.skyPopover.isOpen);
    };
    SkyPopoverDirective.prototype.addEventListeners = function () {
        var _this = this;
        var element = this.elementRef.nativeElement;
        Observable
            .fromEvent(element, 'keyup')
            .takeUntil(this.idled)
            .subscribe(function (event) {
            var key = event.key.toLowerCase();
            if (key === 'escape' && _this.isPopoverOpen()) {
                event.stopPropagation();
                event.preventDefault();
                _this.closePopover();
                _this.elementRef.nativeElement.focus();
            }
        });
        Observable
            .fromEvent(element, 'click')
            .takeUntil(this.idled)
            .subscribe(function (event) {
            _this.togglePopover();
        });
        Observable
            .fromEvent(element, 'mouseenter')
            .takeUntil(this.idled)
            .subscribe(function (event) {
            _this.skyPopover.isMouseEnter = true;
            if (_this.skyPopoverTrigger === 'mouseenter') {
                event.preventDefault();
                _this.positionPopover();
            }
        });
        Observable
            .fromEvent(element, 'mouseleave')
            .takeUntil(this.idled)
            .subscribe(function (event) {
            _this.skyPopover.isMouseEnter = false;
            if (_this.skyPopoverTrigger === 'mouseenter') {
                event.preventDefault();
                // Give the popover a chance to set its isMouseEnter flag before checking to see
                // if it should be closed.
                _this.windowRef.getWindow().setTimeout(function () {
                    if (_this.isPopoverOpen()) {
                        if (_this.skyPopover.isMouseEnter) {
                            _this.skyPopover.markForCloseOnMouseLeave();
                        }
                        else {
                            _this.closePopover();
                        }
                    }
                });
            }
        });
    };
    SkyPopoverDirective.prototype.removeEventListeners = function () {
        this.idled.next(true);
        this.idled.unsubscribe();
        this.idled = new Subject();
    };
    return SkyPopoverDirective;
}());
export { SkyPopoverDirective };
SkyPopoverDirective.decorators = [
    { type: Directive, args: [{
                selector: '[skyPopover]'
            },] },
];
/** @nocollapse */
SkyPopoverDirective.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: SkyWindowRefService, },
]; };
SkyPopoverDirective.propDecorators = {
    'skyPopover': [{ type: Input },],
    'skyPopoverAlignment': [{ type: Input },],
    'skyPopoverPlacement': [{ type: Input },],
    'skyPopoverTrigger': [{ type: Input },],
};
//# sourceMappingURL=popover.directive.js.map