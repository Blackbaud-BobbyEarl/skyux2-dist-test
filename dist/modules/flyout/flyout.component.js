import { Component, ChangeDetectionStrategy, ChangeDetectorRef, ComponentFactoryResolver, HostListener, Injector, ReflectiveInjector, ViewChild, ViewContainerRef } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
import { SkyFlyoutAdapterService } from './flyout-adapter.service';
import { SkyFlyoutInstance } from './flyout-instance';
import { SkyFlyoutMessageType } from './types';
var FLYOUT_OPEN_STATE = 'flyoutOpen';
var FLYOUT_CLOSED_STATE = 'flyoutClosed';
var SkyFlyoutComponent = (function () {
    function SkyFlyoutComponent(adapter, changeDetector, injector, resolver) {
        var _this = this;
        this.adapter = adapter;
        this.changeDetector = changeDetector;
        this.injector = injector;
        this.resolver = resolver;
        this.flyoutState = FLYOUT_CLOSED_STATE;
        this.isOpen = false;
        this.isOpening = false;
        this.flyoutWidth = 0;
        this.isDragging = false;
        this.xCoord = 0;
        this.ngUnsubscribe = new Subject();
        this._messageStream = new Subject();
        // All commands flow through the message stream.
        this.messageStream
            .takeUntil(this.ngUnsubscribe)
            .subscribe(function (message) {
            _this.handleIncomingMessages(message);
        });
    }
    Object.defineProperty(SkyFlyoutComponent.prototype, "messageStream", {
        get: function () {
            return this._messageStream;
        },
        enumerable: true,
        configurable: true
    });
    SkyFlyoutComponent.prototype.ngOnInit = function () {
        this.adapter.adjustHeaderForHelp(this.flyoutHeader);
    };
    SkyFlyoutComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    SkyFlyoutComponent.prototype.onCloseButtonClick = function () {
        this.messageStream.next({
            type: SkyFlyoutMessageType.Close
        });
    };
    SkyFlyoutComponent.prototype.attach = function (component, config) {
        this.cleanTemplate();
        // Emit the closed event on any previously opened flyout instance
        if (this.flyoutInstance) {
            this.notifyClosed();
        }
        this.config = Object.assign({ providers: [] }, config);
        this.config.defaultWidth = this.config.defaultWidth || 500;
        this.config.minWidth = this.config.minWidth || 320;
        this.config.maxWidth = this.config.maxWidth || this.config.defaultWidth;
        var factory = this.resolver.resolveComponentFactory(component);
        var providers = ReflectiveInjector.resolve(this.config.providers);
        var injector = ReflectiveInjector.fromResolvedProviders(providers, this.injector);
        var componentRef = this.target.createComponent(factory, undefined, injector);
        this.flyoutInstance = this.createFlyoutInstance(componentRef.instance);
        // Open the flyout immediately.
        this.messageStream.next({
            type: SkyFlyoutMessageType.Open
        });
        this.flyoutWidth = this.config.defaultWidth;
        return this.flyoutInstance;
    };
    SkyFlyoutComponent.prototype.getAnimationState = function () {
        return (this.isOpening) ? FLYOUT_OPEN_STATE : FLYOUT_CLOSED_STATE;
    };
    SkyFlyoutComponent.prototype.animationDone = function (event) {
        if (event.toState === FLYOUT_OPEN_STATE) {
            this.isOpen = true;
        }
        if (event.toState === FLYOUT_CLOSED_STATE) {
            this.isOpen = false;
            this.notifyClosed();
            this.cleanTemplate();
        }
    };
    SkyFlyoutComponent.prototype.onMouseDown = function (event) {
        this.isDragging = true;
        this.xCoord = event.clientX;
        event.preventDefault();
        event.stopPropagation();
    };
    SkyFlyoutComponent.prototype.onMouseMove = function (event) {
        if (!this.isDragging) {
            return;
        }
        var offsetX = event.clientX - this.xCoord;
        var width = this.flyoutWidth;
        width -= offsetX;
        if (width < this.config.minWidth || width > this.config.maxWidth) {
            return;
        }
        this.flyoutWidth = width;
        this.xCoord = event.clientX;
    };
    SkyFlyoutComponent.prototype.onHandleRelease = function (event) {
        this.isDragging = false;
    };
    SkyFlyoutComponent.prototype.open = function () {
        if (!this.isOpen) {
            this.isOpen = false;
            this.isOpening = true;
        }
        this.changeDetector.markForCheck();
    };
    SkyFlyoutComponent.prototype.close = function () {
        this.isOpen = true;
        this.isOpening = false;
        this.changeDetector.markForCheck();
    };
    SkyFlyoutComponent.prototype.createFlyoutInstance = function (component) {
        var _this = this;
        var instance = new SkyFlyoutInstance();
        instance.componentInstance = component;
        instance.hostController
            .takeUntil(this.ngUnsubscribe)
            .subscribe(function (message) {
            _this.messageStream.next(message);
        });
        return instance;
    };
    SkyFlyoutComponent.prototype.handleIncomingMessages = function (message) {
        /* tslint:disable-next-line:switch-default */
        switch (message.type) {
            case SkyFlyoutMessageType.Open:
                this.open();
                break;
            case SkyFlyoutMessageType.Close:
                this.close();
                break;
        }
    };
    SkyFlyoutComponent.prototype.notifyClosed = function () {
        this.flyoutInstance.closed.emit();
        this.flyoutInstance.closed.complete();
    };
    SkyFlyoutComponent.prototype.cleanTemplate = function () {
        this.target.clear();
    };
    return SkyFlyoutComponent;
}());
export { SkyFlyoutComponent };
SkyFlyoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-flyout',
                template: "<div\n  class=\"sky-flyout sky-shadow\"\n  tabindex=\"-1\"\n  [attr.role]=\"config?.ariaRole\"\n  [attr.aria-describedby]=\"config?.ariaDescribedBy\"\n  [attr.aria-labelledby]=\"config?.ariaLabelledBy\"\n  [ngClass]=\"{ 'sky-flyout-hidden': !isOpen && !isOpening }\"\n  (@flyoutState.done)=\"animationDone($event)\"\n  [@flyoutState]=\"getAnimationState()\"\n  [style.width.px]=\"flyoutWidth\">\n\n  <button\n    type=\"button\"\n    class=\"sky-flyout-resize-handle\"\n    aria-hidden=\"true\"\n    role=\"separator\"\n    tabindex=\"-1\"\n    (mousedown)=\"onMouseDown($event)\">\n  </button>\n\n  <div class=\"sky-flyout-header\" #flyoutHeader>\n    <div class=\"sky-flyout-header-content\"></div>\n    <div class=\"sky-flyout-header-buttons\">\n      <button\n        type=\"button\"\n        class=\"sky-btn sky-btn-default sky-flyout-btn-close\"\n        (click)=\"onCloseButtonClick()\"\n        [attr.aria-label]=\"'flyout_close' | skyResources\">\n        <i class=\"fa fa-close\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n  </div>\n  <div class=\"sky-flyout-content\">\n    <div #target></div>\n  </div>\n</div>\n",
                styles: [".sky-flyout {\n  position: fixed;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  height: 100%;\n  background-color: #fff;\n  border-left: 6px solid #00b4f1;\n  z-index: 1001;\n}\n\n.sky-flyout:focus {\n  outline: none;\n}\n\n@media (max-width: 768px) {\n  .sky-flyout {\n    min-width: 100%;\n    max-width: 100%;\n  }\n}\n\n.sky-flyout.sky-flyout-hidden {\n  visibility: hidden;\n}\n\n.sky-flyout-resize-handle {\n  height: 100%;\n  width: 14px;\n  position: absolute;\n  left: -10px;\n  cursor: ew-resize;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  display: block;\n  top: 0;\n  bottom: 0;\n}\n\n@media (max-width: 768px) {\n  .sky-flyout-resize-handle {\n    cursor: initial;\n  }\n}\n\n.sky-flyout-header {\n  border-bottom: 1px solid #cdcfd2;\n  width: 100%;\n  background: #eeeeef;\n  height: 50px;\n  padding: 8px 15px;\n  display: flex;\n  align-items: baseline;\n}\n\n.sky-flyout-header-content {\n  flex-grow: 1;\n}\n\n.sky-flyout-help-shim {\n  padding-right: 8px;\n}\n\n@media (min-width: 768px) {\n  .sky-flyout-help-shim {\n    padding-right: 50px;\n  }\n}\n\n.sky-flyout-content {\n  overflow-y: auto;\n  height: calc(100% - 50px);\n}\n"],
                animations: [
                    trigger('flyoutState', [
                        state(FLYOUT_OPEN_STATE, style({ transform: 'translateX(0)' })),
                        state(FLYOUT_CLOSED_STATE, style({ transform: 'translateX(100%)' })),
                        transition('void => *', [
                            style({ transform: 'translateX(100%)' }),
                            animate(250)
                        ]),
                        transition("* <=> *", animate('250ms ease-in'))
                    ])
                ],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
SkyFlyoutComponent.ctorParameters = function () { return [
    { type: SkyFlyoutAdapterService, },
    { type: ChangeDetectorRef, },
    { type: Injector, },
    { type: ComponentFactoryResolver, },
]; };
SkyFlyoutComponent.propDecorators = {
    'target': [{ type: ViewChild, args: ['target', { read: ViewContainerRef },] },],
    'flyoutHeader': [{ type: ViewChild, args: ['flyoutHeader',] },],
    'onMouseMove': [{ type: HostListener, args: ['document:mousemove', ['$event'],] },],
    'onHandleRelease': [{ type: HostListener, args: ['document:mouseup', ['$event'],] },],
};
//# sourceMappingURL=flyout.component.js.map