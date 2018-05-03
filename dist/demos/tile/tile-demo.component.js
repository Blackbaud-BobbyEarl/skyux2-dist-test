import { Component } from '@angular/core';
import { SkyTileDemoTile1Component } from './tile-demo-tile1.component';
import { SkyTileDemoTile2Component } from './tile-demo-tile2.component';
var SkyTileDemoComponent = (function () {
    function SkyTileDemoComponent() {
        this.dashboardConfig = {
            tiles: [
                {
                    id: 'tile1',
                    componentType: SkyTileDemoTile1Component
                },
                {
                    id: 'tile2',
                    componentType: SkyTileDemoTile2Component
                }
            ],
            layout: {
                singleColumn: {
                    tiles: [
                        {
                            id: 'tile2',
                            isCollapsed: false
                        },
                        {
                            id: 'tile1',
                            isCollapsed: true
                        }
                    ]
                },
                multiColumn: [
                    {
                        tiles: [
                            {
                                id: 'tile1',
                                isCollapsed: true
                            }
                        ]
                    },
                    {
                        tiles: [
                            {
                                id: 'tile2',
                                isCollapsed: false
                            }
                        ]
                    }
                ]
            }
        };
    }
    return SkyTileDemoComponent;
}());
export { SkyTileDemoComponent };
SkyTileDemoComponent.decorators = [
    { type: Component, args: [{
                selector: 'sky-tile-demo',
                template: "<sky-tile-dashboard [(config)]=\"dashboardConfig\"></sky-tile-dashboard>\n"
            },] },
];
/** @nocollapse */
SkyTileDemoComponent.ctorParameters = function () { return []; };
//# sourceMappingURL=tile-demo.component.js.map