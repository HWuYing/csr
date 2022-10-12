"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppContextService = void 0;
var tslib_1 = require("tslib");
var di_1 = require("@fm/di");
var shared_1 = require("@fm/shared");
var proxy_fetch_1 = require("./proxy-fetch");
var AppContextService = /** @class */ (function (_super) {
    tslib_1.__extends(AppContextService, _super);
    function AppContextService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resourceCache = new Map();
        _this.proxyFetch = _this.createProxyFetch();
        return _this;
    }
    AppContextService.prototype.createProxyFetch = function () {
        return new proxy_fetch_1.ProxyFetch(fetch.bind(window), this.getResourceCache('fetch-cache', true));
    };
    AppContextService.prototype.getResourceCache = function (type, needRemove) {
        if (!type || this.resourceCache.has(type)) {
            return type && this.resourceCache.get(type) || [];
        }
        var resource = this.getContext().resource;
        var cacheResource = resource.filter(function (item) { return item.type === type; });
        this.resourceCache.set(type, needRemove ? [] : cacheResource);
        return cacheResource;
    };
    Object.defineProperty(AppContextService.prototype, "fetch", {
        get: function () {
            return this.proxyFetch.fetch.bind(this.proxyFetch);
        },
        enumerable: false,
        configurable: true
    });
    AppContextService = tslib_1.__decorate([
        (0, di_1.Injectable)()
    ], AppContextService);
    return AppContextService;
}(shared_1.AppContextService));
exports.AppContextService = AppContextService;
