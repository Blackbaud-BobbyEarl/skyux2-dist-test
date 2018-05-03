import { EventEmitter, Injectable, ReflectiveInjector } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { SkyMediaBreakpoints, SkyMediaQueryService } from '../../media-queries';
var ATTR_TILE_ID = '_sky-tile-dashboard-tile-id';
var bagIdIndex = 0;
function getTileId(tile) {
    if (tile) {
        var el = tile.elementRef.nativeElement;
        var tileId = void 0;
        while (el) {
            tileId = el.getAttribute(ATTR_TILE_ID);
            if (tileId) {
                return tileId;
            }
            el = el.parentElement;
        }
    }
    return undefined;
}
var SkyTileDashboardService = (function () {
    function SkyTileDashboardService(dragulaService, mediaQuery) {
        this.dragulaService = dragulaService;
        this.mediaQuery = mediaQuery;
        this.configChange = new EventEmitter();
        this.bagId = 'sky-tile-dashboard-bag-' + (++bagIdIndex);
        this.initMediaQueries();
        this.initDragula();
    }
    SkyTileDashboardService.prototype.init = function (config, columns, singleColumn) {
        this.config = config;
        this.columns = columns;
        this.singleColumn = singleColumn;
        this.checkReady();
    };
    SkyTileDashboardService.prototype.addTileComponent = function (tile, component) {
        this.tileComponents = this.tileComponents || [];
        this.tileComponents.push(component);
        component.location.nativeElement.setAttribute(ATTR_TILE_ID, tile.id);
    };
    SkyTileDashboardService.prototype.tileIsCollapsed = function (tile) {
        var tileConfig = this.findTile(getTileId(tile));
        if (tileConfig) {
            return tileConfig.isCollapsed;
        }
        return undefined;
    };
    SkyTileDashboardService.prototype.setTileCollapsed = function (tile, isCollapsed) {
        var tileConfig = this.findTile(getTileId(tile));
        if (tileConfig) {
            tileConfig.isCollapsed = isCollapsed;
            this.configChange.emit(this.config);
        }
    };
    SkyTileDashboardService.prototype.getTileComponentType = function (layoutTile) {
        if (layoutTile) {
            for (var _i = 0, _a = this.config.tiles; _i < _a.length; _i++) {
                var tile = _a[_i];
                if (tile.id === layoutTile.id) {
                    return tile.componentType;
                }
            }
        }
        return undefined;
    };
    SkyTileDashboardService.prototype.changeColumnMode = function (isSingleColumn) {
        /*istanbul ignore else */
        if (this.config) {
            if (isSingleColumn) {
                this.moveTilesToSingleColumn();
            }
            else {
                this.moveTilesToMultiColumn();
            }
        }
    };
    SkyTileDashboardService.prototype.getTileComponent = function (tileId) {
        for (var _i = 0, _a = this.tileComponents; _i < _a.length; _i++) {
            var tileComponent = _a[_i];
            if (tileComponent.location.nativeElement.getAttribute(ATTR_TILE_ID) === tileId) {
                return tileComponent;
            }
        }
        /*istanbul ignore next */
        return undefined;
    };
    SkyTileDashboardService.prototype.destroy = function () {
        /*istanbul ignore else */
        if (this.mediaSubscription) {
            this.mediaSubscription.unsubscribe();
        }
    };
    SkyTileDashboardService.prototype.getTile = function (layoutTile) {
        /*istanbul ignore else */
        if (layoutTile) {
            for (var _i = 0, _a = this.config.tiles; _i < _a.length; _i++) {
                var tile = _a[_i];
                if (tile.id === layoutTile.id) {
                    return tile;
                }
            }
        }
        /*istanbul ignore next */
        return undefined;
    };
    SkyTileDashboardService.prototype.checkReady = function () {
        // The columns list is determined by the config options, so make sure that the columns
        // and config are synced up before loading the tiles by waiting until change detection
        // completes.
        // setTimeout(() => {
        if (this.config && this.columns) {
            this.loadTiles();
        }
        // }, 0);
    };
    SkyTileDashboardService.prototype.loadTiles = function () {
        var layout = this.config.layout;
        if (this.mediaQuery.current === SkyMediaBreakpoints.xs
            || this.mediaQuery.current === SkyMediaBreakpoints.sm) {
            for (var _i = 0, _a = layout.singleColumn.tiles; _i < _a.length; _i++) {
                var tile = _a[_i];
                this.loadTileIntoColumn(this.singleColumn, tile);
            }
        }
        else {
            var columns = this.columns.toArray();
            for (var i = 0, n = layout.multiColumn.length; i < n; i++) {
                var column = columns[i];
                for (var _b = 0, _c = layout.multiColumn[i].tiles; _b < _c.length; _b++) {
                    var tile = _c[_b];
                    this.loadTileIntoColumn(column, tile);
                }
            }
        }
    };
    SkyTileDashboardService.prototype.loadTileIntoColumn = function (column, layoutTile) {
        var tile = this.getTile(layoutTile);
        var componentType = tile.componentType;
        var providers = tile.providers /* istanbul ignore next */ || [];
        var resolvedProviders = ReflectiveInjector.resolve(providers);
        var injector = ReflectiveInjector.fromResolvedProviders(resolvedProviders, column.injector);
        var factory = column.resolver.resolveComponentFactory(componentType);
        var componentRef = column.content.createComponent(factory, undefined, injector);
        this.addTileComponent(layoutTile, componentRef);
        // Make sure the component is marked for changes in case the parent component uses
        // the OnPush change detection strategy.
        componentRef.changeDetectorRef.markForCheck();
    };
    SkyTileDashboardService.prototype.moveTilesToSingleColumn = function () {
        this.moveTilesToColumn(this.singleColumn, this.config.layout.singleColumn.tiles);
    };
    SkyTileDashboardService.prototype.moveTilesToMultiColumn = function () {
        var layoutColumns = this.config.layout.multiColumn;
        var columns = this.columns.toArray();
        for (var i = 0, n = layoutColumns.length; i < n; i++) {
            this.moveTilesToColumn(columns[i], layoutColumns[i].tiles);
        }
    };
    SkyTileDashboardService.prototype.moveTilesToColumn = function (column, layoutTiles) {
        var columnEl = this.getColumnEl(column);
        for (var _i = 0, layoutTiles_1 = layoutTiles; _i < layoutTiles_1.length; _i++) {
            var layoutTile = layoutTiles_1[_i];
            var tileComponentInstance = this.getTileComponent(layoutTile.id);
            /*istanbul ignore else */
            if (tileComponentInstance) {
                columnEl.appendChild(tileComponentInstance.location.nativeElement);
            }
        }
    };
    SkyTileDashboardService.prototype.getConfigForUIState = function () {
        /*istanbul ignore else */
        if (this.config) {
            this.config = {
                tiles: this.config.tiles,
                layout: {
                    singleColumn: this.getSingleColumnLayoutForUIState(),
                    multiColumn: this.getMultiColumnLayoutForUIState()
                }
            };
        }
        return this.config;
    };
    SkyTileDashboardService.prototype.getSingleColumnLayoutForUIState = function () {
        if (this.mediaQuery.current === SkyMediaBreakpoints.xs
            || this.mediaQuery.current === SkyMediaBreakpoints.sm) {
            return {
                tiles: this.getTilesInEl(this.getColumnEl(this.singleColumn))
            };
        }
        return this.config.layout.singleColumn;
    };
    SkyTileDashboardService.prototype.getMultiColumnLayoutForUIState = function () {
        if (!(this.mediaQuery.current === SkyMediaBreakpoints.xs
            || this.mediaQuery.current === SkyMediaBreakpoints.sm)) {
            var layoutColumns = [];
            var columns = this.columns.toArray();
            for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                var column = columns_1[_i];
                if (column !== this.singleColumn) {
                    var layoutColumn = {
                        tiles: this.getTilesInEl(this.getColumnEl(column))
                    };
                    layoutColumns.push(layoutColumn);
                }
            }
            return layoutColumns;
        }
        return this.config.layout.multiColumn;
    };
    SkyTileDashboardService.prototype.getTilesInEl = function (el) {
        var tileEls = el.querySelectorAll('[' + ATTR_TILE_ID + ']');
        var layoutTiles = [];
        /*istanbul ignore else */
        if (tileEls) {
            for (var i = 0, n = tileEls.length; i < n; i++) {
                var tileEl = tileEls[i];
                var tileId = tileEl.getAttribute(ATTR_TILE_ID);
                var tile = this.findTile(tileId);
                /*istanbul ignore else */
                if (tile) {
                    layoutTiles.push(tile);
                }
            }
        }
        return layoutTiles;
    };
    SkyTileDashboardService.prototype.initMediaQueries = function () {
        var _this = this;
        this.mediaSubscription = this.mediaQuery.subscribe(function (args) {
            _this.changeColumnMode(args === SkyMediaBreakpoints.xs || args === SkyMediaBreakpoints.sm);
        });
    };
    SkyTileDashboardService.prototype.initDragula = function () {
        var _this = this;
        this.dragulaService.setOptions(this.bagId, {
            moves: function (el, container, handle) {
                return handle.matches('.sky-tile-grab-handle');
            }
        });
        this.dragulaService.drop.subscribe(function (value) {
            var config = _this.getConfigForUIState();
            /*istanbul ignore else */
            if (config) {
                _this.configChange.emit(config);
            }
        });
    };
    SkyTileDashboardService.prototype.getColumnEl = function (column) {
        return column.content.element.nativeElement.parentNode;
    };
    SkyTileDashboardService.prototype.findTile = function (tileId) {
        /*istanbul ignore else */
        if (this.config && this.config.layout.multiColumn) {
            for (var _i = 0, _a = this.config.layout.multiColumn; _i < _a.length; _i++) {
                var column = _a[_i];
                /*istanbul ignore else */
                if (column.tiles) {
                    for (var _b = 0, _c = column.tiles; _b < _c.length; _b++) {
                        var tile = _c[_b];
                        if (tile.id === tileId) {
                            return tile;
                        }
                    }
                }
            }
        }
        return undefined;
    };
    return SkyTileDashboardService;
}());
export { SkyTileDashboardService };
SkyTileDashboardService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SkyTileDashboardService.ctorParameters = function () { return [
    { type: DragulaService, },
    { type: SkyMediaQueryService, },
]; };
//# sourceMappingURL=tile-dashboard.service.js.map