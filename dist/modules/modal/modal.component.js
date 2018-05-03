import { animate, Component, Input, state, style, transition, trigger, ElementRef, HostListener } from '@angular/core';
import { SkyModalHostService } from './modal-host.service';
import { SkyModalConfiguration } from './modal-configuration';
import { SkyModalComponentAdapterService } from './modal-component-adapter.service';
import { SkyWindowRefService } from '../window';
var skyModalUniqueIdentifier = 0;
var SkyModalComponent = (function () {
    function SkyModalComponent(hostService, config, elRef, windowRef, componentAdapter) {
        this.hostService = hostService;
        this.config = config;
        this.elRef = elRef;
        this.windowRef = windowRef;
        this.componentAdapter = componentAdapter;
        this.modalState = 'in';
        this.modalContentId = 'sky-modal-content-id-' + skyModalUniqueIdentifier.toString();
        this.modalHeaderId = 'sky-modal-header-id-' + skyModalUniqueIdentifier.toString();
    }
    Object.defineProperty(SkyModalComponent.prototype, "tiledBody", {
        set: function (value) {
            this.config.tiledBody = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyModalComponent.prototype, "modalZIndex", {
        get: function () {
            return this.hostService.getModalZIndex();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyModalComponent.prototype, "modalFullPage", {
        get: function () {
            return this.config.fullPage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyModalComponent.prototype, "isSmallSize", {
        get: function () {
            return !this.modalFullPage && this.isSizeEqual(this.config.size, 'small');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyModalComponent.prototype, "isMediumSize", {
        get: function () {
            return !this.modalFullPage && !(this.isSmallSize || this.isLargeSize);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyModalComponent.prototype, "isLargeSize", {
        get: function () {
            return !this.modalFullPage && this.isSizeEqual(this.config.size, 'large');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyModalComponent.prototype, "isTiledBody", {
        get: function () {
            return this.config.tiledBody;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyModalComponent.prototype, "ariaDescribedBy", {
        get: function () {
            return this.config.ariaDescribedBy || this.modalContentId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyModalComponent.prototype, "ariaLabelledBy", {
        get: function () {
            return this.config.ariaLabelledBy || this.modalHeaderId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyModalComponent.prototype, "helpKey", {
        get: function () {
            return this.config.helpKey;
        },
        enumerable: true,
        configurable: true
    });
    SkyModalComponent.prototype.onDocumentKeyDown = function (event) {
        /* istanbul ignore else */
        /* sanity check */
        if (SkyModalHostService.openModalCount > 0) {
            var topModal = SkyModalHostService.topModal;
            if (topModal && topModal === this.hostService) {
                switch (event.which) {
                    case 27: {
                        event.preventDefault();
                        this.hostService.onClose();
                        break;
                    }
                    case 9: {
                        var focusChanged = false;
                        var focusElementList = this.componentAdapter.loadFocusElementList(this.elRef);
                        if (event.shiftKey &&
                            (this.componentAdapter.isFocusInFirstItem(event, focusElementList) ||
                                this.componentAdapter.isModalFocused(event, this.elRef))) {
                            focusChanged = this.componentAdapter.focusLastElement(focusElementList);
                        }
                        else if (this.componentAdapter.isFocusInLastItem(event, focusElementList)) {
                            focusChanged = this.componentAdapter.focusFirstElement(focusElementList);
                        }
                        if (focusChanged) {
                            event.preventDefault();
                            event.stopPropagation();
                        }
                        break;
                    }
                    default:
                        break;
                }
            }
        }
    };
    SkyModalComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        skyModalUniqueIdentifier++;
        this.componentAdapter.handleWindowChange(this.elRef);
        // Adding a timeout to avoid ExpressionChangedAfterItHasBeenCheckedError.
        // https://stackoverflow.com/questions/40562845
        this.windowRef.getWindow().setTimeout(function () {
            _this.componentAdapter.modalOpened(_this.elRef);
        });
    };
    SkyModalComponent.prototype.helpButtonClick = function () {
        this.hostService.onOpenHelp(this.helpKey);
    };
    SkyModalComponent.prototype.closeButtonClick = function () {
        this.hostService.onClose();
    };
    SkyModalComponent.prototype.windowResize = function () {
        this.componentAdapter.handleWindowChange(this.elRef);
    };
    SkyModalComponent.prototype.isSizeEqual = function (actualSize, size) {
        return actualSize && actualSize.toLowerCase() === size;
    };
    return SkyModalComponent;
}());
export { SkyModalComponent };
SkyModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-modal',
                template: "<!--\n  Animations are broken in Chrome v52. Angular 2 RC5 will fix it.\n  https://github.com/angular/angular/issues/10245\n-->\n<!--<div @modalState=\"modalState\">-->\n\n<div\n  class=\"sky-modal-dialog\"\n  role=\"dialog\"\n  [attr.aria-describedby]=\"ariaDescribedBy\"\n  [attr.aria-labelledby]=\"ariaLabelledBy\"\n  (window:resize)=\"windowResize()\"\n>\n  <div class=\"sky-modal sky-shadow\"\n    tabindex=\"-1\"\n    [ngClass]=\"{\n      'sky-modal-full-page': modalFullPage,\n      'sky-modal-small' : isSmallSize,\n      'sky-modal-medium' : isMediumSize,\n      'sky-modal-large' : isLargeSize,\n      'sky-modal-tiled' : isTiledBody\n      }\"\n    [ngStyle]=\"{\n        zIndex: modalZIndex\n      }\">\n\n    <div class=\"sky-modal-header\" [hidden]=\"!headerContent || !headerContent.children || headerContent.children.length < 1\">\n      <div [attr.id]=\"modalHeaderId\" class=\"sky-modal-header-content\"  #headerContent>\n        <ng-content select=\"sky-modal-header\"></ng-content>\n      </div>\n      <div class=\"sky-modal-header-buttons\">\n        <button *ngIf=\"helpKey\" type=\"button\" class=\"sky-btn\" name=\"help-button\" [attr.aria-label]=\"'open_help' | skyResources\" (click)=\"helpButtonClick()\">\n          <i class=\"fa fa-question-circle\"></i>\n        </button>\n\n        <button type=\"button\" class=\"sky-btn sky-modal-btn-close\" [attr.aria-label]=\"'modal_close' | skyResources\" (click)=\"closeButtonClick()\">\n\n          <i class=\"fa fa-close\"></i>\n        </button>\n      </div>\n\n    </div>\n    <div [attr.id]=\"modalContentId\" class=\"sky-modal-content\">\n      <ng-content select=\"sky-modal-content\"></ng-content>\n    </div>\n    <div class=\"sky-modal-footer\">\n      <ng-content select=\"sky-modal-footer\"></ng-content>\n    </div>\n</div>\n</div>\n",
                styles: [".sky-modal {\n  border-top: 1px solid #cdcfd2;\n  border-bottom: 1px solid #cdcfd2;\n  border-left: 1px solid #cdcfd2;\n  border-right: 1px solid #cdcfd2;\n  position: fixed;\n  width: auto;\n  left: 0;\n  right: 0;\n  top: 20px;\n  margin: 10px;\n  display: flex;\n  flex-direction: column;\n}\n\n.sky-modal:focus {\n  outline: none;\n}\n\n@media (min-width: 768px) {\n  .sky-modal:not(.sky-modal-large) {\n    margin: 0 auto;\n  }\n  .sky-modal-small {\n    width: 300px;\n  }\n  .sky-modal-medium {\n    width: 600px;\n  }\n}\n\n@media (min-width: 920px) {\n  .sky-modal-large {\n    margin: 0 auto;\n    width: 900px;\n  }\n}\n\n.sky-modal-content {\n  background-color: #fff;\n  padding: 15px;\n}\n\n.sky-modal-tiled .sky-modal-content {\n  background-color: #eeeeef;\n}\n\n.sky-modal-tiled .sky-modal-content /deep/ .sky-tile-title {\n  font-family: \"Blackbaud Sans\", \"Helvetica Neue\", Arial, sans-serif;\n  color: #686c73;\n  font-weight: 300;\n  font-size: 19px;\n}\n\n.sky-modal-tiled .sky-modal-content /deep/ .sky-tile-tools .sky-chevron {\n  margin: 9px 9px 8px 0;\n}\n\n.sky-modal-header {\n  /* Need less padding because of the close button padding */\n  padding-left: 15px;\n  padding-top: 9px;\n  padding-bottom: 9px;\n  padding-right: 3px;\n  background-color: #fff;\n  display: flex;\n  align-items: baseline;\n  border-bottom: 1px solid #e2e3e4;\n}\n\n.sky-modal-header-buttons .sky-btn {\n  border: none;\n  color: #cdcfd2;\n  cursor: pointer;\n}\n\n.sky-modal-header-buttons .sky-btn:hover {\n  color: #979ba2;\n  transition: color 150ms;\n}\n\n.sky-modal-header-content {\n  flex-grow: 1;\n  font-family: \"Blackbaud Sans\", \"Helvetica Neue\", Arial, sans-serif;\n  color: #282b31;\n  font-weight: 600;\n  font-size: 16px;\n}\n\n.sky-modal-header {\n  flex-shrink: 0;\n}\n\n.sky-modal-content {\n  overflow-y: auto;\n}\n\n.sky-modal-footer {\n  flex-shrink: 0;\n}\n\n.sky-modal-footer /deep/ sky-tabset-nav-button + sky-tabset-nav-button {\n  margin-left: 10px;\n}\n\n.sky-modal-footer /deep/ sky-tabset-nav-button + .sky-btn {\n  margin-left: 10px;\n}\n\n.sky-modal-footer /deep/ .sky-btn + .sky-btn {\n  margin-left: 10px;\n}\n\n.sky-modal-footer /deep/ .sky-btn + .sky-btn-link {\n  margin-left: -2px;\n  /* offset the padding of the btn-link */\n}\n\n.sky-modal-full-page {\n  width: 100%;\n  top: 0;\n  margin: 0;\n}\n\n.sky-modal-full-page .sky-modal-header-content {\n  font-family: \"Blackbaud Sans Condensed\", \"Helvetica Neue Condensed\", \"Arial Narrow\";\n  color: #282b31;\n  font-weight: 300;\n  font-size: 26px;\n}\n\n.sky-modal-full-page .sky-modal-header-buttons .fa-close {\n  font-size: 20px;\n}\n\n.sky-modal-full-page .sky-modal-content {\n  flex-grow: 1;\n}\n\n:host /deep/ .sky-sectioned-form {\n  height: 460px;\n  margin: -15px;\n}\n"],
                animations: [
                    trigger('modalState', [
                        state('in', style({ opacity: '1.0' })),
                        state('out', style({ opacity: '0.0' })),
                        transition('void => *', [
                            style({ opacity: '0.0' }),
                            animate(150)
                        ]),
                        transition('* => void', [
                            animate(150, style({ opacity: '0.0' }))
                        ])
                    ])
                ],
                providers: [
                    SkyModalComponentAdapterService
                ]
            },] },
];
/** @nocollapse */
SkyModalComponent.ctorParameters = function () { return [
    { type: SkyModalHostService, },
    { type: SkyModalConfiguration, },
    { type: ElementRef, },
    { type: SkyWindowRefService, },
    { type: SkyModalComponentAdapterService, },
]; };
SkyModalComponent.propDecorators = {
    'tiledBody': [{ type: Input },],
    'onDocumentKeyDown': [{ type: HostListener, args: ['document:keydown', ['$event'],] },],
};
//# sourceMappingURL=modal.component.js.map