import { Component } from '@angular/core';
var SkyTileDemoTile1Component = (function () {
    function SkyTileDemoTile1Component() {
    }
    SkyTileDemoTile1Component.prototype.tileSettingsClick = function () {
        alert('tile settings clicked');
    };
    return SkyTileDemoTile1Component;
}());
export { SkyTileDemoTile1Component };
SkyTileDemoTile1Component.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line
                selector: 'div.tile1',
                template: "<sky-tile (settingsClick)=\"tileSettingsClick()\">\n  <sky-tile-title>\n    Tile 1\n  </sky-tile-title>\n  <sky-tile-summary>\n    $123.4m\n  </sky-tile-summary>\n  <sky-tile-content>\n    <sky-tile-content-section>\n      Section 1\n    </sky-tile-content-section>\n    <sky-tile-content-section>\n      Section 2\n    </sky-tile-content-section>\n    <sky-tile-content-section>\n      Section 3\n    </sky-tile-content-section>\n  </sky-tile-content>\n</sky-tile>\n"
            },] },
];
/** @nocollapse */
SkyTileDemoTile1Component.ctorParameters = function () { return []; };
//# sourceMappingURL=tile-demo-tile1.component.js.map