import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
var SkyNumericDemoComponent = (function () {
    function SkyNumericDemoComponent() {
    }
    return SkyNumericDemoComponent;
}());
export { SkyNumericDemoComponent };
SkyNumericDemoComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-numeric-demo',
                template: "<sky-definition-list labelWidth=\"200px\">\n  <sky-definition-list-heading>\n    This is a sample of numeric formatting.\n  </sky-definition-list-heading>\n  <sky-definition-list-content>\n    <p>\n      <sky-definition-list-label>\n        1 with zero digits:\n      </sky-definition-list-label>\n      <sky-definition-list-value>\n        {{1 | skyNumeric:{digits: 0} }}\n      </sky-definition-list-value>\n    </p>\n    <p>\n      <sky-definition-list-label>\n        1000 with zero digits:\n      </sky-definition-list-label>\n      <sky-definition-list-value>\n        {{1000 | skyNumeric:{digits: 0} }}\n      </sky-definition-list-value>\n    </p>\n    <p>\n      <sky-definition-list-label>\n        1000 with one digit:\n      </sky-definition-list-label>\n      <sky-definition-list-value>\n        {{1000 | skyNumeric}}\n      </sky-definition-list-value>\n    </p>\n    <p>\n      <sky-definition-list-label>\n        1100 with zero digits:\n      </sky-definition-list-label>\n      <sky-definition-list-value>\n        {{1100 | skyNumeric:{digits: 0} }}\n      </sky-definition-list-value>\n    </p>\n    <p>\n      <sky-definition-list-label>\n        1100 with one digit:\n      </sky-definition-list-label>\n      <sky-definition-list-value>\n        {{1100 | skyNumeric}}\n      </sky-definition-list-value>\n    </p>\n    <p>\n      <sky-definition-list-label>\n        1500 with zero digits:\n      </sky-definition-list-label>\n      <sky-definition-list-value>\n        {{1500 | skyNumeric:{digits: 0} }}\n      </sky-definition-list-value>\n    </p>\n    <p>\n      <sky-definition-list-label>\n        1500 with one digit:\n      </sky-definition-list-label>\n      <sky-definition-list-value>\n        {{1500 | skyNumeric}}\n      </sky-definition-list-value>\n    </p>\n    <p>\n      <sky-definition-list-label>\n        1000000 with any digits:\n      </sky-definition-list-label>\n      <sky-definition-list-value>\n        {{1000000 | skyNumeric:{digits: 0} }}\n      </sky-definition-list-value>\n    </p>\n    <p>\n      <sky-definition-list-label>\n        1000000000 with any digits:\n      </sky-definition-list-label>\n      <sky-definition-list-value>\n        {{1000000000 | skyNumeric:{digits: 0} }}\n      </sky-definition-list-value>\n    </p>\n    <p>\n      <sky-definition-list-label>\n        1000000000000 with any digits:\n      </sky-definition-list-label>\n      <sky-definition-list-value>\n        {{1000000000000 | skyNumeric:{digits: 0} }}\n      </sky-definition-list-value>\n    </p>\n    <p>\n      <sky-definition-list-label>\n        1234000 with 2 digits:\n      </sky-definition-list-label>\n      <sky-definition-list-value>\n        {{1234000 | skyNumeric:{digits: 2} }}\n      </sky-definition-list-value>\n    </p>\n    <p>\n      <sky-definition-list-label>\n        1235000000 with 2 digits:\n      </sky-definition-list-label>\n      <sky-definition-list-value>\n        {{1235000000 | skyNumeric:{digits: 2} }}\n      </sky-definition-list-value>\n    </p>\n    <p>\n      <sky-definition-list-label>\n        1.45 with 1 digit:\n      </sky-definition-list-label>\n      <sky-definition-list-value>\n        {{1.45 | skyNumeric}}\n      </sky-definition-list-value>\n    </p>\n    <p>\n      <sky-definition-list-label>\n        1234567 with 1 digit:\n      </sky-definition-list-label>\n      <sky-definition-list-value>\n        {{1234567 | skyNumeric}}\n      </sky-definition-list-value>\n    </p>\n    <p>\n      <sky-definition-list-label>\n        15.50 as US dollar currency with 2 digits:\n      </sky-definition-list-label>\n      <sky-definition-list-value>\n        {{15.50 | skyNumeric:{digits: 2, format: 'currency', iso: 'USD'} }}\n      </sky-definition-list-value>\n    </p>\n    <p>\n      <sky-definition-list-label>\n        -15.50 as US dollar currency with 2 digits:\n      </sky-definition-list-label>\n      <sky-definition-list-value>\n        {{-15.50 | skyNumeric:{digits: 2, format: 'currency', iso: 'USD'} }}\n      </sky-definition-list-value>\n    </p>\n    <p>\n      <sky-definition-list-label>\n        1234567 as Euro currency with 2 digits:\n      </sky-definition-list-label>\n      <sky-definition-list-value>\n        {{1234567 | skyNumeric:{digits: 2, format: 'currency', iso: 'EUR'} }}\n      </sky-definition-list-value>\n    </p>\n    <p>\n      <sky-definition-list-label>\n        1450 as UK Pound currency with 2 digits:\n      </sky-definition-list-label>\n      <sky-definition-list-value>\n        {{1450 | skyNumeric:{digits: 2, format: 'currency', iso: 'GBP'} }}\n      </sky-definition-list-value>\n    </p>\n    <p>\n      <sky-definition-list-label>\n        1750 as Hong Kong Dollar currency with 1 digit:\n      </sky-definition-list-label>\n      <sky-definition-list-value>\n        {{1750 | skyNumeric:{digits: 1, format: 'currency', iso: 'HKD'} }}\n      </sky-definition-list-value>\n    </p>\n    <p>\n      <sky-definition-list-label>\n        1234567 as Japanese Yen currency with 3 digit:\n      </sky-definition-list-label>\n      <sky-definition-list-value>\n        {{1234567 | skyNumeric:{digits: 3, format: 'currency', iso: 'JPY'} }}\n      </sky-definition-list-value>\n    </p>\n  </sky-definition-list-content>\n</sky-definition-list>\n",
                providers: [CurrencyPipe]
            },] },
];
/** @nocollapse */
SkyNumericDemoComponent.ctorParameters = function () { return []; };
//# sourceMappingURL=numeric-demo.component.js.map