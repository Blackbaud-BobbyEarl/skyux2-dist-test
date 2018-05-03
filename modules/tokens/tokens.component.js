import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewChildren } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
import { SkyTokensMessageType } from './types';
import { SkyTokenComponent } from './token.component';
var SkyTokensComponent = (function () {
    function SkyTokensComponent(changeDetector) {
        this.changeDetector = changeDetector;
        this.messageStream = new Subject();
        this.tokensChange = new EventEmitter();
        this.focusIndexOverRange = new EventEmitter();
        this.focusIndexUnderRange = new EventEmitter();
        this.tokenSelected = new EventEmitter();
        this.ngUnsubscribe = new Subject();
    }
    Object.defineProperty(SkyTokensComponent.prototype, "disabled", {
        get: function () {
            return (this._disabled === true);
        },
        set: function (value) {
            this._disabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyTokensComponent.prototype, "dismissible", {
        get: function () {
            return (this._dismissible !== false);
        },
        set: function (value) {
            this._dismissible = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyTokensComponent.prototype, "displayWith", {
        get: function () {
            return this._displayWith || 'name';
        },
        set: function (value) {
            this._displayWith = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyTokensComponent.prototype, "focusable", {
        get: function () {
            return (this._focusable !== false);
        },
        set: function (value) {
            this._focusable = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyTokensComponent.prototype, "tokens", {
        get: function () {
            return this._tokens || [];
        },
        set: function (value) {
            this._tokens = value;
            this.tokensChange.emit(this._tokens);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkyTokensComponent.prototype, "activeIndex", {
        get: function () {
            return this._activeIndex || 0;
        },
        set: function (value) {
            if (value >= this.tokens.length) {
                value = this.tokens.length - 1;
                this.focusIndexOverRange.emit();
            }
            if (value < 0) {
                value = 0;
                this.focusIndexUnderRange.emit();
            }
            this._activeIndex = value;
        },
        enumerable: true,
        configurable: true
    });
    SkyTokensComponent.prototype.ngOnInit = function () {
        if (this.messageStream) {
            this.initMessageStream();
        }
    };
    SkyTokensComponent.prototype.ngOnChanges = function (changes) {
        if (changes.messageStream &&
            changes.messageStream.currentValue &&
            !changes.messageStream.firstChange) {
            this.initMessageStream();
        }
    };
    SkyTokensComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
        if (this.messageStream) {
            this.messageStream.complete();
        }
    };
    SkyTokensComponent.prototype.onTokenClick = function (token) {
        if (this.disabled) {
            return;
        }
        this.notifyTokenSelected(token);
    };
    SkyTokensComponent.prototype.onTokenKeyDown = function (event) {
        var key = event.key.toLowerCase();
        if (this.disabled) {
            return;
        }
        /* tslint:disable-next-line:switch-default */
        switch (key) {
            case 'left':
            case 'arrowleft':
                this.messageStream.next({ type: SkyTokensMessageType.FocusPreviousToken });
                event.preventDefault();
                break;
            case 'right':
            case 'arrowright':
                this.messageStream.next({ type: SkyTokensMessageType.FocusNextToken });
                event.preventDefault();
                break;
        }
    };
    SkyTokensComponent.prototype.selectToken = function (token) {
        if (this.disabled) {
            return;
        }
        this.notifyTokenSelected(token);
    };
    SkyTokensComponent.prototype.removeToken = function (token) {
        this.tokens = this.tokens.filter(function (t) { return t !== token; });
        this.changeDetector.detectChanges();
    };
    SkyTokensComponent.prototype.focusPreviousToken = function () {
        this.activeIndex--;
        this.focusActiveToken();
    };
    SkyTokensComponent.prototype.focusNextToken = function () {
        this.activeIndex++;
        this.focusActiveToken();
    };
    SkyTokensComponent.prototype.focusLastToken = function () {
        this.activeIndex = this.tokenComponents.length - 1;
        this.focusActiveToken();
    };
    SkyTokensComponent.prototype.focusActiveToken = function () {
        var _this = this;
        var tokenComponent = this.tokenComponents
            .find(function (comp, i) {
            return (_this.activeIndex === i);
        });
        if (tokenComponent) {
            tokenComponent.focusElement();
        }
    };
    SkyTokensComponent.prototype.removeActiveToken = function () {
        var token = this.tokens[this.activeIndex];
        if (token) {
            this.removeToken(token);
        }
    };
    SkyTokensComponent.prototype.initMessageStream = function () {
        var _this = this;
        this.messageStream
            .takeUntil(this.ngUnsubscribe)
            .subscribe(function (message) {
            /* tslint:disable-next-line:switch-default */
            switch (message.type) {
                case SkyTokensMessageType.FocusLastToken:
                    _this.focusLastToken();
                    break;
                case SkyTokensMessageType.FocusActiveToken:
                    _this.focusActiveToken();
                    break;
                case SkyTokensMessageType.FocusPreviousToken:
                    _this.focusPreviousToken();
                    break;
                case SkyTokensMessageType.FocusNextToken:
                    _this.focusNextToken();
                    break;
                case SkyTokensMessageType.RemoveActiveToken:
                    _this.removeActiveToken();
                    break;
            }
        });
    };
    SkyTokensComponent.prototype.notifyTokenSelected = function (token) {
        this.tokenSelected.emit({
            token: token
        });
    };
    return SkyTokensComponent;
}());
export { SkyTokensComponent };
SkyTokensComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-tokens',
                template: "<div\n  *ngIf=\"tokens\"\n  class=\"sky-tokens\"\n  role=\"list\">\n\n  <sky-token\n    *ngFor=\"let token of tokens; let i = index\"\n    role=\"listitem\"\n    [disabled]=\"disabled\"\n    [dismissible]=\"dismissible\"\n    [focusable]=\"focusable\"\n    (dismiss)=\"removeToken(token)\"\n    (click)=\"onTokenClick(token)\"\n    (keydown)=\"onTokenKeyDown($event)\"\n    (keyup.enter)=\"selectToken(token);$event.preventDefault();\"\n    (tokenFocus)=\"activeIndex = i\">\n    {{ token.value[displayWith] }}\n  </sky-token>\n\n  <div class=\"sky-tokens-content\">\n    <ng-content>\n    </ng-content>\n  </div>\n</div>\n",
                styles: ["@charset \"UTF-8\";\n.sky-tokens {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: baseline;\n  margin: -2px;\n}\n\n.sky-tokens .sky-tokens-content,\n.sky-tokens ::ng-deep sky-token {\n  flex: 0 0 auto;\n  display: inline-flex;\n  padding: 2px;\n}\n\n.sky-tokens .sky-tokens-content {\n  flex-grow: 1;\n  flex-basis: 0px;\n}\n\n.sky-tokens .sky-tokens-content:before {\n  content: \"\u200B\";\n}\n"],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
SkyTokensComponent.ctorParameters = function () { return [
    { type: ChangeDetectorRef, },
]; };
SkyTokensComponent.propDecorators = {
    'disabled': [{ type: Input },],
    'dismissible': [{ type: Input },],
    'displayWith': [{ type: Input },],
    'focusable': [{ type: Input },],
    'messageStream': [{ type: Input },],
    'tokens': [{ type: Input },],
    'tokensChange': [{ type: Output },],
    'focusIndexOverRange': [{ type: Output },],
    'focusIndexUnderRange': [{ type: Output },],
    'tokenSelected': [{ type: Output },],
    'tokenComponents': [{ type: ViewChildren, args: [SkyTokenComponent,] },],
};
//# sourceMappingURL=tokens.component.js.map