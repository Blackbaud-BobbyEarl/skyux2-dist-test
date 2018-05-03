import { Pipe } from '@angular/core';
import { SkyResources } from './resources';
var SkyResourcesPipe = (function () {
    function SkyResourcesPipe() {
    }
    SkyResourcesPipe.prototype.transform = function (name) {
        return SkyResources.getString(name);
    };
    return SkyResourcesPipe;
}());
export { SkyResourcesPipe };
SkyResourcesPipe.decorators = [
    { type: Pipe, args: [{
                name: 'skyResources'
            },] },
];
/** @nocollapse */
SkyResourcesPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=resources.pipe.js.map